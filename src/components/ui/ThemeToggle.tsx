"use client";

import { cn } from "@/lib/cn";
import { Icon } from "./Icon";

export const THEME_KEY = "asl-theme";

// Runs before paint (see layout) so the saved or system theme applies without a flash.
export const themeScript = `(function(){try{var t=localStorage.getItem("${THEME_KEY}");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}})()`;

export function ThemeToggle({ className }: { className?: string }) {
  function toggle() {
    const dark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem(THEME_KEY, dark ? "dark" : "light");
    } catch {}
  }

  // Icons switch purely with CSS (dark: variant), so server and client markup always match.
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle bright / dark mode"
      title="Toggle bright / dark mode"
      className={cn(
        "grid size-11 place-items-center rounded-full border border-line text-fg transition-colors hover:border-amber-500 hover:text-accent",
        className,
      )}
    >
      <Icon name="moon" size={20} className="dark:hidden" />
      <Icon name="sun" size={20} className="hidden dark:block" />
    </button>
  );
}
