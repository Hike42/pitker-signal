'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function MentionsLegales() {
  const { t } = useLanguage();

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-pitkerBlue">{t.legal.title}</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-pitkerBlue">{t.legal.sections.publisher.title}</h2>
          <p className="mb-2">{t.legal.sections.publisher.content}</p>
          <p className="mb-2">{t.legal.sections.publisher.company}</p>
          <p className="mb-2">{t.legal.sections.publisher.capital}</p>
          <p className="mb-2">{t.legal.sections.publisher.address}</p>
          <p className="mb-2">{t.legal.sections.publisher.rcs}</p>
          <p>{t.legal.sections.publisher.contact}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-pitkerBlue">{t.legal.sections.director.title}</h2>
          <p>{t.legal.sections.director.content}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-pitkerBlue">{t.legal.sections.development.title}</h2>
          <p>{t.legal.sections.development.content}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-pitkerBlue">{t.legal.sections.hosting.title}</h2>
          <p className="mb-2">{t.legal.sections.hosting.content}</p>
          <p className="mb-2">{t.legal.sections.hosting.company}</p>
          <p className="mb-2">{t.legal.sections.hosting.address}</p>
          <p>{t.legal.sections.hosting.contact}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-pitkerBlue">{t.legal.sections.intellectualProperty.title}</h2>
          <p className="mb-4">{t.legal.sections.intellectualProperty.content}</p>
          <p>{t.legal.sections.intellectualProperty.trademarks}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-pitkerBlue">{t.legal.sections.termsOfUse.title}</h2>
          <p className="mb-4">{t.legal.sections.termsOfUse.content}</p>
          <p>{t.legal.sections.termsOfUse.availability}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-pitkerBlue">{t.legal.sections.liability.title}</h2>
          <p className="mb-4">{t.legal.sections.liability.content}</p>
          <p>{t.legal.sections.liability.userResponsibility}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-pitkerBlue">{t.legal.sections.personalData.title}</h2>
          <p className="mb-4">{t.legal.sections.personalData.consent}</p>
          <p className="mb-4">{t.legal.sections.personalData.cnil}</p>
          <p className="mb-4">{t.legal.sections.personalData.contact}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-pitkerBlue">{t.legal.sections.cookies.title}</h2>
          <p className="mb-4">{t.legal.sections.cookies.content}</p>
          <p>{t.legal.sections.cookies.configuration}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-pitkerBlue">{t.legal.sections.hyperlinks.title}</h2>
          <p>{t.legal.sections.hyperlinks.content}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-pitkerBlue">{t.legal.sections.applicableLaw.title}</h2>
          <p>{t.legal.sections.applicableLaw.content}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-pitkerBlue">{t.legal.sections.legalReferences.title}</h2>
          <ul className="list-disc pl-6">
            {t.legal.sections.legalReferences.references.map((reference, index) => (
              <li key={index}>{reference}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-pitkerBlue">{t.legal.sections.definitions.title}</h2>
          <p className="mb-2">{t.legal.sections.definitions.user}</p>
          <p>{t.legal.sections.definitions.personalData}</p>
        </section>
      </div>
      <Footer />
    </main>
  );
} 