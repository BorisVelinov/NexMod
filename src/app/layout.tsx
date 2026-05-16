import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NovaCore — The Power Your Phone Deserves",
  description:
    "Upgrade your hardware. Keep the device you love. The world's first smart performance case that transforms your smartphone with desktop-class power.",
  keywords: [
    "smart case",
    "phone upgrade",
    "performance case",
    "NovaCore",
    "smartphone hardware",
  ],
  openGraph: {
    title: "NovaCore — The Power Your Phone Deserves",
    description:
      "The world's first smart performance case. Upgrade your hardware. Keep the device you love.",
    type: "website",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
