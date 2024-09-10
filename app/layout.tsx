import React from "react";
// Providers
import { ThemeProvider } from "@/app/lib/styles/theme-provider"
import { PHProvider } from "@/app/providers";
// Utils
import dynamic from 'next/dynamic';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';
// Styles
import { Inter } from "next/font/google";
import "@/app/lib/styles/globals.css";
// Metadata
import type { Metadata } from "next";
import { metadataKeywords } from "@/app/lib/data/data"
// Custom components
import Navigation from "@/components/navigation";

const PostHogPageView = dynamic(() => import('./PostHogPageView'), { ssr: false })
const inter = Inter({ subsets: ["latin"] });
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  keywords: metadataKeywords,
  title: {
    default: "Nils Westgardh Portfolio",
    template: `%s | Nils Westgardh`,
  },
  openGraph: {
    description: "Nils Westgardh is an award-winning advertising creative director skilled in brand stategy, art direction, copywriting, design, and web development.",
    images: [
      `${defaultUrl}/opengraph-image.png`,
      `${defaultUrl}/twitter-image.png`,
    ],
  }
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout(
  props: RootLayoutProps
) {
  const { children } = props;

  return (
    <html 
      lang="en" 
      className={inter.className}
    >
      <body
        className="
          bg-background 
          text-foreground
        "
      >
        <PHProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <PostHogPageView />
            <Navigation />
            <main
              className="
                min-h-screen 
                flex 
                flex-col 
                items-center 
                gap-4
                w-full
                mt-20
              "
            >
              {children}
            </main>
            <SpeedInsights />
            <Analytics />
          </ThemeProvider>
        </PHProvider>
      </body>
    </html>
  );
}
