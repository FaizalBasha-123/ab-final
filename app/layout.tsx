

import type { Metadata } from "next";
import "./globals.css";
import IntroProvider from '@/components/IntroProvider';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: "Management Consulting Company | AB Lincoln & Company"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" type="image/jpeg" href="https://res.cloudinary.com/dwpzkfzuv/image/upload/v1754651919/AB-LOGO-HR-3_bcj2fe.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Avenir:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=FreightBig+Pro:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.min.css" rel="stylesheet" />
      </head>
      <body className="antialiased font-avenir">
  <Header />
  <IntroProvider>{children}</IntroProvider>
      </body>
    </html>
  );
}
