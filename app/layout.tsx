import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque, Geologica, Caveat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["800"],
});

const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["latin"],
  weight: ["300", "500"],
});

const caveat = Caveat({
  variable: "--font-solitreo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deeev - Équipe Produit en tant que Service",
  description: "Obtenez un SaaS plus performant grâce à la synergie design + dev. Moins de frictions, plus d'impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bricolageGrotesque.variable} ${geologica.variable} ${caveat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
