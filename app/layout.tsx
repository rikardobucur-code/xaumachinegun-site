import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xaumachinegun.vercel.app"),
  title: "XAUMachineGUN | Advanced XAUUSD Recovery Infrastructure",
  description:
    "Premium MetaTrader 5 Expert Advisor for supervised XAUUSD basket recovery trading, adaptive volatility protection and structured risk control.",
  keywords: [
    "XAUMachineGUN",
    "XAUUSD EA",
    "Gold trading robot",
    "MetaTrader 5 EA",
    "MT5 Expert Advisor",
    "Basket recovery EA",
    "Gold trading software",
    "iamrika",
  ],
  openGraph: {
    title: "XAUMachineGUN | Advanced XAUUSD Recovery Infrastructure",
    description:
      "Premium MetaTrader 5 Expert Advisor engineered for supervised XAUUSD basket recovery trading and adaptive volatility protection.",
    url: "https://xaumachinegun.vercel.app",
    siteName: "XAUMachineGUN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "XAUMachineGUN Advanced XAUUSD Recovery Infrastructure",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "XAUMachineGUN | Advanced XAUUSD Recovery Infrastructure",
    description:
      "Advanced MetaTrader 5 Expert Advisor for supervised XAUUSD basket recovery trading.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#020409] text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}