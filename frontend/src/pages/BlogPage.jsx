import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const blogs = [
  {
    id: 1,
    title: "The Power of Organic Farming",
    description:
      "Explore the benefits of switching to organic farming and how it supports both health and the environment.",
    image: assets.blog1,
    date: "April 12, 2025",
    author: "Hariom Sharma",
  },
  {
    id: 2,
    title: "Vermicompost: Nature’s Fertilizer",
    description:
      "Learn how vermicompost can enrich your soil and improve crop yields in the most eco-friendly way.",
    image: assets.gsd_organics_uses_compost_scaled,
    date: "April 10, 2025",
    author: "Sapna Sharma",
  },
  {
    id: 3,
    title: "Gau Seva and Sustainability",
    description:
      "How serving cows and using cow-based products contributes to a greener planet and spiritual wellness.",
    image: assets.news,
    date: "April 5, 2025",
    author: "GSD Team",
  },
  {
    id: 4,
    title: "Why CSR Should Support Rural Health",
    description:
      "A look at why CSR initiatives should focus more on rural hospitals like Gau Seva Dham for real impact.",
    image: "",
    date: "March 28, 2025",
    author: "Rohit Verma",
  },
  {
    id: 5,
    title: "Why CSR Should Support Rural Health",
    description:
      "A look at why CSR initiatives should focus more on rural hospitals like Gau Seva Dham for real impact.",
    image: "https://source.unsplash.com/featured/?hospital,India",
    date: "March 28, 2025",
    author: "Rohit Verma",
  },
  {
    id: 6,
    title: "Why CSR Should Support Rural Health",
    description:
      "A look at why CSR initiatives should focus more on rural hospitals like Gau Seva Dham for real impact.",
    image: "https://source.unsplash.com/featured/?hospital,India",
    date: "March 28, 2025",
    author: "Rohit Verma",
  },
];

const BlogPage = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10">Our Blog</h1>
        <p className="text-center max-w-2xl mx-auto text-gray-600 mb-12">
          Dive into our articles to learn more about organic farming, vermicomposting, sustainability, and our mission at Gau Seva Dham.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white shadow-md rounded-2xl overflow-hidden flex flex-col">
              <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600 text-sm mb-4 flex-grow">{blog.description}</p>
                <div className="text-gray-500 text-xs">
                  <p>{blog.date}</p>
                  <p>By {blog.author}</p>
                </div>
                <Link to={`/blog/${blog.id}`} className="text-blue-500 mt-4">Read More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
