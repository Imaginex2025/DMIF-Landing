import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { APPROUTES } from "../../Routes/appRoutes";
import IconButton from "../../Components/Common/Button";

export const features = [
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
    image: "/Programs/image2.svg",
  },
  {
    id: 3,
    title: "Global Exposure",
    description:
      "Build a strong global network by engaging with peers, mentors, and experts across different cultures, enhancing both collaboration and cross-cultural learning.",
    footer: "Global Network",
    image: "/Programs/image3.svg",
  },
  {
    id: 4,
    title: "Ivy League Readiness",
    description:
      "Develop the academic rigor, leadership mindset, and personal discipline required to compete for admission to Ivy League and other top universities.",
    footer: "Future Ready",
    image: "/Programs/image4.svg",
  },
  {
    id: 5,
    title: "Innovation Thinking",
    description:
      "Learn structured methods and design-thinking approaches to generate creative, practical, and impactful solutions for today’s global challenges.",
    footer: "Creative Problem Solving",
    image: "/Programs/image2.svg",
  },
  {
    id: 6,
    title: "Brain Science",
    description:
      "Explore neuroscience-based techniques to optimize memory, focus, and overall learning performance, applying brain science principles to everyday success.",
    footer: "Mind Science",
    image: "/Programs/image2.svg",
  },
];

export const FeatureContent = ({ feature }: { feature: typeof features[0] }) => {
  const navigate = useNavigate();
  
  return (
    <section className="w-full bg-[#F9FBFD] py-12 px-4 sm:py-16 sm:px-8 lg:px-[88px]">
      <div className="max-w-[1366px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Image */}
          <div className="w-full lg:w-[400px] flex-shrink-0">
            <div className="bg-[#F9FBFD] rounded-[5px] p-6 flex items-center justify-center">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full max-w-[300px] h-auto"
              />
            </div>
          </div>
          {/* Details */}
          <div className="flex-1">
            <h1 className="heading text-[#003579] mb-6">{feature.title}</h1>
            <p className="font-medium text-base leading-7 text-[#404040] mb-8">
              {feature.description}
            </p>
            <IconButton
              label="Contact Us"
              onClick={() => navigate(APPROUTES.CONTACT_US)}
              className="bg-[#003579] text-white hover:bg-[#002347]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const KeyFeature = () => {
  const navigate = useNavigate();

  return (
    <section className="px-4 md:px-16 py-8 md:py-12">
      <h2 className="heading mb-4 text-[24px] md:text-[38px] leading-[32px] md:leading-[48px]">
        Key Program Features
      </h2>

      {/* Grid layout */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
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


