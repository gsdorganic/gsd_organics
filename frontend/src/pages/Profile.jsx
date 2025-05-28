import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Navbarold from "../components/Navbarold"; // Importing the old Navbar component

const Profile = () => {
  const { user, userEmail } = useContext(ShopContext);

  return (
    <>
    <Navbarold />
    <div className="min-h-screen bg-white flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 max-w-2xl w-full space-y-8">
        {/* Header */}
        <div className="flex items-center gap-4 flex-col sm:flex-row text-center sm:text-left">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-3xl font-bold text-green-700 shadow-inner">
            {user?.charAt(0) || "U"}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-green-800">Welcome, {user}!</h2>
            <p className="text-gray-600">{userEmail}</p>
            <p className="text-sm text-green-600 mt-1">Together, let’s grow naturally 🌱</p>
          </div>
        </div>

   

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-green-700 mb-2">About GSD Organics</h3>
          <p className="text-gray-700 leading-relaxed">
            We believe in purity, sustainability, and nourishment from the soil up.
            As part of our community, you support responsible farming and eco-conscious
            living. Every purchase helps build a greener future.
          </p>
        </div>

        {/* Impact */}
        <div>
          <h3 className="text-lg font-semibold text-green-700 mb-2">Your Impact</h3>
          <p className="text-gray-700 leading-relaxed">
            Thanks to your support, GSD Organics has been able to support over <span className="font-semibold text-green-800">150+ farmers</span>,
            reduce over <span className="font-semibold text-green-800">5,000 kg of chemical usage</span>,
            and promote <span className="font-semibold text-green-800">clean soil & food</span> in communities.
          </p>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-lg font-semibold text-green-700 mb-2">Our Core Values</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>100% organic and chemical-free production</li>
            <li>Empowering sustainable agriculture</li>
            <li>Community-driven growth</li>
            <li>Transparency and integrity</li>
          </ul>
        </div>

        {/* Contact Support */}
        <div className="bg-green-700 text-white rounded-2xl p-6 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-1">Need help with something?</h4>
            <p className="text-sm opacity-90">Our support team is here for you 24/7.</p>
          </div>
          <a
            href="mailto:gsdorganic@gmail.com"
            className="bg-white text-green-700 font-medium px-4 py-2 rounded-xl hover:bg-green-100 transition"
          >
            Contact Support
          </a>
        </div>

        {/* Footer */}
        <div className="text-sm text-center text-gray-500 pt-4">
          Thank you for growing with{" "}
          <span className="font-semibold text-green-700">GSD Organics</span> 🌿
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;
