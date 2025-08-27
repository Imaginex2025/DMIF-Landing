
import { APPROUTES } from '../../Routes/appRoutes';
import { useNavigate } from 'react-router';

const ResearchAndIP = () => {
    const navigate = useNavigate()
  const cards = [
    {
      number: 1,
      title: "Boosts High-Skill Jobs & Salaries",
      description: "Research and IP drive demand for skilled talent, increasing high-paying roles in tech, biotech, and All other AI sectors globally.",
    },
    {
      number: 2,
      title: "Fuels Startup Creation & Growth",
      description: "IP-backed innovation helps startups attract funding, stand out in markets, and scale successfully in competitive industries.",
    },
    {
      number: 3,
      title: "Enhances Global Recognition",
      description: "Strong research or IP achievements support Green Card and PR visa applications through recognized excellence pathways.",
    },
  ];

  return (
    <div className="bg-[#003579] text-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Section Title */}
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
          How Research & Intellectual Property Drive Career and Economic Advancement
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-[4px] rounded-xl p-6 hover:bg-blue-800/70 transition-all duration-300 shadow-lg"
          >
            <div className="flex items-start flex-col mb-4">
              <div className="w-12 h-12 bg-white rounded-[9px] flex items-center justify-center text-blue-500 p-2 font-bold text-sm">
                {card.number}
              </div>
              
            </div>
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="max-w-7xl mx-auto mt-12 text-center">
        <button
          onClick={() => navigate(APPROUTES.CONTACT_US)}
          className="bg-white cursor-pointer hover:scale-105 duration-300 transform text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default ResearchAndIP;