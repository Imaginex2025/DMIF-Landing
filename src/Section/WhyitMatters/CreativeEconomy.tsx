
import { Globe, Zap, Users, BarChart2 } from 'lucide-react';

const CreativeEconomy = () => {
  // Data for the cards
  const cards = [
    {
      icon: Globe,
      title: "Rapid Global Expansion",
      description:
        "The creative economy is projected to grow from $3.1 trillion to over $5 trillion by 2030, driven by digital platforms, globalization, and rising demand for cultural and creative content.",
    },
    {
      icon: Zap,
      title: "Technology as a Catalyst",
      description:
        "AI, blockchain, and immersive technologies (VR/AR) are transforming how creative content is produced, distributed, and monetized, enabling creators to reach global audiences instantly.",
    },
    {
      icon: Users,
      title: "Empowerment of Individual Creators",
      description:
        "Platforms like YouTube, Etsy, and Patreon have democratized access to markets, allowing independent artists, designers, and innovators to build sustainable careers without traditional gatekeepers.",
    },
    {
      icon: BarChart2,
      title: "Economic & Social Impact",
      description:
        "The creative economy now employs over 30 million people worldwide and contributes significantly to GDP, innovation, and cultural diversity in both developed and emerging economies.",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      {/* Section Header */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-12">
        <h2 className="heading mb-2">The Rise of the Creative Economy</h2>
        <p className="para">
          We offer comprehensive digital solutions tailored to your business needs
        </p>
      </div>

      {/* Grid Layout - Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6  transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center flex-shrink-0">
                <card.icon className="w-5 h-5 text-blue-700" />
              </div>
              <h3 className="font-semibold text-lg text-gray-900">{card.title}</h3>
            </div>
            <p className="para">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreativeEconomy;