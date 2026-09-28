import type { Metadata } from "next";
import { Cormorant_Garamond, Allura } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Esteve & Laia",
  description: "24 de abril de 2027 · El Papiol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${cormorant.variable} ${allura.variable}`}>
        {children}
      </body>
    </html>
  );
}