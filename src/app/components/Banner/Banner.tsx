

import { useEffect, useState } from 'react';
import Image from 'next/image';

// Just store the strings here. 
// Note: Ensure these images are actually in your /public/images/ folder!
const HeroFrameData = [
  { id: 1, image: "/images/iphone1.svg" },
  { id: 2, image: "/images/iphone 1.jpg" },
  { id: 3, image: "/images/iphone 2.jpg" },
  { id: 4, image: "/images/iphone 3.jpg" },
  { id: 5, image: "/images/iphone 4.jpg" },
];

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === HeroFrameData.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='space-y-4 w-full max-w-230 mx-auto py-4'>
        {/* Main Image Container */}
        <div className='relative w-full h-80 overflow-hidden rounded-sm bg-black'>
          <Image 
            // We pull the string path from our data array
            src={HeroFrameData[currentIndex].image} 
            alt={`Slide ${currentIndex + 1}`} 
            fill 
            priority 
            className='size-12'
            sizes="w-20 h-auto"
          />
        </div>

        {/* Indicators (Dots) */}
        <div className='flex gap-3 items-center mb-3 justify-center'>
            {HeroFrameData.map((_, index) => (
                <button 
                  key={index} 
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer 
                    ${currentIndex === index ? "bg-red-500 w-6 h-3" : "bg-gray-400 size-3"}`} 
                  onClick={() => setCurrentIndex(index)}
                />
            ))}
        </div>
    </div>
  );
}

export default Banner;