import Accordion from "../../Components/Programs/AccordionProps";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

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
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#003579] items-center px-5 py-5 md:px-20 md:py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Left Section - Accordion */}
      <motion.div
        className="rounded-xl p-4"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Accordion items={accordionData} />
      </motion.div>

      {/* Right Section - Features */}
      <motion.div
        className="flex flex-col gap-3 text-white"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Track 2: Research Paper – The Scholarly Explorer
        </h2>
        <p className="text-blue-100 mb-6">
          Master the art of academic writing and publishing, opening doors to Ivy
          League admissions, global conferences, and career-defining recognition.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="flex items-start space-x-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * i }}
              viewport={{ once: true }}
            >
              {/* Blue Circle Icon */}
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white flex items-center justify-center mt-1">
                <Check className="w-4 h-4 text-[#003579]" />
              </div>

              {/* Text */}
              <div>
                <p className="font-semibold">{feature.title}</p>
                <p className="text-sm text-blue-100">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ResearchInfo;
