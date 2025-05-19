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
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[40vh] sm:h-[80vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].image}
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.1, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={slides[index].image}
            alt="Slide"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Animated Text */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`text-${index}`}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -30, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
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
