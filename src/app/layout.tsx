import type { Metadata } from "next";
import { inter, poppins } from "@/lib/fonts";
import "./globals.css";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.seyyitsahin.com"),
  title: {
    template: "%s | Seyyit Sahin",
    default: "Seyyit Sahin - Portfolio",
  },
  description: "Portfolio for Seyyit Sahin, an ambitious Web- and Software Developer.",
  openGraph: {
    title: "Seyyit Sahin - Web Developer",
    description: "Portfolio for Seyyit Sahin, an ambitious Web- and Software Developer.",
    url: "https://www.seyyitsahin.com",
    siteName: "Seyyit Sahin Portfolio",
    locale: "da_DK",
    type: "website",
    // will place an image at public/og-image.webp later
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Seyyit Sahin Portfolio Preview",
      },
    ],
  },
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