import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const events = [
  {
    title: "Free Training 2",
    date: "February 22, 2026",
    location: "Zoom",
    attendees: "50 Spots",
    image: "/Zoom 4.png",
    description: "Join us for an exclusive one-hour intensive training session. Learn proven sales frameworks, closing techniques, and strategies that top performers use to close 6-figure deals. Limited spots available.",
  },
  {
    title: "Free Training 3",
    date: "March 8, 2026",
    location: "Zoom",
    attendees: "50 Spots",
    image: "/Zoom 4.png",
    description: "Join us for an exclusive one-hour intensive training session. Learn proven sales frameworks, closing techniques, and strategies that top performers use to close 6-figure deals. Limited spots available.",
  },
  {
    title: "In-Person Training",
    date: "March 21–22, 2026",
    location: "In Person",
    attendees: "50 Spots",
    image: "/Gemini_Generated_Image_t4p79zt4p79zt4p7.png",
    description: "Join us for an exclusive in-person intensive training. Learn proven sales frameworks, closing techniques, and strategies that top performers use to close 6-figure deals. Limited spots available.",
  },
  {
    title: "In-Person Training",
    date: "April 4–5, 2026",
    location: "In Person",
    attendees: "50 Spots",
    image: "/Gemini_Generated_Image_t4p79zt4p79zt4p7.png",
    description: "Join us for an exclusive in-person intensive training. Learn proven sales frameworks, closing techniques, and strategies that top performers use to close 6-figure deals. Limited spots available.",
  },
];

const WildcardEvents = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" className="relative overflow-hidden pt-28 pb-24 sm:pt-32 sm:pb-32">
      <div className="animated-grid absolute inset-0" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-8"
        >
          <Link
            to="/#hero"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary sm:text-base"
          >
            <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>{t("wildcardEvents.backToHome")}</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-primary sm:mb-3 sm:text-sm">
            {t("wildcardEvents.tag")}
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            {t("wildcardEvents.title")}
          </h2>
          <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto sm:mt-4 sm:text-lg">
            {t("wildcardEvents.description")}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {events.map((event, i) => (
            <motion.div
              key={`${event.title}-${event.date}`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: "easeOut",
              }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/40 backdrop-blur-lg transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(197,22,49,0.4)]"
            >
              {/* Event Image */}
              <div className="relative flex h-32 items-center justify-center overflow-hidden sm:h-36">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Event Content */}
              <div className="p-5 sm:p-6">
                <h3 className="font-display text-xl font-bold mb-2 sm:text-2xl sm:mb-3">{event.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed sm:text-base sm:mb-4">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-1.5 border-t border-white/10 pt-3 sm:space-y-2 sm:pt-4">
                  <div className="flex items-center gap-2 text-xs sm:gap-3 sm:text-sm">
                    <Calendar className="h-3.5 w-3.5 text-primary shrink-0 sm:h-4 sm:w-4" />
                    <span className="text-muted-foreground">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:gap-3 sm:text-sm">
                    <MapPin className="h-3.5 w-3.5 text-primary shrink-0 sm:h-4 sm:w-4" />
                    <span className="text-muted-foreground">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:gap-3 sm:text-sm">
                    <Users className="h-3.5 w-3.5 text-primary shrink-0 sm:h-4 sm:w-4" />
                    <span className="text-muted-foreground">{event.attendees}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary/90 sm:mt-6 sm:px-6 sm:py-3 sm:text-base"
                >
                  {t("wildcardEvents.registerNow")}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WildcardEvents;
