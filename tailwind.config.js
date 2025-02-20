/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"], // ระบุว่า Tailwind จะทำงานกับไฟล์ HTML ในโฟลเดอร์นี้
  theme: {
    extend: {
      screens: {
        'xs': '375px', // เพิ่ม Breakpoint ใหม่ที่ 375px
      },
      colors: {
        primary: "#FF7342", // สีส้ม
        secondary: "#FFD167", // สีเหลือง
        third: "#FFFFFF", // สีพื้นหลัง 1
        forth: "#F9F9F9", // สีพื้นหลัง 2
        fifth: "#3B3B3B", // สีดำเข้ม
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      borderRadius: {
        base: "8px",
      },
      padding: {
        base: "16px",
      },
    },
  },
  plugins: [],
};
