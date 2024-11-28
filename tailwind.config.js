/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      mdl:'970px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        Yeseva: ['Yeseva One'],
        work: ['Work Sans']
      },
      fontSize: {
        display1: "var(--display1)",
        font_14_16: "var(--font_14_16)",
        font_14_18: "var(--font_14_18)",
        font__14: "var(--font__14)",
        font__16: "var(--font__16)",
        font__18: "var(--font__18)",
        font_24_18: "var(--font_24_18)",
        font_24_32: "var(--font_24_32)",
        font__26: "var(--font__26)",
      },
      colors: {
        primare: "var(--primare)",
        Secondary: "var(--Secondary)",
        Accent: "var(--Accent)",
        Black: "var(--Black)",
      }
    },
  },
  plugins: [],
}

