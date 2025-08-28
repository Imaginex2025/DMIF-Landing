import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import IconButton from "../../Components/Common/Button";

const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showFull, setShowFull] = useState(false);

  // ✅ All data lives here
  const testimonials = [
    {
      id: 1,
      name: "Vijaya Tapaswi Achanta",
      position: "DevOps Consultant, Accenture (While working with me) | Vice President, Wells Fargo (Current)",
      text: `Dr.Madhan has been a true inspiration to build the research acumen and to ignite the passion to innovate. I got an opportunity to work under his leadership in Accenture where I started my journey as an inventor.\n\nAs a devops cloud engineer, I never had exposure in the field of research and inventions. Dr. Madhan has identified my passion in innovation and gave me an opportunity to ideate on unique cloud architectural frameworks hosting complex data analytic solutions. It's been a great learning under his leadership to be able to pursue the ideation in the right path.\n\nSuccessfully accomplished 6 patents as an inventor with grants received from multiple global regions under his leadership. His vast knowledge & expertise has helped sail through many challenges encountered during the patenting process.\n\nIt is a commendable cause by Dr. Madhan to launch Dr. Madhan institute for future (DMIF) which will immensely help many aspiring students for the larger goal of nurturing the future inventors & entrepreneurs. Above all, his humble and approachable attitude will empower students to create the research papers & patents on their own under his guidance.\n\nWishing all the best to all the aspiring students & to Dr. Madhan for being a role model to many of us.`,
      image: "/Testimonials/Vijaya Tapaswi Achanta.jpg",
    },
    {
      id: 2,
      name: "Guruprasad P V",
      position: "Distinguished Engineer, Zensar",
      text: `Some mentors teach. A rare few ignite a spark that fuels a lifetime of innovation — and Dr. Madhan is undoubtedly the latter. Working with Dr. Madhan has been one of the most intellectually fulfilling experiences of my career. Thanks to his unwavering belief in me, I had the privilege of being a co-innovator in over 20 patents. He didn’t just see potential — he nurtured it, challenged it, and led it to flourish. His ability to guide, inspire, and push boundaries makes him a true catalyst for innovation. His mentorship is a rare combination of vision, rigor, and empathy, and I'm certain DMIF will be a game-changer for aspiring scholars and researchers.`,
      image: "/Testimonials/Guruprasad P V.jpg",
    },
    {
      id: 3,
      name: "Varun Mittal",
      position: "BSc Computer Science, Minor in Statistics, UIUC, Chicago, USA (While doing the program) | Software Engineer, Walmart, USA (Current)",
      text: `I am incredibly grateful to Dr. Madhan for his invaluable assistance and guidance throughout the process of completing my research paper. His mentorship was truly exceptional, providing not just direction but also fostering a deep understanding of the subject matter.\n\nDr. Madhan's commitment was evident in his comprehensive knowledge sessions, which were instrumental in clarifying complex concepts and refining our approach. What truly set his support apart was his dedicated assignment of time, even extending to weekends, to meticulously track progress, delve into additional research, and ensure every aspect of the paper was thoroughly addressed. This level of commitment significantly accelerated our work and elevated the quality of the final output.\n\nHis rich background and extensive experience with research papers, coupled with being the inventor of over 125 patents, provided an unparalleled depth of insight and practical advice. Beyond the paper itself, Dr. Madhan's foresight and expertise have led to ongoing discussions about completing a patent based on our research findings. This speaks volumes about his vision and his ability to identify and nurture impactful work.\n\nDr. Madhan's Institute of Future is a great initiative that will undoubtedly produce many future innovators, creators, and thinkers.`,
      image: "/Testimonials/Varun Mittal.jpg",
    },
    {
      id: 4,
      name: "Kishore Kumar Gajula",
      position: "Cloud Advisory Consultant, Accenture",
      text: `Over a decade at Accenture, I had the privilege of spending more than half that time working closely with Madhan—an experience that shaped both my career and character. He welcomed me during a difficult professional period, overlooking past biases and believing in my potential when few others did. That trust opened doors to transformative work, including my first steps into the world of intellectual property and patents. When I needed to move back home to support my family, he extended full remote flexibility—long before it became common. He also championed my academic aspirations, going out of his way to secure funding for me to present at an international conference, even though it lay outside our immediate scope of work. What always stood out was not just his deep technical acumen—rooted in his PhD in cloud computing and his strong grip on big data and analytics—but also his ability to build diverse, high-performing teams. I worked alongside colleagues from neuroscience, business, and physics—testament to his belief in cross-disciplinary innovation. As he steps into his new entrepreneurial and educational venture, it feels like a natural evolution—one that aligns perfectly with his vision and values. His ambition to blend AR, VR, AI, and Cloud to redefine the future of education is inspiring. I have no doubt his efforts will leave a lasting impact—not just on learners, but on society at large. Wishing him all the success he truly deserves.`,
      image: "/Testimonials/Kishore Kumar Gajula .jpg",
    },
    {
      id: 6,
      name: "Gagan Deep Khosla",
      position: "Senior Manager, Accenture",
      text: `Working with Dr. Madhan Srinivasan on our patent application was a transformative experience. From the very beginning, he brought remarkable clarity and direction to the process — recommending the ideal format, enriching the application with his deep technical expertise, and guiding every step with precision and insight.\n\nWhat truly stood out was his ability to translate complex ideas into a robust, compelling patent draft that not only reflected the innovation accurately but also anticipated and addressed potential challenges. Thanks to his meticulous approach and nuanced understanding of patenting, the application sailed through the review process and was granted without any hurdles.\n\nDr. Madhan's contribution was instrumental, and I wholeheartedly recommend his services to anyone looking to secure their innovations with confidence and quality.`,
      image: "/Testimonials/Gagan Deep Khosla.jpg",
    },
    {
      id: 7,
      name: "Dhruv Mittal",
      position: "BS in Data Science, University of California San Diego, USA",
      text: `I am currently working with Dr. Madhan Institute of Future on a research paper focused on developing security taxonomies for cloud computing systems. What began as a rough idea has now grown into a structured academic project, thanks to Dr. Madhan’s support and strategic guidance. His ability to connect high-level research themes with real-world security challenges has been critical in giving direction to this work. DMIF’s support has been a key factor in transforming this project into a meaningful contribution to the cloud security domain.`,
      image: "/Testimonials/Dhruv Mittal.png",
    },
    {
      id: 9,
      name: "Dr.Sreekumar Vobugari",
      position: "Senior Principal Consultant, Infosys",
      text: `My professional collaboration with Dr. Madhan Kumar Srinivasan, CEO of Wise Work in Bangalore, can be best narrated through our shared commitment to advancing knowledge in the field of Information Technology. My association with Dr.Madhan is clearly reflected in our co-authorship of several academic research papers.\nOur work, found in publications from international conferences and journals, demonstrates a strong synergy between our areas of expertise. Together, we have explored topics such as:\n• Enterprise Architecture: Co-authoring a "Roadmap for building effective complex enterprise architecture in digital transformation," they've shared an industry-based perspective on best practices.\n• Cloud Computing: Their research has delved into "improved performance-centric cloud storage estimation" and other critical aspects of cloud environments.\n• Data Systems: They have also collaborated on papers related to software systems performance improvements and the intricacies of data retrieval processes.\nThis body of work suggests a productive and complementary professional relationship, where both of us have contributed our knowledge to produce impactful research. \nBeyond our collaboration in research work, Madhan was part of my team at Infosys for nearly 5 years and his tenacity and commitment towards work is worth emulating. Coming from a modest family background, Madhan works very hard and his commitment and focus towards client’s expectations is unwavering.\nI am glad to be associated with Madhan and seeing him to be one of the very few individuals across the globe having more than 90+ approved patents in the field of Cloud and Machine Learning. This is really incredible and I am sure Madhan is capable of building world class products and services making India proud.\nMy best wishes for Dr Madhan and his family for their future endeavors.`,
      image: "",
    },
    {
      id: 8,
      name: "Abdul Hammed Sheik",
      position: "Senior Manager, Accenture | Designation - Tech Architecture Senior Manager",
      text: `It was a truly enriching experience collaborating with Madhan during his tenure at Accenture.\nWhen it comes to mentorship in the area of patent filing, I could speak at length about his contributions—but I’ll attempt to capture the essence here. Coming from a core Cloud and Infrastructure background, my focus over the past eight years has shifted toward leading enterprise automation and AI/Analytics initiatives across various business portfolios. Like many others in the infrastructure space, my efforts had primarily centered around building scalable products and driving adoption—considered key success metrics in our field.\nIt wasn’t until I met Madhan that I truly understood the significance and potential of patenting innovative ideas. He introduced me to the world of intellectual property and helped me recognize the impact that patents can create—not just in the corporate landscape, but also in society at large.\nMadhan’s mentorship was instrumental in shaping my approach toward identifying and articulating unique, value-driven ideas. His motivation, support, and deep knowledge made the entire patent filing journey seamless for me. With his guidance, I was able to file multiple patents—one of which was officially granted in April 2024, with others currently in progress.\nMadhan’s mastery in the patenting process, combined with his strong domain expertise in IT and product development, truly makes him a “Patent Guru”—or as I often say, a walking Wikipedia on the subject.\nHaving closely witnessed his transition from a successful IT professional to a visionary entrepreneur in the AI/GenAI space, I am both inspired and confident in his journey ahead. I wish him continued success in all his endeavors and sincerely hope to collaborate again on more innovative patent opportunities—should his time allow.`,
      image: "/Testimonials/Abdul Hammed Sheik .jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const currentTestimonial = testimonials[currentSlide];
  const prevTestimonial =
    testimonials[
      (currentSlide - 1 + testimonials.length) % testimonials.length
    ];
  const nextTestimonial =
    testimonials[(currentSlide + 1) % testimonials.length];

  // Determine if the testimonial text is long
  const isLongText = currentTestimonial.text.split('\n').join(' ').length > 400;

  return (
    <div className={`relative py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 ${showFull ? 'min-h-[750px]' : 'min-h-[600px]'} overflow-hidden transition-all duration-300`}>
      {/* Background Title */}
<div className="relative inset-0 flex items-center justify-between mb-8">
    <div>
        
    </div>
  {/* Centered Text */}
  <h1
    className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-transparent uppercase tracking-widest select-none text-center"
    style={{
      WebkitTextStroke: "0.5px gray",
    }}
  >
    Testimonials
  </h1>

  {/* Image in Right Corner */}
  <img
    src="/Testimonial.png"
    className="opacity-30 w-16 sm:w-24 md:w-32 lg:max-w-sm"
    alt="Testimonials"
  />
</div>

      {/* Carousel Container */}
      <div className="relative z-10 flex-col flex px-2 sm:px-4 md:px-8 lg:px-30">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-2 items-center justify-center min-h-[400px]">
          {/* Left Side Image (Previous) - Hidden on mobile/tablet */}
          <div className="hidden xl:flex flex-col gap-4 items-end w-48 h-64 mr-8">
            <img
              src={prevTestimonial.image}
              alt={prevTestimonial.name}
              className="w-full h-full object-cover opacity-40 shadow-lg rounded-lg"
            />
            <IconButton
              label="Previous"
              onClick={prevSlide}
              icon={<ChevronLeft size={24} />}
              className="bg-blue-800 hover:bg-blue-700 text-white p-4 rounded-none transition-colors duration-300 mr-8 z-20"
            />
          </div>

          {/* Mobile/Tablet Navigation Buttons */}
          <div className="xl:hidden flex justify-between w-full mb-4">
            <IconButton
              label="Previous"
              onClick={prevSlide}
              icon={<ChevronLeft size={20} />}
              className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
            />
            <IconButton
              label="Next"
              onClick={nextSlide}
              icon={<ChevronRight size={20} />}
              className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
            />
          </div>

          {/* Center Content */}
          <div className="flex items-center justify-center flex-1 relative">
            <div
              className={`rounded-lg p-4 sm:p-6 md:p-8 w-full max-w-4xl mx-auto flex flex-col lg:flex-row items-center lg:items-start min-h-[300px] transition-all duration-300 relative bg-white shadow-md ${showFull ? 'min-h-[400px]' : ''}`}
              style={{
                width: showFull ? (window.innerWidth < 768 ? '95%' : '900px') : (window.innerWidth < 768 ? '90%' : '700px'),
                maxWidth: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            >
              {/* Current Person Image */}
              <div className="w-full lg:w-88 h-64 sm:h-80 lg:h-104 mb-6 lg:mb-0 lg:mr-8 flex-shrink-0">
                {currentTestimonial.image ? (
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-lg sm:text-xl">
                    No Image
                  </div>
                )}
              </div>

              {/* Text Content */}
              <div className="flex-1 flex flex-col justify-between h-full w-full lg:w-auto">
                <div>
                  <p
                    className={`text-gray-700 text-sm sm:text-[14px] leading-relaxed mb-4 sm:mb-6 transition-all duration-300 ${!showFull && isLongText ? 'line-clamp-7' : ''}`}
                    style={{ maxHeight: !showFull && isLongText ? '10.5em' : 'none', overflow: 'hidden' }}
                  >
                    {currentTestimonial.text}
                  </p>
                  {isLongText && (
                    <button
                      className="text-blue-800 font-semibold text-sm focus:outline-none hover:underline mb-4"
                      onClick={() => setShowFull((prev) => !prev)}
                    >
                      {showFull ? 'Show less' : 'Show more'}
                    </button>
                  )}
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-gray-900 mb-1">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-xs sm:text-[12px] text-gray-600">
                    {currentTestimonial.position}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Image (Next) - Hidden on mobile/tablet */}
          <div className="hidden xl:flex flex-col gap-4 items-end h-64">
            <img
              src={nextTestimonial.image}
              alt={nextTestimonial.name}
              className="w-full h-full object-cover opacity-40 rounded-lg shadow-lg"
            />
            <IconButton
              label="Next"
              onClick={nextSlide}
              icon={<ChevronRight size={24} />}
              className="bg-blue-800 hover:bg-blue-700 text-white p-4 rounded-none transition-colors duration-300 mr-8 z-20"
            />
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide
                  ? "bg-blue-800"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
