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
        url: "https://ankcase.vercel.app/api/og", // Replace with actual OG image URL
        width: 1200,
        height: 630,

        alt: "Create Beautiful customized Gears at CustomGears",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AnkitMishraexe", // Replace with your Twitter handle
    title: "CustomGears - Create Beautiful customized Gears",
    description: "Design and create beautiful custom Personalized Gears.",
    images: ["https://ankcase.vercel.app/api/og"], // Replace with actual OG image URL
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
        <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
          <div className="flex-1 flex flex-col h-full">{children}</div>

          <Footer />
        </main>
      </body>
    </html>
  );
}
