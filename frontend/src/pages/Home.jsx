import { useNavigate } from "react-router-dom";
import BestSeller from "../components/BestSeller";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import NewsletterBox from "../components/NewsletterBox";
import OurPolicy from "../components/OurPolicy";

const Home = () => {
  const navigate = useNavigate();

  const handleReadMoreClick = () => {
    // Navigate to About page and scroll to top smoothly
    navigate('/about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />

      <div className="bg-white py-12 px-6 md:px-16 rounded-2xl shadow-md">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-green-700 tracking-wide">
            <span>ABOUT </span>
            <span className="text-gray-800">GSD</span>
            <span className="text-green-900"> ORGANICS</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <span className="font-semibold">GSD ORGANICS</span> started in the summer of 
            <span className="font-medium text-green-700"> 2020</span>. It has since grown into a trusted name in the organic farming industry. 
            We produce premium quality, 100% organic 
            <span className="font-semibold"> vermicompost</span> that enriches the soil and strengthens your plants. 
            Whether you're a home gardener or a large-scale farmer, our vermicompost is the one-step solution to all your plant problems.
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
      </div>

      <OurPolicy />
      <NewsletterBox />
    </div>
  );
};

export default Home;
