'use client';

import Image from 'next/image';
import { celebrities } from '@/data/celebs';

interface CelebrityCardProps {
  celebrity: (typeof celebrities)[0];
  index: number;
}

function CelebrityCard({ celebrity, index }: CelebrityCardProps) {
  const animationDelay = `${index * 0.1}s`;

  return (
    <div
      className="w-full"
      style={{
        animation: `fade-in-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
        animationDelay,
        opacity: 0,
      }}
    >
      <div
        className="rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md focus-ring"
        style={{ backgroundColor: '#F5F4EB' }}
      >
        <div className="relative w-full aspect-square overflow-hidden">
          <Image
            src={celebrity.imageUrl}
            alt={celebrity.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            className="object-cover"
            quality={80}
          />
        </div>
        <div className="p-4 lg:p-6">
          <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">
            {celebrity.name}
          </h3>
          <p className="text-sm lg:text-base text-gray-700 mb-3 leading-relaxed">
            {celebrity.caption}
          </p>
          <p className="text-sm text-gray-600 italic">
            “{celebrity.interaction}”
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CelebsGallery() {
  return (
    <section className="w-full py-12 lg:py-20 px-4 lg:px-8" aria-labelledby="celebs-gallery-heading">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 lg:mb-16 section-fade-in">
          <h2
            id="celebs-gallery-heading"
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            Celebs in Spot
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            See how celebrities like you are using Spot to organize their most precious memories.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-8">
          {celebrities.map((celebrity, index) => (
            <div
              key={celebrity.id}
              className="col-span-12 md:col-span-6 lg:col-span-4"
            >
              <CelebrityCard
                celebrity={celebrity}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}