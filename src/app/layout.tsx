import type { Metadata } from "next";
import "./globals.css";
import { Inter, Libre_Baskerville } from "next/font/google";
import Head from "next/head";

// eslint-disable-next-line
const inter = Inter({
  subsets: ["latin"],
});

// eslint-disable-next-line
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title:
    "Afternoon - AI Bookkeeping and tax platform for ecommerce & startup founders",
  description:
    "Afternoon.co empowers founders to make better business decisions with real time financial metrics. We pair managed AI bookkeeping and tax services, to reduce administrative burden on founders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="google-site-verification"
          content="1iBq5HH43FNXKl4U6HCR75TsjeHOPXAKN8bCKRyLxb8"
        />
      </Head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
