import { assets } from "../assets/assets";
import Title from "../components/Title";
import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";  // Import framer motion

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formEndpoint = "https://formspree.io/f/mjkyjvga";

    const res = await fetch(formEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: new FormData(e.target),
    });

    const result = await res.json();

    if (result.ok || res.status === 200) {
      toast.success("Message sent successfully! 🎉");
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="pt-14 px-4 md:px-10">
      {/* Title */}
      <div className="text-center mb-14">
        <Title text1="CONTACT" text2="US" />
      </div>

      {/* Info Section */}
      <motion.div
        className="flex flex-col md:flex-row gap-12 justify-center items-start mb-24"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          className="w-full md:max-w-sm rounded-xl shadow-xl object-cover"
          src={assets.organic}
          alt="GSD Store"
        />
        <div className="space-y-6 text-gray-800 w-full md:max-w-md">
          <h2 className="text-2xl font-bold">Our Store</h2>
          <p className="text-lg">
            NH 19, Mathura Road, <br />
            near GSD Animal Hospital, Hodal, Haryana 121106
          </p>
          <p className="text-lg">
            Tel: (455) 555-0134 <br />
            Email: admin@gsdorganic.com
          </p>
          <div>
            <h3 className="text-xl font-semibold mt-6 mb-2">
              Careers at GSD Organics
            </h3>
            <p className="mb-4">Explore opportunities and open roles.</p>
            <button className="bg-white border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 px-5 py-2 rounded-md font-medium shadow-sm">
              Explore Jobs
            </button>
          </div>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Get in Touch 💬
        </h3>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 shadow-xl rounded-xl border border-gray-100"
        >
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <label className="text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </motion.div>

          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <label className="text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@example.com"
              className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            />
          </motion.div>

          <motion.div
            className="col-span-1 md:col-span-2 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <label className="text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              placeholder="Write your message..."
              className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500 transition resize-none"
            ></textarea>
          </motion.div>

          <motion.div
            className="col-span-1 md:col-span-2 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <button
              type="submit"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg"
            >
              Send Message
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
