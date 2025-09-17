import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { Geist, Geist_Mono } from "next/font/google";
import Layout from "./components/Layout";
import ThemeProvider from "./components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Admin Dashboard",
    template: "%s | Admin Dashboard"
  },
  description: "A modern, responsive admin dashboard built with Next.js 15, TypeScript, and Tailwind CSS. Features authentication, real-time data visualization, user management, and dark mode support.",
  keywords: [
    "admin dashboard",
    "next.js",
    "typescript",
    "tailwind css",
    "authentication",
    "user management",
    "data visualization",
    "dark mode",
    "responsive design"
  ],
  authors: [{ name: "Admin Dashboard Team" }],
  creator: "Admin Dashboard",
  publisher: "Admin Dashboard",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://admin-dashboard-demo.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://admin-dashboard-demo.vercel.app",
    title: "Admin Dashboard - Modern Admin Panel",
    description: "A modern, responsive admin dashboard with authentication, real-time data visualization, and beautiful UI components.",
    siteName: "Admin Dashboard",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Admin Dashboard - Modern Admin Panel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Admin Dashboard - Modern Admin Panel",
    description: "A modern, responsive admin dashboard with authentication, real-time data visualization, and beautiful UI components.",
    images: ["/og-image.png"],
    creator: "@admin_dashboard",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },


};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <SessionProvider>
            <Layout>

              {children}
            </Layout>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
