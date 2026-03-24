import { useEffect, useState } from 'react';
import Image from 'next/image';

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
   
    <div className='w-full h-full flex flex-col justify-center '>
        {/* Main Image Container */}
        <div className='relative w-70 h-90 md:h-88 overflow-hidden'>
          <Image 
            src={HeroFrameData[currentIndex].image} 
            alt={`Slide ${currentIndex + 1}`} 
            fill 
            priority 
        
            className='object-contain scale-105 md:scale-110' 
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Indicators (Dots)  */}
        <div className='flex gap-5 items-center justify-center -mt-7.5 z-10 mb-2'>
            {HeroFrameData.map((_, index) => (
                <button 
                  key={index} 
                  type="button"
                  className={`transition-all duration-300 rounded-full cursor-pointer 
                    ${currentIndex === index ? "bg-[#dB4444] w-3 h-3 border-2 border-white" : "bg-gray-400 size-3"}`} 
                  onClick={() => setCurrentIndex(index)}
                />
            ))}
        </div>
    </div>
  );
}

export default Banner;