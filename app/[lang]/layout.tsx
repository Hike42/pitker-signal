import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLanguage } from '@/lib/i18n';
import { direction } from '@/lib/design';
import '../globals.css';
import SchemaOrg from '@/components/SchemaOrg';
import { siteMetadata } from '@/constants/metadata';
export const metadata: Metadata = { robots: { index: false, follow: false }, icons: { icon: '/favicon.svg' } };
export function generateStaticParams() { return [{ lang: 'fr' }, { lang: 'en' }]; }
export default async function RootLayout({children,params}:{children:React.ReactNode;params:Promise<{lang:string}>}) {
 const {lang}=await params;if(!isLanguage(lang))notFound();
 return <html lang={lang}><head><SchemaOrg type="Organization" data={siteMetadata.organization}/></head><body className={direction}><a className="skip" href="#main">{lang==='fr'?'Aller au contenu':'Skip to content'}</a>{children}</body></html>;
}
