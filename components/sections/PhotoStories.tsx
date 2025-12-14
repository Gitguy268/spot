'use client';

import Image from 'next/image';

interface Story {
  id: string;
  headline: string;
  body: string;
  imageUrl: string;
  cta?: {
    text: string;
    href: string;
  };
}

const stories: Story[] = [
  {
    id: 'story-1',
    headline: 'Spot keeps your moments safe',
    body: 'Every photo and video is automatically backed up to your secure cloud storage. Never lose a precious memory again, whether it\'s a first step, a silly moment, or a milestone achievement. Your family\'s story deserves to be preserved.',
    imageUrl: 'https://images.unsplash.com/photo-1503454537688-e6ba6fae79b2?w=800&h=600&fit=crop',
    cta: {
      text: 'Learn more',
      href: '#',
    },
  },
  {
    id: 'story-2',
    headline: 'Share memories, not permissions',
    body: 'Invite family and friends to your Spot albums without giving them access to your entire account. Control exactly what gets shared and with whom. Create a warm, private space where memories can be relived together, generation after generation.',
    imageUrl: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&h=600&fit=crop',
    cta: {
      text: 'Start sharing',
      href: '#',
    },
  },
  {
    id: 'story-3',
    headline: 'Find any moment in seconds',
    body: 'Smart search and intelligent organization mean you can find that perfect photo from three years ago without scrolling for hours. Spot learns what matters to you and keeps your memories organized automatically. Your life\'s moments are always just a search away.',
    imageUrl: 'https://images.unsplash.com/photo-1610536667352-6f67a68eb04f?w=800&h=600&fit=crop',
    cta: {
      text: 'Explore features',
      href: '#',
    },
  },
];

interface StoryCardProps {
  story: Story;
  isReversed: boolean;
  index: number;
}

function StoryCard({ story, isReversed, index }: StoryCardProps) {
  const animationDelay = `${index * 0.2}s`;

  return (
    <div
      className="w-full mb-12 lg:mb-16"
      style={{
        animation: `fade-in-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
        animationDelay,
        opacity: 0,
      }}
    >
      <div className="grid grid-cols-12 gap-4 lg:gap-6 items-center">
        {/* Image column */}
        <div
          className={`col-span-12 lg:col-span-7 ${
            isReversed ? 'lg:col-start-6' : 'lg:col-start-1'
          } relative`}
        >
          <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-sm">
            <Image
              src={story.imageUrl}
              alt={story.headline}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 58vw"
              loading="lazy"
              className="object-cover parallax-image"
              quality={80}
            />
          </div>
        </div>

        {/* Text column */}
        <div
          className={`col-span-12 lg:col-span-5 ${
            isReversed ? 'lg:col-start-1' : 'lg:col-start-8'
          }`}
        >
          <div
            className="p-6 lg:p-8 rounded-lg shadow-sm"
            style={{ backgroundColor: '#F5F4EB' }}
          >
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-gray-900 leading-tight">
              {story.headline}
            </h2>
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
              {story.body}
            </p>
            {story.cta && (
              <a
                href={story.cta.href}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 focus-ring hover:shadow-md"
                style={{
                  backgroundColor: '#171717',
                  color: '#F5F4EB',
                }}
                aria-label={`${story.cta.text} - ${story.headline}`}
              >
                {story.cta.text}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PhotoStories() {
  return (
    <section className="w-full py-12 lg:py-20 px-4 lg:px-8" aria-labelledby="photo-stories-heading">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 lg:mb-16 section-fade-in">
          <h1
            id="photo-stories-heading"
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            Every Moment, Preserved
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Spot makes it easy to capture, organize, and share the moments that matter most.
          </p>
        </div>

        <div className="space-y-12">
          {stories.map((story, index) => (
            <StoryCard
              key={story.id}
              story={story}
              isReversed={index % 2 === 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
