import type { Metadata, Viewport } from "next";
import { Raleway } from "next/font/google";
import { siteConfig } from "@/config";
import { ToastProvider } from "@/components/common";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.role}`,
  description: siteConfig.description,
  authors: [{ name: siteConfig.name, url: siteConfig.links.github }],
  creator: siteConfig.name,
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#5651e5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.variable}>
      <body className="antialiased">
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
