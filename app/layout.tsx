import type { Metadata } from "next";
import { Spline_Sans_Mono } from "next/font/google";
import "./globals.css";

const splineSansMono = Spline_Sans_Mono({
  variable: "--font-spline-sans-mono",
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
      <body className={`${splineSansMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
