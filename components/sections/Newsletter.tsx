'use client';

import { useState, FormEvent } from 'react';
import { trackEvent } from '@/lib/analytics';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (honeypot) {
      return;
    }

    if (!email.trim()) {
      setErrorMessage('Please enter your email address');
      setFormState('error');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      setFormState('error');
      return;
    }

    setFormState('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      trackEvent({
        event: 'newsletter_signup',
        properties: {
          source: 'join_spots_pack',
        },
      });

      setFormState('success');
      setEmail('');
    } catch (error) {
      setFormState('error');
      setErrorMessage(
        'Oops! Something went wrong. Please try again in a moment.'
      );
      console.error('Newsletter subscription error:', error);
    }
  };

  return (
    <section
      id="newsletter"
      className="w-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-900 dark:to-zinc-800 py-16 sm:py-20"
      aria-labelledby="newsletter-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="newsletter-heading"
            className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4"
          >
            Join Spot&apos;s Pack
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            Be the first to sniff out new designs, exclusive deals, and tail-wagging
            content. No spam, just good vibes and even better gear!
          </p>

          {formState === 'success' ? (
            <div
              className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-6 max-w-md mx-auto"
              role="alert"
              aria-live="polite"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-green-600 dark:text-green-400"
                  aria-hidden="true"
                >
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3 className="text-lg font-semibold text-green-800 dark:text-green-300">
                  You&apos;re in the pack!
                </h3>
              </div>
              <p className="text-green-700 dark:text-green-400">
                Thanks for joining! Check your inbox for a welcome treat.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto"
              noValidate
            >
              <div className="sr-only" aria-hidden="true">
                <label htmlFor="newsletter-bot-field">
                  Don&apos;t fill this out if you&apos;re human:
                </label>
                <input
                  id="newsletter-bot-field"
                  name="bot-field"
                  type="text"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (formState === 'error') {
                        setFormState('idle');
                        setErrorMessage('');
                      }
                    }}
                    placeholder="your@email.com"
                    disabled={formState === 'loading'}
                    aria-describedby={
                      formState === 'error' ? 'email-error' : undefined
                    }
                    aria-invalid={formState === 'error'}
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md hover:shadow-lg"
                >
                  {formState === 'loading' ? (
                    <span className="flex items-center gap-2">
                      <span
                        className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                        aria-hidden="true"
                      />
                      <span>Joining...</span>
                    </span>
                  ) : (
                    'Join the pack'
                  )}
                </button>
              </div>

              {formState === 'error' && errorMessage && (
                <div
                  id="email-error"
                  className="mt-3 text-red-600 dark:text-red-400 text-sm text-left"
                  role="alert"
                  aria-live="assertive"
                >
                  {errorMessage}
                </div>
              )}

              <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-500">
                By subscribing, you agree to receive marketing emails from Spot.new.
                Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
