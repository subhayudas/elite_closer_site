import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Plane, MapPin, Star, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useFixedBackground } from "@/hooks/useFixedBackground";
import { useTranslation } from "react-i18next";

const EliteExperience = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const useFixed = useFixedBackground();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const experiences = [
    {
      title: t("travel.curatedAccommodations.title"),
      description: t("travel.curatedAccommodations.description"),
      icon: Star,
    },
    {
      title: t("travel.exclusiveDestinations.title"),
      description: t("travel.exclusiveDestinations.description"),
      icon: MapPin,
    },
    {
      title: t("travel.premiumTravel.title"),
      description: t("travel.premiumTravel.description"),
      icon: Plane,
    },
    {
      title: t("travel.vipExperiences.title"),
      description: t("travel.vipExperiences.description"),
      icon: Sparkles,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <section className="relative pt-24 pb-16 sm:py-24 lg:py-32 overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url("/Wildcard 2.png")`,
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
              to="/#travel"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary sm:text-base"
            >
              <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>{t("eliteExperience.backToHome")}</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-16"
          >
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-primary sm:mb-3 sm:text-sm">
              {t("eliteExperience.tag")}
            </p>
            <h1 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4">
              <span className="text-primary">ELITE</span> {t("eliteExperience.title").split(" ").slice(1).join(" ")}
            </h1>
            <p className="mt-3 text-sm text-muted-foreground max-w-3xl mx-auto sm:mt-4 sm:text-base lg:text-lg">
              {t("eliteExperience.description")}
            </p>
          </motion.div>

          {/* What It Is Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-10 sm:mb-16"
          >
            <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-lg p-5 sm:p-8">
              <h2 className="font-display text-2xl font-bold mb-4 sm:text-3xl sm:mb-6">{t("eliteExperience.whatIs.title")}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3 sm:text-base sm:text-lg sm:mb-4">
                {t("eliteExperience.whatIs.description1")}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 sm:text-base sm:text-lg">
                {t("eliteExperience.whatIs.description2")}
              </p>
              <Link
                to="/trips"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 font-semibold text-white transition-colors hover:bg-primary/90"
              >
                {t("eliteExperience.whatIs.seeTrips")}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Experiences Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10 sm:mb-16"
          >
            <h2 className="font-display text-2xl font-bold mb-6 text-center sm:text-3xl sm:mb-8">{t("eliteExperience.whatYouGet.title")}</h2>
            <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {experiences.map((experience, i) => (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.4 + i * 0.1,
                  }}
                  className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-lg p-5 sm:p-6"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 sm:mb-4 sm:h-12 sm:w-12">
                    <experience.icon className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-1.5 sm:text-xl sm:mb-2">{experience.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">
                    {experience.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* How To Get There Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="rounded-xl border border-primary/20 bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-lg p-5 sm:p-8"
          >
            <h2 className="font-display text-2xl font-bold mb-4 sm:text-3xl sm:mb-6">{t("eliteExperience.howToReach.title")}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 sm:text-base sm:text-lg sm:mb-6">
              {t("eliteExperience.howToReach.description")}
            </p>
            <ul className="space-y-3 mb-6 sm:space-y-4 sm:mb-8">
              <li className="flex items-start gap-2.5 sm:gap-3">
                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 sm:h-2 sm:w-2" />
                <p className="text-xs text-muted-foreground sm:text-sm sm:text-base">
                  <span className="font-semibold text-foreground">{t("eliteExperience.howToReach.closeDeals.bold")}</span> {t("eliteExperience.howToReach.closeDeals.text")}
                </p>
              </li>
              <li className="flex items-start gap-2.5 sm:gap-3">
                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 sm:h-2 sm:w-2" />
                <p className="text-xs text-muted-foreground sm:text-sm sm:text-base">
                  <span className="font-semibold text-foreground">{t("eliteExperience.howToReach.exceedRevenue.bold")}</span> {t("eliteExperience.howToReach.exceedRevenue.text")}
                </p>
              </li>
              <li className="flex items-start gap-2.5 sm:gap-3">
                <div className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 sm:h-2 sm:w-2" />
                <p className="text-xs text-muted-foreground sm:text-sm sm:text-base">
                  <span className="font-semibold text-foreground">{t("eliteExperience.howToReach.maintainElite.bold")}</span> {t("eliteExperience.howToReach.maintainElite.text")}
                </p>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground mb-4 sm:text-sm sm:text-base sm:mb-6">
              {t("eliteExperience.howToReach.specificTargets")}
            </p>
            <Link
              to="/elite-levels"
              className="inline-block rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
            >
              {t("eliteExperience.howToReach.learnAboutLevels")}
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EliteExperience;
