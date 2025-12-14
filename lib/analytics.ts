"use client";

type AnalyticsEvent = {
  event: string;
  properties?: Record<string, string | number | boolean>;
  timestamp?: number;
};

const HERO_VIEW_SESSION_KEY = "hero_view_tracked";

function trackEvent(event: string, properties?: Record<string, string | number | boolean>) {
  const eventData: AnalyticsEvent = {
    event,
    properties,
    timestamp: Date.now(),
  };

  if (typeof window !== "undefined") {
    if (window.gtag) {
      window.gtag("event", event, properties);
    }

    if (window.dataLayer) {
      window.dataLayer.push({
        event,
        ...properties,
      });
    }

    console.log("[Analytics]", eventData);
  }
}

export function trackHeroView() {
  if (typeof window === "undefined") return;

  const hasTracked = sessionStorage.getItem(HERO_VIEW_SESSION_KEY);
  
  if (!hasTracked) {
    trackEvent("hero_view", {
      page: window.location.pathname,
      timestamp: Date.now(),
    });
    sessionStorage.setItem(HERO_VIEW_SESSION_KEY, "true");
  }
}

export function trackCTAClick(ctaType: "primary" | "secondary", label: string) {
  trackEvent("cta_click", {
    cta_type: ctaType,
    cta_label: label,
    page: typeof window !== "undefined" ? window.location.pathname : "",
    timestamp: Date.now(),
  });
}

export function trackButtonClick(buttonId: string, label: string) {
  trackEvent("button_click", {
    button_id: buttonId,
    button_label: label,
    page: typeof window !== "undefined" ? window.location.pathname : "",
    timestamp: Date.now(),
  });
}

declare global {
  interface Window {
    gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
    dataLayer?: Record<string, unknown>[];
  }
}
