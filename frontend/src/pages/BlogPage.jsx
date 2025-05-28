import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { motion, useInView } from "framer-motion";
import Title from "../components/Title";
import Navbarold from "../components/Navbarold"; // Importing the old Navbar component
// import Navbar from "../components/Navbar";

const blogs = [
  {
    id: 1,
    title: "The Magic of Vermicompost for Home and Farm",
    description:
      "Discover how our high-quality vermicompost enhances soil fertility, improves crop yields, and reduces dependency on chemical fertilizers.",
    image: assets.blog1,
    date: "May 10, 2025",
    author: "Hariom Sharma",
  },
  {
    id: 2,
    title: "Transforming Waste: The Journey of Dung to Hawan Lakdi",
    description:
      "A behind-the-scenes look at how cow dung is transformed into eco-friendly, smokeless Hawan Lakdi used in spiritual rituals and farming.",
    image: assets.gsd_organics_uses_compost_scaled,
    date: "May 5, 2025",
    author: "Sapna",
  },
  {
    id: 3,
    title: "From Cow Dung to Prosperity: Inside the Dung Cake Process",
    description:
      "Learn how traditional dung cakes, made using age-old methods, are providing sustainable fuel and revitalizing rural economies.",
    image: assets.news,
    date: "April 29, 2025",
    author: "GSD Team",
  },
  {
    id: 4,
    title: "Sifting for Purity: Why Seiving Matters in Organic Compost",
    description:
      "Explore how our advanced seiving machines ensure only the purest, most nutrient-rich compost reaches your garden or field.",
    image: assets.gsd555,
    date: "April 22, 2025",
    author: "Rohit Verma",
  },
  {
    id: 5,
    title: "Grinding Green: How Our Machines Revolutionize Compost Prep",
    description:
      "Our grinding machines break down organic matter efficiently, speeding up decomposition and ensuring a uniform compost blend.",
    image: assets.gsd666,
    date: "April 15, 2025",
    author: "Sapna",
  },
  {
    id: 6,
    title: "Organic Living: GSD Organics’ Role in India’s Green Future",
    description:
      "How our products support chemical-free agriculture, healthy living, and a return to sustainable, dharmic practices.",
    image: assets.gsd888,
    date: "April 8, 2025",
    author: "Hariom Sharma",
  },
];


const BlogPage = () => {
  return (
    <>
    <Navbarold />
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6  ">
        <Title text1={"OUR"} text2={"BLOGS"} /></h1>
        <p className="text-center max-w-2xl mx-auto text-gray-600 mb-12">
          Dive into our articles to learn more about organic farming, vermicomposting, sustainability, and our mission at Gau Seva Dham.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => {
            const ref = useRef(null);
            const inView = useInView(ref, { once: true, margin: "-100px" });

            return (
              <motion.div
                ref={ref}
                key={blog.id}
                className="bg-white shadow-md rounded-2xl overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                <motion.img
                  src={blog.image || "https://via.placeholder.com/400x300"}
                  alt={blog.title}
                  className="h-48 w-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{blog.description}</p>
                  <div className="text-gray-500 text-xs">
                    <p>{blog.date}</p>
                    <p>By {blog.author}</p>
                  </div>
                  <Link to={`/blog/${blog.id}`} className="text-blue-500 mt-4 hover:underline">
                    Read More
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
    </div>
    </>
  );
};

export default BlogPage;
