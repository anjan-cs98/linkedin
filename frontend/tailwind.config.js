import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Adding breakpoints for responsiveness if needed
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        linkedin: {
       //    blue-600: "#0A66C2", // LinkedIn Blue
       //    secondary: "#FFFFFF", // White
       //    accent: "#7FC15E", // LinkedIn Green (for accents)
       //    neutral: "#000000", // Black (for text)
       //    base: "#F3F2EF", // Light Gray (background)
       //    info: "#5E5E5E", // Dark Gray (for secondary text)
       //    success: "#057642", // Dark Green (for success messages)
       //    warning: "#F5C75D", // Yellow (for warnings)
       //    error: "#CC1016", // Red (for errors)
        },
      },
    ],
  },
  safelist: [
    "bg-blue-600",
    "bg-white",
    "bg-accent",
    "bg-neutral",
    "bg-base",
    "bg-info",
    "bg-success",
    "bg-warning",
    "bg-error",
    "text-sm", // Safelisting text size for mobile views
    "p-2",    // Safelisting padding for mobile views
  ],
};
