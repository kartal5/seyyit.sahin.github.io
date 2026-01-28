"use client";

import { usePathname, useRouter } from "next/navigation";

type Locale = "da" | "en";

function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "da";
}

function toLocalePath(pathname: string, target: Locale): string {
  const isEn = pathname === "/en" || pathname.startsWith("/en/");

  // Normalize a bit for safety
  const clean = pathname || "/";

  if (target === "en") {
    if (isEn) return clean === "/en" ? "/en/" : clean;
    return clean === "/" ? "/en/" : `/en${clean}`;
  }

  // target === "da"
  if (!isEn) return clean;
  const stripped = clean.replace(/^\/en(?=\/|$)/, "");
  return stripped === "" ? "/" : stripped;
}

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const current = getLocaleFromPath(pathname);
  const go = (target: Locale) => {
    router.push(toLocalePath(pathname, target));
  };

  return (
    <div id="language-switcher" aria-label="Language switcher">
      <button
        type="button"
        className={current === "da" ? "active" : ""}
        aria-label="Dansk"
        aria-pressed={current === "da"}
        onClick={() => go("da")}
      >
        <img src="/flags/dk.svg" alt="Dansk" />
      </button>

      <button
        type="button"
        className={current === "en" ? "active" : ""}
        aria-label="English"
        aria-pressed={current === "en"}
        onClick={() => go("en")}
      >
        <img src="/flags/gb.svg" alt="English" />
      </button>
    </div>
  );
}
