import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const slides = [
  { image: assets.earth, text: "Organic Living" },
  { image: assets.earth2, text: "Naturally Nourished" },
  { image: assets.earth3, text: "Grown with Care" },
  { image: assets.earth4, text: "Sustainable Choices" },
  { image: assets.earth5, text: "Pure, Honest & Healthy" },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row border border-gray-300 overflow-hidden">
      {/* Left Side - Text */}
      <motion.div
        key={`text-${index}`}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 px-4"
      >
        <div className="text-[#414141] text-center sm:text-left w-full max-w-[500px]">
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR MOTIVE</p>
          </div>

          <h1 className="prata-regular text-3xl lg:text-5xl leading-relaxed min-h-[80px]">
            {slides[index].text}
          </h1>

          <div className="flex items-center justify-center sm:justify-start gap-2 mt-3">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        key={`image-${index}`}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="w-full sm:w-1/2 h-[350px] sm:h-[450px] relative bg-white"
      >
        <img
          src={slides[index].image}
          alt="hero"
          className="absolute w-full h-full object-cover rounded"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
