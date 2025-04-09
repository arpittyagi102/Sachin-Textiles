"use client";
import React, { useEffect, useRef } from "react";
import { CLIENTS } from "@/constants";
import "./clients.css";

export default function ClientsScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollSpeed = 15; // Adjust speed (lower = faster)

  useEffect(() => {
    const scrollContent = scrollRef.current;
    if (scrollContent) {
      const duplicateContent = scrollContent.innerHTML;
      scrollContent.innerHTML += duplicateContent; // Duplicate images for seamless scrolling

      // Apply CSS animation
      scrollContent.style.setProperty('--scroll-speed', `${scrollSpeed}s`);
    }
  }, [scrollSpeed]);

  const handleMouseEnter = () => {
    if (scrollRef.current) {
      scrollRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    if (scrollRef.current) {
      scrollRef.current.style.animationPlayState = 'running';
    }
  };

//   const handleImageClick = (categoryName: string) => {
//     console.log(`${categoryName} clicked`);
//     // Use router.push to navigate to a new route
//     router.push(`/category/${categoryName}`);
//   };

  return (
    <section className="explore mb-10" id="menu">
      <div className="container">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-5">Our Clients</h1>

        {/* Infinite Scroll Container */}
        <div
          className="scroll-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="scroll-content flex gap-[2%]" ref={scrollRef}>
            {CLIENTS.map((client) => (
                <img
                    key={client}
                    src={client}
                    alt="clients"
                    className="w-[31%] md:w-[14.66666%] cursor-pointer object-contain"
                />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

