import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  const mobileMenuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  return (
    <motion.div
      className="flex items-center justify-between px-5 font-medium sticky top-0 bg-white z-40"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Logo */}
      <Link to="/">
        <img src={assets.gsdorganics_Logo} alt="Logo" className="w-24" />
      </Link>

      {/* Desktop Nav Links */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {[
          { path: "/", label: "HOME" },
          { path: "/collection", label: "PRODUCTS" },
          { path: "/about", label: "ABOUT" },
          { path: "/Gallery", label: "GALLERY" },
          { path: "/blog", label: "BLOGS" },
          { path: "/contact", label: "CONTACT" },
        ].map((link) => (
          <NavLink key={link.path} to={link.path} className="flex flex-col items-center gap-1">
            <p>{link.label}</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        ))}
      </ul>

      {/* Right Icons */}
      <div className="flex items-center gap-6">
        {/* Search Icon */}
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className={`w-5 cursor-pointer transition-opacity duration-500 ${
            location.pathname.includes("collection")
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
          alt="Search"
        />

        {/* Profile */}
        <div className="group relative">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            src={assets.profile_icon}
            alt="Profile"
            className="w-5 cursor-pointer"
          />
          {token && (
            <div className="group-hover:block hidden absolute right-0 pt-4 z-50">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p onClick={() => navigate("/profile")} className="cursor-pointer hover:text-black">My Profile</p>
                <p onClick={() => navigate("/orders")} className="cursor-pointer hover:text-black">Orders</p>
                <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          )}
        </div>

        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Hamburger Icon */}
        <img
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu"
          onClick={() => setVisible(true)}
        />
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {visible && (
          <motion.div
            className="fixed top-0 right-0 w-full h-screen bg-white z-[9999]"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="flex flex-col text-gray-600 h-full">
              <div
                onClick={() => setVisible(false)}
                className="flex items-center gap-4 p-3 cursor-pointer"
              >
                <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="Back" />
                <p>Back</p>
              </div>
              {[
                { path: "/", label: "HOME" },
                { path: "/collection", label: "COLLECTION" },
                { path: "/Gallery", label: "GALLERY" },
                { path: "/about", label: "ABOUT" },
                { path: "/blog", label: "BLOGS" },
                { path: "/contact", label: "CONTACT" },
              ].map((link) => (
                <NavLink
                  key={link.path}
                  onClick={() => setVisible(false)}
                  className="py-2 pl-6 border"
                  to={link.path}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
