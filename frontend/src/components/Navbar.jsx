import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState, useEffect, useRef } from "react";
import { ShopContext } from "../context/ShopContext";
import { motion, AnimatePresence } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const profileRef = useRef(null);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
    setUser,
    user,
    setUserEmail,
  } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userEmail");
    setUser("");
    setUserEmail("");
    setToken("");
    setCartItems({});
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const mobileMenuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
    exit: { x: "100%" },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Navbar */}
      <motion.div
        className="backdrop-blur-md bg-white/80 border border-white/40 shadow-md 
                   rounded-full fixed top-4 left-1/2 transform -translate-x-1/2 
                   w-[70%] max-w-6xl h-20 flex items-center justify-between px-6 
                   font-medium z-50 mt-10"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Logo */}
        <Link to="/" onClick={scrollToTop}>
          <img src={assets.gsdorganics_Logo} alt="Logo" className="w-16" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          {[
            { path: "/", label: "HOME" },
            { path: "/collection", label: "PRODUCTS" },
            { path: "/about", label: "ABOUT" },
            { path: "/Gallery", label: "GALLERY" },
            { path: "/blog", label: "BLOGS" },
            { path: "/contact", label: "CONTACT" },
          ].map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={scrollToTop}
              className="flex flex-col items-center gap-1 hover:text-green-700"
            >
              <p>{link.label}</p>
            </NavLink>
          ))}
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Search */}
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
          <div className="group relative" ref={profileRef}>
            <div
              className={`flex flex-col justify-center items-center cursor-pointer ${
                token ? "mr-[-8px]" : ""
              }`}
            >
              <img
                onClick={() => {
                  scrollToTop();
                  if (!token) {
                    navigate("/login");
                  } else {
                    setShowProfileOptions((prev) => !prev);
                  }
                }}
                src={assets.profile_icon}
                alt="Profile"
                className="w-5"
              />
              <p className="text-sm text-[#e97d19]">{user.split(" ")[0]}</p>
            </div>
            {token && (
              <div
                className={`absolute right-0 pt-4 z-50 ${
                  showProfileOptions ? "block" : "hidden"
                } group-hover:block`}
              >
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                  <p
                    onClick={() => {
                      setShowProfileOptions(false);
                      navigate("/profile");
                    }}
                    className="cursor-pointer hover:text-black"
                  >
                    My Profile
                  </p>
                  <p
                    onClick={() => {
                      setShowProfileOptions(false);
                      navigate("/orders");
                    }}
                    className="cursor-pointer hover:text-black"
                  >
                    Orders
                  </p>
                  <p
                    onClick={() => {
                      setShowProfileOptions(false);
                      logout();
                    }}
                    className="cursor-pointer hover:text-black"
                  >
                    Logout
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Cart */}
          <Link to="/cart" onClick={scrollToTop} className="relative">
            <img src={assets.cart_icon} className="w-5" alt="Cart" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-[#e97d19] text-white aspect-square rounded-full text-[8px]">
              {getCartCount()}
            </p>
          </Link>

          {/* Mobile Menu Icon */}
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
                  <img
                    src={assets.dropdown_icon}
                    className="h-4 rotate-180"
                    alt="Back"
                  />
                  <p>Back</p>
                </div>
                {[
                  { path: "/", label: "HOME" },
                  { path: "/collection", label: "PRODUCTS" },
                  { path: "/Gallery", label: "GALLERY" },
                  { path: "/about", label: "ABOUT" },
                  { path: "/blog", label: "BLOGS" },
                  { path: "/contact", label: "CONTACT" },
                ].map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => {
                      setVisible(false);
                      scrollToTop();
                    }}
                    className="py-4 pl-6 border-b text-lg bg-white hover:bg-gray-100"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* WhatsApp Button Fixed to Bottom Left */}
      <div className="fixed bottom-4 left-4 z-50">
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Navbar;
