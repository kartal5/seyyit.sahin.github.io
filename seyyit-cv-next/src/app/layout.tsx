import type { Metadata } from "next";
import { inter, poppins } from "@/lib/fonts";
import "./globals.css";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Seyyit Sahin",
  description: "Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // 1. Fix SEO Language Tag instantly based on URL
                var path = window.location.pathname;
                if (path.indexOf('/en') === 0) {
                  document.documentElement.lang = 'en';
                } else {
                  document.documentElement.lang = 'da';
                }

                // 2. Fix Dark Mode FOUC (Flash of Unstyled Content)
                try {
                  var theme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && supportDarkMode)) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable}`}>
        <ThemeSwitcher />
        <LanguageSwitcher />
        <ScrollReveal />
        
        {children}
      </body>
    </html>
  );
}