import Image from 'next/image';

const keyPoints = [
  {
    title: "Industry Knowledge",
    description: "Deep understanding of the sector and its leaders, both in France and internationally."
  },
  {
    title: "Strategic Excellence",
    description: "Proven expertise in conducting the sector's most strategic searches."
  },
  {
    title: "Long-term Relationships",
    description: "Long-term approach to building high-level trust relationships."
  }
];

const recentSearches = [
  "CEO - European pharmaceutical laboratory",
  "Global Commercial Director - Specialty pharmaceutical company",
  "Medical Affairs Director - Medical devices company",
  "Pharmaceutical Affairs Director - French pharmaceutical group",
  "Market Access & Public Affairs Director - Italian laboratory",
  "CFO - Danish laboratory",
  "Industrial Director - Family-owned pharmaceutical group",
  "HR Director - Pharmaceutical laboratory (RX & OTC)",
  "CEO - Rare diseases specialized laboratory",
  "CEO - Consumer healthcare pharmaceutical company"
];

const LifeSciencesContent = () => {
  return (
    <div className="bg-white">
      {/* Hero Section améliorée */}
      <div className="relative h-[50vh]">
        <Image
          src="/lifesciences2.jpg"
          alt="Life Sciences"
          fill
          sizes="100vw"
          className="object-cover mask-image-gradient object-[center_30%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-end p-8">
          <div className="container mx-auto">
            <h1 className="text-pitkerRed uppercase text-5xl font-light mb-4">Life Sciences</h1>
            <p className="text-white text-xl max-w-2xl mb-8">
              Supporting pharmaceutical, biotech and medtech companies in their leadership challenges
            </p>
          </div>
        </div>
      </div>

      {/* Main Content avec design amélioré mais texte original */}
      <div className="container mx-auto px-4">
        {/* Introduction section */}
        <div className="py-16 border-b border-gray-200">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                The life sciences sector stands out for its innovative nature, international dimension, 
                demanding regulatory framework, and diverse stakeholders: pharmaceuticals (prescription 
                and OTC medicines, generics and biosimilars, etc.), biotechnology (including rare diseases), 
                medical equipment and devices, diagnostics, active ingredients, development and production 
                outsourcing, veterinary health, and more.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Identifying leaders in these industries requires deep sector knowledge and trusted relationships 
                with key players. PITKER meets these requirements by investing daily in understanding this 
                constantly evolving sector, where people play a crucial role beyond science.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                For healthcare industries, which represent more than half of its clients, PITKER conducts 
                searches in France and abroad through a network of privileged partners. While specializing 
                in CEO and general management searches, the firm covers all core executive team functions 
                (finance, human resources, etc.) as well as sector-specific roles (pharmaceutical affairs, 
                market access, medical affairs, etc.).
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Operating across the entire value chain - R&D, production, and commercialization - the firm 
                assists clients ranging from large groups to mid-sized companies owned by family shareholders 
                and/or investment funds.
              </p>
            </div>
          </div>
        </div>

        {/* Our Strengths section */}
        <div className="py-16 border-b border-gray-200">
          <h2 className="text-3xl font-light text-pitkerBlue mb-12 text-center">Our Strengths</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {keyPoints.map((point, index) => (
              <div key={index} className="group p-8 bg-white border border-gray-200 hover:border-pitkerBlue transition-all duration-300">
                <h3 className="text-xl font-bold text-pitkerBlue mb-4 group-hover:text-pitkerRed transition-colors">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Searches section */}
        <div className="py-16">
          <h2 className="text-3xl font-light text-pitkerBlue mb-12 text-center">Examples of Recent Searches</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {recentSearches.map((search, index) => (
              <div 
                key={index} 
                className="p-6 bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 border-l-4 border-pitkerBlue"
              >
                <p className="text-lg text-gray-700">{search}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LifeSciencesContent; 