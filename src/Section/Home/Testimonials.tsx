import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import IconButton from "../../Components/Common/Button";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFull, setShowFull] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const navigate = useNavigate();

  // ✅ Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Vijaya Tapaswi Achanta",
      position:
        "DevOps Consultant, Accenture (While working with me) | Vice President, Wells Fargo (Current)",
      text: `Dr.Madhan has been a true inspiration to build the research acumen and to ignite the passion to innovate. I got an opportunity to work under his leadership in Accenture where I started my journey as an inventor.\n\nAs a devops cloud engineer, I never had exposure in the field of research and inventions. Dr. Dr.Madhan has identified my passion in innovation and gave me an opportunity to ideate on unique cloud architectural frameworks hosting complex data analytic solutions. It's been a great learning under his leadership to be able to pursue the ideation in the right path.\n\nSuccessfully accomplished 6 patents as an inventor with grants received from multiple global regions under his leadership. His vast knowledge & expertise has helped sail through many challenges encountered during the patenting process.\n\nIt is a commendable cause by Dr. Dr.Madhan to launch Dr. Dr.Madhan institute for future (DMIF) which will immensely help many aspiring students for the larger goal of nurturing the future inventors & entrepreneurs. Above all, his humble and approachable attitude will empower students to create the research papers & patents on their own under his guidance.\n\nWishing all the best to all the aspiring students & to Dr. Dr.Madhan for being a role model to many of us.`,
      image: "/Testimonials/Vijaya Tapaswi Achanta.jpg",
    },
    {
      id: 2,
      name: "Guruprasad P V",
      position: "Director - Data Science, Zensar | Formar Cloud Advisory Consultant, Accenture",
      text: `Some mentors teach. A rare few ignite a spark that fuels a lifetime of innovation — and Dr. Dr.Madhan is undoubtedly the latter. Working with Dr. Dr.Madhan has been one of the most intellectually fulfilling experiences of my career. Thanks to his unwavering belief in me, I had the privilege of being a co-innovator in over 20 patents. He didn’t just see potential — he nurtured it, challenged it, and led it to flourish. His ability to guide, inspire, and push boundaries makes him a true catalyst for innovation. His mentorship is a rare combination of vision, rigor, and empathy, and I'm certain DMIF will be a game-changer for aspiring scholars and researchers.`,
      image: "/Testimonials/Guruprasad P V.jpg",
    },
    {
      id: 3,
      name: "Varun Mittal",
      position:
        "Software Engineer, Walmart Labs, USA | BS CS, University of Illinois  Urbana-Champaign (UIUC), USA",
      text: `I am incredibly grateful to Dr. Dr.Madhan for his invaluable assistance and guidance throughout the process of completing my research paper. His mentorship was truly exceptional, providing not just direction but also fostering a deep understanding of the subject matter.\n\nDr. Dr.Madhan's commitment was evident in his comprehensive knowledge sessions, which were instrumental in clarifying complex concepts and refining our approach. What truly set his support apart was his dedicated assignment of time, even extending to weekends, to meticulously track progress, delve into additional research, and ensure every aspect of the paper was thoroughly addressed. This level of commitment significantly accelerated our work and elevated the quality of the final output.\n\nHis rich background and extensive experience with research papers, coupled with being the inventor of over 125 patents, provided an unparalleled depth of insight and practical advice. Beyond the paper itself, Dr. Dr.Madhan's foresight and expertise have led to ongoing discussions about completing a patent based on our research findings. This speaks volumes about his vision and his ability to identify and nurture impactful work.\n\nDr. Dr.Madhan's Institute of Future is a great initiative that will undoubtedly produce many future innovators, creators, and thinkers.`,
      image: "/Testimonials/Varun Mittal.jpg",
    },
    {
      id: 4,
      name: "Kishore Kumar Gajula",
      position: "Lead Data Scientist, Software COE(AI/ML), Medtronic | Former Cloud Advisory Consultant, Accenture",
      text: `Over a decade at Accenture, I had the privilege of spending more than half that time working closely with Dr.Madhan—an experience that shaped both my career and character. He welcomed me during a difficult professional period, overlooking past biases and believing in my potential when few others did. That trust opened doors to transformative work, including my first steps into the world of intellectual property and patents. When I needed to move back home to support my family, he extended full remote flexibility—long before it became common. He also championed my academic aspirations, going out of his way to secure funding for me to present at an international conference, even though it lay outside our immediate scope of work. What always stood out was not just his deep technical acumen—rooted in his PhD in cloud computing and his strong grip on big data and analytics—but also his ability to build diverse, high-performing teams. I worked alongside colleagues from neuroscience, business, and physics—testament to his belief in cross-disciplinary innovation. As he steps into his new entrepreneurial and educational venture, it feels like a natural evolution—one that aligns perfectly with his vision and values. His ambition to blend AR, VR, AI, and Cloud to redefine the future of education is inspiring. I have no doubt his efforts will leave a lasting impact—not just on learners, but on society at large. Wishing him all the success he truly deserves.`,
      image: "/Testimonials/Kishore Kumar Gajula .jpg",
    },
    {
      id: 6,
      name: "Gagan Deep Khosla",
      position: "Senior Manager, Accenture",
      text: `Working with Dr. Dr.Madhan Srinivasan on our patent application was a transformative experience. From the very beginning, he brought remarkable clarity and direction to the process — recommending the ideal format, enriching the application with his deep technical expertise, and guiding every step with precision and insight.\n\nWhat truly stood out was his ability to translate complex ideas into a robust, compelling patent draft that not only reflected the innovation accurately but also anticipated and addressed potential challenges. Thanks to his meticulous approach and nuanced understanding of patenting, the application sailed through the review process and was granted without any hurdles.\n\nDr. Dr.Madhan's contribution was instrumental, and I wholeheartedly recommend his services to anyone looking to secure their innovations with confidence and quality.`,
      image: "/Testimonials/Gagan Deep Khosla.jpg",
    },
    {
      id: 7,
      name: "Dhruv Mittal",
      position: "BS in Data Science, University of California San Diego, USA",
      text: `I am currently working with Dr. Dr.Madhan Institute of Future on a research paper focused on developing security taxonomies for cloud computing systems. What began as a rough idea has now grown into a structured academic project, thanks to Dr. Dr.Madhan’s support and strategic guidance. His ability to connect high-level research themes with real-world security challenges has been critical in giving direction to this work. DMIF’s support has been a key factor in transforming this project into a meaningful contribution to the cloud security domain.`,
      image: "/Testimonials/Dhruv Mittal.png",
    },
    {
      id: 9,
      name: "Dr.Sreekumar Vobugari",
      position: "Senior Principal Consultant, Infosys | Ph.D. CSE, NIT Warangal, India",
      text: `My professional collaboration with Dr. Dr.Madhan Kumar Srinivasan, CEO of Wise Work in Bangalore, can be best narrated through our shared commitment to advancing knowledge in the field of Information Technology. My association with Dr.Madhan is clearly reflected in our co-authorship of several academic research papers.\nOur work, found in publications from international conferences and journals, demonstrates a strong synergy between our areas of expertise. Together, we have explored topics such as:\n• Enterprise Architecture: Co-authoring a "Roadmap for building effective complex enterprise architecture in digital transformation," they've shared an industry-based perspective on best practices.\n• Cloud Computing: Their research has delved into "improved performance-centric cloud storage estimation" and other critical aspects of cloud environments.\n• Data Systems: They have also collaborated on papers related to software systems performance improvements and the intricacies of data retrieval processes.\nThis body of work suggests a productive and complementary professional relationship, where both of us have contributed our knowledge to produce impactful research. \nBeyond our collaboration in research work, Dr.Madhan was part of my team at Infosys for nearly 5 years and his tenacity and commitment towards work is worth emulating. Coming from a modest family background, Dr.Madhan works very hard and his commitment and focus towards client’s expectations is unwavering.\nI am glad to be associated with Dr.Madhan and seeing him to be one of the very few individuals across the globe having more than 90+ approved patents in the field of Cloud and Machine Learning. This is really incredible and I am sure Dr.Madhan is capable of building world class products and services making India proud.\nMy best wishes for Dr Dr.Madhan and his family for their future endeavors.`,
      image: "/Testimonials/SreeKumar.jpg",
    },
    {
      id: 8,
      name: "Abdul Hammed Sheik",
      position:
        "Senior Manager, Accenture India | Patent Holder",
      text: `It was a truly enriching experience collaborating with Dr.Madhan during his tenure at Accenture.\nWhen it comes to mentorship in the area of patent filing, I could speak at length about his contributions—but I’ll attempt to capture the essence here. Coming from a core Cloud and Infrastructure background, my focus over the past eight years has shifted toward leading enterprise automation and AI/Analytics initiatives across various business portfolios. Like many others in the infrastructure space, my efforts had primarily centered around building scalable products and driving adoption—considered key success metrics in our field.\nIt wasn’t until I met Dr.Madhan that I truly understood the significance and potential of patenting innovative ideas. He introduced me to the world of intellectual property and helped me recognize the impact that patents can create—not just in the corporate landscape, but also in society at large.\nDr.Madhan’s mentorship was instrumental in shaping my approach toward identifying and articulating unique, value-driven ideas. His motivation, support, and deep knowledge made the entire patent filing journey seamless for me. With his guidance, I was able to file multiple patents—one of which was officially granted in April 2024, with others currently in progress.\nDr.Madhan’s mastery in the patenting process, combined with his strong domain expertise in IT and product development, truly makes him a “Patent Guru”—or as I often say, a walking Wikipedia on the subject.\nHaving closely witnessed his transition from a successful IT professional to a visionary entrepreneur in the AI/GenAI space, I am both inspired and confident in his journey ahead. I wish him continued success in all his endeavors and sincerely hope to collaborate again on more innovative patent opportunities—should his time allow.`,
      image: "/Testimonials/Abdul Hammed Sheik .jpg",
    },
    {
      id: 10,
      name: "Keerthi Bala Sundram",
      position:
        "Senior Manager, Oracle, USA | MS CS, The University of Texas at Dallas, USA | Former Scientist, Researchers Academy | Former Software Engineer, Infosys India",
      text: `Dr.Madhan’s mentorship was pivotal during a collaborative phase at Infosys, where we expanded my undergraduate research into multiple peer reviewed publications with prestigious venues including Springer and ACM. Beyond subject matter expertise, Dr.Madhan has a rare ability to translate ideas into rigorous, publishable work, guiding the full journey from framing research questions to shaping manuscripts and navigating submission processes. His structured feedback, clarity of thought, and consistent encouragement elevated the quality and impact of the research, resulting in tangible outcomes and scholarly recognition for me. I strongly recommend Dr.Madhan to students and early career professionals seeking to transform novelty into solid, well crafted research. His mentorship accelerates progress and builds confidence at every step`,
      image: "/Testimonials/Keerthi.jpg",
    },
    {
      id: 11,
      name: "Arun Krishnamurthy",
      position: "Analytics Leader, GSK",
      text: `I had the privilege of working with Dr.Madhan during our time at Accenture, where our discussions on technology and the future of AI were always thought-provoking and deeply insightful. Beyond conversations, I had the pleasure of collaborating with him in co-authoring a successful patent—a journey that was both enriching and rewarding. Dr.Madhan is not only a brilliant colleague and mentor but also a wonderful friend. His ability to simplify complex ideas, guide with clarity, and inspire those around him makes him uniquely suited for this new initiative. I am certain that students and peers alike will find in him not just an advisor, but a true Guru who can shape their journey in research and innovation.`,
      image: "/Testimonials/Arun.jpg",
    },
    {
      id: 12,
      name: "Samba Siva",
      position: "Lead Cloud Professional, Rockefeller Capital Management, USA | Former Cloud AI Consultant, Accenture India",
      text: `When I joined Dr.Madhan’s Cloud AI team at Accenture, I came from a Data Science background with limited exposure to innovation or patents. Under his mentorship, everything changed. Dr. Madhan not only guided me through advanced Cloud tools and real-world projects but also introduced me to the world of intellectual property and innovation.

Through his structured frameworks, cognitive mentoring techniques, and deep technical insights, he helped me transform the way I approached problems, from thinking like a developer to thinking like an inventor. I learned to turn ideas into impact — resulting in 13 patent filings and 9 grants across the U.S., Europe, Australia, Singapore, and India.

Working with him was a masterclass in clarity, creativity, and disciplined innovation. He has an exceptional ability to ignite curiosity, sharpen technical reasoning, and push you to explore beyond your comfort zone, all while keeping the focus on practical, impactful outcomes.

The journey with Dr. Madhan transformed me both technically and intellectually. From a Data Science role, I evolved into an Advanced Cloud Engineer, and today I’m proud to work in the U.S. as a Lead Cloud Professional.

I remain deeply grateful to Dr. Madhan for his trust, mentorship, and vision, for seeing the potential in me long before I saw it myself`,
      image: "/Testimonials/Samba.png",
    },
  ];

  // ✅ Carousel logic
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setShowFull(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setShowFull(false);
  };

  const startAutoSlide = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 4000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const currentTestimonial = testimonials[currentSlide];
  const prevTestimonial =
    testimonials[
      (currentSlide - 1 + testimonials.length) % testimonials.length
    ];
  const nextTestimonial =
    testimonials[(currentSlide + 1) % testimonials.length];

  const isLongText = currentTestimonial.text.split("\n").join(" ").length > 400;

  return (
    <div
      className={`relative py-12 px-4 sm:px-6 lg:px-10 ${
        showFull ? "min-h-[750px]" : "min-h-[600px]"
      } overflow-hidden transition-all duration-300`}
    >
      {/* Section Heading */}
      <motion.div
        className="relative inset-0 flex items-center justify-between mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-transparent uppercase tracking-widest select-none text-center w-full"
          style={{ WebkitTextStroke: "0.5px gray" }}
        >
          Testimonials
        </h1>
        <img
          src="/Testimonial.png"
          className="opacity-30 w-16 hidden md:flex sm:w-24 md:w-32 lg:max-w-sm"
          alt="Testimonials"
        />
      </motion.div>

      {/* Carousel */}
      <div className="relative flex items-center justify-center gap-8 lg:gap-16">
        {/* Prev (Desktop only) */}
        <motion.div
          className="hidden xl:flex flex-col items-center w-[180px] h-[240px]"
          initial={{ opacity: 0.3, scale: 0.9 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={prevTestimonial.image}
            alt={prevTestimonial.name}
            className="w-full h-full object-cover shadow-md rounded-lg"
          />
          <IconButton
            label="Previous"
            onClick={prevSlide}
            icon={<ChevronLeft size={22} />}
            className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 mt-3 rounded-lg"
          />
        </motion.div>

        {/* Center Slide */}
        <div
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
          className="flex-1 max-w-4xl mx-auto flex justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              className="rounded-lg p-6 sm:p-8 bg-white shadow-lg w-full"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                {/* Image */}
                <motion.div
                  className="w-full max-w-[320px] h-[280px] sm:h-[340px] lg:h-[380px] flex-shrink-0"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {currentTestimonial.image ? (
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-lg">
                      No Image
                    </div>
                  )}
                </motion.div>

                {/* Text */}
                <motion.div
                  className="flex flex-col h-full justify-between"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div>
                    <p
                      className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4"
                      style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        WebkitLineClamp: !showFull && isLongText ? 6 : "unset",
                      }}
                    >
                      {currentTestimonial.text}
                    </p>
                    {isLongText && (
                      <button
                        className="text-blue-800 cursor-pointer text-end font-semibold text-sm hover:underline mb-4"
                        onClick={() => setShowFull((prev) => !prev)}
                      >
                        {showFull ? "Show less" : "Show more"}
                      </button>
                    )}
                  </div>

                  <div className="text-center lg:text-end">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {currentTestimonial.position}
                    </p>
                  </div>

                  {/* ✅ Outcomes Button (only if available) */}
                  {/* {currentTestimonial.outcomes && (
                    <IconButton
                      label="Outcomes"
                      className="max-w-max mt-4 bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded-lg self-center lg:self-end"
                      onClick={() => setShowPopup(true)}
                    />
                  )} */}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next (Desktop only) */}
        <motion.div
          className="hidden xl:flex flex-col items-center w-[180px] h-[240px]"
          initial={{ opacity: 0.3, scale: 0.9 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={nextTestimonial.image}
            alt={nextTestimonial.name}
            className="w-full h-full object-cover shadow-md rounded-lg"
          />
          <IconButton
            label="Next"
            onClick={nextSlide}
            icon={<ChevronRight size={22} />}
            className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 mt-3 rounded-lg"
          />
        </motion.div>
      </div>

      {/* ✅ Popup Modal */}
      {/* <AnimatePresence>
        {showPopup && (
          <motion.div
           onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide} 
          
            className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl p-6 sm:p-8 w-[90%] max-w-md shadow-lg relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                onClick={() => setShowPopup(false)}
              >
                <X size={20} />
              </button>
              <h3 className="text-xl font-bold mb-4 text-blue-800">Outcomes</h3>

              <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                {currentTestimonial.outcomes?.map((outcome, i) => (
                  <li
                    key={i}
                    onClick={() => {
                      if (outcome.type === "link") {
                        navigate(outcome.value);
                        setShowPopup(false);
                      } else if (outcome.type === "image") {
                        window.open(outcome.value, "_blank");
                      }
                    }}
                    className="flex items-center justify-between cursor-pointer hover:bg-blue-50 p-2 rounded-md border border-transparent hover:border-blue-200 transition"
                  >
                    <span>{outcome.label}</span>
                    {outcome.type === "link" ? (
                      <ChevronRight size={16} className="text-blue-700" />
                    ) : (
                      <img
                        src={outcome.value}
                        alt={outcome.label}
                        className="w-6 h-6 rounded object-cover"
                      />
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
      {/* Mobile Floating Arrows */}
      <div className="xl:hidden absolute top-1/2 left-4 right-4 flex justify-between items-center -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-800 text-white shadow-md hover:bg-blue-700"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-800 text-white shadow-md hover:bg-blue-700"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
