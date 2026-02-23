import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Trophy, TrendingUp, Target, Crown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useFixedBackground } from "@/hooks/useFixedBackground";
import { useTranslation } from "react-i18next";

const EliteLevels = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const useFixed = useFixedBackground();

  const levels = [
    {
      level: 1,
      name: t("opportunity.commissionLevels.levelOne.title"),
      description: t("opportunity.commissionLevels.levelOne.description"),
      requirements: t("opportunity.commissionLevels.levelOne.requirements"),
      icon: Target,
    },
    {
      level: 2,
      name: t("opportunity.commissionLevels.levelTwo.title"),
      description: t("opportunity.commissionLevels.levelTwo.description"),
      requirements: t("opportunity.commissionLevels.levelTwo.requirements"),
      icon: TrendingUp,
    },
    {
      level: 3,
      name: t("opportunity.commissionLevels.levelThree.title"),
      description: t("opportunity.commissionLevels.levelThree.description"),
      requirements: t("opportunity.commissionLevels.levelThree.requirements"),
      icon: Trophy,
    },
    {
      level: 4,
      name: t("opportunity.commissionLevels.eliteLevel.title"),
      description: t("opportunity.commissionLevels.eliteLevel.description"),
      requirements: t("opportunity.commissionLevels.eliteLevel.requirements"),
      icon: Crown,
      isElite: true,
    },
  ];

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="relative pt-24 pb-16 sm:py-24 lg:py-32 overflow-hidden">
        {/* Background - Travel experience mobile on small screens, Wildcard 2 on desktop */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 md:hidden"
          style={{
            backgroundImage: `url("/Travel%20experience%20mobile.png")`,
            backgroundAttachment: useFixed ? "fixed" : "scroll",
          }}
        />
        <div
          className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat opacity-20 md:block"
          style={{
            backgroundImage: `url("/Wildcard%202.png")`,
            backgroundAttachment: useFixed ? "fixed" : "scroll",
          }}
        />
        <div className="animated-grid absolute inset-0" />
        
        <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-8"
          >
            <Link
              to="/elite-experience"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary sm:text-base"
            >
              <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>{t("eliteLevels.backToEliteExperience")}</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-primary sm:mb-3 sm:text-sm">
              {t("eliteLevels.tag")}
            </p>
            <h1 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl mb-3 sm:mb-4">
              {t("eliteLevels.title")} <span className="text-primary">{t("eliteLevels.titleHighlight")}</span>
            </h1>
            <p className="mt-3 text-sm text-muted-foreground max-w-2xl mx-auto sm:mt-4 sm:text-base">
              {t("eliteLevels.description")}
            </p>
          </motion.div>

          {/* Levels Grid */}
          <div className="space-y-4 sm:space-y-6">
            {levels.map((level, i) => {
              const LevelIcon = level.icon;
              return (
                <motion.div
                  key={level.level}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                  }}
                  className={`rounded-xl border ${
                    level.isElite
                      ? "border-primary/50 bg-black/40"
                      : "border-white/10 bg-black/40"
                  } backdrop-blur-lg p-4 sm:p-6`}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 sm:h-12 sm:w-12">
                      <LevelIcon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-display text-lg font-bold mb-1.5 sm:text-xl sm:mb-2">
                        {level.name}
                        {level.isElite && (
                          <span className="ml-2 text-xs text-primary sm:text-sm">({t("eliteLevels.eliteTravelAccess")})</span>
                        )}
                      </h2>
                      <p className="text-muted-foreground mb-3">{level.description}</p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">{t("eliteLevels.requirements")}: </span>
                        {level.requirements}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="mx-auto max-w-2xl rounded-xl border border-primary/20 bg-black/40 p-6 backdrop-blur-lg">
              <h3 className="font-display text-xl font-bold mb-3">
                {t("eliteLevels.readyToStart.title")}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t("eliteLevels.readyToStart.description")}
              </p>
              <Link
                to="/#booking"
                className="inline-block rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
              >
                {t("eliteLevels.readyToStart.applyForTraining")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EliteLevels;
