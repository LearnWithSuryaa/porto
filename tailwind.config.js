module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      },
      animation: {
        fadeInUp: "fadeInUp 1s ease-out",
        fadeInRight: "fadeInRight 1s ease-out",
        fadeInLeft: "fadeInLeft 1s ease-out",
        type: "typing 2s steps(20, end), blink-caret 0.5s step-end infinite",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        fadeInRight: {
          from: { opacity: 0, transform: "translateX(-20px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        fadeInLeft: {
          from: { opacity: 0, transform: "translateX(20px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        typing: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        "blink-caret": {
          "50%": { borderColor: "transparent" },
        },
      },
    },
  },
  plugins: [],
};
