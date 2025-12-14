import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Spot's Premium Dog Gear | Adventure Awaits",
  description: "Discover Spot's handpicked collection of premium dog gear. From mountain trails to city parks, equip your adventure companion with quality essentials.",
  keywords: ["dog gear", "premium pet products", "adventure dogs", "Spot"],
  authors: [{ name: "Spot's Team" }],
  metadataBase: new URL("https://spot-gear.com"),
  openGraph: {
    title: "Spot's Premium Dog Gear | Adventure Awaits",
    description: "Discover Spot's handpicked collection of premium dog gear. From mountain trails to city parks, equip your adventure companion with quality essentials.",
    url: "https://spot-gear.com",
    siteName: "Spot's Gear",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Spot's Premium Dog Gear",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spot's Premium Dog Gear | Adventure Awaits",
    description: "Discover Spot's handpicked collection of premium dog gear. From mountain trails to city parks, equip your adventure companion with quality essentials.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdn.unicorn.studio" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${sourceSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
