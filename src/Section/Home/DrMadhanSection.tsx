import { useState } from "react";
import { Mail, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";

const socialIcons = [
  { name: "LinkedIn", url: "https://www.linkedin.com/", icon: Linkedin, mail: false },
  { name: "Facebook", url: "https://www.facebook.com/", icon: Facebook, mail: false },
  { name: "Email", url: "mailto:info@dmif.com", icon: Mail, mail: true },
  { name: "Instagram", url: "https://www.instagram.com/", icon: Instagram, mail: false },
  { name: "YouTube", url: "https://www.youtube.com/", icon: Youtube, mail: false },
];

function SocialMediaCard() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div
      className="flex flex-row justify-center items-center p-3 bg-white shadow-[0px_12px_64px_rgba(28,25,25,0.12)] rounded-md gap-3 sm:gap-4 mt-4 w-full max-w-sm mx-auto"
    >
      {socialIcons.map((icon, idx) => {
        const IconComp = icon.icon;
        const isSelected = selected === idx;
        return (
          <a
            key={icon.name}
            href={icon.url}
            target={icon.mail ? undefined : "_blank"}
            rel={icon.mail ? undefined : "noopener noreferrer"}
            aria-label={icon.name}
            onClick={() => setSelected(idx)}
            className={`group w-12 h-12 rounded-md flex items-center justify-center transition-all duration-200 ${
              isSelected ? "bg-[#003579]" : "bg-white hover:bg-[#003579]"
            }`}
          >
            <IconComp
              size={24}
              stroke={isSelected ? "#fff" : "#003579"}
              strokeWidth={2}
              className="w-6 h-6 transition-colors duration-200 group-hover:stroke-white"
            />
          </a>
        );
      })}
    </div>
  );
}

const DrMadhanSection = () => {
  return (
    <section className="w-full py-6 px-4 sm:px-8 lg:px-16">
      <div className="w-full mx-auto bg-white shadow-[0px_36px_105px_rgba(43,56,76,0.1)] rounded-xl p-6 sm:p-10 lg:p-20 flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left - Image and Social */}
        <div className="relative w-full max-w-md relative flex-shrink-0 flex flex-col items-center">
          <div className="w-full bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
            <img
              src="/HOME/Dr.MadhanPhoto.svg"
              alt="Dr. Madhan Kumar Srinivasan"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="absolute -bottom-10">
            <SocialMediaCard />
          </div>
        </div>

        {/* Right - Content */}
        <div className="flex w-full flex-col gap-6">
          <h2 className="heading text-center lg:text-left">
            DR.MADHAN KUMAR SRINIVASAN
          </h2>
          <p className="font-normal text-base sm:text-lg leading-relaxed text-[#556070] text-justify">
            Dr. Madhan Kumar Srinivasan, Ph.D., EPBA (IIM Calcutta), is a serial entrepreneur, innovator, Chief Mentor and professor with 22+ years of global experience in Cloud, AI, and Big Data. An Accenture Prolific Inventor, he holds 127 patents and 96 grants, many transformed into successful products across the US, UK, Europe, Singapore, and India. He is the Founder & CEO of ImagineX Innovations and Wise Work, and Co-founder of Hue Learn Singapore & Longer Life Tech, advising Fortune 500 companies, startups, and governments worldwide.
            <br /><br />
            A pioneer in India's cloud journey, he built the first private cloud at Infosys (2012) and created Accenture's Cloud AI business line, deploying its flagship Cloud AI product. Recognized as a 3x TEDx Speaker, Davos 2024 Invitee, and recipient of global awards including the Top 100 Scientists Award (IBC, Cambridge), Dr. Madhan continues to drive innovation, education, and entrepreneurship across industries and academia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DrMadhanSection;
