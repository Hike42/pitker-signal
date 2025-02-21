import Image from 'next/image';

const keyPoints = [
  {
    title: "PE Expertise",
    description: "Strong experience in Private Equity recruitment providing relevant judgment on candidates"
  },
  {
    title: "Network",
    description: "Extensive PE network, with benchmarks and references on profiles we approach and evaluate"
  },
  {
    title: "Agility",
    description: "Agile operating model aligned with our clients' way of working"
  },
  {
    title: "Multi-sector Coverage",
    description: "Comprehensive coverage across multiple sectors"
  }
];

const recentSearches = [
  "CEO - Mid-cap LBO - Healthcare",
  "CEO - High-growth mid-cap owned by growth equity fund - Decarbonization",
  "CEO - SME owned by family office - Premium consumer products manufacturing and distribution",
  "CFO - Mid-cap LBO - Packaging",
  "CFO - High-growth mid-cap owned by infrastructure fund - Renewable Energy",
  "CFO - Family office - Diversified activities",
  "General Secretary - Family office - Diversified activities"
];

const PrivateEquityContent = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <Image
          src="/pe.jpg"
          alt="Private Equity"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute inset-0 flex items-end p-8">
          <div className="container mx-auto">
            <h1 className="text-pitkerRed uppercase text-5xl font-light mb-4">Private Equity</h1>
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
                Our significant experience in Private Equity recruitment allows us to identify profiles characterized by:
              </p>
              <ul className="text-lg text-gray-700 leading-relaxed space-y-4 list-disc pl-6">
                <li>Strong entrepreneurial spirit and risk appetite</li>
                <li>Ability to accelerate and adapt</li>
                <li>Capacity to achieve more with limited resources</li>
                <li>Understanding of shareholder constraints, particularly regarding cash flow and investments</li>
              </ul>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                PITKER partners&apos expertise covers the main investment sectors of funds: healthcare, industry, 
                infrastructure, and consumer/retail.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We recruit for all executive committee positions, with specific expertise in CEO and CFO roles.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                For each assignment, we form an ad hoc team, consisting of one or more partners and a research consultant, 
                to mobilize the necessary skills to meet each project&apos;s specific requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Our Strengths section */}
        <div className="py-16 border-b border-gray-200">
          <h2 className="text-3xl font-light text-pitkerBlue mb-12 text-center">Our Strengths</h2>
          <div className="grid md:grid-cols-2 gap-8">
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

export default PrivateEquityContent; 