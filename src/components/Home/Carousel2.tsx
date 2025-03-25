'use client'
import { useState, useEffect } from "react";

export default function Carousel2({ items, visibleItems = 1, buttons = true, intervalDelay = 4000, animationDuration = 300 }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % (items.length - visibleItems + 1));
        console.log("currentIndex:", currentIndex)
        console.log("100 / visibleItems", 100 / visibleItems)
        console.log("total change:", currentIndex * (100 / visibleItems))

    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? items.length - visibleItems : prev - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, intervalDelay);

        return () => clearInterval(interval);
    }, [items.length, visibleItems]);

    const itemWidth = `${90 / visibleItems}%`;
    const itemGap = `${10 / visibleItems}%`;

    return (
        <div className="relative w-full overflow-x-clip">
            <div
                className="flex transition-transform"
                style={{
                    transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
                    gap: itemGap,
                    transitionDuration: `${animationDuration}ms`,
                }}
            >
                {items.map((item, index) => (
                    <div key={index} style={{ minWidth: itemWidth }}>
                        <img
                            src={item}
                            alt={`Slide ${index}`}
                            className={` w-full h-auto rounded-xl`}
                        />
                    </div>
                ))}
            </div>

            {buttons && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded opacity-50"
                    >
                        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="inherit" className="stroke-current transform rotate-180">
                            <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded opacity-50"
                    >
                        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="inherit" className="stroke-current">
                            <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                </>
            )}
        </div>
    );
}

interface CarouselProps {
    items: string[]; // Assuming the items are URLs of images (strings)
    visibleItems?: number; // Number of items to display at once
    buttons: boolean;
    intervalDelay: number;
    animationDuration: number;
}
