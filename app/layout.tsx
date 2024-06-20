import type { Metadata } from "next";
import { inter } from "@/fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auth Tutorial",
  description: "Simple Auth Tutorial nextjs next-authv5 tailwindcss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
