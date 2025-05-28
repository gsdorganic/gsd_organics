import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import Navbarold from "../components/Navbarold";

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

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === parseInt(id));

  return (
    <>
    <Navbarold />
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
    <section className="bg-white min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto backdrop-blur-md bg-white/60 border border-gray-200 shadow-xl rounded-3xl p-8 md:p-12 transition duration-300 ease-in-out">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-200 transition"
        >
          ← Back to Blogs
        </button>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-6">
          {blog?.title}
        </h1>

        {/* Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
          <img
            src={blog?.image}
            alt={blog?.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap justify-between text-sm text-gray-600 mb-6">
          <span className="bg-green-100 text-green-800 px-4 py-1 rounded-full font-medium">
            ✍️ {blog?.author}
          </span>
          <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded-full">
            📅 {blog?.date}
          </span>
        </div>

        {/* Content */}
        <p className="text-lg text-gray-700 leading-relaxed tracking-wide">
          {blog?.description}
        </p>
      </div>
    </section>
    </div>
    </>
  );
};

export default BlogDetailPage;
