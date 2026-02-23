import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { DollarSign, TrendingUp, Percent, Target, Trophy, Crown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const TheOpportunity = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [scaleDialogOpen, setScaleDialogOpen] = useState(false);

  const opportunities = [
    {
      value: t("opportunity.averageSummer.value"),
      label: t("opportunity.averageSummer.label"),
      sublabel: t("opportunity.averageSummer.sublabel"),
      description: t("opportunity.averageSummer.description"),
      icon: DollarSign,
      highlight: t("opportunity.averageSummer.highlight"),
    },
    {
      value: t("opportunity.topPerformer.value"),
      label: t("opportunity.topPerformer.label"),
      sublabel: t("opportunity.topPerformer.sublabel"),
      description: t("opportunity.topPerformer.description"),
      icon: TrendingUp,
      highlight: t("opportunity.topPerformer.highlight"),
    },
    {
      value: t("opportunity.commissionOnly.value"),
      label: t("opportunity.commissionOnly.label"),
      sublabel: t("opportunity.commissionOnly.sublabel"),
      description: t("opportunity.commissionOnly.description"),
      icon: Percent,
      highlight: t("opportunity.commissionOnly.highlight"),
    },
    {
      value: t("opportunity.scale.value"),
      label: t("opportunity.scale.label"),
      sublabel: t("opportunity.scale.sublabel"),
      description: t("opportunity.scale.description"),
      icon: Target,
      highlight: t("opportunity.scale.highlight"),
      showLearnMore: true,
    },
  ];

  const scalingLevels = [
    {
      icon: Target,
      title: t("opportunity.commissionLevels.levelOne.title"),
      description: t("opportunity.commissionLevels.levelOne.description"),
      requirements: t("opportunity.commissionLevels.levelOne.requirements"),
    },
    {
      icon: TrendingUp,
      title: t("opportunity.commissionLevels.levelTwo.title"),
      description: t("opportunity.commissionLevels.levelTwo.description"),
      requirements: t("opportunity.commissionLevels.levelTwo.requirements"),
    },
    {
      icon: Trophy,
      title: t("opportunity.commissionLevels.levelThree.title"),
      description: t("opportunity.commissionLevels.levelThree.description"),
      requirements: t("opportunity.commissionLevels.levelThree.requirements"),
    },
    {
      icon: Crown,
      title: t("opportunity.commissionLevels.eliteLevel.title"),
      sublabel: t("opportunity.commissionLevels.eliteLevel.sublabel"),
      description: t("opportunity.commissionLevels.eliteLevel.description"),
      requirements: t("opportunity.commissionLevels.eliteLevel.requirements"),
      isElite: true,
    },
  ];

  return (
    <section id="opportunity" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="animated-grid absolute inset-0" />
      
      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-primary sm:mb-3 sm:text-sm">
            {t("opportunity.tag")}
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl sm:text-5xl lg:text-6xl">
            <span className="text-primary">{t("opportunity.title").split(" ")[0]}</span> {t("opportunity.title").split(" ").slice(1).join(" ")}
          </h2>
          <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto sm:mt-4 sm:text-lg">
            {t("opportunity.description")}
          </p>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {opportunities.map((opportunity, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.15,
                ease: "easeOut",
              }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-lg p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(197,22,49,0.4)] sm:p-8"
            >
              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 sm:mb-6 sm:h-14 sm:w-14">
                <opportunity.icon className="h-6 w-6 text-primary sm:h-7 sm:w-7" />
              </div>

              {/* Highlight Badge */}
              <div className="mb-3 inline-block rounded-full border border-primary/30 bg-primary/5 px-2 py-1 sm:mb-4 sm:px-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-primary sm:text-xs">
                  {opportunity.highlight}
                </span>
              </div>

              {/* Large Value */}
              <div className="mb-2 sm:mb-3">
                <span className="font-display text-3xl font-bold text-primary sm:text-4xl sm:text-5xl lg:text-6xl">
                  {opportunity.value}
                </span>
              </div>
              
              {/* Label */}
              <div className="mb-1 sm:mb-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-foreground sm:text-sm sm:text-base">
                  {opportunity.label}
                </span>
              </div>
              
              {/* Sublabel */}
              <div className="mb-3 sm:mb-4">
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs sm:text-sm">
                  {opportunity.sublabel}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-muted-foreground leading-relaxed sm:text-sm">
                {opportunity.description}
              </p>

              {/* Learn More button for scaling card */}
              {"showLearnMore" in opportunity && opportunity.showLearnMore && (
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 w-full border-primary/30 text-primary hover:bg-primary/10 hover:text-primary"
                  onClick={() => setScaleDialogOpen(true)}
                >
                  {t("opportunity.scale.learnMore")}
                </Button>
              )}

              {/* Hover Glow Effect */}
              <div className="pointer-events-none absolute -inset-1 rounded-xl bg-primary/0 blur-xl transition-all duration-300 group-hover:bg-primary/10" />
            </motion.div>
          ))}
        </div>

        {/* Dark overlay - rendered in portal to appear above fixed backgrounds (e.g. Elite Travel) */}
        {scaleDialogOpen &&
          createPortal(
            <div
              className="fixed inset-0 z-[9998] cursor-pointer bg-black/80 backdrop-blur-sm"
              aria-hidden="true"
              onClick={() => setScaleDialogOpen(false)}
            />,
            document.body
          )}

        {/* Scaling Levels Popup - modal={false} prevents body scroll lock and layout shift */}
        <Dialog open={scaleDialogOpen} onOpenChange={setScaleDialogOpen} modal={false}>
          <DialogContent className="z-[9999] max-w-md border-white/10 bg-black/95 backdrop-blur-lg sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="font-display text-xl text-white sm:text-2xl">
                {t("opportunity.commissionLevels.title")}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-2">
              {scalingLevels.map((level) => {
                const Icon = level.icon;
                return (
                  <div
                    key={level.title}
                    className={`rounded-xl border px-4 py-4 ${
                      level.isElite
                        ? "border-primary/50 bg-primary/5"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-display font-semibold text-white">
                          {level.title}
                          {level.sublabel && (
                            <span className="ml-2 text-sm font-medium text-primary">
                              ({level.sublabel})
                            </span>
                          )}
                        </h4>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {level.description}
                        </p>
                        <p className="mt-2 text-xs text-muted-foreground/90">
                          {level.requirements}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default TheOpportunity;
