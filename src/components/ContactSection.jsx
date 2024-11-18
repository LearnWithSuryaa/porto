import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div id="contact" className="relative bg-gradient-to-b from-black via-gray-900 to-black py-40 px-5 md:px-12">
      <div className="absolute inset-0 -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
          fill="#ffcc00"
        >
          <path
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,208C384,192,480,192,576,213.3C672,235,768,277,864,261.3C960,245,1056,171,1152,128C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div
        className="bg-gradient-to-r from-sky-400 to-pink-300 rounded-xl shadow-lg max-w-5xl mx-auto text-white p-10 md:p-16"
        data-aos="zoom-in"
      >
        <h2
          className="text-3xl md:text-4xl font-bold mb-2 text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Let's Build Something Amazing Together!
        </h2>
        <p
          className="text-xl text-center text-gray-200 mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Whether it's an exciting project, collaboration, or just a friendly chat, 
          I'm just one click away!
        </p>

        <div
          className="flex flex-col md:flex-row items-center justify-center gap-6"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <a
            href="mailto:davindra514@email.com"
            className="bg-white text-black font-semibold px-8 py-4 rounded-full shadow-md transform transition hover:scale-105 hover:bg-sky-500 hover:text-white"
          >
            Send an Email:{" "}
            <span className="font-bold">davindra514@email.com</span>
          </a>
        </div>
      </div>

      <div
        className="mt-12 text-center"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <p className="text-gray-400 text-sm mb-4">Follow Me</p>

        <div className="flex justify-center gap-8">
          {[
            { href: "https://www.instagram.com/suryahipersomniaa", icon: FaInstagram },
            { href: "https://github.com/LearnWithSuryaa", icon: FaGithub },
            { href: "https://www.linkedin.com/in/muhammad-surya-putra-davindra-60b373318/", icon: FaLinkedin },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-200 text-4xl hover:text-sky-400 transition-transform transform hover:scale-125"
              aria-label={`Follow me on ${social.icon.name}`}
            >
              <social.icon />
            </a>
          ))}
        </div>
      </div>

      <footer
        className="mt-16 text-center text-gray-400"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <p>&copy; 2024 Muhammad Surya. All Rights Reserved.</p>
        <p className="mt-2 text-sm">
          Website Licensed Under GNU GPLv3. Feel free to modify it <br />
          as long as the copyright and license are preserved.
        </p>
      </footer>
    </div>
  );
};

export default ContactSection;
