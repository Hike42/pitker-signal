'use client';

import Image from 'next/image';

const keyPoints = [
  {
    title: "Senior Team Engagement",
    description: "The seniority and commitment of our team of partners."
  },
  {
    title: "Personalized Approach",
    description: "Our firm's size allows for a high-level, fully personalized approach."
  },
  {
    title: "Proven Experience",
    description: "Experience in numerous searches at this level, with a preference for mid-sized company environments (family ownership or investment funds)."
  }
];

const recentSearches = [
  "CEO - Family group - Champagne house",
  "CEO - Family group - Construction & development",
  "CEO - European group - Pharmaceutical laboratory",
  "CEO - Family group - Art logistics",
  "CEO - Family group - Consumer healthcare",
  "CEO - Professional Federation",
  "CEO - Startup - Logtech",
  "CEO - Family-owned mid-cap - Automotive Equipment",
  "CEO - Family-owned mid-cap - Machine Tools",
  "CEO - PE-backed mid-cap - Renewable Energy",
  "CEO - High-growth mid-cap owned by growth equity fund - Decarbonization",
  "CEO - SME owned by family office - Premium consumer products manufacturing and distribution"
];

const CeoSearchContent = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <Image
          src="/ceosearch.jpg"
          alt="CEO Search"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-end p-8">
          <div className="container mx-auto">
            <h1 className="text-pitkerRed uppercase text-5xl font-light mb-4">CEO Search</h1>
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
                Our CEO Search practice stands out through a rigorous and personalized approach, ensuring the identification 
                and recruitment of the best talent for leadership positions. We combine in-depth meetings with all stakeholders 
                involved in the search, comprehensive information gathering about the sector, the company, its competitors, 
                and the technological and regulatory environment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                For each assignment, we form an ad hoc team, consisting of one or more partners and a research consultant, 
                to mobilize the necessary skills to meet each project&apos;s specific requirements. Our partners are involved 
                in all links of the value chain, where other recruitment players sometimes have a more compartmentalized approach.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                We define a search strategy that combines a systematic approach, leveraging all available information sources, 
                and targeted high-level conversations with trusted market individuals.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We pay particular attention to all interactions to ensure both efficiency and smoothness of the search process. 
                Confidentiality and care in written correspondence with our clients and considered candidates are among the elements 
                of our approach. Our offices, offering a premium setting, are available to our French and foreign clients for 
                organizing discreet meetings.
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

export default CeoSearchContent; 