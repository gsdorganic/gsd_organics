import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Ananya Sharma",
    role: "Organic Farmer",
    message:
      "GSD Organics products are amazing! My farm's yield has improved significantly. Highly recommended!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Rajeev Mehta",
    role: "CSR Manager, GreenGrow Ltd.",
    message:
      "Supporting Gau Seva Dham through CSR is a rewarding experience. Transparent, impactful, and meaningful work.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sneha Kapoor",
    role: "Home Gardener",
    message:
      "The vermicompost I got from GSD is pure magic for my garden. I’ve never seen such vibrant plants!",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "Amit Singh",
    role: "Agriculturalist",
    message:
      "From packaging to results, everything is top-notch. Trustworthy brand with real impact.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom", // Add a custom class to the pagination
          }}
          autoplay={{ delay: 4000 }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white m-2 p-8 h-full min-h-[320px] flex flex-col items-center text-center rounded-2xl shadow-md">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <p className="text-gray-700 italic mb-4 flex-grow">
                  "{testimonial.message}"
                </p>
                <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                <span className="text-sm text-gray-500">{testimonial.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Custom pagination container */}
        <div className="swiper-pagination-custom mt-8 flex justify-center"></div>
      </div>
    </section>
  );
};

export default Testimonials;
