import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Portofolio Website",
    description:
      "Jelajahi proyek-proyek saya yang menggabungkan keahlian front-end seperti React dengan kekuatan back-end menggunakan Node.js dan Django. Setiap karya dirancang dengan fokus pada efisiensi, performa, dan skalabilitas untuk menciptakan solusi teknologi yang inovatif.",
    techStack: "React, Tailwind CSS",
    imageUrl: "../src/assets/projek1.png",
    liveUrl: "#",
    repoUrl: "#",
    comingSoon: false,
  },
  {
    title: "Lorem ipsum 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, consequatur! Consectetur explicabo voluptas debitis rem aliquam?",
    techStack: "VueJS 3, Tailwind CSS",
    imageUrl: "https://via.placeholder.com/300",
    liveUrl: "#",
    repoUrl: "#",
    comingSoon: true,
  },
  {
    title: "Lorem ipsum 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, consequatur! Consectetur explicabo voluptas debitis rem aliquam?",
    techStack: "Laravel 9, Bootstrap",
    imageUrl: "https://via.placeholder.com/300",
    liveUrl: "#",
    repoUrl: "#",
    comingSoon: true,
  },
  {
    title: "Lorem ipsum 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, consequatur! Consectetur explicabo voluptas debitis rem aliquam?",
    techStack: "Node.js, Express",
    imageUrl: "https://via.placeholder.com/300",
    liveUrl: "#",
    repoUrl: "#",
    comingSoon: true,
  },
  {
    title: "Lorem ipsum 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, consequatur! Consectetur explicabo voluptas debitis rem aliquam?",
    techStack: "Django, Python",
    imageUrl: "https://via.placeholder.com/300",
    liveUrl: "#",
    repoUrl: "#",
    comingSoon: true,
  },
  {
    title: "Lorem ipsum 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, consequatur! Consectetur explicabo voluptas debitis rem aliquam?",
    techStack: "Django, Python",
    imageUrl: "https://via.placeholder.com/300",
    liveUrl: "#",
    repoUrl: "#",
    comingSoon: true,
  },
];

const ProjectSection = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      id="projects"
      className="bg-[#1e1e1f] py-40 px-5 md:px-12 mt-12 items-center md:flex-row md:gap-16 md:justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black mb-8 md:mb-16"
    >
      <div className="text-center mb-10">
        <h2
          className="text-2xl md:text-3xl font-bold text-white mb-4"
          data-aos="fade-up"
        >
          Past Project Experience
        </h2>
        <p
          className="text-lg text-sky-200"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Explore the projects I've worked on so far
        </p>
        <div className="h-[1px] w-24 bg-sky-200 mx-auto mt-4"></div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-r from-sky-300 to-pink-300 rounded-xl shadow-lg max-w-5xl mx-auto overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-[#333] hover:text-white"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="relative">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover transform transition-all duration-500 hover:scale-110"
              />
              {/* Overlay Coming Soon */}
              {project.comingSoon && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    COMING SOON
                  </span>
                </div>
              )}
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold text-white transition-colors duration-500 hover:text-sky-200">
                {project.title}
              </h3>
              <p className="text-sm text-blue-200 mt-2 transition-colors duration-500 hover:text-white">
                {project.description}
              </p>
              <p className="text-sm text-blue-200 mt-4 transition-colors duration-500 hover:text-gray-200">
                Tech Stack: {project.techStack}
              </p>
              {!project.comingSoon && (
                <div className="mt-4 flex justify-between items-center">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 text-sm font-semibold underline hover:text-white transition-colors duration-500"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 text-sm font-semibold underline hover:text-white transition-colors duration-500"
                  >
                    View Code
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
