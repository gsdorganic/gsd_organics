import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import NewsletterBox from "../components/NewsletterBox";
import OurPolicy from "../components/OurPolicy";
import Testimonials from "../components/Testimonials";
import { assets } from "../assets/assets";
import { LuTreePalm } from "react-icons/lu";
import WhatsAppButton from "../components/WhatsAppButton";

const Home = () => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    navigate("/about");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Latest Collection */}
      {/* <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
        className="px-4 py-10 md:px-12 lg:px-16"
      > */}
        <LatestCollection />
      {/* </motion.section> */}

      {/* Vermicompost Benefits */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
        className="flex flex-col md:flex-row items-center justify-center gap-12 p-6 md:p-12"
      >
        {/* Image Block */}
        <div className="w-full md:w-1/2 relative">
          <div className="absolute -top-6 -left-6 z-10 w-24 h-24 md:w-28 md:h-28 rounded-full bg-white/30 backdrop-blur-md border border-white/40 
              flex flex-col items-center justify-center text-green-900 font-extrabold text-xs md:text-sm shadow-[6px_6px_25px_rgba(0,0,0,0.25)] 
              transform -rotate-6 hover:rotate-0 transition-all duration-300 ease-in-out 
              before:content-[''] before:absolute before:inset-0 before:rounded-full before:shadow-[0_0_25px_6px_rgba(34,197,94,0.4)] before:z-[-1]">
            <span className="text-xl md:text-2xl leading-tight">5+</span>
            <span className="text-[10px] md:text-xs text-center leading-tight">Years Of<br />Experience</span>
          </div>
          <img
            className="w-full rounded-2xl shadow-lg object-cover z-0"
            src={assets.organic}
            alt="Vermicompost Organic Fertilizer"
          />
        </div>

        {/* Text Block */}
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="text-3xl font-bold text-green-800 flex items-center gap-2">
            <LuTreePalm /> Vermicompost Benefits & Solutions
          </h3>
          <p className="text-lg text-gray-700">
            We focus on providing the best organic fertilizers tailored to a wide range of crops and farming styles:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-800 font-medium">
            <li>Fruit trees like <span className="font-semibold text-green-700">apple, kinnow, pomegranate</span>, and guava.</li>
            <li>Vegetables including <span className="font-semibold text-green-700">potato, garlic, chilli, cucumbers</span>, tomatoes, and more.</li>
            <li>Cash crops like <span className="font-semibold text-green-700">wheat, rice, sugarcane</span>.</li>
            <li>Perfect for <span className="font-semibold text-green-700">polyhouse</span> and <span className="font-semibold text-green-700">greenhouse</span> farming.</li>
          </ol>
          <img
            className="relative bottom-0 md:bottom-0 xl:bottom-[-55px] right-0"
            src={assets.project_bg}
            alt=""
          />
        </div>
      </motion.section>

      {/* About GSD Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
        className="bg-white py-12 px-6 md:px-16 rounded-2xl shadow-md"
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-green-700 tracking-wide">
            <span>ABOUT </span>
            <span >GSD</span>
            <span > ORGANICS</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <span className="font-semibold">GSD ORGANICS</span> started in the summer of
            <span className="font-medium text-green-700"> 2020</span>. Since then, we’ve grown into a trusted name in organic farming.
            We produce premium quality, 100% organic <span className="font-semibold">vermicompost</span> that enriches soil and strengthens your plants.
          </p>
          <button
            onClick={handleReadMoreClick}
            className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition duration-300 shadow-sm"
          >
            Read More
          </button>
        </div>

        <div className="text-right mt-8 text-gray-600 italic font-medium">
          – T.R. SHARMA, OWNER
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Testimonials />
      </motion.section>

      {/* Our Policy */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <OurPolicy />
      </motion.section>

      {/* Newsletter */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <NewsletterBox />
      </motion.section>
    </div>
  );
};

export default Home;
