// Import section components
import HeroSection from "../Section/Home/HeroSection";
import DrMadhanSection from "../Section/Home/DrMadhanSection";
import AboutDMIFSection from "../Section/Home/AboutDMIFSection";
import KeyFeature from "../Section/Home/KeyFeature";
import TestimonialsCarousel from "../Section/Home/Testimonials";
import CTASection from "../Section/Home/CTASection";
import { motion } from "framer-motion";
import { useIsMobile } from "../lib/useIsMobile";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Home = () => {
  const isMobile = useIsMobile();
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      {isMobile ? (
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <HeroSection />
        </motion.div>
      ) : (
        <HeroSection />
      )}

      {/* Dr. Madhan Section */}
      {isMobile ? (
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <DrMadhanSection />
        </motion.div>
      ) : (
        <DrMadhanSection />
      )}

      {/* About DMIF Section */}
      {isMobile ? (
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <AboutDMIFSection />
        </motion.div>
      ) : (
        <AboutDMIFSection />
      )}

      {/* Key Program Features Section */}
      {isMobile ? (
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <KeyFeature />
        </motion.div>
      ) : (
        <KeyFeature />
      )}

      {/* Testimonials Section */}
      {isMobile ? (
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <TestimonialsCarousel />
        </motion.div>
      ) : (
        <TestimonialsCarousel />
      )}

      {/* CTA Section */}
      {isMobile ? (
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <CTASection />
        </motion.div>
      ) : (
        <CTASection />
      )}
    </div>
  );
};

export default Home;
