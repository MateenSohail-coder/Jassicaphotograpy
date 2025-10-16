import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jassica Photography - Professional Wedding & Portrait Photography",
  description:
    "Capturing life's precious moments with passion and artistry. Professional photography services for weddings, portraits, and events in New York.",
  keywords:
    "photography, wedding photography, portrait photography, event photography, New York photographer",
  authors: [{ name: "Jassica Photography" }],
  openGraph: {
    title: "Jassica Photography - Professional Wedding & Portrait Photography",
    description: "Capturing life's precious moments with passion and artistry.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
