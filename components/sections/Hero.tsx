"use client";

import React, { useEffect } from "react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";
import { trackHeroView, trackCTAClick } from "@/lib/analytics";

export function Hero() {
  const { ref, isInView } = useInViewAnimation({
    threshold: 0.3,
    triggerOnce: true,
    onEnter: trackHeroView,
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.unicorn.studio/v1.0.0/unicorn-studio.min.js";
    script.defer = true;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handlePrimaryClick = () => {
    trackCTAClick("primary", "Shop Spot's Gear");
  };

  const handleSecondaryClick = () => {
    trackCTAClick("secondary", "Meet Spot");
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#0D1117] via-[#0D1117] to-[#161B22]"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 z-0">
        <div
          data-us-project="spot-hero"
          className="h-full w-full"
          style={{ minHeight: "100vh" }}
        />
      </div>

      <div
        className={`relative z-10 mx-auto flex min-h-screen max-w-[var(--max-width-container)] flex-col items-center justify-center px-6 py-20 text-center lg:px-8 ${
          isInView ? "animate-slide-up" : "opacity-0"
        }`}
      >
        <div className="max-w-4xl space-y-8">
          <h1
            className="font-[family-name:var(--font-heading)] text-5xl font-bold leading-tight tracking-tight text-[var(--color-text-primary)] md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Adventure Gear for{" "}
            <span className="text-[var(--color-primary)]">Spot</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
            Meet Spot, the adventure-loving dog who inspires our premium gear
            collection. From mountain trails to city parks, every product is
            tested by Spot himself to ensure quality, comfort, and durability
            for your furry companion.
          </p>

          <p className="text-sm text-[var(--color-text-muted)] md:text-base">
            Handpicked essentials for dogs who live life to the fullest
          </p>

          <div className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row">
            <a
              href="https://spot-gear.printify.me/products"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handlePrimaryClick}
              className="group relative inline-flex items-center justify-center rounded-lg bg-[var(--color-primary)] px-8 py-4 text-base font-semibold text-[#0D1117] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(44,187,195,0.4)] focus:scale-105 focus:shadow-[0_0_30px_rgba(44,187,195,0.4)]"
              aria-label="Shop Spot&apos;s premium dog gear on Printify"
            >
              <span className="relative z-10">Shop Spot&apos;s Gear</span>
              <svg
                className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>

            <button
              onClick={handleSecondaryClick}
              className="group inline-flex items-center justify-center rounded-lg border-2 border-[var(--color-accent)] px-8 py-4 text-base font-semibold text-[var(--color-accent)] transition-all duration-300 hover:bg-[var(--color-accent)] hover:text-[#0D1117] focus:bg-[var(--color-accent)] focus:text-[#0D1117]"
              aria-label="Learn more about Spot and his adventures"
            >
              <span>Meet Spot</span>
              <svg
                className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <svg
          className="h-6 w-6 text-[var(--color-text-muted)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
