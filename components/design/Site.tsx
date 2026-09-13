/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from './Header';
import ContactMap from './ContactMap';
import { direction } from '@/lib/design';
import { translations } from '@/lib/translations';
import { PARTNERS } from '@/lib/constants/partners';
import { isLanguage, localizedPath, type Language } from '@/lib/i18n';

const A = () => <span className="arrow" aria-hidden="true">↗</span>;
const Star = ({ size = 38 }: { size?: number }) => <img src="/favicon.svg" alt="" width={size} height={size} />;
const sections = [
  { slug: 'life-sciences', key: 'lifesciences', image: '/lifesciences.jpg', partner: 0 },
  { slug: 'industry', key: 'manufacturing', image: '/industry.jpg', partner: 1 },
  { slug: 'private-equity', key: 'privateEquity', image: '/pe.jpg', partner: 2 },
  { slug: 'ceo-search', key: 'ceoSearch', image: '/ceosearch.jpg', partner: 0 },
] as const;
type Intro = string | readonly string[] | { type: string; title: string; content: string };
const title = (item: typeof sections[number], lang: Language) => translations[lang].practices.grid[item.key].title;
const description = (item: typeof sections[number], lang: Language) => translations[lang].practices.grid[item.key].description;
const teamTitle = (lang: Language) => Object.values(translations[lang].people.hero).filter(Boolean).join(' ');
const practiceTitle = (lang: Language) => translations[lang].practices.grid.title + ' ' + translations[lang].practices.grid.highlight;
const href = (path: string, lang: Language) => localizedPath(path, lang);
const isAtelier = direction === 'atelier';
const isSignal = direction === 'signal';
const isHorizon = direction === 'horizon';

function Footer({lang}:{lang:Language}) {
 const t=translations[lang];
 return <footer className="footer-line wrap"><span>© {new Date().getFullYear()} {t.footer.copyright}</span><div className="footer-links"><Link href={href('/contact',lang)}>{t.navigation.contact}</Link><a href="https://www.linkedin.com/company/pitker" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><Link href={href('/mentions-legales',lang)}>{t.footer['legal-mentions']}</Link></div></footer>;
}

function ContactCTA({lang}:{lang:Language}) {
 const t=translations[lang].contact;
 return <section className={`${isAtelier?'a-contact':isSignal?'s-contact':'h-contact'} wrap`}>
 {isHorizon&&<div className="h-rings" aria-hidden="true"><i/><i/><i/><i/></div>}
 <h2>{t.hero.title}</h2><div className={isAtelier?'a-contact-bottom':isSignal?'s-contact-bottom':'h-contact-bottom'}><div><p>{t.hero.description}</p><Link className={isSignal?'s-cta':'text-link'} href={href('/contact',lang)}>{t.hero.scrollCTA} <A/></Link></div><p>143 Boulevard Haussmann<br/>75008 Paris, France</p></div></section>;
}

function Partners({ lang, full = false }: { lang: Language; full?: boolean }) {
  const fr = lang === 'fr';
  return <div className={`partner-grid ${full ? 'partner-grid-full' : ''}`}>{PARTNERS.map(p => <article className="partner-card" key={p.id} id={`partner-${p.id}`}>
    <Link href={href(`/people#partner-${p.id}`,lang)} aria-label={fr ? `Découvrir ${p.name}` : `Meet ${p.name}`}><div className="partner-portrait"><img src={p.imageOff} width="500" height="625" loading="lazy" alt={p.name}/></div></Link>
    <h3>{p.name}</h3><p>{p.role[lang]} · {p.major[lang]}</p>
    {full ? <><div className="partner-bio">{p.biography[lang].split('\n\n').map((paragraph,i)=><p key={i}>{paragraph}</p>)}</div><div className="partner-links"><a href={`mailto:${p.email}`}>{fr ? 'Écrire' : 'Email'} <A/></a><a href={p.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <A/></a></div></> : <Link className="text-link" href={href(`/people#partner-${p.id}`,lang)}>{fr ? 'Rencontrer' : 'Meet'} <A/></Link>}
  </article>)}</div>;
}
function TeamTeaser({lang}:{lang:Language}) {
 return <section className={isAtelier?'a-team':isSignal?'s-team':'h-team'}><div className="wrap"><div className="section-top"><h2>{teamTitle(lang)}</h2><Link className="text-link" href={href('/people',lang)}>{translations[lang].practices.grid.learnMore} <A/></Link></div><Partners lang={lang}/></div></section>;
}

function Practices({lang,heading=true}:{lang:Language;heading?:boolean}) {
 return <section className={`${isAtelier?'a-practices':isSignal?'s-practices':'h-expertise'} wrap`} id="expertises">
  {heading&&<div className="section-top"><h2>{practiceTitle(lang)}</h2></div>}
  {isAtelier ? sections.map((s,i)=><div className="a-practice" key={s.slug}><Link className="a-practice-row" href={href(`/practices/${s.slug}`,lang)}><span className="label">0{i+1}</span><h3>{title(s,lang)}</h3><p>{description(s,lang)}</p><A/></Link></div>) : isSignal ? <div className="s-practice-grid">{sections.map((s,i)=><Link className="s-practice" href={href(`/practices/${s.slug}`,lang)} key={s.slug}><div className="label"><span>0{i+1} / {title(s,lang)}</span><A/></div><div className={`shape ${['shape-circles','shape-grid','shape-orbit','shape-stairs'][i]}`} aria-hidden="true"/><div><h3>{title(s,lang)}.</h3><p>{description(s,lang)}</p></div></Link>)}</div> : <><div className="h-sector-list">{sections.slice(0,3).map((s,i)=><Link className="h-sector" href={href(`/practices/${s.slug}`,lang)} key={s.slug}><img src={s.image} width="600" height="800" loading="lazy" alt=""/><div className="label"><span>0{i+1} / {title(s,lang)}</span><A/></div><div><h3>{title(s,lang)}</h3><p>{description(s,lang)}</p></div></Link>)}</div><Link className="h-ceo" href={href('/practices/ceo-search',lang)}><h3>CEO Search</h3><p>{description(sections[3],lang)}</p><A/></Link></>}
 </section>;
}
function HomeHero({lang}:{lang:Language}) {
 const t=translations[lang];const words=t.home.hero.title.firstLine.split(' ');
 const parts=lang==='fr'?[words[0],words.slice(1,3).join(' '),words[3]]:[words[0],words[1],words[2]];
 if(isAtelier)return <section className="a-hero wrap"><div className="a-hero-top"><span className="label">PITKER</span></div><div className="a-hero-grid"><div className="a-hero-copy reveal"><h1>{parts[0]}<br/>{parts[1]}<br/><em>{parts[2]}</em></h1><p>{t.home.hero.description}</p><Link className="text-link" href={href('/what-we-do',lang)}>{t.whatWeDo.hero.title} <A/></Link></div><figure className="a-art reveal delay"><img src="/design/atelier.png" width="1122" height="1402" alt="" fetchPriority="high"/></figure></div><div className="a-hero-bottom"><span>{t.whatWeDo.hero.title}</span><a href="#conviction" aria-label={t.practices.grid.learnMore}>↓</a></div></section>;
 if(isSignal)return <><section className="s-hero wrap"><div className="s-hero-top label"><span>PITKER</span></div><h1 className="s-title reveal"><span className="s-line">{parts[0]} <span className="s-glyph" aria-hidden="true"><Star size={213}/></span></span><span className="s-line outline">{parts[1]}</span><span className="s-line">{parts[2]}</span></h1><div className="s-hero-bottom reveal delay"><span className="s-caption">{t.whatWeDo.hero.title}</span><p>{t.home.hero.description}</p><Link className="s-cta" href={href('/practices',lang)}>{practiceTitle(lang)} <A/></Link></div></section><div className="s-ticker">{sections.map(item=><span className="ticker-item" key={item.slug}>{title(item,lang)} <Star size={22}/></span>)}</div></>;
 return <><div className="h-hero wrap"><p className="label"><span className="h-dot" aria-hidden="true"/>PITKER</p><h1 className="reveal">{parts[0]} {parts[1]}<br/><em>{parts[2]}</em></h1><div className="h-hero-detail reveal delay"><p>{t.home.hero.description}</p><Link className="text-link" href={href('/what-we-do',lang)}>{t.whatWeDo.hero.title} <A/></Link></div></div><div className="h-hero-foot wrap"><span>{practiceTitle(lang)}</span><a href="#conviction">{t.practices.grid.learnMore} ↓</a></div></>;
}

function Home({lang}:{lang:Language}) {
 const t=translations[lang];
 return <>{!isHorizon&&<Header lang={lang} path="/" dark={isSignal}/>}<main id="main">{isHorizon?<div className="h-cinema"><img className="h-backdrop" src="/design/horizon.png" width="1672" height="941" alt="" fetchPriority="high"/><Header lang={lang} path="/" dark/><HomeHero lang={lang}/></div>:<HomeHero lang={lang}/>}
 {isSignal?<section className="s-manifesto" id="conviction"><div className="wrap"><div className="s-manifesto-grid"><p className="label">PITKER</p><h2>{t.whatWeDo.hero.title}</h2></div><div className="s-stats">{t.whatWeDo.keyStats.stats.filter((_,i)=>[1,2,4].includes(i)).map(item=><div className="s-stat" key={item.number}><strong>{item.number}</strong><span>{item.description}</span></div>)}</div></div></section>:<section className={`${isAtelier?'a-intro':'h-intro'} wrap`} id="conviction"><div><p className="label">PITKER</p>{isAtelier&&<div className="a-star"><Star/></div>}</div><div><h2>{t.whatWeDo.hero.title}</h2><p>{t.whatWeDo.hero.description.split('\n\n')[0]}</p><Link className="text-link" href={href('/what-we-do',lang)}>{t.practices.grid.learnMore} <A/></Link></div></section>}
 <Practices lang={lang}/><TeamTeaser lang={lang}/><ContactCTA lang={lang}/></main><Footer lang={lang}/></>;
}

function InteriorHero({lang,eyebrow,heading,lead,image}:{lang:Language;eyebrow:string;heading:string;lead?:string;image?:string}) {
 return <section className={`interior-head ${image?'has-image':''}`}><div className="wrap interior-head-grid"><div><Link className="label breadcrumb" href={href('/',lang)}>{lang==='fr'?'Accueil':'Home'} / {eyebrow}</Link><h1>{heading}</h1>{lead&&<p className="interior-lead">{lead}</p>}</div>{image?<figure className="interior-image"><img src={image} width="800" height="900" alt="" fetchPriority="high"/></figure>:<div className="interior-star" aria-hidden="true"><Star size={213}/></div>}</div></section>;
}
function BodyParagraphs({items}:{items:readonly Intro[]}) { return <>{items.map((item,i)=>typeof item==='string'?<p key={i}>{item}</p>:'title' in item?<section key={i}><h2>{item.title}</h2><p>{item.content}</p></section>:<ul key={i}>{item.map((t,j)=><li key={j}>{t}</li>)}</ul>)}</>; }
function About({lang}:{lang:Language}) {
 const t=translations[lang].whatWeDo;
 return <><InteriorHero lang={lang} eyebrow={t.hero.title} heading={t.hero.title} image={isAtelier?'/design/atelier.png':isHorizon?'/design/horizon.png':undefined}/><section className="reading-section wrap"><aside><p className="label">PITKER</p><Star/></aside><div className="prose"><BodyParagraphs items={t.hero.description.split('\n\n')}/></div></section><section className="numbers-band"><div className="wrap"><p className="label">{t.keyStats.title}</p><div className="numbers-grid">{t.keyStats.stats.map(item=><div key={item.number}><strong>{item.number}</strong><p>{item.description}</p></div>)}</div></div></section><TeamTeaser lang={lang}/></>;
}

function People({lang}:{lang:Language}) {
 return <><InteriorHero lang={lang} eyebrow={translations[lang].navigation.people} heading={teamTitle(lang)}/><section className="people-intro wrap"><p>{translations[lang].people.partners.description}</p></section><section className="people-section wrap"><Partners lang={lang} full/></section></>;
}

function PracticeDetail({lang,slug}:{lang:Language;slug:string}) {
 const item=sections.find(s=>s.slug===slug);if(!item)notFound();
 const t=translations[lang].practices[item.key];const fr=lang==='fr';const partner=PARTNERS[item.partner];
 return <><InteriorHero lang={lang} eyebrow={practiceTitle(lang)} heading={title(item,lang)} lead={description(item,lang)} image={item.image}/><section className="reading-section wrap"><aside><p className="label">{practiceTitle(lang)}</p><div className="practice-nav">{sections.map(s=><Link key={s.slug} href={href(`/practices/${s.slug}`,lang)} aria-current={s.slug===slug?'page':undefined}>{title(s,lang)} <A/></Link>)}</div></aside><div className="prose"><BodyParagraphs items={t.intro}/></div></section><section className="strengths-section"><div className="wrap"><div className="section-top"><h2>{t.strengths.title}</h2></div><div className="strengths-grid">{t.strengths.points.map((p,i)=><article key={p.title}><span className="label">0{i+1}</span><h3>{p.title}</h3><p>{p.description}</p></article>)}</div></div></section><section className="practice-contact wrap"><div><p className="label">{translations[lang].practices.contact.title}</p><h2>{partner.name}</h2><p>{partner.role[lang]} · {partner.major[lang]}</p><Link className="text-link" href={href(`/people#partner-${partner.id}`,lang)}>{fr?'Découvrir son parcours':'Discover their background'} <A/></Link><a className="text-link" href={`mailto:${partner.email}`}>{fr?'Entrer en relation':'Get in touch'} <A/></a></div><img src={partner.imageOff} alt={partner.name} width="400" height="440" loading="lazy"/></section></>;
}
function Contact({lang}:{lang:Language}) {
 const t=translations[lang].contact;
 return <><InteriorHero lang={lang} eyebrow={translations[lang].navigation.contact} heading={t.hero.title} lead={t.hero.description}/><section className="contact-section wrap"><div className="contact-note"><h2>{t.hero.scrollCTA}</h2></div><div className="contact-list">{PARTNERS.map(p=><article key={p.id}><img src={p.imageSmall} alt={p.name} width="88" height="88"/><div><h3>{p.name}</h3><p>{p.major[lang]}</p><a href={`mailto:${p.email}`}>{p.email} <A/></a></div></article>)}</div></section><section className="office-section"><div className="wrap office-grid"><div><p className="label">{t.location.title}</p><h2>143 Boulevard<br/>Haussmann</h2><p>75008 Paris, France</p><a className="text-link" href="https://www.google.com/maps/search/?api=1&query=143+Boulevard+Haussmann+75008+Paris" target="_blank" rel="noopener noreferrer">{lang==='fr'?'Ouvrir dans Google Maps':'Open in Google Maps'} <A/></a></div><ContactMap lang={lang}/></div></section></>;
}

function Legal({lang}:{lang:Language}) {
 const t=translations[lang].legal;
 return <><InteriorHero lang={lang} eyebrow={t.title} heading={t.title}/><section className="legal-section wrap prose">{Object.entries(t.sections).map(([key,value])=><section key={key}><h2>{value.title}</h2>{Object.entries(value).filter(([k])=>k!=='title').map(([k,v])=>Array.isArray(v)?<ul key={k}>{v.map((x,i)=><li key={i}>{String(x)}</li>)}</ul>:<p key={k}>{String(v)}</p>)}</section>)}</section></>;
}
export default async function Site({params,path}:{params:Promise<{lang:string}>;path:string}) {
 const {lang}=await params;if(!isLanguage(lang))notFound();
 if(path==='/')return <Home lang={lang}/>;
 return <><Header lang={lang} path={path} dark={!isAtelier}/><main id="main">{path==='/what-we-do'?<About lang={lang}/>:path==='/people'?<People lang={lang}/>:path==='/contact'?<Contact lang={lang}/>:path==='/mentions-legales'?<Legal lang={lang}/>:path==='/practices'?<><InteriorHero lang={lang} eyebrow={translations[lang].navigation.practices} heading={practiceTitle(lang)}/><Practices lang={lang} heading={false}/></>:<PracticeDetail lang={lang} slug={path.split('/').at(-1)!}/>}{!['/contact','/mentions-legales'].includes(path)&&<ContactCTA lang={lang}/>}</main><Footer lang={lang}/></>;
}
