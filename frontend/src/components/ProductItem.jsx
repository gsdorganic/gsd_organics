import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 text-gray-800 w-full max-w-sm">
      <Link
        to={`/product/${id}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label={`View details of ${name}`}
      >
        <div className="overflow-hidden rounded-lg border border-green-600">
          <img
            src={image[0]}
            alt={name}
            loading="lazy"
            className="w-full h-64 object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="mt-4 space-y-1">
          <h2 className="text-base font-semibold truncate">{name}</h2>
          <p className="text-sm font-bold">
            {currency}
            {price}
          </p>
        </div>
      </Link>
    </article>
  );
};

export default ProductItem;
