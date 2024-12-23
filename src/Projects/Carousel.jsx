import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const img1 = "https://i.ibb.co/ncrXc2V/1.png";
const img2 = "https://i.ibb.co/B3s7v4h/2.png";
const img3 = "https://i.ibb.co/XXR8kzF/3.png";
const img4 = "https://i.ibb.co/yg7BSdM/4.png";

function ImageCarousel() {
    const slides = [img1, img2, img3, img4];

    return (
        <div className="h-screen relative bg-slate-900 flex justify-center items-center">
            <div className="max-w-lg ">
                <Carousel slides={slides} autoSlide={true} autoSlideInterval={3000} />
            </div>
        </div>
    );
}

function Carousel({ slides, autoSlide = false, autoSlideInterval = 3000 }) {
    const [curr, setCurr] = useState(0);

    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    useEffect(() => {
        if (!autoSlide) return;

        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [autoSlide, autoSlideInterval, next]);

    return (
        <div className="overflow-hidden relative">
            {/* Carousel Content */}
            <div
                className="flex transition-transform ease-out duration-500"
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                {slides.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-auto"
                    />
                ))}
            </div>

            {/* Navigation Arrows */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                    onClick={prev}
                    className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                    <ChevronLeft size={40} />
                </button>
                <button
                    onClick={next}
                    className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                    <ChevronRight size={40} />
                </button>
            </div>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`transition-all w-3 h-3 rounded-full ${
                                curr === i ? "bg-white p-2" : "bg-white/50"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ImageCarousel;
