import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const animPlugin = plugin(({ addUtilities }) => {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)"
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d"
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden"
    },
    ".perspective": {
      perspective: "1000px"
    }
  })
});

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    animPlugin
  ],
};
export default config;
