"use client";

import { useState } from "react";
import Image from "next/image";

const Modal = ({ image, onClose }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = image.src;
    link.download = image.alt.replace(/\s+/g, "_") + ".jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <button
          onClick={handleDownload}
          className="absolute bottom-4 right-4 bg-neutral-800 hover:bg-neutral-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Download
        </button>
      </div>
    </div>
  );
};

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: "/wedding.jpg",
      alt: "Wedding Photo 1",
      width: 400,
      height: 600,
      category: "Wedding",
    },
    {
      src: "/event.jpg",
      alt: "Event Photo 1",
      width: 400,
      height: 400,
      category: "Event",
    },
    {
      src: "/newborn.jpg",
      alt: "Newborn Photo 1",
      width: 400,
      height: 500,
      category: "Newborn",
    },
    {
      src: "/family.jpg",
      alt: "Family Photo 1",
      width: 400,
      height: 300,
      category: "Family",
    },
    {
      src: "/wedding.jpg",
      alt: "Wedding Photo 2",
      width: 400,
      height: 700,
      category: "Wedding",
    },
    {
      src: "/engagement.jpg",
      alt: "Engagement Photo 1",
      width: 400,
      height: 450,
      category: "Engagement",
    },
    {
      src: "/wedding.jpg",
      alt: "Wedding Photo 3",
      width: 400,
      height: 700,
      category: "Wedding",
    },
    {
      src: "/event.jpg",
      alt: "Event Photo 2",
      width: 400,
      height: 400,
      category: "Event",
    },
    {
      src: "/newborn.jpg",
      alt: "Newborn Photo 2",
      width: 400,
      height: 700,
      category: "Newborn",
    },
    {
      src: "/family.jpg",
      alt: "Family Photo 2",
      width: 400,
      height: 300,
      category: "Family",
    },
    {
      src: "/wedding.jpg",
      alt: "Wedding Photo 4",
      width: 400,
      height: 700,
      category: "Wedding",
    },
    {
      src: "/engagement.jpg",
      alt: "Engagement Photo 2",
      width: 400,
      height: 700,
      category: "Engagement",
    },
  ];

  const categories = [
    "All",
    "Wedding",
    "Event",
    "Newborn",
    "Family",
    "Engagement",
  ];

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => new Set(prev).add(index));
  };

  return (
    <section id="gallery" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl rangile md:text-5xl font-bold text-neutral-800 mb-4">
            Gallery
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            A collection of my favorite moments captured
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-neutral-800 text-white shadow-lg"
                  : "bg-white text-neutral-700 hover:bg-neutral-100 shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filteredImages.map((image, index) => (
            <div key={index} className="break-inside-avoid mb-4">
              <div
                className={`relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer ${
                  loadedImages.has(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  onLoad={() => handleImageLoad(index)}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-sm font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
        )}
      </div>
    </section>
  );
}
