/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		 colors: {
        primary: "#0c1d38",
        secondary: "#000000",
        background: "#040e17",
        success: "#4CAF50",
        error: "#E53935",
        warning: "#FFA726",
      },
  	}
  },
};
