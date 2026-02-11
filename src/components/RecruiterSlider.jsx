import React from "react";
import { motion } from "framer-motion";
const logos = [
  "/recruiters/10001.jpg",
  "/recruiters/10002.jpg",
  "/recruiters/10003.jpg",
  "/recruiters/10004.jpg",
  "/recruiters/10005.jpg",
  "/recruiters/10006.jpg",
  "/recruiters/10007.jpg",
  "/recruiters/10008.jpg",
  "/recruiters/10009.jpg",
  "/recruiters/10010.jpg",
  "/recruiters/10011.jpg",
  "/recruiters/10012.jpg",
];

const doubledLogos = [...logos, ...logos];

export default function RecruiterSlider() {
  return (
    <div className="relative w-full bg-white py-10  px-4 max-w-7xl mx-auto">
          <motion.h2
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl md:text-3xl font-semibold tracking-wide text-center text-slate-700 mb-8"
                >
        Our Recruiters
                </motion.h2>
      {/* 🔥 Background Blurred Shape */}
      <div className="absolute -bottom-10 left-[30%] w-40 h-40 bg-red-500/20 rounded-full blur-3xl"></div>

      {/* (Optional) second blur for better design */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>

      {/* Slider Container */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {doubledLogos.map((logo, index) => (
        <div
  key={index}
  className="min-w-[220px] h-[160px] flex items-center justify-center  cursor-pointer
             bg-slate-100 backdrop-blur-xl border border-slate-200 
             rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)]
             hover:shadow-[0_6px_25px_rgba(0,0,0,0.1)]
             transition-all duration-300 px-6"
>
  <img
    src={logo}
    alt="recruiter logo"
    className="max-h-[100px] w-auto object-contain opacity-80 hover:opacity-100 transition"
  />
</div>

          ))}
        </motion.div>
      </div>
    </div>
  );
}
