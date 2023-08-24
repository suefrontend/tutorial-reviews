import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tutorial Paradise",
  description: "Tutorial paradise",
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
