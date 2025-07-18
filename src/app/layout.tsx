import type { Metadata } from "next";
import { Geist, Geist_Mono, Matangi, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const matangi = Matangi({
  subsets: ['devanagari', 'latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-matangi',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: "LGC - La Grande Classe",
  description: "Site de formation la grande classe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${montserrat.variable} ${geistSans.variable} ${geistMono.variable} ${matangi.variable} antialiased bg-blend-lighten`}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
