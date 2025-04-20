import {miraui} from "@miraui/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/**/*.{html,ts,md,mdx}",
    "./packages/**/*.{html,ts,md,mdx}",
    "./node_modules/@miraui/theme/dist/components/**/*.{html,ts,md,mdx}",
  ],
  plugins: [miraui()],
};
