import React from "react";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jorge F. Hernández",
  description: "Jorge's personal website & portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en ">
      <body className="antialiased bg-backgroundLight dark:bg-backgroundDark dark:text-[#cdd6f4]">
        {children}
      </body>
    </html>
  );
}
