'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageBannerProps {
  images: string[];
  interval?: number; // in milliseconds
}

const ImageBanner: React.FC<ImageBannerProps> = ({ images, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  if (images.length === 0) {
    return null; // Or a placeholder
  }

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Banner image ${index + 1}`}
          layout="fill"
          objectFit="cover"
          className={`transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Experience Justice with <span className="text-blue-400">NextCase</span>
        </h1>
      </div>
    </div>
  );
};

export default ImageBanner;
