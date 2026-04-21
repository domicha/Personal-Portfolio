import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Michael Do — Product Leader",
  description:
    "Strategic product leader with 8 years of experience in digital transformation, global platform strategy, and AI-powered product innovation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Nav />
        <div className="pt-14">{children}</div>
      </body>
    </html>
  );
}
