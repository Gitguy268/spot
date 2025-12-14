type AnalyticsEvent = {
  event: string;
  properties?: Record<string, string | number | boolean>;
};

export const trackEvent = ({ event, properties = {} }: AnalyticsEvent): void => {
  if (typeof window === 'undefined') return;

  try {
    if (window.gtag) {
      window.gtag('event', event, properties);
    }

    console.log('[Analytics]', event, properties);
  } catch (error) {
    console.error('[Analytics Error]', error);
  }
};

declare global {
  interface Window {
    gtag?: (
      command: 'event',
      eventName: string,
      eventParams?: Record<string, unknown>
    ) => void;
  }
}
