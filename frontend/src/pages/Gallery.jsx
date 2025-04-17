import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Title from "../components/Title";

const Gallery = () => {
  const images = [
    assets.p_patanjali,
    assets.k_patanjali,
    assets.news,
    assets.gsd_organics_self_work2,
    assets.gsd_organics_uses_compost_scaled,
    assets.painted_machine_automatic,
    assets.one,
    assets.two,
    assets.three,
    assets.four,
    assets.five,
    assets.six,
    assets.seven,
    assets.eight,
    assets.nine,
    assets.ten,
    assets.eleven,
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const openModal = (index) => {
    setActiveIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveIndex(null);
  };

  const showPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : (prev ?? 0) - 1));
  };

  const showNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : (prev ?? 0) + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      if (e.key === "ArrowLeft") showPrev();
      else if (e.key === "ArrowRight") showNext();
      else if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, activeIndex]);

  return (
    <>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"OUR"} text2={"GALLERY"} />
      </div>

      <div className="p-6 md:p-10 bg-white text-gray-800">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((imageUrl, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg cursor-pointer hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
              onClick={() => openModal(index)}
            >
              <img
                src={imageUrl}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-64 object-cover transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && activeIndex !== null && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300 opacity-100">
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition duration-300"
            >
              <X size={28} />
            </button>

            <button
              onClick={showPrev}
              className="absolute left-4 md:left-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition duration-300"
            >
              <ChevronLeft size={36} />
            </button>

            <img
              src={images[activeIndex]}
              alt="Fullscreen"
              className="max-w-full max-h-[85vh] rounded-3xl shadow-2xl transition-all duration-500 transform scale-95 opacity-100"
            />

            <button
              onClick={showNext}
              className="absolute right-4 md:right-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition duration-300"
            >
              <ChevronRight size={36} />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
