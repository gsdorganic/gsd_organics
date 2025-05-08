import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { assets } from "../assets/assets";

const testimonials = [
  {
    name: "Satyam Rattan",
    role: "Organic Farmer",
    message:
      "GSD Organics has started the revolutionary work of preparing Vermi Compost as an organic manure for farmers - the backbone of India. I have myself visited GSD Organics site. I witnessed great work by the whole team. Watching Partyaksh Sharma Ji, who manages GSD Organics, himself on the Vermi Compost field with full commitment, full energy, positive mindset & taking initiatives himself was most the satisfying aspect of GSD Organics for me. So, believe me & don't hesitate even once to buy high quality Organic Manure (जैविक खाद) from GSD Organics.",
    image: assets.Satyam,
  },
  {
    name: "Satish Diljeet",
    role: "Organic Farmer",
    message:"Veemicompost is in good quality. They provide sieving machine also in all india. This machine is very useful for sieve vermicompost.👌👌",
    image: assets.satish,
  },
  {
    name: "Deepak Singh",
    role: "Home Gardener",
    message:
      "Gsd organics vermicompost is a very good quality fertilizer. I also suggest you all to buy fertilizers from GSD organics only. Thankyou gsd organics for providing best quality vermicompost.",
    image: assets.deepak,
  },
  {
    name: "Tek Chand",
    role: "Agriculturalist",
    message:
      "Vermicompost is in Good Quality. Thankyou Gsd organics for providing best Quality vermicompost.",
    image: assets.tek,
  },
];

const Testimonials = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section
      className={`py-16 bg-white transition-opacity duration-1000 ease-in-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-green-700">
        What People Say
      </h2>
      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
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
              <div className="bg-white m-2 p-6 h-full min-h-[320px] max-h-[320px] flex flex-col items-center text-center rounded-2xl shadow-md">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mb-3"
                />

                <div className="text-gray-700 italic mb-3 overflow-y-auto max-h-[100px] px-2 scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-200">
                  "{testimonial.message}"
                </div>

                <h4 className="font-semibold text-lg mt-auto">
                  {testimonial.name}
                </h4>
                <span className="text-sm text-gray-500">{testimonial.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="swiper-pagination-custom mt-8 flex justify-center"></div>
      </div>
    </section>
  );
};

export default Testimonials;
