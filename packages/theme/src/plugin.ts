import {themeColors} from "./tokens/colors";
import plugin from "tailwindcss/plugin";

export const miraui = () => {
  return plugin(
    function ({addBase, theme}) {
      // Add CSS variables for theme
      addBase({
        ":root": {
          // Generate CSS variables for each color
          ...Object.fromEntries(
            Object.entries(themeColors).flatMap(([colorName, colorShades]) =>
              Object.entries(colorShades).map(([shade, value]) => [
                `--miraui-${colorName}-${shade}`,
                value,
              ]),
            ),
          ),
          // Typography
          "--miraui-font-sans": theme("fontFamily.sans"),
          "--miraui-font-mono": theme("fontFamily.mono"),
          // Border radius
          "--miraui-radius-sm": theme("borderRadius.sm"),
          "--miraui-radius-md": theme("borderRadius.md"),
          "--miraui-radius-lg": theme("borderRadius.lg"),
          "--miraui-radius-full": theme("borderRadius.full"),
        },
      });
    },
    {
      theme: {
        extend: {
          colors: {
            black: "#000000",
            white: "#ffffff",

            // Expand the color palette with all shades
            ...Object.fromEntries(
              Object.entries(themeColors).map(([colorName, colorShades]) => [
                colorName,
                Object.fromEntries(
                  Object.entries(colorShades).map(([shade, value]) => [shade, value]),
                ),
              ]),
            ),
          },
        },
      },
    },
  );
};
