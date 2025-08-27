const OverviewSection = () => {
  return (
    <section className="py-12 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-14">
        {/* Left Content */}
        <div className="flex flex-col items-center gap-4 max-w-4xl">
          <h1 className="text-4xl font-semibold text-black text-left leading-tight font-sans">
            An Overview & Detailed Explanation.
          </h1>
          <div className="text-sm font-normal text-[#3A4E50] leading-[17px] text-justify font-sans">
            <p>
              The Dr. Madhan Institute of Future (DMIF) is a national initiative founded by Dr. Madhan Kumar Srinivasan, an innovator with 127 patents (96 granted), 30+ research papers, 11 book chapters, and global recognition as a TEDx speaker, serial entrepreneur, innovation advisor to the Government of India, and Professor of Practice at leading universities like VIT and SRM. DMIF is dedicated to preparing India's youth for the AI-driven creative economy, where success depends not only on technical knowledge but also on original thinking, creativity, and intellectual property (IP) creation. In an era where tools like ChatGPT and Generative AI can replicate and optimize but cannot truly originate, DMIF equips students to become inventors, researchers, entrepreneurs, and global innovators by guiding them through patent filing, scholarly publishing, and innovation-driven projects. Through structured mentorship, weekly guidance sessions, and personalized feedback, students gain exposure to real-world innovation practices, IP development, and research methodology. This enables them to stand out in placement drives, access global research collaborations, strengthen higher education applications at IITs, IIMs, and international universities, and gain a clear advantage for overseas jobs, startup visas, and permanent residency pathways. More than just a training program, DMIF builds a culture of innovation. Patents and research serve as global passports, unlocking opportunities for startup equity, licensing revenues, research fellowships, and skilled migration abroad. By collaborating with academic institutions, DMIF not only enables students to graduate with real IP ownership and publications, but also boosts institutional rankings (NIRF, NAAC, ARIIA), enhances faculty research culture, and strengthens the brand visibility of partner institutions. In doing so, DMIF plays a transformative role in shaping the next generation of Indian innovators and thought leaders.
            </p>
          </div>
        </div>
        
        {/* Right Content - DMIF Logo */}
        <div className="flex justify-center">
          <div className="w-96 h-96">
            <img
              src="/About/logo.svg"
              alt="DMIF Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
