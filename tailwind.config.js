module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        // import sofia-400
        // sofia: ["Sofia Pro", "sans-serif"],
      },
      colors: {
        brand: {
          primary: "#a855f7", //purple-500
          primaryLight: "#d6bcfa", //purple-100
          secondary: "#10b981", //emerald-500
          lighter: "#94a3b8", //slate-400

          headings: "#00083D",
          text: "#5B6E80", // <slate-700></slate-700>
        },
      },
    },
    keyframes: {
      levitate: {
        "0%, 100%": { transform: "translateY(15px)" },

        "50%": { transform: "translateY(-15px)" },
      },

      blob: {
        "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
        "33%": { transform: "translate(20px, -20px) scale(1.1)" },
        "66%": { transform: " translate(-20px, 20px)scale(0.9)" },
      },
    },

    animation: {
      levitate: "levitate 6s ease-in-out infinite",
      blob: "blob 10s ease-in-out infinite",
    },
  },
  // variants: {
  //   extend: {
  //     // variable : [selector]

  //     scale: ["group-hover"],
  //     translate: ["group-hover"],
  //     blur: ["dark"],
  //     opacity: ["dark"],
  //   },
  // },
  plugins: [],
};
