const OverviewSection = () => {
  return (
    <section className="py-12 px-8 ">
      {/* Order flips: column-reverse on mobile, row on large screens */}
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-14">
        
        {/* Left Content */}
        <div className="flex flex-col items-start gap-4 max-w-5xl w-full">
        <h1 className="heading text-left leading-tight">
            An Overview & Detailed Explanation.
        </h1>

          {/* Paragraphs */}
          <div className="space-y-3 text-justify leading-5">
            <p className="para">
              The Dr. Madhan Institute of Future (DMIF) is a national initiative
              founded by Dr. Madhan Kumar Srinivasan, an innovator with 127
              patents (96 granted), 30+ research papers, 11 book chapters, and
              global recognition as a TEDx speaker, serial entrepreneur,
              innovation advisor to the Government of India, and Professor of
              Practice at leading universities like VIT and SRM.
            </p>

            <p className="para">
              DMIF is dedicated to preparing India’s youth for the AI-driven
              creative economy, where success depends not only on technical
              knowledge but also on original thinking, creativity, and
              intellectual property (IP) creation. In an era where tools like
              ChatGPT and Generative AI can replicate and optimize but cannot
              truly originate, DMIF equips students to become inventors,
              researchers, entrepreneurs, and global innovators by guiding them
              through patent filing, scholarly publishing, and
              innovation-driven projects.
            </p>

            <p className="para">
              Through structured mentorship, weekly guidance sessions, and
              personalized feedback, students gain exposure to real-world
              innovation practices, IP development, and research methodology.
              This enables them to stand out in placement drives, access global
              research collaborations, strengthen higher education applications
              at IITs, IIMs, and international universities, and gain a clear
              advantage for overseas jobs, startup visas, and permanent
              residency pathways.
            </p>

            <p className="para">
              More than just a training program, DMIF builds a culture of
              innovation. Patents and research serve as global passports,
              unlocking opportunities for startup equity, licensing revenues,
              research fellowships, and skilled migration abroad. By
              collaborating with academic institutions, DMIF not only enables
              students to graduate with real IP ownership and publications, but
              also boosts institutional rankings (NIRF, NAAC, ARIIA), enhances
              faculty research culture, and strengthens the brand visibility of
              partner institutions. In doing so, DMIF plays a transformative
              role in shaping the next generation of Indian innovators and
              thought leaders.
            </p>
          </div>
        </div>

        {/* Right Content - DMIF Logo */}
        <div className="flex justify-center items-center lg:justify-start lg:items-start w-full lg:w-auto">
          <img
            src="/About/logo.svg"
            alt="DMIF Logo"
            className="w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
