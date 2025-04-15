import { BsRecycle } from "react-icons/bs";
import { FaLeaf } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 bg-white">
      {/* Sustainable Practices */}
      <div className="flex flex-col items-center">
        <BsRecycle className="text-green-600 text-4xl mb-5" />
        <p className="font-semibold">Sustainable Practices</p>
        <p className="text-gray-400">
        From farm to finish, we prioritize nature-friendly practices.
        </p>
      </div>

      {/* Premium Quality */}
      <div className="flex flex-col items-center">
        <FaLeaf className="text-green-700 text-4xl mb-5" />
        <p className="font-semibold">Premium Quality Products</p>
        <p className="text-gray-400">
          Each batch is tested for purity and performance.
        </p>
      </div>

      {/* Customer Support */}
      <div className="flex flex-col items-center">
        <MdSupportAgent className="text-green-600 text-4xl mb-5" />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400">We provide 24/7 customer support.</p>
      </div>
    </div>
  );
};

export default OurPolicy;
