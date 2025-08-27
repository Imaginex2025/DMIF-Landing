import { useState } from "react";
import { Mail } from "lucide-react";

const socialIcons = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg",
    alt: "LinkedIn",
    mail: false,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg",
    alt: "Facebook",
    mail: false,
  },
  {
    name: "Email",
    url: "mailto:info@dmif.com",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/maildotru.svg",
    alt: "Email",
    mail: true,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg",
    alt: "Instagram",
    mail: false,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/",
    icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/youtube.svg",
    alt: "YouTube",
    mail: false,
  },
];

function SocialMediaCard() {
  const [selected, setSelected] = useState(0);
  return (
    <div
      className="flex flex-row justify-center items-center p-3 absolute bg-white shadow-[0px_12px_64px_rgba(28,25,25,0.12)] rounded-[4px] gap-3 sm:gap-4"
      style={{
        width: 268,
        height: 80,
        left: 59,
        top: 377,
        minWidth: 220,
        maxWidth: '90vw',
      }}
    >
      {socialIcons.map((icon, idx) => (
        <a
          key={icon.name}
          href={icon.url}
          target={icon.mail ? undefined : "_blank"}
          rel={icon.mail ? undefined : "noopener noreferrer"}
          aria-label={icon.name}
          onClick={e => {
            setSelected(idx);
          }}
          className={`w-12 h-12 rounded-[4px] flex items-center justify-center transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#003579] ${
            selected === idx ? "bg-[#003579]" : "bg-white hover:bg-[#f0f4fa]"
          }`}
          style={selected === idx ? { boxShadow: "0 0 0 2px #003579" } : {}}
        >
          {icon.name === "Email" ? (
            <Mail
              size={24}
              stroke={selected === idx ? "#fff" : "#003579"}
              strokeWidth={2}
              fill="none"
              className="w-6 h-6"
            />
          ) : (
            <img
              src={icon.icon}
              alt={icon.alt}
              className={`w-6 h-6 ${selected === idx ? "filter brightness-200 invert-0" : ""}`}
              style={
                selected === idx
                  ? { filter: "invert(1) brightness(2)" }
                  : { filter: 'invert(16%) sepia(99%) saturate(7496%) hue-rotate(203deg) brightness(92%) contrast(101%)' }
              }
            />
          )}
        </a>
      ))}
    </div>
  );
}

const DrMadhanSection = () => {
  return (
    <section className="w-full py-[112px] px-[112px]">
      <div className="max-w-[1363px] mx-auto bg-white shadow-[0px_36px_105px_rgba(43,56,76,0.1)] rounded-[16px] p-[112px] flex items-center gap-[136px]">
        {/* Left - Image and Social */}
        <div className="relative w/[424px] h/[457px]">
          {/* Main Image */}
          <div className="w-[424px] h-[417px] bg-gray-200 rounded-[10px] border border-[#F0F1F3] flex items-center justify-center overflow-hidden">
            <img
              src="/HOME/Dr.MadhanPhoto.svg"
              alt="Dr. Madhan Kumar Srinivasan"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Social Media Card - Interactive */}
          <SocialMediaCard />
        </div>

        {/* Right - Content */}
        <div className="flex flex-col gap-[32px] w/[626px]">
          <div className="flex flex-col gap-[15px]">
            <h2 className="font-semibold text-[38px] leading-[50px] text-[#003579] w-full">
              DR.MADHAN KUMAR SRINIVASAN
            </h2>
            <p className="font-normal text-[18px] leading-[24px] text-[#556070] w-full">
              Dr. Madhan Kumar Srinivasan, Ph.D., EPBA (IIM Calcutta), is a serial entrepreneur, innovator, Chief Mentor and professor with 22+ years of global experience in Cloud, AI, and Big Data. An Accenture Prolific Inventor, he holds 127 patents and 96 grants, many transformed into successful products across the US, UK, Europe, Singapore, and India. He is the Founder & CEO of ImagineX Innovations and Wise Work, and Co-founder of Hue Learn Singapore & Longer Life Tech, advising Fortune 500 companies, startups, and governments worldwide.
              <br /><br />
              A pioneer in India's cloud journey, he built the first private cloud at Infosys (2012) and created Accenture's Cloud AI business line, deploying its flagship Cloud AI product. Recognized as a 3x TEDx Speaker, Davos 2024 Invitee, and recipient of global awards including the Top 100 Scientists Award (IBC, Cambridge), Dr. Madhan continues to drive innovation, education, and entrepreneurship across industries and academia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrMadhanSection;
