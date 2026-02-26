"use client";

import { useEffect, useState, useRef, RefObject } from "react";

interface ParallaxOptions {
  speed?: number;
  direction?: "up" | "down";
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const { speed = 0.5, direction = "up" } = options;
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const relativeScroll = scrolled - elementTop + window.innerHeight;
      
      if (relativeScroll > 0) {
        const movement = relativeScroll * speed * (direction === "up" ? -1 : 1);
        setOffset(movement);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, direction]);

  return { ref, offset };
};

// Component for parallax layers
interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "up" | "down";
  className?: string;
}

export const ParallaxLayer = ({
  children,
  speed = 0.3,
  direction = "up",
  className = "",
}: ParallaxLayerProps) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const movement = scrolled * speed * (direction === "up" ? -1 : 1);
      setOffset(movement);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, direction]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

// Floating decorative orbs with parallax
interface FloatingOrbProps {
  className?: string;
  speed?: number;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "accent";
}

export const FloatingOrb = ({
  className = "",
  speed = 0.2,
  size = "md",
  color = "primary",
}: FloatingOrbProps) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setOffset(scrolled * speed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
  };

  const colorClasses = {
    primary: "from-primary/20 to-transparent",
    accent: "from-primary/10 via-primary/5 to-transparent",
  };

  return (
    <div
      className={`absolute rounded-full bg-gradient-radial ${sizeClasses[size]} ${colorClasses[color]} blur-3xl pointer-events-none ${className}`}
      style={{
        transform: `translateY(${offset}px)`,
        willChange: "transform",
      }}
    />
  );
};

// Scroll-linked element that moves based on viewport position
interface ScrollLinkedProps {
  children: React.ReactNode;
  className?: string;
  translateY?: [number, number]; // [start, end] values
  opacity?: [number, number];
  scale?: [number, number];
}

export const ScrollLinked = ({
  children,
  className = "",
  translateY = [0, 0],
  opacity = [1, 1],
  scale = [1, 1],
}: ScrollLinkedProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress from 0 to 1 as element moves through viewport
      const elementCenter = rect.top + rect.height / 2;
      const viewportProgress = 1 - (elementCenter / windowHeight);
      const clampedProgress = Math.max(0, Math.min(1, viewportProgress));
      
      setProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const lerp = (start: number, end: number, t: number) => start + (end - start) * t;

  const currentTranslateY = lerp(translateY[0], translateY[1], progress);
  const currentOpacity = lerp(opacity[0], opacity[1], progress);
  const currentScale = lerp(scale[0], scale[1], progress);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translateY(${currentTranslateY}px) scale(${currentScale})`,
        opacity: currentOpacity,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
};
