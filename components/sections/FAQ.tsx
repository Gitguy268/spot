'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'What makes Spot.new custom dog gear special?',
    answer:
      "Every item is printed on-demand just for your pup, with eco-friendly materials and vibrant, long-lasting prints. We partner with Printify to ensure quality and sustainability, so you're getting premium products without the environmental pawprint.",
  },
  {
    question: 'How long does shipping take?',
    answer:
      "Orders are typically printed and shipped within 3-5 business days. Delivery times vary by location but usually take 5-10 business days. You'll receive tracking information as soon as your order ships!",
  },
  {
    question: 'Can I return or exchange items?',
    answer:
      "Since each item is custom-made for your furry friend, we can't accept returns on personalized products. However, if there's a quality issue or error on our part, we'll make it right! Contact us within 7 days of delivery and we'll work with you to resolve it.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleItem(index);
    }
  };

  return (
    <section
      id="faq"
      className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
      aria-labelledby="faq-heading"
    >
      <div className="text-center mb-12">
        <h2
          id="faq-heading"
          className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4"
        >
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Got questions? We&apos;ve got answers!
        </p>
      </div>

      <div className="space-y-4" role="list">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `faq-panel-${index}`;
          const buttonId = `faq-button-${index}`;

          return (
            <div
              key={index}
              className="border border-zinc-200 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-shadow"
              role="listitem"
            >
              <h3>
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleItem(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 rounded-lg transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800"
                >
                  <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    {item.question}
                  </span>
                  <span
                    className="flex-shrink-0 text-zinc-500 dark:text-zinc-400 transition-transform"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                    aria-hidden="true"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className={`overflow-hidden transition-all ${
                  isOpen ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-4 pt-2 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
