import React, { useState, useEffect } from "react";
import "../index.css";

const HeroSection = () => {
  const toRotate = [
    "Web Developer",
    "Full-stack Engineer",
    "Informatics Student",
    "Tech Enthusiast",
  ];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = toRotate[loopNum];
      if (isDeleting) {
        setText((prev) => prev.substring(0, prev.length - 1));
      } else {
        setText((prev) => currentText.substring(0, prev.length + 1));
      }

      if (!isDeleting && text === currentText) {
        setIsDeleting(true);
        setDelta(100);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum((prev) => (prev + 1) % toRotate.length);
        setDelta(1000);
      }
    };

    const typingTimeout = setTimeout(handleTyping, delta);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, loopNum, delta, toRotate]);

  return (
    <main
      id="hero"
      className="flex flex-col-reverse gap-10 items-center md:flex-row md:gap-16 md:justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black mb-8 md:mb-16"
    >
      <div className="space-y-4 text-center md:text-left px-6 md:px-10">
        <p className="text-sky-200 text-lg md:text-xl">Hello World, I'm</p>
        <h1 className="text-4xl font-bold md:text-6xl text-white animate-fadeInUp">
          Muhammad Surya
        </h1>
        <div className="py-2 flex items-center">
          <h1 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-sky-500 md:text-2xl overflow-hidden border-r-2 border-sky-400 animate-typing">
            {text}
          </h1>
        </div>
        <p className="text-white text-base md:text-lg animate-fadeInLeft">
          Welcome to My personal website.{" "}
          <span id="wave" role="img" aria-label="waving hand" className="wave-emoji">
            👋🏼
          </span>
        </p>
      </div>

      <div className="flex justify-center md:justify-start animate-fadeInRight">
        <img
          alt="avatar"
          loading="lazy"
          width="300"
          height="300"
          decoding="async"
          className="w-3/4 max-w-[400px] md:w-[300px] md:max-w-[400px] md:h-auto rounded-full border-4 border-sky-300 shadow-lg shadow-sky-300 object-cover"
          src="../src/assets/hero.jpeg"
        />
      </div>
    </main>
  );
};

export default HeroSection;
