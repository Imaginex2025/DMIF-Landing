// Import section components
import HeroSection from "../Section/Home/HeroSection";
import DrMadhanSection from "../Section/Home/DrMadhanSection";
import AboutDMIFSection from "../Section/Home/AboutDMIFSection";
import KeyFeature from "../Section/Home/KeyFeature";
import TestimonialsCarousel from "../Section/Home/Testimonials";
import CTASection from "../Section/Home/CTASection";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
// import VisionMissionSection from "../Section/Home/Vision";

const Home = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        // small delay to ensure DOM is ready
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [location]);
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
      <div id="testimonials">
        <TestimonialsCarousel />
      </div>
      

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Home;
