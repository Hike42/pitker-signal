import Image from 'next/image';

const keyPoints = [
  {
    title: "Multi-sector Knowledge",
    description: "Deep understanding of multiple industrial sectors."
  },
  {
    title: "Leadership Transitions",
    description: "Proven experience in executive search during governance changes (succession, merger, LBO, etc.)."
  },
  {
    title: "Innovative Approach",
    description: "Innovative and differentiating approach in candidate identification and evaluation, favoring new and relevant perspectives."
  }
];

const recentSearches = [
  "CEO - Family-owned mid-cap - Automotive Equipment",
  "CEO - Family-owned mid-cap - Machine Tools",
  "CEO - PE-backed mid-cap - Renewable Energy",
  "Industrial Director - PE-backed mid-cap - Engineering",
  "Strategic Director - LBO mid-cap - Food Industry",
  "Operations Director - PE-backed mid-cap - Electrical Engineering",
  "CFO - PE-backed mid-cap - Engineering",
  "HR Director - PE-backed mid-cap - Machine Tools",
  "Commercial Director - PE-backed mid-cap - Electrical Engineering"
];

const IndustryContent = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <Image
          src="/industry.jpg"
          alt="Industry"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-end p-8">
          <div className="container mx-auto">
            <h1 className="text-pitkerRed uppercase text-5xl font-light mb-4">Manufacturing Industries</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4">
        {/* Introduction section */}
        <div className="py-16 border-b border-gray-200">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                At PITKER, the Industry practice is built on a deep expertise of the specific challenges and requirements of this sector. 
                We primarily work with SMEs and mid-sized companies owned by investment funds or families, where strategic, operational, 
                and human dimensions are at the heart of challenges. We have excellent knowledge of key industrial functions, particularly 
                site management, industrial management, and operations management.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With our experience in various specialized sectors such as machine tools, precision mechanics, engineering, renewable energies, 
                electrical engineering, food industry, and automotive, we have developed an extensive network covering a wide range of industrial 
                issues and executive profiles.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                The industrial sector is currently undergoing profound transformations, particularly the growing integration of digitalization 
                and artificial intelligence, which are redefining processes and necessary skills, requiring creativity, boldness, and innovation 
                in approaching executive search in this sector.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                PITKER supports its clients in finding talents capable of driving operational transformations, innovating in a competitive 
                environment, and ensuring business sustainability. Through our tailored approach and deep understanding of industrial ecosystems, 
                we help companies meet their challenges, whether local or international.
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

export default IndustryContent; 