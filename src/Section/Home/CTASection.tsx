import IconButton from "../../Components/Common/Button";

const CTASection = () => {
  return (
    <section className="w-full bg-[#F9F9F9]  px-6 md:px-16 py-12 flex flex-col justify-center md:flex-row items-center md:justify-between gap-10">
      {/* Left Content */}
      <div className="flex flex-col gap-8 ">
        <div className="flex flex-col gap-6">
          <h2 className="heading max-w-xl">
            Start your journey with DMIF and make an impact
          </h2>
          <p className="para">
            Become a part of DMIF's global community — Where learners dive into
            real-world innovation and research, gaining outcomes like patents,
            publications, and startup-ready ideas
          </p>
        </div>

        <IconButton className="max-w-sm" label="Register Now" />
      </div>

      {/* Right Image */}
      <div className=" flex justify-center gap-3 items-center">
<img src="/HOME/Union.png" alt="CTA Illustration" />


      </div>
    </section>
  );
};

export default CTASection;
