"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselGalleryProps {
  images: string[];
  title: string;
  autoplay?: boolean;
  autoplayDelay?: number;
}

export function CarouselGallery({
  images,
  title,
  autoplay = true,
  autoplayDelay = 5000,
}: CarouselGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(autoplay);

  useEffect(() => {
    if (!isAutoplay || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [isAutoplay, images.length, autoplayDelay]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoplay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoplay(false);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
    setIsAutoplay(false);
  };

  return (
    <div className="w-full group">
      {/* Main Image Display */}
      <div className="relative w-full bg-muted/20 border border-border/50 rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)]">
        <div className="relative h-[350px] sm:h-[450px] lg:h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex]}
                alt={`${title} - Image ${currentIndex + 1}`}
                fill
                priority={currentIndex === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, 50vw"
                className="object-contain p-4 lg:p-8"
              />
            </motion.div>
          </AnimatePresence>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />

          {/* Image counter */}
          <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-foreground">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-lg bg-background/80 hover:bg-background text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-lg bg-background/80 hover:bg-background text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </motion.button>
            </>
          )}
        </div>

        {/* Thumbnail Strip */}
        {images.length > 1 && (
          <div className="border-t border-border/50 bg-muted/10 p-3 lg:p-4">
            <div className="flex gap-2 overflow-x-auto pb-2 px-1">
              {images.map((image, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => goToImage(index)}
                  className={`relative flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentIndex
                      ? "border-primary shadow-lg shadow-primary/50"
                      : "border-border/50 hover:border-primary/50"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                  {index === currentIndex && (
                    <div className="absolute inset-0 bg-primary/20" />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
