import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Custom Components
import Header from "@/custom_components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fit Grocer",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Header />
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
