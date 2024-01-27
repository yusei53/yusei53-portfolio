import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "./Head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ゆせのportfolio",
  description: "next.jsとtypescriptでportfolioサイト作ってみました",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body>{children}</body>
    </html>
  );
}
