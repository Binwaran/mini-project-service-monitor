/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"], // ระบุว่า Tailwind จะทำงานกับไฟล์ HTML ในโฟลเดอร์นี้
    theme: {
      extend: {
        colors: {
          primary: "#4f46e5", // สีหลัก
          secondary: "#64748b", // สีรอง
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
  