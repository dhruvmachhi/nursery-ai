import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nursery AI",
  description: "AI website for kids reading nursery rhymes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
