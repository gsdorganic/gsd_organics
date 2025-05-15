import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    <div className="w-full max-w-7xl mx-auto my-4 px-2 sm:px-6">
      <div className="flex flex-col sm:flex-row items-center border border-gray-200 bg-white shadow-lg rounded-xl overflow-hidden">
        
        {/* Left Side - Text */}
        <motion.div
          key={`text-${index}`}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="w-full sm:w-1/2 px-6 py-6 sm:py-10 text-center sm:text-left"
        >
          <p className="text-green-600 font-semibold text-xs sm:text-sm tracking-wide mb-2">
            OUR MOTIVE
          </p>

          <h1 className="prata-regular text-2xl sm:text-3xl md:text-4xl text-[#e97d1a] font-bold leading-tight mb-4 min-h-[70px]">
            {slides[index].text}
          </h1>

          <div className="flex justify-center sm:justify-start">
            <NavLink
              to="/collection"
              className="bg-green-600 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full hover:bg-green-700 transition duration-300"
            >
              SHOP NOW
            </NavLink>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          key={`image-${index}`}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="w-full sm:w-1/2 h-[220px] xs:h-[260px] sm:h-[400px] md:h-[450px] relative"
        >
          <img
            src={slides[index].image}
            alt="Hero Slide"
            className="absolute w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
