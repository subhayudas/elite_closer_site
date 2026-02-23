import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LOADING_DURATION_MS = 2000;
const DROP_DURATION = 0.6;
const BOUNCE_DURATION = 0.4;

export const LoadingScreen = () => {
  const { t } = useTranslation();
  const [isComplete, setIsComplete] = useState(false);
  const [minTimeReached, setMinTimeReached] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);
    if (document.readyState === "complete") {
      setIsLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setMinTimeReached(true), LOADING_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (minTimeReached && isLoaded) {
      setIsComplete(true);
    }
  }, [minTimeReached, isLoaded]);

  useEffect(() => {
    if (!isComplete) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isComplete]);

  return (
    <AnimatePresence mode="wait">
      {!isComplete && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(15,23,42,0.95) 0%, rgba(0,0,0,0.98) 50%, #000000 100%)",
          }}
        >
          {/* Red glow layer - behind logo, visible during spin */}
          <motion.div
            className="absolute h-[280px] w-[280px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(225,29,72,0.4) 0%, rgba(225,29,72,0.15) 40%, transparent 70%)",
              filter: "blur(24px)",
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: [0, 1, 1],
              scale: [0.5, 1.2, 1.2],
              transition: {
                opacity: { delay: DROP_DURATION + BOUNCE_DURATION * 0.5, duration: 0.3 },
                scale: { delay: DROP_DURATION + BOUNCE_DURATION * 0.5, duration: 0.3 },
              },
            }}
          />

          {/* Logo container - drop, bounce, spin, then explode */}
          <motion.div
            className="relative z-10 flex h-[120px] w-[120px] items-center justify-center"
            style={{ perspective: "800px" }}
            initial={{ y: -200, rotateY: 0, scale: 1, opacity: 1 }}
            animate={{
              y: [-200, 0, -18, 0],
              rotateY: [0, 0, 360 * 4],
              scale: [1, 1, 1, 8],
              opacity: [1, 1, 1, 0],
              transition: {
                y: {
                  times: [0, 0.5, 0.68, 0.88],
                  duration: DROP_DURATION + BOUNCE_DURATION,
                  ease: [0.34, 1.56, 0.64, 1],
                },
                scale: {
                  times: [0, 0.4, 0.9, 1],
                  duration: LOADING_DURATION_MS / 1000,
                },
                opacity: {
                  times: [0, 0.4, 0.85, 1],
                  duration: LOADING_DURATION_MS / 1000,
                },
                rotateY: {
                  times: [0, 0.15, 0.55, 1],
                  duration: LOADING_DURATION_MS / 1000,
                  ease: "linear",
                },
              },
            }}
          >
            <motion.div
              className="h-full w-full"
              style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
            >
              <img
                src="/header1.png"
                alt="Wildcard Logo"
                className="h-full w-full object-contain drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Loading text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: DROP_DURATION + BOUNCE_DURATION * 0.3 },
            }}
            className="relative z-10 mt-8 font-mono text-sm tracking-[0.4em] text-slate-400"
          >
            <span className="animate-flicker">{t("loading.text")}</span>
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
