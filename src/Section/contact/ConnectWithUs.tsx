import { Mail } from "lucide-react";
import IconButton from "../../Components/Common/Button";

const ConnectWithUs = () => {
  return (
    <section className="flex flex-col py-30  relative md:flex-row items-center justify-between gap-10 px-6 md:px-16 py-12 ">
      {/* Left - Text & Button */}
      <div className="flex flex-col gap-6 max-w-lg">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Connect with us
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Want to chat? We’d love to hear from you! Get in touch with our
            Customer Success Team to inquire about speaking events, advertising
            rates, or just say hello.
          </p>
        </div>

        <IconButton
          label="Contact Us"
          icon={<Mail size={18} />}
          iconPosition="left"
          onClick={() => (window.location.href = "mailto:reach@drmadhan.in")}
        />
      </div>

      {/* Right - Image */}

      <img
        src="/ConnectWithUs.png"
        alt="Contact Us"
        className="w-full max-w-xl hidden md:flex absolute bottom-0 right-0"
      />
    </section>
  );
};

export default ConnectWithUs;
