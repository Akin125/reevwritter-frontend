import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thesiora Writer - AI-Powered Academic Research Papers",
  description: "Generate comprehensive, properly cited academic research papers from assignment briefs using AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
