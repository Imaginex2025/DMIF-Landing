import { MapPin, Building2, Clock, Award } from "lucide-react"; 
import IconButton from "../../Components/Common/Button";
import { APPROUTES } from "../../Routes/appRoutes";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AboutDMIFSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#F9FBFD] py-8 sm:py-12 md:py-16 px-4 sm:px-8 lg:px-[88px]">
      <div className="max-w-[1366px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 lg:gap-[82px]">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-4 sm:gap-6 w-full lg:w-[525px] text-center lg:text-left"
        >
          <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[38px] leading-tight text-[#003579] tracking-[-0.01em] px-2 sm:px-0">
            About DMIF
          </h2>
          <p className="font-medium text-sm sm:text-base leading-6 sm:leading-7 lg:leading-[32px] text-[#404040] text-justify px-2 sm:px-0">
            Dr. Madhan Institute of Future (DMIF) is a next-generation mentorship
            platform where students learn by creating, not memorizing. From Day 1,
            learners dive into real-world innovation and research, gaining outcomes
            like patents, publications, and startup-ready ideas. Dr. Madhan
            Institute of Future (DMIF) is a next-generation mentorship platform
            where students learn by creating, not memorizing. From Day 1, learners
            dive into real-world innovation and research, gaining outcomes like
            patents, publications, and startup-ready ideas.
          </p>

          <div className="flex justify-center lg:justify-start px-2 sm:px-0">
            <IconButton
              label="Learn More"
              onClick={() => navigate(APPROUTES.ABOUT)}
              className="max-w-sm w-full sm:w-auto"
            />
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="hidden lg:block w-px h-[412px] bg-[#D2E0EA]"
        />

        {/* Right Content - Feature Cards */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 sm:gap-8 w-full lg:w-[664px]"
        >
          {/* Top Row */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-[41px]">
            {/* Facilities Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-[5px] shadow-[0px_4px_10px_rgba(0,0,0,0.05)] p-6 w-full md:w-[311px] h-auto min-h-[250px]"
            >
              <div className="flex flex-col gap-6 h-full">
                <div className="flex flex-col gap-3 items-center md:items-start">
                  <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] bg-white rounded-full shadow-[0px_4px_16.5px_rgba(0,0,0,0.15)] flex items-center justify-center">
                    <Building2 className="w-8 h-8 sm:w-9 sm:h-9 text-[#003579]" />
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl text-[#0C101A] tracking-[0.3px]">
                    Facilities
                  </h3>
                </div>
                <p className="font-medium text-sm leading-6 text-[#404040] flex-1 text-center md:text-left">
                  Live mentorship sessions, research and patent toolkits, and guided
                  documentation support for innovation outcomes.
                </p>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-[5px] shadow-[0px_4px_10px_rgba(0,0,0,0.05)] p-6 w-full md:w-[311px] h-auto min-h-[250px]"
            >
              <div className="flex flex-col gap-6 h-full">
                <div className="flex flex-col gap-3 items-center md:items-start">
                  <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] bg-white rounded-full shadow-[0px_10px_20px_rgba(0,0,0,0.04)] flex items-center justify-center">
                    <MapPin className="w-8 h-8 sm:w-9 sm:h-9 text-[#003579]" />
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl text-[#0C101A] tracking-[0.3px]">
                    Location
                  </h3>
                </div>
                <p className="font-medium text-sm leading-6 text-[#404040] flex-1 text-center md:text-left">
                  Fully online with global reach — open to students from India, the US,
                  Europe, and beyond.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-[41px]">
            {/* History Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-[5px] shadow-[0px_4px_10px_rgba(0,0,0,0.05)] p-6 w-full md:w-[311px] h-auto min-h-[250px]"
            >
              <div className="flex flex-col gap-6 h-full">
                <div className="flex flex-col gap-3 items-center md:items-start">
                  <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] bg-white rounded-full shadow-[0px_4px_16.5px_rgba(0,0,0,0.15)] flex items-center justify-center">
                    <Clock className="w-8 h-8 sm:w-9 sm:h-9 text-[#003579]" />
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl text-[#0C101A] tracking-[0.3px]">
                    History
                  </h3>
                </div>
                <p className="font-medium text-sm leading-6 text-[#404040] flex-1 text-center md:text-left">
                  Founded by Dr. Madhan Kumar Srinivasan, holder of 127 patents and 30+
                  global publications.
                </p>
              </div>
            </motion.div>

            {/* Achievements Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-[5px] shadow-[0px_4px_10px_rgba(0,0,0,0.05)] p-6 w-full md:w-[311px] h-auto min-h-[250px]"
            >
              <div className="flex flex-col gap-6 h-full">
                <div className="flex flex-col gap-3 items-center md:items-start">
                  <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] bg-white rounded-full shadow-[0px_4px_16.5px_rgba(0,0,0,0.15)] flex items-center justify-center">
                    <Award className="w-8 h-8 sm:w-9 sm:h-9 text-[#003579]" />
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl text-[#0C101A] tracking-[0.3px]">
                    Achievements
                  </h3>
                </div>
                <p className="font-medium text-sm leading-6 text-[#404040] flex-1 text-center md:text-left">
                  DMIF learners have published in IEEE, Springer, ACM, filed patents, and
                  built strong portfolios for Ivy League admissions.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutDMIFSection;
