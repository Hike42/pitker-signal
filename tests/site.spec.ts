import { test, expect } from '@playwright/test';
const paths = ['/', '/what-we-do', '/people', '/practices', '/practices/life-sciences', '/practices/industry', '/practices/private-equity', '/practices/ceo-search', '/contact', '/mentions-legales'];
for (const lang of ['fr','en']) {
 for (const path of paths) {
  const url = lang==='en' ? `/en${path==='/'?'':path}` : path;
  test(`${lang} ${path}: content, identity and navigation`,async({request})=>{
   const response=await request.get(url);expect(response.status()).toBe(200);
   const html=await response.text();
   expect(html).toContain(`<html lang="${lang}"`);
   expect((html.match(/<h1(?:\s|>)/g)||[]).length).toBe(1);
   expect(html).toContain('alt="PITKER"');
   expect(html).toContain('logo.png');
   expect(html).toContain('noindex');
   expect(html).not.toContain('review-dock');
   expect(html).not.toContain('Les trois directions');
   for(const route of ['/what-we-do','people','practices','contact']) {
    const expected=(lang==='en'?'/en':'')+'/'+route.replace(/^\//,'');
    expect(html).toContain(`href="${expected}"`);
   }
   expect(html).toContain(`hrefLang="${lang==='en'?'fr':'en'}"`);
   if(path==='/people'||path==='/contact')for(const name of ['Jean-Marie Verdier','Maud Chabert','Patrice de Fournas'])expect(html).toContain(name);
   if(path==='/contact')expect(html).toContain('m.chabert@pitker.com');
  });
 }
}
test('language redirects and unknown routes',async({request})=>{
 const french=await request.get('/fr/contact',{maxRedirects:0});expect(french.status()).toBe(308);expect(french.headers().location).toContain('/contact');
 expect((await request.get('/definitely-not-a-page')).status()).toBe(404);
});
