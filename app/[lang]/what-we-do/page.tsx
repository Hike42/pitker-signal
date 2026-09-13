import Site from '@/components/design/Site';
import { pageMetadata } from '@/lib/page-metadata';
export default function Page({ params }: { params: Promise<{lang:string}> }) { return <Site params={params} path="/what-we-do"/>; }
export async function generateMetadata({params}:{params:Promise<{lang:string}>}) { return { ...pageMetadata("/what-we-do",(await params).lang), robots: { index:false, follow:false } }; }
