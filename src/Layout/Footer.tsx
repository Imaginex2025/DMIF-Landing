import { Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {/* Left - Logo & Info */}
        <div className="flex flex-col items-center sm:items-start gap-4 max-w-xs mx-auto sm:mx-0">
          <img
            src="/Logo-bgRemovced.png"
            alt="Logo"
            className="h-12 sm:h-16 w-auto object-contain"
          />
          <p className="text-sm text-gray-600 leading-relaxed text-center sm:text-left">
            Dr. Madhan Institute of Future (DMIF) is a next-generation
            mentorship platform
          </p>
          <p className="text-sm text-gray-700">reach@drmadhan.in</p>
          <p className="text-sm text-gray-700">www.drmadhan.in</p>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold text-gray-800 mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["Faq", "Contact Us", "Apply Now", "Media & Talks"].map((item) => (
              <li key={item}>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-blue-900 transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Menu */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold text-gray-800 mb-3">Main Menu</h4>
          <ul className="space-y-2 text-sm">
            {[
              "Home",
              "About",
              "Programs",
              "Why It Matters",
              //   "Student Outcomes",
              //   "Collaborations",
              //   "Testimonials",
            ].map((item) => (
              <li key={item}>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-blue-900 transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center sm:text-left">
          <h4 className="font-semibold text-gray-800 mb-3">Social Media</h4>
          <div className="flex gap-3 justify-center sm:justify-start">
            <a
              href="#"
              className="p-2 rounded-md bg-blue-100 text-blue-600 hover:bg-blue-200"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-md bg-pink-100 text-pink-600 hover:bg-pink-200"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-md bg-red-100 text-red-700 hover:bg-red-200"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t py-4 text-xs sm:text-sm text-gray-600 flex justify-center px-4 sm:px-8 max-w-7xl mx-auto">
        <p className="text-center">
          Copyright © {new Date().getFullYear()} Dr. Madhan Institute of Future.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
