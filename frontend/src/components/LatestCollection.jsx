import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <motion.div
      className="my-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"PRODUCTS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Nature has a new story to tell — and it starts with our latest organic creations.
          Grown responsibly, harvested with care, and made for mindful living.
        </p>
      </div>

      {/* Rendering Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <NavLink
          to="/collection"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base font-semibold rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Explore All Products
          </button>
        </NavLink>
      </div>
    </motion.div>
  );
};

export default LatestCollection;
