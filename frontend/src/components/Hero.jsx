import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="flex flex-col sm:flex-row border border-gray-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Left Side */}
      <motion.div
        className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR MOTIVE</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Organic Living
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </motion.div>

      {/* Hero Right Side */}
      <motion.img
        className="w-full sm:w-1/2"
        src={assets.earth}
        alt=""
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      />
    </motion.div>
  );
};

export default Hero;
