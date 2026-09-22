import { JetBrains_Mono, Oxanium } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SkipLink } from "@/components/layout/SkipLink";
import { site } from "@/lib/site";
import type { Metadata } from "next";
import "./globals.css";

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const oxanium = Oxanium({
  variable: "--font-oxanium",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  authors: [{ name: site.name }],
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jetbrains.variable} ${oxanium.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-mono text-foreground">
        <SkipLink />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
