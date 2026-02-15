import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mintlify Clone - Modern Documentation",
  description: "A beautiful documentation platform clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
