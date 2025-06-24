import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BusinessID - Digital Business Cards Made Simple",
  description: "Create and share beautiful, interactive digital business cards with QR codes, NFC support, and analytics. Perfect for professionals and teams.",
  keywords: "digital business cards, QR codes, NFC, networking, professional cards",
  authors: [{ name: "BusinessID Team" }],
  openGraph: {
    title: "BusinessID - Digital Business Cards Made Simple",
    description: "Create and share beautiful, interactive digital business cards with QR codes, NFC support, and analytics.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BusinessID - Digital Business Cards Made Simple",
    description: "Create and share beautiful, interactive digital business cards with QR codes, NFC support, and analytics.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          {children}
        </div>
      </body>
    </html>
  );
}
