import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAAH by Nilmah | Where Modesty Meets Modernity",
  description:
    "Luxury modest fashion for the modern woman. Abayas, dresses, hijabs, and co-ord sets crafted with intention. Based in Dubai, shipping worldwide.",
  keywords: [
    "modest fashion",
    "luxury abayas",
    "hijab fashion",
    "Dubai fashion",
    "MAAH by Nilmah",
    "modest dresses",
    "designer abayas",
  ],
  openGraph: {
    title: "MAAH by Nilmah | Where Modesty Meets Modernity",
    description:
      "Luxury modest fashion for the modern woman. Crafted with intention, designed for expression.",
    type: "website",
    locale: "en_AE",
    siteName: "MAAH by Nilmah",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
