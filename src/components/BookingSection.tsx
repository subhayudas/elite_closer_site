/**
 * BookingSection.tsx
 * Calendly inline widget - professional booking section for Wildcard Growth.
 * Drop-in component: responsive, mobile-first, with optional show/hide toggle.
 * Compatible with Tailwind, Vite, Netlify.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import CalendlyInline from "@/components/CalendlyInline";
import { useTranslation } from "react-i18next";

const BookingSection = () => {
  const { t } = useTranslation();
  const [isWidgetVisible, setIsWidgetVisible] = useState(true);

  return (
    <section
      id="booking"
      className="relative py-16 sm:py-24"
      aria-label="Schedule a call"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header + optional toggle */}
        <div className="mb-8 flex flex-col items-center gap-4">
          <div className="w-full text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              {t("booking.tag")}
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold text-foreground sm:text-3xl">
              {t("booking.title")}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              {t("booking.description")}
            </p>
          </div>

          {/* Toggle button - show/hide widget */}
          <Button
            variant="outline"
            size="lg"
            onClick={() => setIsWidgetVisible((v) => !v)}
            className="shrink-0 border-white/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card"
            aria-expanded={isWidgetVisible}
          >
            <Calendar className="mr-2 h-4 w-4" />
            {isWidgetVisible ? t("booking.hideScheduler") : t("booking.showScheduler")}
          </Button>
        </div>

        {/* Calendly widget container - responsive, professional styling */}
        <AnimatePresence mode="wait">
          {isWidgetVisible && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="min-h-[750px]"
            >
              <div
                className="
                  mx-auto w-full max-w-[800px]
                  rounded-xl border border-white/10
                  bg-card/80 shadow-xl shadow-black/20
                  backdrop-blur-sm
                  p-4 sm:p-6
                  ring-1 ring-white/5
                "
              >
                <CalendlyInline />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BookingSection;
