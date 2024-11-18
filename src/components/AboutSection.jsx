import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section id="about" className="flex flex-col-reverse gap-10 items-center md:flex-row md:gap-16 md:justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black mb-8 md:mb-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div
          className="flex justify-center"
          data-aos="fade-right"
        >
          <div className="relative w-56 h-56 md:w-64 md:h-64">
            <img
              src="../src/assets/hero.jpeg" 
              alt="Profile"
              className="rounded-full w-full h-full border-4 border-sky-400 shadow-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full border-4 border-sky-300 rounded-full animate-ping opacity-50"></div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center md:items-start md:text-left text-center" data-aos="fade-left">
          <h2 className="text-3xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4 px-4 md:px-0">
            Hi everyone! My name is{" "}
            <span className="text-sky-200 font-semibold">
              Muhammad Surya Putra Davindra
            </span>
            . I'm a web developer from Malang, East Java. I have 1 year of
            experience in back-end web development. I really enjoy what I do
            right now. In my opinion, creating programs is not just a job, but
            also an art that has aesthetic value.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4 px-4 md:px-0">
            My job is to build your website to be functional and user-friendly
            yet still attractive. In addition, I provide a personal touch to
            your product and ensure that the website catches attention and is
            easy to use. If you are interested in hiring me, please contact
            me!
          </p>
          <a
            href="#contact"
            className="inline-block mt-6 px-6 py-3 bg-sky-200 text-[#1e1e1f] font-semibold rounded-full hover:bg-sky-400 transition"
            data-aos="fade-up"
            data-aos-delay="100"
            onClick={(e) => smoothScroll(e, "#contact")}
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
