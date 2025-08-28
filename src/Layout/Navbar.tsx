import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Mail } from "lucide-react";
import IconButton from "../Components/Common/Button";
import { APPROUTES } from "../Routes/appRoutes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", path: APPROUTES.HOME },
    { label: "About", path: APPROUTES.ABOUT },
    { label: "Programs", path: APPROUTES.PROGRAMS },
    { label: "Why It Matters", path: APPROUTES.WHY_IT_MATTERS },
    { label: "Contact Us", path: APPROUTES.CONTACT_US },
  ];

  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 shadow-sm bg-white relative">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/Logo.png" alt="Logo" className="h-10 sm:h-12 md:h-16" />
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex space-x-6 lg:space-x-8">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `relative text-gray-700 hover:text-blue-900 transition text-sm lg:text-base
              after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300
              hover:after:w-full
              ${
                isActive
                  ? "text-blue-900 font-semibold after:w-full"
                  : "after:w-0"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <IconButton
          label="Apply Now"
          icon={<Mail size={16} />}
          iconPosition="right"
          onClick={() => { navigate(APPROUTES.CONTACT_US) }}
          className="text-sm px-4 py-2"
        />
      </div>

      {/* Mobile Hamburger */}
      <button
        className="block md:hidden p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-4 py-6 md:hidden z-50 border-t">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)} // close menu after click
              className={({ isActive }) =>
                `text-base relative text-gray-700 hover:text-blue-900 transition
                after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-900 after:transition-all after:duration-300
                hover:after:w-full
                ${
                  isActive
                    ? "text-blue-900 font-semibold after:w-full"
                    : "after:w-0"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          
          {/* Mobile Apply Button */}
          <div className="mt-4">
            <IconButton
              label="Apply Now"
              icon={<Mail size={16} />}
              iconPosition="right"
              onClick={() => { 
                setIsOpen(false);
                navigate(APPROUTES.CONTACT_US);
              }}
              className="text-sm px-6 py-2"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
