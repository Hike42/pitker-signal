/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { localizedPath, type Language } from '@/lib/i18n';

export default function Header({ lang, path, dark }: { lang: Language; path: string; dark: boolean }) {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const pathname = usePathname();
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape' && open) { setOpen(false); button.current?.focus(); } };
    const outside = (event: MouseEvent) => { if (!header.current?.contains(event.target as Node)) setOpen(false); };
    document.addEventListener('keydown', close); document.addEventListener('click', outside);
    return () => { document.removeEventListener('keydown', close); document.removeEventListener('click', outside); };
  }, [open]);
  const fr = lang === 'fr';
  const links = [['/what-we-do', fr ? 'Le cabinet' : 'The firm'], ['/practices', fr ? 'Expertises' : 'Expertise'], ['/people', fr ? 'Les associés' : 'Our partners']];
  return <header className="nav wrap" ref={header} key={pathname}>
    <Link className="wordmark" href={localizedPath('/', lang)} aria-label={fr ? 'PITKER, accueil' : 'PITKER, home'}><img className="brand-logo" src={dark ? '/footerlogo.png' : '/navbarlogo.png'} alt="PITKER" width="1803" height={dark ? 500 : 318} /></Link>
    <button ref={button} className="menu-button" aria-controls="navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? (fr ? 'Fermer −' : 'Close −') : 'Menu +'}</button>
    <nav className={`nav-links ${open ? 'is-open' : ''}`} id="navigation" aria-label={fr ? 'Navigation principale' : 'Main navigation'}>
      {links.map(([href, label]) => <Link key={href} href={localizedPath(href, lang)} aria-current={path === href || (href === '/practices' && path.startsWith('/practices/')) ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
      <Link className="nav-contact" href={localizedPath('/contact', lang)} onClick={() => setOpen(false)}>{fr ? 'Parlons de vous' : 'Let’s talk'} <span className="arrow" aria-hidden="true">↗</span></Link>
      <a className="language-link" href={localizedPath(path, fr ? 'en' : 'fr')} hrefLang={fr ? 'en' : 'fr'} lang={fr ? 'en' : 'fr'} aria-label={fr ? 'Switch to English' : 'Passer en français'} onClick={event => { event.preventDefault(); window.location.assign(localizedPath(path, fr ? 'en' : 'fr') + window.location.search + window.location.hash); }}>{fr ? 'EN' : 'FR'}</a>
    </nav>
  </header>;
}
