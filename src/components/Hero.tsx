import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFixedBackground } from "@/hooks/useFixedBackground";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const useFixed = useFixedBackground();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen min-h-[100dvh] items-center justify-center overflow-hidden"
    >
      {/* Hero background image - Mobile Hero on small screens, Hero 6 on desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{
          backgroundImage: `url("/MOBILE%20Hero.png")`,
          backgroundAttachment: useFixed ? "fixed" : "scroll",
        }}
      />
      <div
        className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat md:block"
        style={{
          backgroundImage: `url("/Hero%206.png")`,
          backgroundAttachment: useFixed ? "fixed" : "scroll",
        }}
      />
      {/* Animated grid */}
      <div className="animated-grid absolute inset-0" />
      {/* Heavy radial overlay: transparent corners, deep black center for text separation */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-base font-medium uppercase tracking-[0.2em] text-muted-foreground sm:mb-6 sm:text-sm sm:tracking-[0.3em]"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.15 }}
          className="font-display font-black leading-tight tracking-tighter"
        >
          <span
            className="block text-5xl text-white sm:text-5xl sm:text-6xl lg:text-7xl"
            style={{ textShadow: "0 4px 20px rgba(0,0,0,0.9), 0 2px 8px rgba(0,0,0,0.8)" }}
          >
            {t("hero.title1")}
          </span>
          <span
            className="mt-2 block text-5xl text-primary sm:text-5xl sm:text-6xl lg:text-7xl"
          >
            {t("hero.title2")}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg lg:text-xl"
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 sm:mt-10"
        >
          <motion.div
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block rounded-md"
          >
            <Button
              size="lg"
              asChild
              className="gap-2 px-10 py-4 text-lg font-semibold !bg-[#C51631] text-white transition-all duration-300 hover:!bg-[#C51631]/90 sm:px-8 sm:text-base lg:px-10"
            >
              <Link to="/events">
                {t("hero.seeWildcardEvents")}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
