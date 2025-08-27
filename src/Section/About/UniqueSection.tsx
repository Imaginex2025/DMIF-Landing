import IconButton from '../../Components/Common/Button';

const UniqueSection = () => {
  return (
    <section className="py-20 px-6 bg-[#F9FBFD]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-start gap-28">
        {/* Left Content */}
        <div className="flex flex-col items-start gap-6 max-w-lg">
          <h2 className="text-4xl font-semibold text-black leading-tight font-sans">
            What Makes DMIF Unique
          </h2>
          <p className="text-base font-normal text-[#4E5566] leading-6 text-justify font-sans">
            The Dr. Madhan Institute of Future (DMIF) is unique because it goes beyond classroom learning by focusing on patents, research, and innovation-driven outcomes. With direct mentorship from Dr. Madhan, students gain hands-on guidance in filing patents, publishing research, and building global exposure. Unlike traditional programs, DMIF ensures students graduate with tangible achievements that open doors to higher studies, international careers, and entrepreneurship, while also boosting institutional rankings and reputation.
          </p>
          
          {/* Apply Now Button */}
          <div className="pt-6">
            <IconButton
              label="Apply Now"
              onClick={() => {
                window.location.href = '/contact';
              }}
              className="bg-[#003579] hover:bg-blue-800 px-6 py-3 text-base font-semibold flex items-center gap-3 font-sans"
              icon={
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
              iconPosition="right"
            />
          </div>
        </div>
        
        {/* Right Content - Group Image */}
        <div className="flex justify-center w-full max-w-2xl">
          <img
            src="/About/group.svg"
            alt="What Makes DMIF Unique"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default UniqueSection;
