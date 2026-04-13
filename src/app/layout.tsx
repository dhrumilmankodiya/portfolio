import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dhrumil Mankodiya - Portfolio",
  description: "Product Designer. Entrepreneur. Visionary.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}