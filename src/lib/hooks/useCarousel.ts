import { useState, useEffect } from 'react';

interface UseCarouselProps {
  slidesLength: number;
  autoPlayInterval?: number;
}

export function useCarousel({ slidesLength, autoPlayInterval = 5000 }: UseCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-défilement avec pause au survol
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesLength);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [slidesLength, isHovered, autoPlayInterval]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesLength);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesLength) % slidesLength);
  };

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
  };

  return {
    currentSlide,
    isHovered,
    setIsHovered,
    nextSlide,
    prevSlide,
    goToSlide,
  };
}