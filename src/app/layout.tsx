import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import FAQ from "@/components/faqs";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Qflick | Free-Movies 24/7🍿",
  description:
    "Welcome to Qflick, the ultimate destination for movie enthusiasts! At Qflick, we believe that everyone should have easy access to a vast library of movies, all available to watch and download for free. Our platform offers a seamless experience, bringing you the best in film entertainment with just a few clicks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-qBlack font-sans antialiased",
          fontSans.variable
        )}
      >
        <Header />
        {children}
        {/* <FAQ /> */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
