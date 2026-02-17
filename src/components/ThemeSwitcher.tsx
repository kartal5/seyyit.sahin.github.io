"use client";

import { useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const THEME_EVENT = "cv-theme-change";

function readStoredTheme(): Theme | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return v === "light" || v === "dark" ? v : null;
  } catch {
    return null;
  }
}

function systemTheme(): Theme {
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getSnapshot(): Theme {
  // FIX: Read from the HTML tag, not the body
  const t = document.documentElement.getAttribute("data-theme");
  return t === "dark" ? "dark" : "light";
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener(THEME_EVENT, onStoreChange);
  return () => window.removeEventListener(THEME_EVENT, onStoreChange);
}

function applyTheme(theme: Theme, persist: boolean) {
  // FIX: Apply to the HTML tag, not the body
  document.documentElement.setAttribute("data-theme", theme);
  if (persist) localStorage.setItem(STORAGE_KEY, theme);
  window.dispatchEvent(new Event(THEME_EVENT));
}

export default function ThemeSwitcher() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, () => "light");

  useEffect(() => {
    const stored = readStoredTheme();
    const initial = stored ?? systemTheme();

    // Only persist if user already had a stored preference.
    applyTheme(initial, stored !== null);

    const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
    if (!mq?.addEventListener) return;

    const onChange = () => {
      // If user explicitly chose a theme, don't follow system changes.
      if (readStoredTheme() !== null) return;
      applyTheme(systemTheme(), false);
    };

    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div id="theme-switcher" aria-label="Theme switcher">
      <button
        type="button"
        id="theme-light"
        className={`theme ${theme === "light" ? "active" : ""}`}
        aria-label="Light theme"
        aria-pressed={theme === "light"}
        onClick={() => applyTheme("light", true)}
      />

      <button
        type="button"
        id="theme-dark"
        className={`theme ${theme === "dark" ? "active" : ""}`}
        aria-label="Dark theme"
        aria-pressed={theme === "dark"}
        onClick={() => applyTheme("dark", true)}
      />
    </div>
  );
}