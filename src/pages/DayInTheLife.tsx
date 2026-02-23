import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Briefcase, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const DayInTheLife = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const preKnockingSchedule = [
    { time: "9:30 AM", activity: "Arrival of the closers" },
    { time: "9:35 AM", activity: "Review of yesterday's day, with tips" },
    { time: "9:40 AM", activity: "Goal of the day" },
    { time: "9:50 AM", activity: "Video of the day" },
    { time: "9:55 AM", activity: "Knock practice in teams + feedback from coaches" },
    { time: "10:20 AM", activity: "Distribution of territories by teams" },
    { time: "10:25 AM", activity: "Departure for the field" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="relative pt-24 pb-16 sm:py-24 lg:py-32 overflow-hidden">
        <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary sm:text-base"
            >
              <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>{t("dayInTheLife.backToHome")}</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12"
          >
            <h1 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl mb-2 text-white">
              {t("dayInTheLife.title")}
            </h1>
            <p className="text-primary text-xl sm:text-2xl font-semibold">
              {t("dayInTheLife.subtitle")}
            </p>
            <p className="mt-4 text-sm text-muted-foreground max-w-2xl mx-auto sm:text-base">
              {t("dayInTheLife.description")}
            </p>
          </motion.div>

          {/* Two-column layout: Schedule + Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-8 lg:grid-cols-2 mb-12"
          >
            {/* Left: Schedule */}
            <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-lg p-6 sm:p-8">
              <h2 className="font-display text-xl font-bold mb-6 flex items-center gap-2 text-primary sm:text-2xl">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
                {t("dayInTheLife.preKnocking")}
              </h2>
              <ul className="space-y-4">
                {preKnockingSchedule.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="font-mono text-sm font-semibold text-primary shrink-0 w-24">
                      {item.time}
                    </span>
                    <span className="text-muted-foreground text-sm sm:text-base">
                      {item.activity}
                    </span>
                  </li>
                ))}
              </ul>

              <h2 className="font-display text-xl font-bold mt-8 mb-4 flex items-center gap-2 text-primary sm:text-2xl">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6" />
                {t("dayInTheLife.knockingSession")}
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                <span className="font-semibold text-foreground">{t("dayInTheLife.knockingTime")}</span>
                <br />
                {t("dayInTheLife.knockingDescription")}
              </p>

              <h2 className="font-display text-xl font-bold mt-8 mb-4 sm:text-2xl text-primary">
                {t("dayInTheLife.return")}
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                {t("dayInTheLife.returnDescription")}
              </p>
            </div>

            {/* Right: Materials & Info */}
            <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-lg p-6 sm:p-8">
              <div className="mb-6 rounded-lg border border-primary/30 bg-primary/5 p-4">
                <p className="text-base font-semibold text-foreground sm:text-lg">
                  {t("dayInTheLife.goodOrBadWeather")}
                </p>
                <p className="text-primary font-bold mt-1">{t("dayInTheLife.shiftsAvailable")}</p>
              </div>

              <h2 className="font-display text-xl font-bold mb-4 flex items-center gap-2 text-primary sm:text-2xl">
                <Briefcase className="h-5 w-5 sm:h-6 sm:w-6" />
                {t("dayInTheLife.material")}
              </h2>
              <ul className="space-y-3 text-muted-foreground text-sm sm:text-base">
                <li>
                  <span className="font-semibold text-foreground">{t("dayInTheLife.siBinder")}</span> — {t("dayInTheLife.siBinderDescription")}
                </li>
                <li>
                  <span className="font-semibold text-foreground">{t("dayInTheLife.siEntretien")}</span>
                </li>
              </ul>

              <h2 className="font-display text-xl font-bold mt-8 mb-4 text-primary sm:text-2xl">
                {t("dayInTheLife.extra")}
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                {t("dayInTheLife.extraDescription")}
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <Link
              to="/#booking"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
            >
              {t("dayInTheLife.applyForTraining")}
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DayInTheLife;
