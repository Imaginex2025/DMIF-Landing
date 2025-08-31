import { useRef, useEffect, useState } from "react";
import ProgramCard from "../../Components/Programs/ProgramCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { APPROUTES } from "../../Routes/appRoutes";
import { useNavigate } from "react-router-dom";

const ProgramCards = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();
const cards = [
  {
    logo: "/Logo.png",
    company: "Innovation Academy",
    title: "Patent – The Innovation Engine",
    description:
      "Learn how to turn raw ideas into patents with real-world frameworks. Gain hands-on experience in drafting Invention Disclosure Forms (IDF) and Technical Invention Documents (TID) while building a strong innovation profile.",
    discountPrice: 899,
    oldPrice: 1200,
  },
  {
    logo: "/Logo.png",
    company: "Innovation Academy",
    title: "Research Paper – The Explorer",
    description:
      "Master the art of academic research and publishing. From structuring manuscripts to submitting for global conferences, you’ll create a publication-ready paper that strengthens your resume and higher-education prospects.",
    discountPrice: 599,
    oldPrice: 900,
  },  {
    logo: "/Logo.png",
    company: "Innovation Academy",
    title: "Patent – The Innovation Engine",
    description:
      "Learn how to turn raw ideas into patents with real-world frameworks. Gain hands-on experience in drafting Invention Disclosure Forms (IDF) and Technical Invention Documents (TID) while building a strong innovation profile.",
    discountPrice: 899,
    oldPrice: 1200,
  },
  {
    logo: "/Logo.png",
    company: "Innovation Academy",
    title: "Research Paper – The Explorer",
    description:
      "Master the art of academic research and publishing. From structuring manuscripts to submitting for global conferences, you’ll create a publication-ready paper that strengthens your resume and higher-education prospects.",
    discountPrice: 599,
    oldPrice: 900,
  },  {
    logo: "/Logo.png",
    company: "Innovation Academy",
    title: "Patent – The Innovation Engine",
    description:
      "Learn how to turn raw ideas into patents with real-world frameworks. Gain hands-on experience in drafting Invention Disclosure Forms (IDF) and Technical Invention Documents (TID) while building a strong innovation profile.",
    discountPrice: 899,
    oldPrice: 1200,
  },
  {
    logo: "/Logo.png",
    company: "Innovation Academy",
    title: "Research Paper – The Explorer",
    description:
      "Master the art of academic research and publishing. From structuring manuscripts to submitting for global conferences, you’ll create a publication-ready paper that strengthens your resume and higher-education prospects.",
    discountPrice: 599,
    oldPrice: 900,
  }
];


  // ✅ Scroll to center specific card
  const scrollToCard = (index: number) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const card = container.children[index] as HTMLElement;
      if (!card) return;

      const cardLeft = card.offsetLeft;
      const cardWidth = card.offsetWidth;

      container.scrollTo({
        left: cardLeft - container.clientWidth / 2 + cardWidth / 2,
        behavior: "smooth",
      });
    }
  };

  // Manual navigation
  const scroll = (direction: "left" | "right") => {
    let newIndex = direction === "left" ? currentIndex - 1 : currentIndex + 1;
    newIndex = Math.max(0, Math.min(newIndex, cards.length - 1));
    setCurrentIndex(newIndex);
    scrollToCard(newIndex);
  };

  // Auto-scroll every 3 seconds (pause on hover)
  useEffect(() => {
    if (isPaused) return; // pause when hovering

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const newIndex = (prev + 1) % cards.length;
        scrollToCard(newIndex);
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="relative w-full py-10">
      {/* Heading */}
      <div className="flex flex-col gap-2">
        <motion.h2
          className="text-center heading"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Exclusive Programs
        </motion.h2>
        <motion.p
          className="text-center text-gray-500 mb-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Onlearning brings you specialized tracks designed to boost your
          academic and professional journey.
        </motion.p>
      </div>

      {/* Scrollable Container */}
      <div
        className="relative mt-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide px-6 md:px-20 py-6 md:py-10 space-x-6 md:space-x-12"
          style={{ scrollBehavior: "smooth", WebkitOverflowScrolling: "touch" }}
        >
{cards.map((card, i) => (
  <motion.div
    key={i}
    className="snap-center shrink-0 w-[80%] xs:w-[70%] sm:w-[60%] md:w-[40%]"
    initial={{ opacity: 0, scale: 0.9, y: 30 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.5, delay: i * 0.1 }}
    onMouseEnter={() => setIsPaused(true)}   // ✅ Pause on hover
    onMouseLeave={() => setIsPaused(false)}  // ✅ Resume on leave
  >
    <ProgramCard
      logo={card.logo}
      company={card.company}
      title={card.title}
      description={card.description}
      discountPrice={card.discountPrice}
      oldPrice={card.oldPrice}
      buttonText="Apply Now"
      onApply={() => { navigate(APPROUTES.CONTACT_US) }}
    />
  </motion.div>
))}

        </div>

        {/* Navigation Buttons */}
        <motion.button
          onClick={() => scroll("left")}
          className="absolute left-2 xs:left-4 top-1/2 cursor-pointer -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-20 hover:shadow-xl transition-shadow"
          aria-label="Scroll left"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </motion.button>

        <motion.button
          onClick={() => scroll("right")}
          className="absolute right-2 xs:right-4 top-1/2 cursor-pointer -translate-y-1/2 bg-white shadow-lg p-2 rounded-full z-20 hover:shadow-xl transition-shadow"
          aria-label="Scroll right"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </motion.button>
      </div>
    </div>
  );
};

export default ProgramCards;
