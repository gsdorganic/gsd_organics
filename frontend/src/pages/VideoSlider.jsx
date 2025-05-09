import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoSlider = () => {
  const videoLinks = [
    "https://www.youtube.com/embed/ypnfRxdTEIA?si=YbQl3_ybq0dMNRmI",
  "https://www.youtube.com/embed/QrGLnLzDBr0?si=KMyHTI8iy0yMdmcQ",
  "https://www.youtube.com/embed/yVu3elwRTrk?si=8NI4ieWMtlu8YVTY",
  "https://www.youtube.com/embed/ypnfRxdTEIA?si=JQbvkSJPHJj1zpp_",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Below 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Below 640px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
      🌿 Discover Our Organic Journey
      </h2>
      <Slider {...settings}>
        {videoLinks.map((link, index) => (
          <div key={index} className="px-2">
            <div className="aspect-video rounded-xl overflow-hidden shadow-md">
              <iframe
                className="w-full h-60 sm:h-72 lg:h-64"
                src={link}
                title={`YouTube video ${index}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoSlider;
