import Site from '@/components/design/Site';
import { pageMetadata } from '@/lib/page-metadata';
export default function Page({ params }: { params: Promise<{lang:string}> }) { return <Site params={params} path="/practices/life-sciences"/>; }
export async function generateMetadata({params}:{params:Promise<{lang:string}>}) { return { ...pageMetadata("/practices/life-sciences",(await params).lang), robots: { index:false, follow:false } }; }
