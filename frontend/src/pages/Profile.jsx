import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { motion } from "framer-motion";

const Profile = () => {
  const { user, userEmail } = useContext(ShopContext);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 mt-[-90px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full text-left space-y-4"
      >
        <div>
          <p className="text-gray-600 text-sm">Name:</p>
          <h2 className="text-xl font-semibold text-gray-800">{user}</h2>
        </div>
        <div>
          <p className="text-gray-600 text-sm">Email:</p>
          <p className="text-md text-gray-700">{userEmail}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
