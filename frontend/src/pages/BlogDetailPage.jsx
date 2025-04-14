import React from "react";
import { useParams } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "The Power of Organic Farming",
    content:
      "Organic farming promotes a healthy environment by avoiding the use of harmful pesticides and fertilizers. It also supports biodiversity, improves soil health, and helps in sustainable farming practices.",
    image: "https://source.unsplash.com/featured/?organic,plant",
    date: "April 12, 2025",
    author: "Hariom Sharma",
  },
  {
    id: 2,
    title: "Vermicompost: Nature’s Fertilizer",
    content:
      "Vermicompost is the result of organic matter breaking down in the presence of earthworms. This method produces a nutrient-rich fertilizer that promotes plant growth and soil health without harming the environment.",
    image: "https://source.unsplash.com/featured/?soil,farming",
    date: "April 10, 2025",
    author: "Sapna Sharma",
  },
  {
    id: 3,
    title: "Gau Seva and Sustainability",
    content:
      "By caring for cows and using cow-based products, we not only ensure their well-being but also support a sustainable agricultural system. Cow dung, for example, can be used to produce natural fertilizers and energy.",
    image: "https://source.unsplash.com/featured/?cow,India",
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
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">{blog?.title}</h1>
        <div className="flex justify-center mb-6">
          <img src={blog?.image} alt={blog?.title} className="h-64 w-full object-cover rounded-xl" />
        </div>
        <div className="text-gray-600 mb-4">
          <p><strong>By:</strong> {blog?.author}</p>
          <p><strong>Date:</strong> {blog?.date}</p>
        </div>
        <p className="text-lg leading-relaxed">{blog?.content}</p>
      </div>
    </section>
  );
};

export default BlogDetailPage;
