import { assets } from "../assets/assets";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaPhone } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Footer = () => {
  return (
    <div className="px-4 md:px-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Logo and Description */}
        <div>
          <NavLink to={'/'} onClick={scrollToTop}>
          <img src={assets.gsdorganics_Logo} className="mb-5 w-24" alt="Logo" /></NavLink>
          <p className="w-full md:w-2/3 text-gray-600">
            GSD Organics is dedicated to delivering the highest quality organic products
            while promoting sustainable and ethical farming practices.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <NavLink to="/" onClick={scrollToTop}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={scrollToTop}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/Gallery" onClick={scrollToTop}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={scrollToTop}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Info + Social Icons */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600 mb-4">
            <li>
              <a
                href="tel:+919034344200"
                className="flex items-center justify-start gap-2 hover:text-black transition-colors"
              >
                <FaPhone /> +91 - 9034344200
              </a>
            </li>
            <li>
              <a
                href="mailto:gsdorganic@gmail.com"
                className="flex items-center justify-start gap-2 hover:text-black transition-colors"
              >
                <TfiEmail /> gsdorganic@gmail.com
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mt-4">
            <a
              href="https://www.facebook.com/gsd.organics?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877F2] border border-[#1877F2] rounded-full p-2 hover:bg-[#1877F2]/10 transition-transform duration-300 hover:scale-110"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/gsd_organics/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E4405F] border border-[#E4405F] rounded-full p-2 hover:bg-[#E4405F]/10 transition-transform duration-300 hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com/GsdOrganic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1DA1F2] border border-[#1DA1F2] rounded-full p-2 hover:bg-[#1DA1F2]/10 transition-transform duration-300 hover:scale-110"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/gsd-organic-products-879323353/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077B5] border border-[#0077B5] rounded-full p-2 hover:bg-[#0077B5]/10 transition-transform duration-300 hover:scale-110"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://youtube.com/@gsdorganicproducts4614?si=s6T6omcZn69rJ7Ce"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF0000] border border-[#FF0000] rounded-full p-2 hover:bg-[#FF0000]/10 transition-transform duration-300 hover:scale-110"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center text-gray-500">
          © 2025 gsdorganic.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
