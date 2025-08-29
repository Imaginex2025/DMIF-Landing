import { useNavigate } from "react-router-dom";
import IconButton from "../../Components/Common/Button";
import { APPROUTES } from "../../Routes/appRoutes";

const CTASection = () => {

  const navigate = useNavigate();
  return (
    <section className="w-full bg-[#F9F9F9] px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-10 md:py-12 flex flex-col justify-center md:flex-row items-center md:justify-between gap-6 sm:gap-8 md:gap-10">
      {/* Left Content */}
      <div className="flex flex-col gap-6 sm:gap-8 text-center md:text-left">
        <div className="flex flex-col gap-4 sm:gap-6">
          <h2 className="heading max-w-xl text-xl sm:text-2xl md:text-3xl lg:text-[38px] leading-tight px-2 sm:px-0">
            Start your journey with DMIF and make an impact
          </h2>
          <p className="para text-sm sm:text-base leading-relaxed px-2 sm:px-0">
            Become a part of DMIF's global community — Where learners dive into
            real-world innovation and research, gaining outcomes like patents,
            publications, and startup-ready ideas
          </p>
        </div>

        <div className="flex justify-center md:justify-start">
          <IconButton 
            className="max-w-sm w-full sm:w-auto" 
            onClick={() => { navigate(APPROUTES.CONTACT_US) }} 
            label="Register Now" 
          />
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center items-center flex-shrink-0">
        <img 
          src="/HOME/Union.png" 
          alt="CTA Illustration" 
          className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto"
        />
      </div>
    </section>
  );
};

export default CTASection;
