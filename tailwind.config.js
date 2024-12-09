/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_includes/**/*.{md,markdown,liquid,html}",
    "./_layouts/**/*.{md,markdown,liquid,html}",
    "./_pages/**/*.{md,markdown,liquid,html}",
    "./_posts/**/*.{md,markdown,liquid,html}",
    "./assets/js/*.*"
  ],
  theme: {
    extend: {
      colors: {
        green: {
          terminal: "#4af626"
        },
        red: {
          terminal: "#f6262e"
        }
      }
    }
  }
};
