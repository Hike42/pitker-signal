import { pageMetadata } from '@/lib/page-metadata';
import LegalContent from '@/components/legal/LegalContent';
export default LegalContent;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return pageMetadata("/mentions-legales", (await params).lang);
}
