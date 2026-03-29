import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VintoCash",
  description: "Real-time auto auction platform",
icons: {
  icon: [
    { url: "/logo.ico", type: "image/png" },
  ],
  apple: "/logo.ico",
}
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}