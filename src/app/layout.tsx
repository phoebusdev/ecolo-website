import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Ecolo - Advanced Odor Neutralization Solutions",
  description: "Global leader in science-driven odor control solutions for over 50 years. Advanced odor neutralization technology for wastewater, solid waste, cannabis, hospitality, and industrial facilities.",
  keywords: "odor control, odor neutralization, wastewater treatment, solid waste management, industrial odor solutions, H2S control",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans antialiased bg-white text-gray-900`}
      >
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
