import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nofaceaudios",
  description: "My music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>nofaceaudios.vercel.app</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
