const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen lg:h-[690px] flex flex-col lg:block px-4 lg:px-0">
      {/* DMIF Logo - Hidden on mobile, visible on desktop */}
      <img
        src="/HOME/logo.svg"
        alt="DMIF Logo"
        className="hidden lg:block absolute w-[200px] xl:w-[320px] h-[200px] xl:h-[320px] left-4 xl:left-[120px] top-4 xl:top-[85px] object-contain"
      />

      {/* Dr. Madhan Image - Hidden on mobile, visible on desktop */}
      <img
        src="/HOME/MadhanSir.svg"
        alt="Dr. Madhan Kumar Srinivasan"
        className="hidden lg:block absolute w-[150px] xl:w-[200px] h-[225px] xl:h-[300px] right-4 xl:right-[231px] top-4 xl:top-[92px] object-contain opacity-[0.86]"
      />

      {/* Central Content */}
      <div className="flex flex-col items-center gap-5 lg:gap-[30px] w-full max-w-[573px] mx-auto pt-8 lg:absolute lg:left-1/2 lg:top-[40px] lg:-translate-x-1/2 lg:w-[573px] lg:h-[264px]">
        {/* Students Badge */}
        <div className="flex flex-row items-center gap-2 lg:gap-[11px] w-full max-w-[307px] h-[40px]">
          {/* Avatar Group */}
          <div className="flex flex-row items-center w-[100px] lg:w-[121px] h-[40px]">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-[30px] lg:w-[37px] h-[32px] lg:h-[40px] rounded-full object-cover border-2 border-white z-10"
            />
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              className="w-[30px] lg:w-[37px] h-[32px] lg:h-[40px] rounded-full object-cover border-2 border-white -ml-[8px] lg:-ml-[9px] z-9"
            />
            <img
              src="https://randomuser.me/api/portraits/men/65.jpg"
              className="w-[30px] lg:w-[37px] h-[32px] lg:h-[40px] rounded-full object-cover border-2 border-white -ml-[8px] lg:-ml-[9px] z-8"
            />
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              className="w-[30px] lg:w-[37px] h-[32px] lg:h-[40px] rounded-full object-cover border-2 border-white -ml-[8px] lg:-ml-[9px] z-7"
            />
          </div>

          {/* Badge Text */}
          <div className="font-medium text-sm lg:text-[15px] leading-[37px] flex items-center tracking-[0.0417847px] text-black">
            50+ students Outcomes
          </div>
        </div>

        {/* Title Section */}
        <div className="flex flex-col justify-center items-center gap-3 lg:gap-[12px] w-full text-center">
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-[60px] leading-tight tracking-wide">
            <span className="text-[#7F0001]">Dr. Madhan</span> <br />
            <span className="text-[#003579]">Institute of Future</span>
          </h1>

          {/* Subtitle */}
          <p className="w-full max-w-[595px] font-normal text-xs sm:text-sm lg:text-[14px] leading-4 lg:leading-[18px] text-center tracking-[0.4px] uppercase text-[#4C4C4C] px-4 lg:px-0">
            Don't teach. Mentor the Mind. Shape the Future. Don't teach. Mentor
            the Mind. Shape the Future. Don't teach. Mentor.
          </p>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto mt-8 lg:mt-0 lg:absolute lg:left-1/2 lg:top-[380px] lg:-translate-x-1/2 bg-[#25262A] rounded-2xl lg:rounded-[44px] p-4 sm:p-6 lg:p-[40px] flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Left Join Learners Card */}
        <div className="flex flex-row items-center justify-between w-full lg:w-[420px] h-[100px] lg:h-[117px] bg-[#003579] rounded-2xl lg:rounded-[35px] px-6">
          <div className="flex flex-col justify-center">
            <h3 className="font-bold text-lg lg:text-[22px] leading-6 text-white">
              Join 50K+ Learners
            </h3>
            <p className="font-normal text-sm lg:text-[16px] leading-5 capitalize text-white mt-1">
              This is my website
            </p>
          </div>
          <div className="w-[65px] lg:w-[85px] h-[65px] lg:h-[85px] bg-white rounded-xl lg:rounded-[28px] flex items-center justify-center">
            {/* Add an icon if needed */}
          </div>
        </div>

        {/* Right Stats Cards */}
        <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 w-full lg:flex-1">
          {/* 50K+ */}
          <div className="flex flex-col justify-center items-center w-full sm:w-1/3 lg:w-[230px] h-[100px] lg:h-[117px] bg-white rounded-2xl lg:rounded-[35px] p-4">
            <h3 className="font-bold text-2xl lg:text-[30px] text-[#25262A]">
              50K+
            </h3>
            <p className="text-base lg:text-[18px] text-[#2B2B2B] mt-1">
              Global Learners
            </p>
          </div>

          {/* 500+ */}
          <div className="flex flex-col justify-center items-center w-full sm:w-1/3 lg:w-[230px] h-[100px] lg:h-[117px] bg-white rounded-2xl lg:rounded-[35px] p-4">
            <h3 className="font-bold text-2xl lg:text-[30px] text-[#25262A]">
              500+
            </h3>
            <p className="text-base lg:text-[18px] text-[#2B2B2B] mt-1">
              Innovative Projects
            </p>
          </div>

          {/* 100+ */}
          <div className="flex flex-col justify-center items-center w-full sm:w-1/3 lg:w-[230px] h-[100px] lg:h-[117px] bg-white rounded-2xl lg:rounded-[35px] p-4">
            <h3 className="font-bold text-2xl lg:text-[30px] text-[#25262A]">
              100+
            </h3>
            <p className="text-base lg:text-[18px] text-[#2B2B2B] mt-1">
              Mentorship Expert
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
