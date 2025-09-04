// Import section components
import HeroSection from "../Section/Home/HeroSection";
import DrMadhanSection from "../Section/Home/DrMadhanSection";
import AboutDMIFSection from "../Section/Home/AboutDMIFSection";
import KeyFeature from "../Section/Home/KeyFeature";
import TestimonialsCarousel from "../Section/Home/Testimonials";
import CTASection from "../Section/Home/CTASection";
// import VisionMissionSection from "../Section/Home/Vision";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Dr. Madhan Section */}
      <DrMadhanSection />

      {/* About DMIF Section */}
      <AboutDMIFSection />

      {/* <VisionMissionSection /> */}

      {/* Key Program Features Section */}
      <KeyFeature />

      {/* Testimonials Section */}
      <TestimonialsCarousel />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Home;
