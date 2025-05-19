import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const slides = [
  { image: assets.gsd222, text: "Organic Living" },
  { image: assets.earth2, text: "Naturally Nourished" },
  { image: assets.gsd333, text: "Grown with Care" },
  { image: assets.gsd444, text: "Sustainable Choices" },
  { image: assets.gsd555, text: "Pure, Honest & Healthy" },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // 5s gives a bit more breath for smoothness
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[40vh] sm:h-[80vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={`slide-${index}`}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[index].image}
            alt="Slide"
            className="w-full h-full object-cover transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={`text-${index}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
        >
          <p className="text-green-300 text-sm font-semibold tracking-wide mb-2">
            OUR MOTIVE
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold mb-6 drop-shadow-xl">
            {slides[index].text}
          </h1>
          <NavLink
            to="/collection"
            className="bg-green-600 hover:bg-green-700 transition duration-300 px-6 py-3 text-sm sm:text-base rounded-full shadow-lg"
          >
            SHOP NOW
          </NavLink>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Hero;
