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
    default: "AI Pusula – En İyi Yapay Zeka Araçları (2026)",
    template: "%s | AI Pusula",
  },
  description:
    "AI Pusula, en iyi yapay zeka araçlarını keşfetmen, karşılaştırman ve ihtiyacına uygun çözümleri bulman için hazırlanmış kapsamlı bir platformdur.",
  metadataBase: new URL("https://www.aipusula.com"),
  alternates: {
    canonical: "https://www.aipusula.com",
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