import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    id: 1,
    title: "Patents",
    description:
      "Gain in-depth knowledge of how to create, draft, and file patents that safeguard innovative ideas, ensuring intellectual property rights and long-term impact.",
    footer: "Protect Ideas",
    image: "/Programs/image1.png",
  },
  {
    id: 2,
    title: "Research",
    description:
      "Work directly on academic and industry-level research projects, developing critical thinking and analytical skills through practical, real-world experience.",
    footer: "Human Ideas",
    image: "/Programs/image1.png",
  },
  {
    id: 3,
    title: "Global Exposure",
    description:
      "Build a strong global network by engaging with peers, mentors, and experts across different cultures, enhancing both collaboration and cross-cultural learning.",
    footer: "Global Network",
    image: "/Programs/image1.png",
  },
  {
    id: 4,
    title: "Ivy League Readiness",
    description:
      "Develop the academic rigor, leadership mindset, and personal discipline required to compete for admission to Ivy League and other top universities.",
    footer: "Future Ready",
    image: "/Programs/image1.png",
  },
  {
    id: 5,
    title: "Innovation Thinking",
    description:
      "Learn structured methods and design-thinking approaches to generate creative, practical, and impactful solutions for today’s global challenges.",
    footer: "Creative Problem Solving",
    image: "/Programs/image1.png",
  },
  {
    id: 6,
    title: "Brain Science",
    description:
      "Explore neuroscience-based techniques to optimize memory, focus, and overall learning performance, applying brain science principles to everyday success.",
    footer: "Mind Science",
    image: "/Programs/image1.png",
  },
];

const KeyFeature = () => {
  const navigate = useNavigate();

  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-16 py-6 sm:py-8 md:py-12">
      <h2 className="heading mb-4 text-[20px] sm:text-[24px] md:text-[32px] lg:text-[38px] leading-[28px] sm:leading-[32px] md:leading-[40px] lg:leading-[48px] text-center">
        Key Program Features
      </h2>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col sm:flex-row gap-3 sm:gap-6 hover:scale-105 duration-200 transition-transform items-start cursor-pointer"
            onClick={() => navigate(`/feature/${feature.id}`)}
          >
            {/* Left - Image */}
            <div className="w-full sm:w-auto">
              <img
                src={feature.image}
                alt={feature.title}
                className="rounded-lg w-full"
              />
            </div>

            {/* Right - Text */}
            <div className="flex flex-col h-full justify-between flex-1">
              <div className="flex flex-col gap-1 md:gap-2">
                <p className="text-base md:text-lg font-semibold text-gray-800">
                  {feature.title}
                </p>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="flex items-center justify-between text-[#003579] font-medium mt-2 md:mt-3 text-sm md:text-base">
                <p>{feature.footer}</p>
                <ArrowRight size={18} className="md:w-[22px] md:h-[22px]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeature;


