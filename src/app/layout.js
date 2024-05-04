"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ overflowY: "hidden" }}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
