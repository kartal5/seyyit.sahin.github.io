import type { Metadata } from "next";
import "./globals.css";
import { inter, poppins } from "@/lib/fonts";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Seyyit Sahin",
  description: "CV",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="da">
      <body
        className={`${inter.variable} ${poppins.variable}`}
        data-theme="light"
      >
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
