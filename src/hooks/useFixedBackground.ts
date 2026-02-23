import { useEffect, useState } from "react";

/**
 * Detects whether to use fixed background attachment.
 * - Mobile devices (all): No fixed (performance/visual issues)
 * - Social media in-app browsers: No fixed (WebView compatibility)
 * - Desktop only: Fixed
 */
export function useFixedBackground(): boolean {
  const [useFixed, setUseFixed] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const ua = navigator.userAgent.toLowerCase();
      const referrer = (document.referrer || "").toLowerCase();

      // Check if mobile device (iOS, Android, tablets)
      const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) ||
        window.innerWidth < 768; // Also check viewport width

      // Social media in-app browsers - avoid fixed (WebView compatibility)
      const isSocialInApp =
        /fban|fbav|instagram|twitter|linkedinapp|tiktok|snapchat|pinterest|line|kakaotalk|telegram|whatsapp|fb_iab|fbav/i.test(ua) ||
        /facebook\.com|instagram\.com|twitter\.com|t\.co|linkedin\.com|tiktok\.com|snapchat\.com|pinterest\.com|l\.facebook\.com/i.test(
          referrer
        );

      // Use fixed only for desktop (not mobile, not social in-app)
      setUseFixed(!isMobile && !isSocialInApp);
    };

    checkMobile();
    
    // Recheck on resize
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return useFixed;
}
