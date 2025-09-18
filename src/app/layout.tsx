import type React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const trajanPro = localFont({
  src: [
    {
      path: "../../public/fonts/TrajanPro3Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/TrajanPro3-Bold.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-trajan",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MAK Properties",
  description: "Premium real estate solutions in Dubai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${trajanPro.variable} antialiased`}>
      <body className="luxury-bg">
        {children}
      </body>
    </html>
  );
}
