const DrMadhanSection = () => {
  return (
    <section className="w-full py-[112px] px-[112px]">
      <div className="max-w-[1363px] mx-auto bg-white shadow-[0px_36px_105px_rgba(43,56,76,0.1)] rounded-[16px] p-[112px] flex items-center gap-[136px]">
        {/* Left - Image and Social */}
        <div className="relative w/[424px] h/[457px]">
          {/* Main Image */}
          <div className="w-[424px] h-[417px] bg-gray-200 rounded-[10px] border border-[#F0F1F3] flex items-center justify-center">
            <span className="text-gray-500">Dr. Madhan Photo Placeholder</span>
          </div>

          {/* Social Media Card */}
          <div className="absolute bottom-0 left-[59px] w-[268px] h-[79px] bg-white shadow-[0px_12px_64px_rgba(28,25,25,0.12)] rounded-[4px] flex items-center justify-center p-[12px] gap-[15px]">
            <div className="w-[48px] h-[48px] bg-[#003579] rounded-[4px] flex items-center justify-center">
              <div className="w-[18px] h-[18px] bg-white rounded"></div>
            </div>
            <div className="w-[48px] h-[48px] bg-white rounded-[4px] flex items-center justify-center">
              <div className="w/[18px] h/[18px] bg-[#003579] rounded"></div>
            </div>
            <div className="w-[48px] h-[48px] bg-white rounded-[4px] flex items-center justify-center">
              <div className="w/[18px] h/[18px] bg-gray-300 rounded"></div>
            </div>
            <div className="w/[48px] h/[48px] bg-white rounded-[4px] flex items-center justify-center">
              <div className="w/[18px] h/[18px] bg-[#003579] rounded"></div>
            </div>
            <div className="w/[52px] h/[52px] bg-white rounded-[4px] flex items-center justify-center">
              <div className="w/[22px] h/[22px] bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>

        {/* Right - Content */}
        <div className="flex flex-col gap-[32px] w/[626px]">
          <div className="flex flex-col gap-[15px]">
            <h2 className="font-semibold text-[38px] leading-[50px] text-[#003579] w-full">
              DR.MADHAN KUMAR SRINIVASAN
            </h2>
            <p className="font-normal text-[18px] leading-[24px] text-[#556070] w-full">
              Dr. Madhan Kumar Srinivasan, Ph.D., EPBA (IIM Calcutta), is a serial entrepreneur, innovator, Chief Mentor and professor with 22+ years of global experience in Cloud, AI, and Big Data. An Accenture Prolific Inventor, he holds 127 patents and 96 grants, many transformed into successful products across the US, UK, Europe, Singapore, and India. He is the Founder & CEO of ImagineX Innovations and Wise Work, and Co-founder of Hue Learn Singapore & Longer Life Tech, advising Fortune 500 companies, startups, and governments worldwide.
              <br /><br />
              A pioneer in India's cloud journey, he built the first private cloud at Infosys (2012) and created Accenture's Cloud AI business line, deploying its flagship Cloud AI product. Recognized as a 3x TEDx Speaker, Davos 2024 Invitee, and recipient of global awards including the Top 100 Scientists Award (IBC, Cambridge), Dr. Madhan continues to drive innovation, education, and entrepreneurship across industries and academia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrMadhanSection;
