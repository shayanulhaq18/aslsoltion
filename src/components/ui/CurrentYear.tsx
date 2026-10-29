"use client";

// Render inside <Suspense>: Cache Components can't prerender `new Date()` into the static shell.
export function CurrentYear() {
  return <>{new Date().getFullYear()}</>;
}
