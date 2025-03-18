import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header/Header";
import StoreProvider from "./StoreProvider";
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
  title: "Arpit Tyagi",
  description: "Developed by Arpit Tyagi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <StoreProvider>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <div className="mx-auto max-w-7xl px-2 md:px-4 pt-2">
                    <Header />
                    {children}
                </div>
            </body>
        </StoreProvider>
    </html>
  );
}


