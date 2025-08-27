const HeroSection = () => {
  return (
    <section className="relative w-[1536px] h-[690px] flex-none order-1 self-stretch">
      {/* DMIF Logo - SVG only, no background */}
      <img
        src="/HOME/logo.svg"
        alt="DMIF Logo"
        className="absolute w-[320px] h-[320px] left-[120px] top-[60px] object-contain"
      />

      {/* Dr. Madhan Image - SVG only, no background */}
      <img
        src="/HOME/MadhanSir.svg"
        alt="Dr. Madhan Kumar Srinivasan"
        className="absolute w-[200px] h-[300px] left-[1105px] top-[87px] object-contain opacity-[0.86]"
      />

      {/* Central Content - Frame 1000004510 */}
      <div className="absolute flex flex-col items-center gap-[60px] w-[573px] h-[264px] left-[502px] top-[59px]">
        {/* Students Badge - Frame 1000004507 */}
        <div className="flex flex-row items-start gap-[11px] w-[307px] h-[40px] flex-none order-0">
          {/* Avatar Group - Frame 1000004506 */}
          <div className="flex flex-row items-center w-[121px] h-[40px] flex-none order-0">
            {/* Avatar 1 */}
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Student 1"
              className="w-[37px] h-[40px] rounded-full object-cover border-2 border-white -ml-[9px]"
              style={{ zIndex: 4 }}
            />
            {/* Avatar 2 */}
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Student 2"
              className="w-[37px] h-[40px] rounded-full object-cover border-2 border-white -ml-[9px]"
              style={{ zIndex: 3 }}
            />
            {/* Avatar 3 */}
            <img
              src="https://randomuser.me/api/portraits/men/65.jpg"
              alt="Student 3"
              className="w-[37px] h-[40px] rounded-full object-cover border-2 border-white -ml-[9px]"
              style={{ zIndex: 2 }}
            />
            {/* Avatar 4 */}
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="Student 4"
              className="w-[37px] h-[40px] rounded-full object-cover border-2 border-white -ml-[9px]"
              style={{ zIndex: 1 }}
            />
          </div>
          {/* Badge Text - 50+ students Outcomes */}
          <div className="w-[175px] h-[37px] font-medium text-[15px] leading-[37px] flex items-center tracking-[0.0417847px] text-black flex-none order-1">
            50+ students Outcomes
          </div>
        </div>

        {/* Title Section - Frame 1000004509 */}
        <div className="flex flex-col justify-center items-center gap-[12px] w-[595px] h-[182px] flex-none order-1">
          
          {/* Main Title - Dr. Madhan Institute of Future */}
          <h1 className="w-[595px] h-[116px] font-bold text-[64px] leading-[58px] flex items-center text-center tracking-[0.0417847px] text-[#7F0001] flex-none order-0 self-stretch">
            Dr. Madhan Institute of Future
          </h1>
          
          {/* Subtitle */}
          <p className="w-[595px] h-[54px] font-normal text-[14px] leading-[18px] text-center tracking-[0.4px] uppercase text-[#4C4C4C] flex-none order-1 self-stretch">
            Don't teach. Mentor the Mind. Shape the Future. Don't teach. Mentor the Mind. Shape the Future.Don't teach. Mentor.
          </p>
        </div>
      </div>

      {/* Stats Container - Frame 1000004511 */}
      <div className="absolute flex flex-col items-start p-[53px_65px] gap-[10px] w-[1392px] h-[223px] left-[81px] top-[380px] bg-[#25262A] rounded-[44px]">
        
        {/* Stats Row - Frame 1000004521 */}
        <div className="flex flex-row items-start gap-[63px] w-[1290px] h-[117px] flex-none order-0">
          
          {/* Join Learners Card - Frame 1000004512 */}
          <div className="flex flex-row items-center w-[394px] h-[117px] bg-[#003579] rounded-[35px] flex-none order-0 self-stretch relative pl-[0px] pr-[18px]">
            {/* Text Content - Frame 1000004517 */}
            <div className="flex flex-col justify-center items-center w-[230px] h-[48px] flex-none order-0 flex-grow ml-[24px]">
              {/* Join Text */}
              <h3 className="w-full h-[24px] font-bold text-[24px] leading-[24px] flex items-center text-left tracking-[0.0417847px] text-white flex-none order-0">
                Join 50K+ Learners
              </h3>
              {/* Subtitle */}
              <p className="w-full h-[24px] font-normal text-[16px] leading-[24px] flex items-center text-left tracking-[-0.008em] capitalize text-white flex-none order-1">
                This is my website
              </p>
            </div>
            {/* Icon Container - Frame 1000004516 */}
            <div className="flex flex-col items-start p-[10px] gap-[10px] w-[100px] h-[100px] bg-white rounded-[28px] flex-none order-1 absolute right-[18px] top-1/2 -translate-y-1/2">
            </div>
          </div>

          {/* Stats Cards Container - Frame 1000004522 */}
          <div className="flex flex-row items-center gap-[37px] w-[833px] h-[117px] flex-none order-1 self-stretch">
            
            {/* 50K+ Card - Frame 1000004513 */}
            <div className="flex flex-col justify-between items-center gap-[44px] w-[253px] h-[117px] bg-white rounded-[35px] flex-none order-0 self-stretch">
              <div className="flex flex-col justify-center items-center gap-[14px] w-[253px] h-[117px] flex-none order-0 self-stretch flex-grow">
                <div className="flex flex-col items-center gap-[1px] w-[147px] h-[86px] flex-none order-0">
                  
                  {/* 50K+ Number */}
                  <h3 className="w-[86px] h-[37px] font-bold text-[32px] leading-[37px] flex items-center tracking-[0.0417847px] text-[#25262A] flex-none order-0">
                    50K+
                  </h3>
                  
                  {/* Global Learners */}
                  <p className="w-[147px] h-[48px] font-normal text-[20px] leading-[48px] flex items-center text-center tracking-[-0.008em] capitalize text-[#2B2B2B] flex-none order-1">
                    Global Learners
                  </p>
                </div>
              </div>
            </div>

            {/* 500+ Card - Frame 1000004519 */}
            <div className="flex flex-col justify-between items-center gap-[44px] w-[253px] h-[117px] bg-white rounded-[35px] flex-none order-1 self-stretch">
              <div className="flex flex-col justify-center items-center gap-[14px] w-[253px] h-[117px] flex-none order-0 self-stretch flex-grow">
                <div className="flex flex-col items-center gap-[1px] w-[177px] h-[86px] flex-none order-0">
                  
                  {/* 500+ Number */}
                  <h3 className="w-[87px] h-[37px] font-bold text-[32px] leading-[37px] flex items-center tracking-[0.0417847px] text-[#25262A] flex-none order-0">
                    500+
                  </h3>
                  
                  {/* Innovative Projects */}
                  <p className="w-[177px] h-[48px] font-normal text-[20px] leading-[48px] flex items-center text-center tracking-[-0.008em] capitalize text-[#2B2B2B] flex-none order-1">
                    Innovative Projects
                  </p>
                </div>
              </div>
            </div>

            {/* 100+ Card - Frame 1000004520 */}
            <div className="flex flex-col justify-between items-center gap-[44px] w-[253px] h-[117px] bg-white rounded-[35px] flex-none order-2 self-stretch">
              <div className="flex flex-col justify-center items-center gap-[14px] w-[253px] h-[117px] flex-none order-0 self-stretch flex-grow">
                <div className="flex flex-col items-center gap-[1px] w-[172px] h-[86px] flex-none order-0">
                  
                  {/* 100+ Number */}
                  <h3 className="w-[82px] h-[37px] font-bold text-[32px] leading-[37px] flex items-center tracking-[0.0417847px] text-[#25262A] flex-none order-0">
                    100+
                  </h3>
                  
                  {/* Mentorship Expert */}
                  <p className="w-[172px] h-[48px] font-normal text-[20px] leading-[48px] flex items-center text-center tracking-[-0.008em] capitalize text-[#2B2B2B] flex-none order-1">
                    Mentorship Expert
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
