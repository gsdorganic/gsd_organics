import React from "react";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";

const blogs = [
  {
    id: 1,
    title: "The Power of Organic Farming",
    content:
      "Organic farming promotes a healthy environment by avoiding the use of harmful pesticides and fertilizers. It also supports biodiversity, improves soil health, and helps in sustainable farming practices.",
    image: assets.blog1,
    date: "April 12, 2025",
    author: "Hariom Sharma",
  },
  {
    id: 2,
    title: "Vermicompost: Nature’s Fertilizer",
    content:
      "Vermicompost is the result of organic matter breaking down in the presence of earthworms. This method produces a nutrient-rich fertilizer that promotes plant growth and soil health without harming the environment.",
    image: assets.gsd_organics_uses_compost_scaled,
    date: "April 10, 2025",
    author: "Vishal Sharma",
  },
  {
    id: 3,
    title: "Gau Seva and Sustainability",
    content:
      "By caring for cows and using cow-based products, we not only ensure their well-being but also support a sustainable agricultural system. Cow dung, for example, can be used to produce natural fertilizers and energy.",
    image: assets.news,
    date: "April 5, 2025",
    author: "GSD Team",
  },
  {
    id: 4,
    title: "Why CSR Should Support Rural Health",
    content:
      "Rural health is often underfunded. CSR initiatives focusing on rural health can bridge the gap, ensuring quality healthcare reaches those in remote areas. This can help in improving public health and saving lives.",
    image: "https://source.unsplash.com/featured/?hospital,India",
    date: "March 28, 2025",
    author: "Rohit Verma",
  },
];

const BlogDetailPage = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  return (
    <section className="bg-white min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto backdrop-blur-md bg-white/60 border border-gray-200 shadow-xl rounded-3xl p-8 md:p-12 transition duration-300 ease-in-out">
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
          {blog?.content}
        </p>
      </div>
    </section>
  );
};

export default BlogDetailPage;
