import AOSInit from '@/components/aosinit';
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NordisBank",
  description: "NordisBank",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
