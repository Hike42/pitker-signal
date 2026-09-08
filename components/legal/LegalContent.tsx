'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function MentionsLegales() {
  const { t } = useLanguage();

  // Fonction pour retirer le numéro au début du titre (ex: "1. Éditeur" -> "Éditeur")
  const cleanTitle = (title: string) => {
    return title.replace(/^\d+\.\s*/, '');
  };

  return (
    <main className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-16 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* En-tête */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-pitkerBlue mb-4">{t.legal.title}</h1>
            <div className="w-24 h-1 bg-pitkerBlue mx-auto"></div>
          </div>

          {/* Contenu principal */}
          <div className="space-y-12">
            {/* Éditeur du site */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-pitkerBlue flex items-center">
                <span className="w-8 h-8 bg-pitkerBlue text-white rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                {cleanTitle(t.legal.sections.publisher.title)}
              </h2>
              <div className="ml-11 space-y-4">
                <p className="text-gray-700">{t.legal.sections.publisher.content}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                  <p>{t.legal.sections.publisher.company}</p>
                  <p>{t.legal.sections.publisher.capital}</p>
                  <p>{t.legal.sections.publisher.address}</p>
                  <p>{t.legal.sections.publisher.rcs}</p>
                  <p>{t.legal.sections.publisher.contact}</p>
                </div>
              </div>
            </section>

            {/* Directeur de la publication */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-pitkerBlue flex items-center">
                <span className="w-8 h-8 bg-pitkerBlue text-white rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                {cleanTitle(t.legal.sections.director.title)}
              </h2>
              <p className="ml-11 text-gray-700">{t.legal.sections.director.content}</p>
            </section>

            {/* Conception et développement */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-pitkerBlue flex items-center">
                <span className="w-8 h-8 bg-pitkerBlue text-white rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                {cleanTitle(t.legal.sections.development.title)}
              </h2>
              <p className="ml-11 text-gray-700">{t.legal.sections.development.content}</p>
            </section>

            {/* Hébergement */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-pitkerBlue flex items-center">
                <span className="w-8 h-8 bg-pitkerBlue text-white rounded-full flex items-center justify-center mr-3 text-sm">4</span>
                {cleanTitle(t.legal.sections.hosting.title)}
              </h2>
              <div className="ml-11 space-y-4">
                <p className="text-gray-700">{t.legal.sections.hosting.content}</p>
                <div className="space-y-2 text-gray-600">
                  <p>{t.legal.sections.hosting.company}</p>
                  <p>{t.legal.sections.hosting.address}</p>
                  <p>{t.legal.sections.hosting.contact}</p>
                </div>
              </div>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-pitkerBlue flex items-center">
                <span className="w-8 h-8 bg-pitkerBlue text-white rounded-full flex items-center justify-center mr-3 text-sm">5</span>
                {cleanTitle(t.legal.sections.intellectualProperty.title)}
              </h2>
              <div className="ml-11 space-y-4">
                <p className="text-gray-700">{t.legal.sections.intellectualProperty.content}</p>
                <p className="text-gray-700">{t.legal.sections.intellectualProperty.trademarks}</p>
              </div>
            </section>

            {/* Conditions d'utilisation */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-pitkerBlue flex items-center">
                <span className="w-8 h-8 bg-pitkerBlue text-white rounded-full flex items-center justify-center mr-3 text-sm">6</span>
                {cleanTitle(t.legal.sections.termsOfUse.title)}
              </h2>
              <div className="ml-11 space-y-4">
                <p className="text-gray-700">{t.legal.sections.termsOfUse.content}</p>
                <p className="text-gray-700">{t.legal.sections.termsOfUse.availability}</p>
              </div>
            </section>

            {/* Responsabilité */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-pitkerBlue flex items-center">
                <span className="w-8 h-8 bg-pitkerBlue text-white rounded-full flex items-center justify-center mr-3 text-sm">7</span>
                {cleanTitle(t.legal.sections.liability.title)}
              </h2>
              <div className="ml-11 space-y-4">
                <p className="text-gray-700">{t.legal.sections.liability.content}</p>
                <p className="text-gray-700">{t.legal.sections.liability.userResponsibility}</p>
              </div>
            </section>

            {/* Données personnelles */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-pitkerBlue flex items-center">
                <span className="w-8 h-8 bg-pitkerBlue text-white rounded-full flex items-center justify-center mr-3 text-sm">8</span>
                {cleanTitle(t.legal.sections.personalData.title)}
              </h2>
              <div className="ml-11 space-y-4">
                <p className="text-gray-700">{t.legal.sections.personalData.consent}</p>
                <p className="text-gray-700">{t.legal.sections.personalData.cnil}</p>
                <p className="text-gray-700">{t.legal.sections.personalData.contact}</p>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-pitkerBlue flex items-center">
                <span className="w-8 h-8 bg-pitkerBlue text-white rounded-full flex items-center justify-center mr-3 text-sm">9</span>
                {cleanTitle(t.legal.sections.cookies.title)}
              </h2>
              <div className="ml-11 space-y-6">
                <p className="text-gray-700">{t.legal.sections.cookies.content}</p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.legal.sections.cookies.purpose}</h3>
                  <ul className="space-y-3">
                    {t.legal.sections.cookies.types.map((type, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-pitkerBlue mr-2">•</span>
                        <span>{type}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-700">{t.legal.sections.cookies.duration}</p>
                <p className="text-gray-700">{t.legal.sections.cookies.rights}</p>
                <p className="text-gray-700">{t.legal.sections.cookies.configuration}</p>
              </div>
            </section>

            {/* Liens hypertextes */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-pitkerBlue flex items-center">
                <span className="w-8 h-8 bg-pitkerBlue text-white rounded-full flex items-center justify-center mr-3 text-sm">10</span>
                {cleanTitle(t.legal.sections.hyperlinks.title)}
              </h2>
              <p className="ml-11 text-gray-700">{t.legal.sections.hyperlinks.content}</p>
            </section>

            {/* Droit applicable */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-pitkerBlue flex items-center">
                <span className="w-8 h-8 bg-pitkerBlue text-white rounded-full flex items-center justify-center mr-3 text-sm">11</span>
                {cleanTitle(t.legal.sections.applicableLaw.title)}
              </h2>
              <p className="ml-11 text-gray-700">{t.legal.sections.applicableLaw.content}</p>
            </section>

            {/* Références légales */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-pitkerBlue flex items-center">
                <span className="w-8 h-8 bg-pitkerBlue text-white rounded-full flex items-center justify-center mr-3 text-sm">12</span>
                {cleanTitle(t.legal.sections.legalReferences.title)}
              </h2>
              <div className="ml-11">
                <ul className="list-disc pl-4 space-y-2 text-gray-700">
                  {t.legal.sections.legalReferences.references.map((reference, index) => (
                    <li key={index}>{reference}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Définitions */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-pitkerBlue flex items-center">
                <span className="w-8 h-8 bg-pitkerBlue text-white rounded-full flex items-center justify-center mr-3 text-sm">13</span>
                {cleanTitle(t.legal.sections.definitions.title)}
              </h2>
              <div className="ml-11 space-y-4">
                <p className="text-gray-700">{t.legal.sections.definitions.user}</p>
                <p className="text-gray-700">{t.legal.sections.definitions.personalData}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
} 