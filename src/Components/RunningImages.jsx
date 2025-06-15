import React, { useState, useEffect } from 'react';
import sachinImage from '../assets/sport sachin background image.jpg';
import educationImage from "../assets/Education background image.avif"; 
import flag from '../assets/background flag.jpg';
import technology from "../assets/Technology background image.avif";
import ManmohanSingImage from "../assets/Manmohan singh image.jpg";

const RunningImages = () => {
  const images = [sachinImage, educationImage, flag, technology, ManmohanSingImage];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full  mt-4 overflow-hidden h-[300px] relative ">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`slide-${index}`}
          className={`w-full h-full object-contain rounded shadow-lg absolute transition-all duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

export default RunningImages;
