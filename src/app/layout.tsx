import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Paul Clinton Obinna | Frontend Developer",
  description: "I turn ideas into beautiful interfaces that work, without the extra noise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans min-h-full flex flex-col bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
