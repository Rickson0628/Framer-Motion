import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kinetic — Motion UI Engineering Lab",
    template: "%s | Kinetic",
  },
  description:
    "An interactive frontend engineering portfolio exploring gesture, spring physics, scroll-linked animation, and accessible motion with Next.js and Motion.",
  keywords: [
    "frontend developer",
    "creative developer",
    "Motion",
    "React",
    "Next.js",
    "interaction design",
    "UI animation",
  ],
  authors: [{ name: "Rickson Bozar" }],
  creator: "Rickson Bozar",
  category: "technology",
  openGraph: {
    title: "Kinetic — Motion UI Engineering Lab",
    description:
      "A tactile collection of interaction studies built with Next.js, React, and Motion.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinetic — Motion UI Engineering Lab",
    description:
      "A tactile collection of interaction studies built with Next.js, React, and Motion.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
