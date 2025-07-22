import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import SidebarLhs from "@/components/sidebar-lhs";
import SidebarRhs from "@/components/sidebar-rhs";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swissguard - Frontend Developer",
  description:
    "Swissguard is a software developer with 4+ years of experience building sleek, scalable websites for startups, businesses and individuals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="mt-4 grid min-h-screen grid-cols-12 gap-4 md:mt-12">
            <SidebarLhs />

            <main className="col-span-12 rounded-lg md:col-span-8 md:border-x">
              {children}
            </main>
            <SidebarRhs />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
