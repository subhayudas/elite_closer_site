import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Plane, MapPin, Star, Sparkles } from "lucide-react";
import { useFixedBackground } from "@/hooks/useFixedBackground";
import { useTranslation } from "react-i18next";

const EliteTravelExperience = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const useFixed = useFixedBackground();

  const travelExperiences = [
    {
      title: t("travel.curatedAccommodations.title"),
      description: t("travel.curatedAccommodations.description"),
      icon: Star,
      highlight: t("travel.curatedAccommodations.highlight"),
    },
    {
      title: t("travel.exclusiveDestinations.title"),
      description: t("travel.exclusiveDestinations.description"),
      icon: MapPin,
      highlight: t("travel.exclusiveDestinations.highlight"),
    },
    {
      title: t("travel.premiumTravel.title"),
      description: t("travel.premiumTravel.description"),
      icon: Plane,
      highlight: t("travel.premiumTravel.highlight"),
    },
    {
      title: t("travel.vipExperiences.title"),
      description: t("travel.vipExperiences.description"),
      icon: Sparkles,
      highlight: t("travel.vipExperiences.highlight"),
    },
  ];

  return (
    <section id="travel" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background image - Travel experience mobile on small screens, Wildcard 2 on desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 md:hidden"
        style={{
          backgroundImage: `url("/Travel%20experience%20mobile.png")`,
          backgroundAttachment: useFixed ? "fixed" : "scroll",
        }}
      />
      <div
        className="absolute inset-0 hidden bg-cover bg-center bg-no-repeat opacity-30 md:block"
        style={{
          backgroundImage: `url("/Wildcard%202.png")`,
          backgroundAttachment: useFixed ? "fixed" : "scroll",
        }}
      />
      <div className="animated-grid absolute inset-0" />
      
      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-primary sm:mb-3 sm:text-sm">
            {t("travel.tag")}
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span className="text-primary">ELITE</span> {t("travel.title").split(" ").slice(1).join(" ")}
          </h2>
          <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto sm:mt-4 sm:text-lg">
            {t("travel.description")}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {travelExperiences.map((experience, i) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: "easeOut",
              }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-lg p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(197,22,49,0.4)] sm:p-8"
            >
              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 sm:mb-6 sm:h-14 sm:w-14">
                <experience.icon className="h-6 w-6 text-primary sm:h-7 sm:w-7" />
              </div>

              {/* Highlight Badge */}
              <div className="mb-2 inline-block rounded-full border border-primary/30 bg-primary/5 px-2 py-1 sm:mb-3 sm:px-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-primary sm:text-xs">
                  {experience.highlight}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-bold mb-2 sm:text-xl sm:mb-3">{experience.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">
                {experience.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute -inset-1 rounded-xl bg-primary/0 blur-xl transition-all duration-300 group-hover:bg-primary/10" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="mx-auto max-w-3xl rounded-2xl border border-primary/20 bg-gradient-to-br from-black/60 to-black/40 p-8 backdrop-blur-lg">
            <h3 className="font-display text-2xl font-bold mb-3 sm:text-3xl">
              {t("travel.earnYourWay.title")}
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              {t("travel.earnYourWay.description")}
            </p>
            <Link to="/elite-experience">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
              >
                {t("travel.earnYourWay.learnMore")}
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EliteTravelExperience;
