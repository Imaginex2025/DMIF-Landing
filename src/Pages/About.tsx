"use client";

import { motion } from "framer-motion";
import OverviewSection from "../Section/About/OverviewSection";
import MentorshipSection from "../Section/About/MentorshipSection";
import UniqueSection from "../Section/About/UniqueSection";
import { useIsMobile } from "../lib/useIsMobile";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  const isMobile = useIsMobile();
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Overview Section */}
      {isMobile ? (
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <OverviewSection />
        </motion.div>
      ) : (
        <OverviewSection />
      )}

      {/* Mentorship Section */}
      {isMobile ? (
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <MentorshipSection />
        </motion.div>
      ) : (
        <MentorshipSection />
      )}

      {/* Unique Section */}
      {isMobile ? (
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <UniqueSection />
        </motion.div>
      ) : (
        <UniqueSection />
      )}
    </div>
  );
};

export default About;
