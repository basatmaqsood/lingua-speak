import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lang Bridge",
  description: "AI Powered Translater App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
      <script src="./node_modules/preline/dist/preline.js"></script>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
