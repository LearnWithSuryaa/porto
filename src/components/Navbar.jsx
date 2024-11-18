import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });

      setTimeout(() => {
        AOS.refresh(); 
      }, 500); 
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#1e1e1f] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-12">
        <button
          onClick={() => scrollToSection("#hero")}
          className="text-3xl font-semibold text-sky-300 hover:text-white"
          data-aos="fade-down"
        >
          Suryaa
        </button>

        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li className="group">
            <button
              onClick={() => scrollToSection("#about")}
              className="relative text-gray-300 hover:text-sky-300 transition-colors duration-300 font-roboto"
              data-aos="fade-up"
            >
              About
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-300 transform scale-x-0 transition-all duration-300 ease-out group-hover:scale-x-100"></span>
            </button>
          </li>
          <li className="group">
            <button
              onClick={() => scrollToSection("#projects")}
              className="relative text-gray-300 hover:text-sky-300 transition-colors duration-300 font-roboto"
              data-aos="fade-up" 
            >
              Projects
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-300 transform scale-x-0 transition-all duration-300 ease-out group-hover:scale-x-100"></span>
            </button>
          </li>
          <li className="group">
            <button
              onClick={() => scrollToSection("#contact")}
              className="relative text-gray-300 hover:text-sky-300 transition-colors duration-300 font-roboto"
              data-aos="fade-up" 
            >
              Contact
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-sky-300 transform scale-x-0 transition-all duration-300 ease-out group-hover:scale-x-100"></span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
