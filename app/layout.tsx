import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "En İyi Yapay Zeka Araçları (2026) | AI Pusula",
    template: "%s | AI Pusula",
  },
  description:
    "AI Pusula ile en iyi yapay zeka araçlarını keşfet, karşılaştır ve ihtiyacına en uygun AI çözümlerini anında bul. Güncel ve tarafsız liste.",

  metadataBase: new URL("https://www.aipusula.com"),

  alternates: {
    canonical: "https://www.aipusula.com",
  },

  verification: {
    google: "kerYjltAUZJCdlpZtBoDEmCzuFLn8vF8mTZ435wm3Zg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}