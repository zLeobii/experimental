/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        main1: "#D25E5E",
        main2: "#F58484",
        main3: "#F5B3B3",
        neutral1: "#282727",
        neutral2: "#333030",
        neutral3: "#514F4F",
        neutral4: "#7B7979",
        neutral5: "#9A9494",
        neutral6: "#BDB8B8",
        neutral7: "#CDC6C6",
        neutral8: "#E9E2E2",
        neutral9: "#F9F0F0",      
      },

      fontFamily: {
        lora: ['Lora'],
        merriweather: ['Merriweather']
      },

      fontSize: {
        h1: "62px",
        h2: "45px",
        h3: "32px",
        h4: "24px",
        h5: "18px",
        p1: "20px",
        p2: "16px",
        p3: "14px",
      },

      backgroundImage: {
        "bgmobile" : "url(../src/assets/backgrounds/bgmobile.png)",
        "bgwide" : "url(../src/assets/backgrounds/bgwide.png)",
        "bg1" : "url(../src/assets/backgrounds/bg1.png)",
        "bg2" : "url(../src/assets/backgrounds/bg2.png)",
      }
    },
  },
  plugins: [],
};