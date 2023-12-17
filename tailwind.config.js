/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        myfont: ["Rubik"],
      },
      colors: {
        softblue: "hsl(231, 69%, 60%)",
        softred: "hsl(0, 94%, 66%)",
        grayishblue: "hsl(229, 8%, 60%)",
        darkblue: "hsl(229, 31%, 21%)",
        gray1: "rgba(211, 211, 211, 0.5)",
      },
      fontSize: {
        mysize: "18px",
      },
      textUnderlineOffset: {
        under: "19px",
      },
      maxWidth: {
        width1: "50%",
        width2: "100%",
        width3: "30%",
        width4: "70%",
      },
    },
  },
  plugins: [],
};
