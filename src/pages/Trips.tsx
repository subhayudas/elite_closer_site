import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Plane } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useFixedBackground } from "@/hooks/useFixedBackground";
import { useTranslation } from "react-i18next";

// Optimized images (run: node scripts/optimize-travel-images.mjs to regenerate)
const travelImages = [
  "/travel-pictures-optimized/IMG_6845.jpg",
  "/travel-pictures-optimized/IMG_7183.jpg",
  "/travel-pictures-optimized/IMG_6801.jpg",
  "/travel-pictures-optimized/IMG_6922.jpg",
  "/travel-pictures-optimized/IMG_7008.jpg",
  "/travel-pictures-optimized/IMG_7012.jpg",
  "/travel-pictures-optimized/IMG_7145.jpg",
  "/travel 2/IMG_2334.jpeg",
  "/travel 2/IMG_2381.jpeg",
  "/travel 2/IMG_2451.jpeg",
  "/travel 2/IMG_2628.jpeg",
];

const Trips = () => {
  const { t } = useTranslation();
  const useFixed = useFixedBackground();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

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

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25 }}
            className="mb-6 sm:mb-8"
          >
            <Link
              to="/#travel"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary sm:text-base"
            >
              <ArrowLeft className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>{t("trips.backToHome")}</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-10 sm:mb-16"
          >
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-primary sm:mb-3 sm:text-sm">
              {t("trips.tag")}
            </p>
            <h1 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4">
              {t("trips.title")} <span className="text-primary">{t("trips.titleHighlight")}</span>
            </h1>
            <p className="mt-3 text-sm text-muted-foreground max-w-3xl mx-auto sm:mt-4 sm:text-base lg:text-lg">
              {t("trips.description")}
            </p>
          </motion.div>

          {/* Trip Highlight Card - Punta Cana 2025 */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="mb-12 sm:mb-16"
          >
            <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-lg overflow-hidden">
              <div className="p-6 sm:p-8 border-b border-white/10">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-lg">{t("trips.puntaCana.location")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{t("trips.puntaCana.year")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Plane className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">{t("trips.tag")}</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base">
                  {t("trips.puntaCana.description")}
                </p>
              </div>

              {/* Photo Gallery */}
              <div className="p-4 sm:p-6">
                <h3 className="font-display text-lg font-semibold mb-4 sm:mb-6">{t("trips.puntaCana.tripHighlights")}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {travelImages.map((src, index) => (
                    <motion.div
                      key={src}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="group relative overflow-hidden rounded-xl border border-white/10 aspect-[4/3]"
                    >
                      <img
                        src={src}
                        alt={`Punta Cana trip ${index + 1}`}
                        loading="lazy"
                        decoding="async"
                        fetchPriority={index < 3 ? "high" : "low"}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        style={index === 0 || index === travelImages.length - 1 ? { objectPosition: "center bottom" } : {}}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="text-center"
          >
            <div className="mx-auto max-w-2xl rounded-xl border border-primary/20 bg-gradient-to-br from-black/60 to-black/40 p-6 backdrop-blur-lg sm:p-8">
              <h3 className="font-display text-xl font-bold mb-2 sm:text-2xl">
                {t("trips.wantToJoin.title")}
              </h3>
              <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                {t("trips.wantToJoin.description")}
              </p>
              <Link
                to="/elite-experience"
                className="inline-block rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
              >
                {t("trips.wantToJoin.learnAboutElite")}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Trips;
