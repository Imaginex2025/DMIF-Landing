import { motion } from "framer-motion";

const HeroSection = () => {
  const stats = [
  { value: "50K+", label: "Global Learners" },
  { value: "500+", label: "Innovative Projects" }, { value: "500+", label: "Innovative Projects" },
  { value: "100+", label: "Mentorship Experts" },
];
  return (
    <>
      {/* ✅ Mobile Hero (below md) */}
<section className="relative block md:hidden w-full min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-gray-50 overflow-hidden">
  {/* 🔹 Scrolling Background Logos */}
<div className="absolute inset-0 flex flex-col justify-center opacity-10 overflow-hidden space-y-12">
  {/* 🔹 Row 1 */}
  <motion.div
    className="flex"
    animate={{ x: ["0%", "-50%"] }}
    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
  >
    {[...Array(12)].map((_, i) => (
      <img
        key={i}
        src="/HOME/logo.svg"
        alt="DMIF Logo"
        className="w-32 h-32 mx-6"
      />
    ))}
  </motion.div>

  {/* Duplicate Row 1 for seamless loop */}


  {/* 🔹 Row 2 */}
  <motion.div
    className="flex"
    animate={{ x: ["0%", "-50%"] }}
    transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
  >
    {[...Array(12)].map((_, i) => (
      <img
        key={i}
        src="/HOME/logo.svg"
        alt="DMIF Logo"
        className="w-32 h-32 mx-6"
      />
    ))}
  </motion.div>

</div>



  {/* 🔹 Students Outcome */}
  <div className="flex items-center justify-start gap-2 z-10 mb-6">
<div className="flex -space-x-2">
  <img
    src="https://randomuser.me/api/portraits/men/32.jpg"
    alt="student1"
    className="w-8 h-8 rounded-full border"
  />
  <img
    src="https://randomuser.me/api/portraits/women/44.jpg"
    alt="student2"
    className="w-8 h-8 rounded-full border"
  />
  <img
    src="https://randomuser.me/api/portraits/men/65.jpg"
    alt="student3"
    className="w-8 h-8 rounded-full border"
  />
</div>

  <div>
      <p className="text-sm font-medium">50+ students Outcomes</p>
  </div>
  </div>

  {/* 🔹 Main Title & Tagline */}
  <div className="flex flex-col px-3 text-left">
<h1 className="text-[36px] font-bold leading-tight">
  <span className="text-[#A30000]">DR. Madhan</span> <br />
  <span className="text-[#003579]">Institute of Future</span>
</h1>

    <p className="para mt-2 z-10">
      Don’t teach. Mentor the Mind. Shape the Future. Inspire the Soul. 
      Empower the Journey. Unlock Potential.
    </p>
  </div>

  {/* 🔹 Madhan Sir Image */}
  <img
    src="/HOME/MadhanSir.svg"
    alt="Dr. Madhan Kumar Srinivasan"
    className="z-10 mt-6 -mb-13 transform scale-x-[-1] w-48"
  />

  {/* 🔹 Bottom 50K+ Experience Section */}
  <div className="bg-black text-white rounded-3xl z-20 w-full mt-10 py-8 px-6 grid grid-cols-2 gap-4 text-center">
   {stats.map((item) => (
    <div key={item.label} className="bg-white p-4 rounded-2xl text-center">
      <h3 className="text-xl text-black font-bold">{item.value}</h3>
      <p className="text-sm text-black">{item.label}</p>
    </div>
  ))}
  </div>
</section>


      {/* ✅ Desktop / Tablet Hero (md and above) */}
      <motion.section
        className="hidden md:flex relative w-full min-h-screen lg:h-[690px] flex-col lg:block px-2 sm:px-4 lg:px-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* DMIF Logo */}
        <motion.img
          src="/HOME/logo.svg"
          alt="DMIF Logo"
          className="hidden lg:block absolute w-[180px] xl:w-[320px] h-[180px] xl:h-[320px] left-2 xl:left-[120px] top-2 xl:top-[85px] object-contain"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />

        {/* Dr. Madhan Image */}
        <motion.img
          src="/HOME/MadhanSir.svg"
          alt="Dr. Madhan Kumar Srinivasan"
          className="hidden lg:block absolute w-[130px] xl:w-[200px] h-[195px] xl:h-[300px] right-2 xl:right-[231px] top-2 xl:top-[92px] object-contain opacity-[0.86]"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Central Content */}
        <div className="flex flex-col items-center gap-4 sm:gap-5 lg:gap-[30px] w-full max-w-[573px] mx-auto pt-6 sm:pt-8 lg:absolute lg:left-1/2 lg:top-[40px] lg:-translate-x-1/2 lg:w-[573px] lg:h-[264px] px-4 sm:px-0">
          {/* Title Section */}
          <motion.div
            className="flex flex-col justify-center items-center gap-2 sm:gap-3 lg:gap-[12px] w-full text-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.3 },
              },
            }}
          >
            <motion.h1
              className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[60px] leading-tight tracking-wide px-2 sm:px-0"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#7F0001]">Dr. Madhan</span> <br />
              <span className="text-[#003579]">Institute of Future</span>
            </motion.h1>

            <motion.p
              className="w-full max-w-[595px] font-normal text-xs sm:text-sm lg:text-[14px] leading-3 sm:leading-4 lg:leading-[18px] text-center tracking-[0.4px] uppercase text-[#4C4C4C] px-6 sm:px-4 lg:px-0"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Don't teach. Mentor the Mind. Shape the Future. Inspire the Soul.
              Empower the Journey. Unlock Potential.
            </motion.p>
          </motion.div>
        </div>

        {/* Bottom Stats Section */}
        <motion.div
          className="w-full max-w-7xl mx-auto mt-6 sm:mt-8 lg:mt-0 lg:absolute lg:left-1/2 lg:top-[380px] lg:-translate-x-1/2 bg-[#25262A] rounded-xl sm:rounded-2xl lg:rounded-[44px] p-3 sm:p-4 md:p-6 lg:p-[40px] flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 mx-4 sm:mx-6 lg:mx-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* Left Join Learners Card */}
          <motion.div
            className="flex flex-row items-center justify-between w-full lg:w-[420px] h-[80px] sm:h-[100px] lg:h-[117px] bg-[#003579] rounded-xl sm:rounded-2xl lg:rounded-[35px] px-4 sm:px-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex flex-col justify-center">
              <h3 className="font-bold text-base sm:text-lg lg:text-[22px] leading-5 sm:leading-6 text-white">
                Join 50K+ Learners
              </h3>
              <p className="font-normal text-xs sm:text-sm lg:text-[16px] leading-4 sm:leading-5 capitalize text-white mt-1">
                This is my website
              </p>
            </div>
            <div className="w-[50px] sm:w-[65px] lg:w-[85px] h-[50px] sm:h-[65px] lg:h-[85px] bg-white rounded-lg sm:rounded-xl lg:rounded-[28px] flex items-center justify-center"></div>
          </motion.div>

          {/* Right Stats Cards */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6 w-full lg:flex-1"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {[
              { number: "50K+", label: "Global Learners" },
              { number: "500+", label: "Innovative Projects" },
              { number: "100+", label: "Mentorship Expert" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="flex flex-col justify-center items-center w-full sm:w-1/3 lg:w-[230px] h-[80px] sm:h-[100px] lg:h-[117px] bg-white rounded-xl sm:rounded-2xl lg:rounded-[35px] p-3 sm:p-4"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 + i * 0.2 }}
              >
                <h3 className="font-bold text-xl sm:text-2xl lg:text-[30px] text-[#25262A]">
                  {stat.number}
                </h3>
                <p className="text-sm sm:text-base lg:text-[18px] text-[#2B2B2B] mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default HeroSection;
