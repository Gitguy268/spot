"use client";

import { useEffect, useRef, useState } from 'react';

// Mock analytics function
const trackEvent = (eventName: string, data?: Record<string, unknown>) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics] ${eventName}`, data);
  }
  // in production this would send data to an analytics endpoint
};

export default function SpotVideoScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasScrubbed, setHasScrubbed] = useState(false);
  const [scrubComplete, setScrubComplete] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [reveal, setReveal] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progressPct, setProgressPct] = useState(0);

  // Toggle Play/Pause manually (Accessibility override)
  const togglePlay = () => {
      if (!videoRef.current) return;
      if (videoRef.current.paused) {
          videoRef.current.play().catch(() => {});
          setIsPlaying(true);
      } else {
          videoRef.current.pause();
          setIsPlaying(false);
      }
  };

  // Check reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Intersection Observer for visibility and reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsInView(entry.isIntersecting);
          if (entry.isIntersecting) {
            setReveal(true);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => observer.disconnect();
  }, []);

  // Scroll Scrub Logic (for non-reduced motion)
  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      if (!sectionRef.current || !videoRef.current) return;
      
      // If playing manually, pause on scroll to switch to scrub mode
      if (!videoRef.current.paused && isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
      }
      
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionHeight = rect.height;
      
      // Calculate scroll progress
      // We want the video to scrub as we scroll through the section
      // The section is tall (300vh), so we map the scroll distance to video duration
      const scrollDist = sectionHeight - viewportHeight;
      // scrolled is how far the top of the section is from the top of the viewport
      // If rect.top is 0, we are at start. if rect.top is -scrollDist, we are at end.
      const scrolled = -rect.top;
      
      let progress = scrolled / scrollDist;
      progress = Math.max(0, Math.min(1, progress));
      
      if (videoRef.current.duration) {
         // Use requestAnimationFrame for smoother updates if possible, 
         // but setting currentTime directly is usually fine for this frequency
         const targetTime = videoRef.current.duration * progress;
         
         // simple dampening could be applied here for "velocity" feel, but direct mapping is more responsive
         videoRef.current.currentTime = targetTime;
         setProgressPct(progress * 100);
      }
      
      // Analytics
      if (!hasScrubbed && progress > 0.05) {
        setHasScrubbed(true);
        trackEvent('video_scrub', { action: 'start' });
      }
      
      if (!scrubComplete && progress >= 0.95 && hasScrubbed) {
          setScrubComplete(true);
          trackEvent('video_scrub', { action: 'complete' });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prefersReducedMotion, hasScrubbed, scrubComplete, isPlaying]);
  
  // Autoplay Logic (mainly for Reduced Motion or fallback)
  useEffect(() => {
      if (!videoRef.current) return;

      if (prefersReducedMotion) {
          if (isInView) {
              videoRef.current.play().catch(() => {});
          } else {
              videoRef.current.pause();
          }
      }
  }, [isInView, prefersReducedMotion]);

  return (
    <section 
      ref={sectionRef}
      // If reduced motion: normal height. If scroll scrub: tall height to allow scrubbing.
      className={`relative w-full ${prefersReducedMotion ? 'min-h-[600px] py-20' : 'h-[300vh]'} bg-black overflow-hidden`}
      aria-label="Product Video Experience"
    >
        {/* Parallax Background Layers (Only for non-reduced motion) */}
        {!prefersReducedMotion && (
            <>
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black pointer-events-none z-0" 
                     style={{ transform: 'translateY(0%)' }} /> {/* Fixed layer */}
                {/* We could implement actual parallax movement via JS in the scroll handler, 
                    but sticky behavior handles the main content. 
                    Let's add a decorative element that stays fixed or moves differently. */}
            </>
        )}

        <div className={`${prefersReducedMotion ? 'relative' : 'sticky top-0'} h-screen w-full flex items-center justify-center overflow-hidden`}>
            
            {/* Mask Reveal Animation */}
            <div 
                className={`relative w-full max-w-6xl aspect-video bg-zinc-900 rounded-xl overflow-hidden shadow-2xl transition-all duration-1000 ease-out transform
                    ${reveal ? 'opacity-100 scale-100 clip-circle-full' : 'opacity-0 scale-95 clip-circle-zero'}
                `}
                style={{
                    clipPath: reveal || prefersReducedMotion ? 'circle(150% at center)' : 'circle(0% at center)'
                }}
            >
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
                    playsInline
                    muted // Autoplay usually requires muted
                    // If reduced motion, we show controls so they can play if they want (or autoplay works because muted)
                    controls={prefersReducedMotion} 
                    preload="metadata"
                    onTimeUpdate={() => {
                        if (videoRef.current && videoRef.current.duration) {
                            setProgressPct((videoRef.current.currentTime / videoRef.current.duration) * 100);
                        }
                    }}
                >
                    <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                    <track 
                        kind="captions" 
                        srcLang="en" 
                        label="English"
                        default
                        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/captions/BigBuckBunny.en.vtt" 
                    />
                    Your browser does not support the video tag.
                </video>

                {/* Overlay Text/Controls for Scrub Mode */}
                {!prefersReducedMotion && (
                    <div className="absolute inset-0 pointer-events-none flex items-end justify-center pb-12 bg-gradient-to-t from-black/80 to-transparent">
                        <div className="text-center text-white p-4 pointer-events-auto">
                            <button 
                                onClick={togglePlay}
                                className="mb-4 p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 group"
                                aria-label={isPlaying ? "Pause Video" : "Play Video"}
                            >
                                {isPlaying ? (
                                    <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                                ) : (
                                    <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                                )}
                            </button>
                            <p className="text-xl font-light tracking-widest uppercase opacity-80 mb-2">
                                {isPlaying ? "Playing..." : "Scroll to Scrub"}
                            </p>
                            <div className="h-1 w-24 bg-white/30 mx-auto rounded-full overflow-hidden">
                                <div className="h-full bg-white transition-all duration-75" style={{ width: `${progressPct}%` }}></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>

        {/* Scroll indicator for Scrub Mode */}
        {!prefersReducedMotion && reveal && (
             <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce pointer-events-none z-10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
             </div>
        )}
    </section>
  );
}
