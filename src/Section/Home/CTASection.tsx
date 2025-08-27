const CTASection = () => {
  return (
    <section className="w-full bg-[#F9F9F9] shadow-[inset_0px_-1px_0px_rgba(54,59,71,0.5)] py-[22px_112px_80px_106px]">
      <div className="max-w-[1315px] mx-auto flex items-center justify-between gap-[136px]">
        {/* Left Content */}
        <div className="flex flex-col gap-[40px] w-[515px]">
          <div className="flex flex-col gap-[34px]">
            <div className="flex flex-col gap-[24px]">
              <h2 className="font-semibold text-[38px] leading-[48px] text-[#003579] tracking-[-0.01em]">
                Start your journey with DMIF and make an impact
              </h2>
              <p className="font-normal text-[16px] leading-[24px] text-[#525252] w-[424px]">
                Become a part of DMIF's global community — Where learners dive into real-world innovation and research, gaining outcomes like patents, publications, and startup-ready ideas
              </p>
            </div>
            <button className="flex items-center justify-center bg-[#003579] px-[40px] w-[207px] h-[64px]">
              <span className="font-semibold text-[20px] leading-[64px] text-white tracking-[-0.01em] capitalize">
                Register Now
              </span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-[648px] h-[382px]">
          <div className="absolute w-[200px] h-[291px] bg-[#FF6636] left-[769px] top-[113px] transform -translate-x-[769px] translate-y-[-113px]"></div>
          <div className="absolute w-[424px] h-[382px] bg-[#FF6636] left-[993px] top-[22px] transform -translate-x-[993px] translate-y-[-22px]"></div>
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500">CTA Image Placeholder</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
