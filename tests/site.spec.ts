import { expect, test } from '@playwright/test';
const paths = ['', '/what-we-do', '/people', '/practices', '/practices/ceo-search', '/practices/life-sciences', '/practices/industry', '/practices/private-equity', '/contact', '/mentions-legales'];
for (const lang of ['fr', 'en']) {
  for (const path of paths) {
    const url = `${lang === 'en' ? '/en' : ''}${path}` || '/';
    test(`server-rendered content and SEO: ${url}`, async ({ request }) => {
      const response = await request.get(url);
      expect(response.status()).toBe(200);
      const html = await response.text();
      expect(html).toContain(`<html lang="${lang}"`);
      expect(html).toContain(`rel="canonical" href="https://pitker.fr${url === '/' ? '' : url}"`);
      expect(html).toContain(`hrefLang="en" href="https://pitker.fr/en${path}"`);
      expect(html).toContain('https://pitker.fr/og-img.png');
      expect(html).not.toContain('+33-1-XX');
      if (!path) expect(html).toContain(lang === 'en' ? 'Skill and' : 'manière.');
    });
  }
}
test('language switch preserves the page, query and subsequent navigation', async ({ page }) => {
  await page.route('https://maps.googleapis.com/**', route => route.abort());
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/practices?source=test');
  await page.getByRole('button', { name: 'Switch to English' }).first().click();
  await expect(page).toHaveURL('/en/practices?source=test');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await page.getByRole('menuitem', { name: 'Contact', exact: true }).click();
  await expect(page).toHaveURL('/en/contact');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.getByRole('link', { name: 'Open in Google Maps' })).toBeVisible();
  await page.getByRole('button', { name: 'Passer en français' }).first().click();
  await expect(page).toHaveURL('/contact');
  expect(errors).toEqual([]);
});
test('mobile menu is inert when closed and navigates in English', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/en');
  const menu = page.locator('#mobile-menu');
  await expect(menu).toHaveAttribute('inert', '');
  await page.getByRole('button', { name: 'Open main menu' }).click();
  await expect(menu).not.toHaveAttribute('inert', '');
  await menu.getByRole('menuitem', { name: 'People', exact: true }).click();
  await expect(page).toHaveURL('/en/people');
  await expect(menu).toHaveAttribute('inert', '');
});
test('missing map service leaves a useful contact fallback', async ({ page }) => {
  await page.route('https://maps.googleapis.com/**', route => route.abort());
  await page.goto('/contact');
  await expect(page.getByRole('link', { name: 'Ouvrir dans Google Maps' })).toBeVisible();
  await expect(page.locator('img[src*="map-fallback"]')).toHaveCount(0);
});
test('canonical redirects, sitemap and shared assets', async ({ request }) => {
  for (const [from, to] of [['/fr/contact', '/contact'], ['/en/legal-notice', '/en/mentions-legales']]) {
    const response = await request.get(from, { maxRedirects: 0 });
    expect(response.status()).toBe(308);
    expect(new URL(response.headers().location, 'http://localhost:3100').pathname).toBe(to);
  }
  for (const asset of ['/og-img.png', '/navbarlogo.png', '/favicon.svg']) expect((await request.get(asset)).status()).toBe(200);
  const sitemap = await (await request.get('/sitemap.xml')).text();
  expect(sitemap.match(/<loc>/g)).toHaveLength(20);
  expect(sitemap).toContain('https://pitker.fr/en/contact');
  expect((await request.get('/en/unknown-page')).status()).toBe(404);
});

test('leaving contact releases map objects and stops their animation', async ({ page }) => {
  await page.addInitScript(() => {
    const state = { updates: 0, detached: 0, created: 0 };
    Object.assign(window, { mapTest: state, google: { maps: {
      Map: class {},
      Circle: class {
        constructor() { state.created++; }
        setRadius() { state.updates++; }
        setMap(value: unknown) { if (value === null) state.detached++; }
      },
      event: { clearInstanceListeners() {} },
    } } });
  });
  await page.goto('/contact');
  const stats = () => page.evaluate(() => (window as Window & { mapTest?: { updates: number; detached: number; created: number } }).mapTest!);
  await expect.poll(async () => (await stats()).created).toBe(4);
  await expect.poll(async () => (await stats()).updates).toBeGreaterThan(0);
  await page.getByRole('menuitem', { name: 'Équipe', exact: true }).click();
  await expect(page).toHaveURL('/people');
  await expect.poll(async () => (await stats()).detached).toBe(4);
  const stopped = (await stats()).updates;
  await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  expect((await stats()).updates).toBe(stopped);
});
