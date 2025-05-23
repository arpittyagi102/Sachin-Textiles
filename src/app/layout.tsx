import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import StoreProvider from "./StoreProvider";
import { Toaster } from "react-hot-toast";
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
  title: "Sachin Textiles",
  description: "Sachin Textiles",
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
                <div>
                    {children}
                </div>
                <Toaster />
            </body>
        </StoreProvider>
    </html>
  );
}


