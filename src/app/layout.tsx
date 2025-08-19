import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import Nav from ".././components/Nav";
import Footer from "../components/Footer";

const epilogue = Epilogue({
  variable: "--font-epilogue",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mentat",
  description: "YOUR schedule planner, YOUR ratings, YOUR projections",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${epilogue.variable} antialiased w-full min-h-screen flex flex-col gap-12 justify-between items-center font-sans`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
