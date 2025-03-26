"use client";
import React, { useEffect, useRef } from "react";
import { CATEGORIES } from "@/constants";
import { useRouter } from "next/navigation";
import "./explore.css";

const ExploreScroll = () => {
  const router = useRouter();
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

  const handleImageClick = (categoryName: string) => {
    console.log(`${categoryName} clicked`);
    // Use router.push to navigate to a new route
    router.push(`/category/${categoryName}`);
  };

  return (
    <section className="explore mb-10" id="menu">
      <div className="container">

        {/* Infinite Scroll Container */}
        <div
          className="scroll-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="scroll-content flex gap-[2%]" ref={scrollRef}>
            {CATEGORIES.map((category) => (
                <img
                    key={category.name}
                    src={category.illustration}
                    alt={category.name}
                    className="w-[48%] sm:w-[31%] md:w-[18%] cursor-pointer"
                    onClick={() => handleImageClick(category.name)} // Handle click
                />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExploreScroll;
