import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Cursor from "@/components/Cursor";
import FloatingCTA from "@/components/FloatingCTA";
import { SITE_DATA } from "@/constants/data";

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
});

const outfit = Outfit({ 
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: `${SITE_DATA.company} | ${SITE_DATA.slogan}`,
  description: SITE_DATA.awareness.desc,
  icons: {
    icon: "/logo-image.jpg",
    apple: "/logo-image.jpg",
  },
};

import Preloader from "@/components/Preloader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="antialiased overflow-x-hidden selection:bg-arata-forest selection:text-white font-sans">
        <Preloader />
        <Cursor />
        <FloatingCTA />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
