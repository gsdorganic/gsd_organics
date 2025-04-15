import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 text-gray-800 w-full max-w-sm"
    >
      {/* Product Image with black border */}
      <div className="overflow-hidden rounded-lg border border-black">
        <img
          src={image[0]}
          alt={name}
          className="w-full h-64 object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-1">
        <p className="text-base font-semibold truncate">{name}</p>
        <p className="text-sm font-bold">
          {currency}
          {price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
