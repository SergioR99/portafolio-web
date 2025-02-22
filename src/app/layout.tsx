import type { Metadata } from "next";
import { Roboto, Inconsolata } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: "100"
});

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sergio Rendón - Frontend",
  description: "Portafolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${inconsolata.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
