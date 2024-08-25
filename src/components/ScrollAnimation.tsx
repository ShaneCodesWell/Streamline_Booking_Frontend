// components/ScrollAnimation.tsx
"use client";
import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  animationClass: string;
}

export default function ScrollAnimation({ children, animationClass }: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  const handleScroll = () => {
    if (elementRef.current) {
      const elementTop = elementRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight) {
        setIsInView(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${isInView ? animationClass : ''}`}
      ref={elementRef}
    >
      {children}
    </div>
  );
}
