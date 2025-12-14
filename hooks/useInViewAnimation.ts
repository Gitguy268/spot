"use client";

import { useEffect, useRef, useState } from "react";

interface UseInViewAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
  onEnter?: () => void;
}

export function useInViewAnimation<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  triggerOnce = true,
  rootMargin = "0px",
  onEnter,
}: UseInViewAnimationOptions = {}) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);
  const hasTriggered = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      requestAnimationFrame(() => {
        setIsInView(true);
        if (onEnter && !hasTriggered.current) {
          onEnter();
          hasTriggered.current = true;
        }
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (onEnter && !hasTriggered.current) {
              onEnter();
              hasTriggered.current = true;
            }
            if (triggerOnce) {
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            setIsInView(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, triggerOnce, rootMargin, onEnter]);

  return { ref, isInView };
}
