import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AuthInitializer from "@/auth/AuthToken";

const manrope = localFont({
  src: "../public/fonts/Manrope-VariableFont_wght.woff2",
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IRIS | Neural Interface",
  description: "OS Override Unit Alpha",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable}`}>
      <body className="min-h-full flex flex-col font-sans antialiased bg-[#050505] text-white">
        <AuthInitializer />
        {children}
      </body>
    </html>
  );
}
