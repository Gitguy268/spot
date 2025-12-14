"use client";

import { useEffect, useState, useRef } from 'react';

// Define the models with placeholder assets
const MODELS = [
  {
    id: 'spot',
    name: 'Spot Figure',
    // Using Astronaut as a placeholder for "Spot"
    src: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb',
    poster: 'https://modelviewer.dev/shared-assets/models/Astronaut.png',
    cta: 'https://printify.com',
    description: 'Our mascot Spot, in 3D glory. Interact to zoom and rotate.'
  },
  {
    id: 'tshirt',
    name: 'Classic T-Shirt',
    // Using a different placeholder if possible, otherwise same
    src: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb', 
    poster: 'https://modelviewer.dev/shared-assets/models/Astronaut.png',
    cta: 'https://printify.com',
    description: 'Premium cotton t-shirt with our signature logo.'
  },
  {
    id: 'hoodie',
    name: 'Cozy Hoodie',
    src: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb',
    poster: 'https://modelviewer.dev/shared-assets/models/Astronaut.png',
    cta: 'https://printify.com',
    description: 'Warm and stylish hoodie for cold coding nights.'
  }
];

export default function SpotShowcase3D() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const [activeModelIndex, setActiveModelIndex] = useState(0);
  const [modelViewerLoaded, setModelViewerLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && !modelViewerLoaded) {
      import('@google/model-viewer')
        .then(() => setModelViewerLoaded(true))
        .catch(console.error);
    }
  }, [isVisible, modelViewerLoaded]);

  const activeModel = MODELS[activeModelIndex];
  const ModelViewer = 'model-viewer' as unknown as React.ElementType;

  return (
    <section 
      ref={containerRef} 
      className="w-full min-h-[600px] flex flex-col items-center justify-center py-16 bg-gray-50 dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800"
      aria-label="3D Product Showcase"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Experience in 3D
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Explore our merchandise in augmented reality.
          </p>
        </div>

        {isVisible ? (
          <div className="w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* 3D Viewer Container */}
            <div className="relative w-full h-[450px] bg-white dark:bg-zinc-800 rounded-2xl shadow-xl overflow-hidden ring-1 ring-gray-900/5">
              {modelViewerLoaded ? (
                <ModelViewer
                  src={activeModel.src}
                  poster={activeModel.poster}
                  alt={`3D model of ${activeModel.name}`}
                  loading="eager"
                  camera-controls
                  ar
                  ar-modes="webxr scene-viewer quick-look"
                  draco-decoder-path="https://www.gstatic.com/draco/versioned/decoders/1.5.6/"
                  shadow-intensity="1"
                  style={{ width: '100%', height: '100%', '--poster-color': 'transparent' } as React.CSSProperties}
                >
                   <div slot="poster" className="flex items-center justify-center w-full h-full bg-gray-100 dark:bg-zinc-800 text-gray-400">
                      Loading 3D Model...
                   </div>
                </ModelViewer>
              ) : (
                <div className="flex items-center justify-center w-full h-full bg-gray-100 dark:bg-zinc-800">
                  <div className="animate-pulse flex flex-col items-center">
                     <div className="w-12 h-12 bg-gray-300 dark:bg-zinc-700 rounded-full mb-4"></div>
                     <div className="h-4 w-32 bg-gray-300 dark:bg-zinc-700 rounded"></div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Controls & Metadata */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{activeModel.name}</h3>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  {activeModel.description}
                </p>
              </div>
              
              <div className="space-y-4">
                <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Select Product
                </span>
                <div className="flex flex-wrap gap-3">
                  {MODELS.map((model, index) => (
                    <button
                      key={model.id}
                      onClick={() => setActiveModelIndex(index)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                        activeModelIndex === index 
                          ? 'bg-blue-600 border-blue-600 text-white shadow-md transform scale-105' 
                          : 'bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-gray-700 dark:text-gray-300 hover:border-blue-400 dark:hover:border-blue-500'
                      }`}
                      aria-pressed={activeModelIndex === index}
                    >
                      {model.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <a 
                  href={activeModel.cta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-green-600 border border-transparent rounded-lg shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                >
                  Buy on Printify
                  <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-[450px] w-full bg-gray-100 dark:bg-zinc-800 rounded-2xl animate-pulse"></div>
        )}
      </div>
    </section>
  );
}
