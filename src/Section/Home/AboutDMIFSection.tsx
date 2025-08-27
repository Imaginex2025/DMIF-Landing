const AboutDMIFSection = () => {
  return (
    <section className="w-full bg-[#F9FBFD] py-[165px] px-[88px]">
      <div className="max-w-[1366px] mx-auto flex items-center justify-center gap-[82px]">
        {/* Left Content */}
        <div className="flex flex-col gap-[27px] w/[525px]">
          <h2 className="font-semibold text-[38px] leading-[48px] text-[#003579] tracking-[-0.01em]">
            About DMIF
          </h2>
          <p className="font-medium text-[14px] leading-[32px] text-[#404040] w-full">
            Dr. Madhan Institute of Future (DMIF) is a next-generation mentorship platform where students learn by creating, not memorizing. 
            <br /><br />
            From Day 1, learners dive into real-world innovation and research, gaining outcomes like patents, publications, and startup-ready ideas.Dr. Madhan Institute of Future (DMIF) is a next-generation mentorship platform where students learn by creating, not memorizing. 
            <br /><br />
            From Day 1, learners dive into real-world innovation and research, gaining outcomes like patents, publications, and startup-ready ideas.
          </p>
          <button className="w-[262px] h-[40px] bg-[#003579] rounded-[4px] flex items-center justify-center">
            <span className="font-bold text-[14px] leading-[18px] text-white tracking-[0.3px]">
              Learn More
            </span>
          </button>
        </div>

        {/* Divider */}
        <div className="w-px h/[412px] bg-[#D2E0EA]"></div>

        {/* Right Content - Feature Cards */}
        <div className="flex flex-col gap-[40px] w/[664px]">
          {/* Top Row */}
          <div className="flex gap/[41px]">
            {/* Facilities Card */}
            <div className="bg-white rounded-[5px] shadow-[0px_4px_10px_rgba(0,0,0,0.05)] p/[16px_22px] w/[311px] h/[250px]">
              <div className="flex flex-col gap/[24px] h/full">
                <div className="flex flex-col gap/[11px]">
                  <div className="w/[70px] h/[70px] bg-white rounded-full shadow/[0px_4px_16.5px_rgba(0,0,0,0.15)] flex items-center justify-center">
                    <div className="w/[36px] h/[36px] bg-gray-300 rounded flex items-center justify-center">
                      <span className="text-xs text-gray-500">Icon</span>
                    </div>
                  </div>
                  <h3 className="font-bold text/[20px] leading/[24px] text-[#0C101A] tracking/[0.3px]">
                    Facilities
                  </h3>
                </div>
                <p className="font-medium text/[12px] leading/[24px] text-[#404040] flex-1">
                  Live mentorship sessions, research and patent toolkits, and guided documentation support for innovation outcomes.
                </p>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded/[5px] shadow/[0px_4px_10px_rgba(0,0,0,0.05)] p/[21px] w/[311px] h/[250px]">
              <div className="flex flex-col gap/[24px] h/full">
                <div className="flex flex-col gap/[12px]">
                  <div className="w/[70px] h/[70px] bg-white rounded-full shadow/[0px_10px_20px_rgba(0,0,0,0.04)] flex items-center justify-center">
                    <div className="w/[36px] h/[36px] bg-gray-300 rounded flex items-center justify-center">
                      <span className="text-xs text-gray-500">Map</span>
                    </div>
                  </div>
                  <h3 className="font-bold text/[20px] leading/[24px] text-[#0C101A] tracking/[0.3px]">
                    Location
                  </h3>
                </div>
                <p className="font-medium text/[12px] leading/[24px] text-[#404040] flex-1">
                  Fully online with global reach — open to students from India, the US, Europe, and beyond.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex gap/[41px]">
            {/* History Card */}
            <div className="bg-white rounded/[5px] shadow/[0px_4px_10px_rgba(0,0,0,0.05)] p/[20px_4px] w/[311px] h/[250px] flex items-center justify-center">
              <div className="flex flex-col gap/[24px] w/[269px]">
                <div className="flex flex-col gap/[12px]">
                  <div className="w/[70px] h/[70px] bg-white rounded-full shadow/[0px_4px_16.5px_rgba(0,0,0,0.15)] flex items-center justify-center">
                    <div className="w/[31px] h/[31px] bg-gray-300 rounded flex items-center justify-center">
                      <span className="text-xs text-gray-500">Hist</span>
                    </div>
                  </div>
                  <h3 className="font-bold text/[20px] leading/[24px] text-[#0C101A] tracking/[0.3px]">
                    History
                  </h3>
                </div>
                <p className="font-medium text/[12px] leading/[24px] text-[#404040]">
                  Founded by Dr. Madhan Kumar Srinivasan, holder of 127 patents and 30+ global publications.
                </p>
              </div>
            </div>

            {/* Achievements Card */}
            <div className="bg-white rounded/[5px] shadow/[0px_4px_10px_rgba(0,0,0,0.05)] p/[11px_17px] w/[311px] h/[250px]">
              <div className="flex flex-col gap/[24px] h/full">
                <div className="flex flex-col gap/[12px]">
                  <div className="w/[70px] h/[70px] bg-white rounded-full shadow/[0px_4px_16.5px_rgba(0,0,0,0.15)] flex items-center justify-center">
                    <div className="w/[41px] h/[41px] bg-gray-300 rounded flex items-center justify-center">
                      <span className="text-xs text-gray-500">Ach</span>
                    </div>
                  </div>
                  <h3 className="font-bold text/[20px] leading/[24px] text-[#0C101A] tracking/[0.3px]">
                    Achievements
                  </h3>
                </div>
                <p className="font-medium text/[12px] leading/[24px] text-[#404040] flex-1">
                  DMIF learners have published in IEEE, Springer, ACM, filed patents, and built strong portfolios for Ivy League admissions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDMIFSection;
