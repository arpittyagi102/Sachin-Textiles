'use client'
import { useState,useEffect } from "react";

export default function Carousel({ items }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
  
    const nextSlide = () => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prev) =>
        prev === 0 ? items.length - 1 : prev - 1
      );
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 4000); 
    
        return () => clearInterval(interval);
    }, [items.length]);
  
    return (
      <div className="relative w-full overflow-x-clip mb-[-10%] px-4">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)`, animationDelay: '4000' }}
        >
          {items.map((item, index) => (
            <div key={index} className="min-w-full">
              <img src={item} alt={`Slide ${index}`} className={`${index!=0 && "mt-[2%]"} w-full h-auto rounded-xl`}/>
            </div>
          ))}
        </div>

        <button onClick={prevSlide} className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded opacity-50">
            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="inherit" className="stroke-current transform rotate-180">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                    <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                </g>
            </svg>
        </button>

        <button onClick={nextSlide} className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded opacity-50">
            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="inherit" className="stroke-current">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                    <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> 
                </g>
            </svg>
        </button>

        {/* <div className="overlay absolute right-0 -top-8">
            <Image src="/images/overlay.png" alt="overlay" height="900" width="900"/>
        </div> */}

        {/* <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-50">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full bg-gray-800 ${
                index === currentIndex ? "bg-white" : ""
              }`}
            />
          ))}
        </div> */}
      </div>
    );
  };

  interface CarouselProps {
    items: string[];  // Assuming the items are URLs of images (strings)
  }