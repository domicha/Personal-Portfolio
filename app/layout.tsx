import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  openGraph: {
    title: "Michael Do — Product Leader",
    description:
      "Strategic product leader with 8 years shipping financial platforms, AI-powered features, and multi-market products used by millions.",
    url: "https://michaeldo.com",
    siteName: "Michael Do",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michael Do — Product Leader",
    description:
      "Strategic product leader with 8 years shipping financial platforms, AI-powered features, and multi-market products used by millions.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Nav />
        <div className="pt-14">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
