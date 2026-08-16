import React from "react";
import "./globals.css";
import { Metadata } from "next";
import { PageTransition } from "@/components/page-transition";

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
      <body className="antialiased overflow-x-hidden">
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
