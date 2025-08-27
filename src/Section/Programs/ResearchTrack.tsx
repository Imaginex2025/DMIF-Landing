import Accordion from "../../Components/Programs/AccordionProps";
import { Check } from "lucide-react";

const ResearchInfo = () => {
  const accordionData = [
    {
      title: "Who is this for?",
      content:
        "This program is designed for students aiming for Ivy League and other global admissions, aspiring researchers seeking to publish in top journals, and innovators looking to build strong academic credentials.",
    },
    {
      title: "What students will learn",
      content:
        "Students will gain expertise in academic research, scientific writing, and publishing high-quality papers in international journals and conferences.",
    },
    {
      title: "Core focus areas",
      content:
        "Key areas include research methodology, academic writing, peer-reviewed publishing, and building international recognition.",
    },
    {
      title: "Sample research paper outcomes",
      content:
        "Students will produce academic papers suitable for submission to top-tier journals and global conferences, strengthening their profiles for Ivy/PhD admissions.",
    },
  ];

  const features = [
    {
      title: "Research to Publication",
      description:
        "Learn how to design, write, and publish high-quality academic papers.",
    },
    {
      title: "Global Recognition",
      description:
        "Publish in top international journals and conferences (IEEE, ACM, Springer, Elsevier).",
    },
    {
      title: "Academic Edge",
      description:
        "Strengthen Ivy/PhD admissions with research credentials and citations.",
    },
    {
      title: "Expert Mentorship",
      description:
        "Guided by professors, researchers, and industry innovators with 30+ publications.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#003579] items-center px-5 py-5 md:px-20 md:py-20">
      {/* Left Section - Accordion */}
      <div className="rounded-xl  p-4">
        <Accordion items={accordionData} />
      </div>

      {/* Right Section - Features */}
      <div className="flex flex-col gap-3 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Track 2: Research Paper – The Scholarly Explorer
        </h2>
        <p className="text-blue-100 mb-6">
          Master the art of academic writing and publishing, opening doors to Ivy
          League admissions, global conferences, and career-defining recognition.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start space-x-3">
              {/* Blue Circle Icon */}
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white flex items-center justify-center mt-1">
                <Check className="w-4 h-4 text-[#003579]" />
              </div>

              {/* Text */}
              <div>
                <p className="font-semibold">{feature.title}</p>
                <p className="text-sm text-blue-100">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchInfo;
