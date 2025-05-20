import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "../public/css/scrollbar.css"

const geistSans = Geist({

  variable: "--font-geist-sans",
  subsets: ["latin"],
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: true,
});

export const metadata: Metadata = {
  title: "My Portofolio",
  description: "website portofolio ilham adi purnomo",
  keywords: 'ilham adi, ilham, bytemind software, portofolio'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="sJgzAqdJxwUWPOHfz4jlL3CNhziNp6mP_2XI4_nd1Gk" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
        <meta
          name="description"
          content="website portofolio ilham adi purnomo"
          key="desc"
        />
        <meta
          name="keyword"
          content="website portoflio, karya ilham adi purnomo, ilham adi purnomo"
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" />
        <Script id="aos-init" strategy="afterInteractive">
          {`AOS.init();`}
        </Script>
        
      </body>
    </html>
  );
}
