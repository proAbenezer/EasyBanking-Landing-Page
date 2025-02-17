/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      xs: "300px",
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        public: ["PublicSansRegular", "sans-serif"],
        publicBold: ["PublicSansBold", "sans-serif"],
        publicLight: ["PublicSansLight", "sans-serif"],
        publicVariable: ["PublicSansRegularVariable", "sans-serif"],
        publicVariableItalic: ["PublicSansRegularVariableItalic", "sans-serif"],
      },

      colors: {
        DarkBlue: "hsl(233, 26%, 24%)",
        LimeGreen: "hsl(136, 65%, 51%)",
        BrightCyan: "hsl(192, 70%, 51%)",
        GrayishBlue: "hsl(233, 8%, 62%)",
        LightGrayishBlue: "hsl(220, 16%, 96%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
        White: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
