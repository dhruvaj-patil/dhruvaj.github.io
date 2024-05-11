import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";


export const metadata: Metadata = {
  title: "Dhruvaj Patil - Fullstack Developer",
  description: "Dhruvaj Patil Portfolio",
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-svh bg-[color:var(--primary-dark)]" suppressHydrationWarning={true}>
        <Header />
        {children}
        </body>
    </html>
  );
}
