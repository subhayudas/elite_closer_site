/**
 * CalendlyInline.tsx
 * Reusable Calendly inline widget component.
 * Loads the widget script in useEffect and uses initInlineWidget for reliable init.
 * Script is not removed on unmount so other pages/components can use it.
 */

import { useEffect, useRef, useState } from "react";

const CALENDLY_URL = "https://calendly.com/si-entretien/1h";
const CALENDLY_SCRIPT_URL =
  "https://assets.calendly.com/assets/external/widget.js";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, string>;
        utm?: Record<string, string>;
        autoLoad?: boolean;
        doNotHash?: boolean;
        doNotScroll?: boolean;
      }) => void;
    };
  }
}

let scriptLoadPromise: Promise<void> | null = null;

function ensureCalendlyScript(): Promise<void> {
  if (scriptLoadPromise) return scriptLoadPromise;
  const existing = document.querySelector(
    `script[src="${CALENDLY_SCRIPT_URL}"]`
  ) as HTMLScriptElement | null;
  if (existing) {
    scriptLoadPromise = new Promise<void>((resolve) => {
      const done = () => resolve();
      existing.addEventListener("load", done);
      setTimeout(done, 150);
    });
    return scriptLoadPromise;
  }
  scriptLoadPromise = new Promise<void>((resolve) => {
    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT_URL;
    script.async = true;
    script.onload = () => resolve();
    document.body.appendChild(script);
  });
  return scriptLoadPromise;
}

const CalendlyInline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const initializedRef = useRef(false);

  useEffect(() => {
    let cancelled = false;

    ensureCalendlyScript().then(() => {
      if (cancelled) return;
      setScriptLoaded(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!scriptLoaded || !containerRef.current || initializedRef.current) return;
    if (typeof window.Calendly?.initInlineWidget !== "function") return;

    initializedRef.current = true;
    window.Calendly.initInlineWidget({
      url: CALENDLY_URL,
      parentElement: containerRef.current,
      prefill: {},
      utm: {},
      autoLoad: true,
      doNotHash: false,
      doNotScroll: false,
    });
  }, [scriptLoaded]);

  return (
    <div
      ref={containerRef}
      className="w-full"
      style={{ minWidth: 320, height: 700, minHeight: 700 }}
    >
      {!scriptLoaded && (
        <div
          className="flex min-h-[700px] items-center justify-center rounded-lg bg-muted/30"
          style={{ minWidth: 320 }}
        >
          <p className="text-muted-foreground">Loading scheduler...</p>
        </div>
      )}
    </div>
  );
};

export default CalendlyInline;
