"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import "./explore.css";

const ExploreScroll = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const scrollSpeed = 25; // Adjust speed (lower = faster)

    useEffect(() => {
        const scrollContent = scrollRef.current;
        if (scrollContent) {
            const duplicateContent = scrollContent.innerHTML;
            scrollContent.innerHTML += duplicateContent; // Duplicate images for seamless scrolling

            // Apply CSS animation
            scrollContent.style.setProperty('--scroll-speed', `${scrollSpeed}s`);
        }
    }, [scrollSpeed]);

    return (
        <section className="explore my-10" id="menu">
            <div className="container">

                {/* Infinite Scroll Container */}
                <div className="scroll-container">
                    <div className="scroll-content flex gap-[5%]" ref={scrollRef}>
                        {IMAGES.map((item, index) => (
                            <img
                                key={index}
                                src={item}
                                alt={item}
                                className="w-[20%] cursor-pointer rounded-2xl"
                            />
                        ))}
                    </div>
                </div>

                <div className="w-full flex justify-center mt-4">
                    <Link href="/products" className="bg-primary text-white px-6 py-2 mt-4 rounded-lg text-lg">
                        Explore More
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default ExploreScroll;

const IMAGES = [
    "/images/About/Dp/image1.jpg",
    "/images/About/Dp/image2.png",
    "/images/About/Dp/image3.png",
    "/images/About/Dp/image4.png",
    "/images/About/Dp/image5.png",
    "/images/About/Dp/image3.png",
    "/images/About/Dp/image4.png",
    "/images/About/Dp/image5.png",
]
