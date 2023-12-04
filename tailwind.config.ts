import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        guruWayThin: ["Guruway-Thin"],
        guruWayLight: ["Guruway-Light"],
        guruWayBold: ["Guruway-Bold"],
        guruWaySemiBold: ["Guruway-SemiBold"],
        guruWayMedium: ["Guruway-Medium"],
        guruWayRegular: ["Guruway-Regular"],
      },
      colors: {
        PiBullet: "#115DCE",
        PiBlack: "#1d1b19",
        PiSubheader: "#FFEBE4",
        PiAttract: "#FF7542",
        PiButton: "#FE8551",
        PiWhiteBackground: "#FFF",
        PiGrey: "#545454",
        PiCards: "#FDF5F2",
        PiDocument: "#FEFAC6",
        PiFooter: "#E4F2EE",
        PiBorder: "#54545426",
        PiCardMegaMenuHover: "#F3EDFF",
        PiGreyBackground: "#F9F9F9",
        PiGradentto: "#FE4501",
        PiSpeed: "#BEFDA9",
      },

      boxShadow: {
        PiDropshadow: "0px 20px 30px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
};
export default config;
