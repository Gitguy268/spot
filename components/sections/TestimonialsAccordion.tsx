'use client';

import { useState, useRef, useCallback, useEffect } from 'react';

interface Testimonial {
  id: string;
  reviewer: string;
  rating: number;
  shortQuote: string;
  fullFeedback: string;
}

const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    reviewer: 'Sarah Mitchell',
    rating: 5,
    shortQuote: 'Spot has changed how our family stays connected across miles.',
    fullFeedback:
      'We have family spread across three countries, and Spot has been a game-changer. Being able to instantly share photos from our daughter\'s first day at school with grandparents who live abroad is invaluable. The sharing controls are intuitive, and I love that we\'re not storing photos on multiple devices anymore. It\'s peace of mind knowing our memories are safe.',
  },
  {
    id: 'testimonial-2',
    reviewer: 'Marcus Chen',
    rating: 5,
    shortQuote: 'The search feature alone is worth it. I found photos from 10 years ago instantly.',
    fullFeedback:
      'As someone who takes hundreds of photos every month, I was drowning in disorganized files. Spot\'s intelligent search and automatic organization saved me countless hours. I can now find any photo in seconds. The interface is clean and doesn\'t feel cluttered like some other photo apps. Highly recommend it.',
  },
  {
    id: 'testimonial-3',
    reviewer: 'Elena Rodriguez',
    rating: 5,
    shortQuote: 'Reliable, secure, and genuinely thoughtful design.',
    fullFeedback:
      'I\'ve used many photo storage services, but Spot stands out for its security and user experience. The team clearly thought about what families actually need. The backup is automatic, so I don\'t have to worry. And the privacy controls give me confidence that only the right people see our personal moments. It\'s worth every penny.',
  },
  {
    id: 'testimonial-4',
    reviewer: 'James Patterson',
    rating: 5,
    shortQuote: 'Finally, a photo app that feels human.',
    fullFeedback:
      'After years of using generic cloud storage, Spot feels personal and thoughtful. It\'s built for families, not corporations. The ability to create multiple albums with different permissions means we can invite grandparents to just our son\'s milestones without sharing everything else. Small touches like this show the developers really understand their users.',
  },
];

interface AccordionItemProps {
  testimonial: Testimonial;
  isExpanded: boolean;
  onToggle: (id: string) => void;
  index: number;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-1"
      aria-label={`${rating} out of 5 stars`}
      role="img"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'fill-amber-400' : 'fill-gray-300'}`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );
}

function AccordionItem({
  testimonial,
  isExpanded,
  onToggle,
  index,
}: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (isExpanded && contentRef.current) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight('0px');
    }
  }, [isExpanded]);

  return (
    <div
      className="border-b border-gray-200 last:border-b-0 section-fade-in"
      style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
    >
      <button
        onClick={() => onToggle(testimonial.id)}
        aria-expanded={isExpanded}
        aria-controls={`content-${testimonial.id}`}
        className="w-full px-6 py-5 lg:py-6 flex items-start justify-between gap-4 hover:bg-gray-50 transition-colors duration-200 focus-ring text-left rounded-none"
        type="button"
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-col gap-2 items-start">
            <h3 className="font-semibold text-gray-900">{testimonial.reviewer}</h3>
            <StarRating rating={testimonial.rating} />
          </div>
          <p className="text-base text-gray-600 mt-3 leading-relaxed">
            {testimonial.shortQuote}
          </p>
        </div>
        <div className="mt-1 flex-shrink-0">
          <svg
            className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
              isExpanded ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </button>

      <div
        id={`content-${testimonial.id}`}
        ref={contentRef}
        className="overflow-hidden accordion-content bg-gray-50 transition-all duration-300"
        data-expanded={isExpanded}
        style={{
          maxHeight,
        }}
      >
        <div className="px-6 py-6 text-gray-700 leading-relaxed">
          {testimonial.fullFeedback}
        </div>
      </div>
    </div>
  );
}

interface TestimonialsAccordionProps {
  allowMultiple?: boolean;
}

export default function TestimonialsAccordion({
  allowMultiple = false,
}: TestimonialsAccordionProps) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const handleToggle = useCallback(
    (id: string) => {
      setExpandedIds((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(id)) {
          newSet.delete(id);
        } else {
          if (!allowMultiple) {
            newSet.clear();
          }
          newSet.add(id);
        }
        return newSet;
      });
    },
    [allowMultiple]
  );

  return (
    <section
      className="w-full py-12 lg:py-20 px-4 lg:px-8"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 lg:mb-16 section-fade-in">
          <h2
            id="testimonials-heading"
            className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
          >
            Loved by Families
          </h2>
          <p className="text-lg text-gray-600">
            See what families are saying about Spot.
          </p>
        </div>

        <div
          className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
          role="region"
          aria-label="Testimonials"
        >
          {testimonials.map((testimonial, index) => (
            <AccordionItem
              key={testimonial.id}
              testimonial={testimonial}
              isExpanded={expandedIds.has(testimonial.id)}
              onToggle={handleToggle}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
