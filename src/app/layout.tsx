import type { Metadata } from "next";
import { Inter, Spline_Sans_Mono } from "next/font/google";
import "./globals.css";

const splineSansMono = Spline_Sans_Mono({
  variable: "--font-spline-sans-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mentat",
  description: "FPL Scheduler and Planner worthy of a Mentat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${splineSansMono.variable} ${inter.variable} antialiased w-full min-h-screen flex flex-col justify-between pt-6 md:pt-7 pb-5`}
      >
        {children}
      </body>
    </html>
  );
}
