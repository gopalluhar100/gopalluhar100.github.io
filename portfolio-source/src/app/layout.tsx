import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { publicPath } from "@/lib/data";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { RevealObserver } from "@/components/RevealObserver";

const interTight = localFont({
  src: "../fonts/inter-tight-latin-wght-normal.woff2",
  variable: "--font-inter-tight",
  display: "swap",
  weight: "100 900",
});

const instrumentSerif = localFont({
  src: [
    { path: "../fonts/instrument-serif-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/instrument-serif-latin-400-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-instrument-serif",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "../fonts/jetbrains-mono-latin-wght-normal.woff2",
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gopalluhar100.github.io/"),
  title: "Gopal Luhar — Lead Generation & Data Research",
  description:
    "Lead generation, prospect research, CRM enrichment, and remote operations support by Gopal Luhar.",
  openGraph: {
    title: "Gopal Luhar — Lead Generation & Data Research",
    description:
      "Lead generation, prospect research, CRM enrichment, and remote operations support.",
    images: [publicPath("/portrait/portrait-bust.webp")],
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f2ee",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${interTight.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}>
      <body>
        <SmoothScroll />
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
