"use client";

import React from "react";

interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: React.ElementType;
  enableParallax?: boolean;
  fullWidth?: boolean;
}

export function PageSection({
  children,
  className = "",
  id,
  as: Component = "section",
  enableParallax = false,
  fullWidth = false,
}: PageSectionProps) {
  const [offset, setOffset] = React.useState(0);
  const sectionRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (!enableParallax) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const parallaxOffset = (scrolled - elementTop) * 0.5;
      setOffset(parallaxOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enableParallax]);

  return (
    <Component
      ref={sectionRef as React.RefObject<HTMLElement>}
      id={id}
      className={`relative ${className}`}
      style={
        enableParallax && offset !== 0
          ? { transform: `translateY(${offset}px)` }
          : undefined
      }
    >
      <div
        className={`${
          fullWidth ? "w-full" : "mx-auto max-w-[var(--max-width-container)] px-6 lg:px-8"
        }`}
      >
        {children}
      </div>
    </Component>
  );
}
