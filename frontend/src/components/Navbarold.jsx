import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState, useEffect, useRef } from "react";
import { ShopContext } from "../context/ShopContext";
import { motion, AnimatePresence } from "framer-motion";
// import WhatsAppButton from "./WhatsAppButton";

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

  // Close profile dropdown when clicked outside
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
  }

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
    <motion.div
      className="flex items-center justify-between px-5 font-medium sticky top-0 bg-white z-40"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Logo */}
      <Link to="/" onClick={scrollToTop}>
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
          <NavLink onClick={scrollToTop} key={link.path} to={link.path} className="flex flex-col items-center gap-1 hover:text-green-700">
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

        {/* Profile Icon & Dropdown */}
        <div className="group relative" ref={profileRef}>
          <div className={`flex flex-col justify-center items-center cursor-pointer ${token ? "mr-[-12px]" : ""}`}>
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
            className="w-5 cursor-pointer"
          />
          
          <p className={`text-sm text-[#e97d19]`}>{user.split(" ")[0]}</p>
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

        {/* Cart Icon */}
        <Link to="/cart" className="relative" onClick={scrollToTop}>
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-[#e97d19] text-white aspect-square rounded-full text-[8px]">
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
                { path: "/collection", label: "PRODUCTS" },
                { path: "/Gallery", label: "GALLERY" },
                { path: "/about", label: "ABOUT" },
                { path: "/blog", label: "BLOGS" },
                { path: "/contact", label: "CONTACT" },
              ].map((link) => (
                <NavLink
                  key={link.path}
                  onClick={() => {setVisible(false); scrollToTop()}}
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
      {/* <WhatsAppButton /> */}
    </motion.div>
    </div>
  );
};

export default Navbar;