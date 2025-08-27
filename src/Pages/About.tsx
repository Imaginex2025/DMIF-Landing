"use client";

import { motion } from "framer-motion";
import OverviewSection from "../Section/About/OverviewSection";
import MentorshipSection from "../Section/About/MentorshipSection";
import UniqueSection from "../Section/About/UniqueSection";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.3,
    },
  },
};

const About = () => {
  return (
    <motion.div
      className="min-h-screen bg-white font-sans"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={containerVariants}>
        <OverviewSection />
      </motion.div>

      <motion.div variants={containerVariants}>
        <MentorshipSection />
      </motion.div>

      <motion.div variants={containerVariants}>
        <UniqueSection />
      </motion.div>
    </motion.div>
  );
};

export default About;
