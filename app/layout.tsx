import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CustomGear",
  description: "Create Beautiful customized Gears",
  openGraph: {
    title: "CustomGears",
    description: "Design and create beautiful custom Gears.",
    url: "https://ankcase.vercel.app/", // Replace with your actual site URL
    type: "website",
    images: [
      {
        url: "https://ankcase.vercel.app/api/static", // Replace with actual OG image URL
        width: 1200,
        height: 630,
        alt: "Create Beautiful customized Gears at CustomGears",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
