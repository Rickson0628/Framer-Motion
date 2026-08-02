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
    default: "Motion Studies — Rickson Bozar",
    template: "%s | Motion Studies",
  },
  description:
    "A frontend animation portfolio by Rickson Bozar with reusable Motion components built in React and Next.js.",
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
    title: "Motion Studies — Rickson Bozar",
    description:
      "A curated collection of Motion studies with direct links to reusable React components.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Motion Studies — Rickson Bozar",
    description:
      "A curated collection of Motion studies with direct links to reusable React components.",
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
