// tailwind.config.js
import {nextui} from "@nextui-org/react";


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: false,
      defaultTheme: "light",
      defaultExtendTheme: "light",
      layout: {
        
      },
      themes: {
        light: {
          layout: {
            
          },
          colors: {
            background: "#EDEDED",
            primary: {
              50: "#FFF9E8",
              100: "#FEF4D0",
              200: "#FDE8A2",
              300: "#FDDD73",
              400: "#FCD145",
              500: "#FBC616",
              600: "#E2B214",
              700: "#D5A813",
              800: "#C99E12",
              900: "#BC9510",
              DEFAULT: "#FBC616",
            },
            secondary: {
              50: "#F6F7F7",
              100: "#EEEEEF",
              200: "#DCDDDF",
              300: "#CBCCCE",
              400: "#B9BBBE",
              500: "#A8AAAE",
              600: "#97999D",
              700: "#8F9094",
              800: "#86888B",
              900: "#7E8082",
              DEFAULT: "#A8AAAE",
            },


          }
        },
        dark: {
          layout: {},
          colors: {
            background: {
              DEFAULT: "#171717",
            },
            primary: {
              50: "#FFF9E8",
              100: "#FEF4D0",
              200: "#FDE8A2",
              300: "#FDDD73",
              400: "#FCD145",
              500: "#FBC616",
              600: "#E2B214",
              700: "#D5A813",
              800: "#C99E12",
              900: "#BC9510",
              DEFAULT: "#FBC616",
            },
            secondary: {
              50: "#F6F7F7",
              100: "#EEEEEF",
              200: "#DCDDDF",
              300: "#CBCCCE",
              400: "#B9BBBE",
              500: "#A8AAAE",
              600: "#97999D",
              700: "#8F9094",
              800: "#86888B",
              900: "#7E8082",
              DEFAULT: "#A8AAAE",
            }
          }
        }
      }
    })
  ],
}