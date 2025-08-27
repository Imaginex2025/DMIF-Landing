import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import IconButton from "../../Components/Common/Button";

const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // ✅ All data lives here
  const testimonials = [
    {
      id: 1,
      name: "Carolyn Willms",
      position: "Global Accountability Officer",
      text: "Lorem ipsum dolor sit amet consectetur. Massa sed dapibus adipiscing felis at. Integer at dictum ullamcorper magna nam eget. Elementum semper ultrices quam elementum dignissim etiam velit molestie diam. Netus arcu varius lectus dignissim mollis lorem pulvinar tortor arcu.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "John Smith",
      position: "Senior Marketing Director",
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      position: "Chief Technology Officer",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Michael Brown",
      position: "Operations Manager",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:
        "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=300&h=400&fit=crop&crop=face",
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

  return (
    <div className="relative  py-20 px-6 min-h-[600px] overflow-hidden">
      {/* Background Title */}
<div className="relative inset-0 flex items-center justify-between">
    <div>
        
    </div>
  {/* Centered Text */}
  <h1
    className="text-8xl md:text-8xl font-extrabold text-transparent uppercase tracking-widest select-none text-center"
    style={{
      WebkitTextStroke: "0.5px gray",
    }}
  >
    Testimonials
  </h1>

  {/* Image in Right Corner */}
  <img
    src="/Testimonial.png"
    className="opacity-30 max-w-xs md:max-w-sm"
    alt="Testimonials"
  />
</div>

      {/* Carousel Container */}
      <div className="relative z-10 flex-col flex px-30 ">
        <div className="flex gap-2 items-center justify-center min-h-[400px]">
          {/* Left Side Image (Previous) */}
          <div className="hidden lg:flex flex-col gap-4 items-end lg:block w-48 h-64 mr-8">
            <img
              src={prevTestimonial.image}
              alt={prevTestimonial.name}
              className="w-full h-full object-cover opacity-40 shadow-lg"
            />
            <IconButton
              label="Previous"
              onClick={prevSlide}
              icon={<ChevronLeft size={24} />}
              className="bg-blue-800 hover:bg-blue-700 text-white p-4 rounded-none transition-colors duration-300 mr-8 z-20"
            />
          </div>

          {/* Center Content */}
          <div className="flex items-center justify-center flex-1 relative">
            <div className="rounded-lg p-8 max-w-2xl mx-4 flex items-center min-h-[300px]">
              {/* Current Person Image */}
              <div className="w-88 h-104 mr-8 flex-shrink-0">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <p className="text-gray-700 text-[14px] leading-relaxed mb-6 line-height-loose">
                  {currentTestimonial.text}
                </p>
                <div>
                  <h3 className="text-[32px] font-bold text-gray-900 mb-1">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-[12px] text-gray-600">
                    {currentTestimonial.position}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Image (Next) */}
          <div className="hidden lg:flex flex-col gap-4 items-end lg:block h-64">
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
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
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
