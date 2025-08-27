import Accordion from "../../Components/Programs/AccordionProps";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const ProgramInfo = () => {
  const accordionData = [
    {
      title: "Who is this for?",
      content:
        "This program is designed for students aiming for Ivy League and other global admissions, aspiring researchers and inventors eager to explore innovation, entrepreneurs and innovators seeking IP protection.",
    },
    {
      title: "What students will learn",
      content:
        "Students will gain practical knowledge in innovation strategy, patent filing, and research methodologies that enhance academic and career opportunities.",
    },
    {
      title: "Core focus areas",
      content:
        "Key areas include intellectual property law, product innovation, technology research, and global academic preparation.",
    },
    {
      title: "Sample research paper outcomes",
      content:
        "Students will produce research papers demonstrating innovation, entrepreneurship, and intellectual property strategies for real-world applications.",
    },
  ];

  const features = [
    {
      title: "Idea to Patent Journey",
      description: "Learn how to transform raw ideas into patentable innovations.",
    },
    {
      title: "Global Exposure",
      description:
        "File patents with real-world commercial value, boosting international profile.",
    },
    {
      title: "Career Edge",
      description:
        "Strengthens Ivy/PhD admissions, job prospects, and entrepreneurship.",
    },
    {
      title: "Hands-on Mentorship",
      description:
        "Work with inventors & experts who’ve filed 100+ global patents.",
    },
  ];

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-100 items-center px-5 py-5 md:px-20 md:py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Left Section */}
      <div className="flex flex-col gap-3">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-[#003579] mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Track 1: Patents – The Innovation Engine
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-6"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Learn how to transform your ideas into patents, fueling innovation and
          academic/professional success.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="flex items-start space-x-3"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: i * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Blue Circle Icon */}
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[#003579] flex items-center justify-center mt-1">
                <Check className="w-4 h-4 text-white" />
              </div>

              {/* Text */}
              <div>
                <p className="font-semibold text-gray-800">{feature.title}</p>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Section - Accordion */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Accordion items={accordionData} />
      </motion.div>
    </motion.div>
  );
};

export default ProgramInfo;
