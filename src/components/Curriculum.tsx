import {
  motion,
  useInView,
} from "framer-motion";
import { useRef, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Brain, ScrollText, Database, Briefcase } from "lucide-react";
import { useFixedBackground } from "@/hooks/useFixedBackground";
import { useTranslation } from "react-i18next";

const imageSizeClasses: Record<string, string> = {
  default: "h-8 w-8 sm:h-10 sm:w-10",
  "scale-110": "h-8 w-8 origin-center scale-110 sm:h-10 sm:w-10",
  "scale-125": "h-8 w-8 origin-center scale-125 sm:h-10 sm:w-10",
};

const cards = [
  {
    icon: Brain,
    image: "/card 4.png",
    imageSize: "default" as const,
    title: "Origin",
    desc: "Born from real-world success. Wildcard Growth was created by Sam from Wild Card Agency. It was built specifically for internal recruitment. This isn't theory. It's a proven system that transformed top performers into an elite force. When you join, you're stepping into a legacy built by closers, for closers.",
  },
  {
    icon: ScrollText,
    image: "/Logo1 (1).png?v=2",
    imageSize: "default" as const,
    title: "Recruitment Model",
    desc: "We don't train from scratch. We recruit winners. Our model is simple: we identify candidates who already have proven skills on the ground. No endless training cycles. We bring in closers who can perform from day one. If you've got the hustle, we've got the opportunity. Your track record speaks, and we listen.",
  },
  {
    icon: Database,
    image: "/Logo2.png",
    imageSize: "default" as const,
    title: "Selection Process",
    desc: "Our selection process isn't like other programs. It's designed to guarantee results, not just hope for them. We evaluate candidates through a unique, rigorous process that ensures you're set up for success from the start. When you're accepted, you're not just getting a spot. You're getting a guaranteed pathway to results.",
  },
  {
    icon: Briefcase,
    image: "/allin.png",
    imageSize: "scale-110" as const,
    title: "Professional Integration ALL-IN",
    desc: "From day one, you're ALL-IN. Intensive support. Competitive commission rates. Real conditions to prove your skills and get paid for them. We don't make you wait. We evaluate you in the field, reward you for performance, and set you up to win. Your success is our success from the moment you start.",
  },
];

const staggerDelay = 0.05;

function TiltCard({
  children,
  index,
  inView,
}: {
  children: ReactNode;
  index: number;
  inView: boolean;
}) {
  return (
    <div className="group relative rounded-xl border border-white/10 bg-black/40 p-8 backdrop-blur-lg transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(197,22,49,0.4)]">
      {children}
    </div>
  );
}

const Curriculum = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const useFixed = useFixedBackground();

  const cards = [
    {
      icon: Brain,
      image: "/card 4.png",
      imageSize: "default" as const,
      title: t("curriculum.origin.title"),
      desc: t("curriculum.origin.description"),
    },
    {
      icon: ScrollText,
      image: "/Logo1 (1).png?v=2",
      imageSize: "default" as const,
      title: t("curriculum.recruitmentModel.title"),
      desc: t("curriculum.recruitmentModel.description"),
    },
    {
      icon: Database,
      image: "/Logo2.png",
      imageSize: "default" as const,
      title: t("curriculum.selectionProcess.title"),
      desc: t("curriculum.selectionProcess.description"),
    },
    {
      icon: Briefcase,
      image: "/allin.png",
      imageSize: "scale-110" as const,
      title: t("curriculum.professionalIntegration.title"),
      desc: t("curriculum.professionalIntegration.description"),
    },
  ];

  return (
    <section id="curriculum" className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url("/What is.jpg")`,
          backgroundAttachment: useFixed ? "fixed" : "scroll",
        }}
      />
      <div className="animated-grid absolute inset-0" />

      <div ref={ref} className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl mb-3 sm:mb-4">
            {t("curriculum.title")} <span className="text-primary">{t("curriculum.titleHighlight")}</span> {t("curriculum.titleSuffix")}
          </h2>
          <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto sm:mt-4 sm:text-lg">
            {t("curriculum.description")}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-6 sm:grid-cols-2">
          {cards.map((card, i) => (
            <TiltCard key={card.title} index={i} inView={inView}>
              <div className="mb-4 sm:mb-6">
                {"image" in card && card.image ? (
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 sm:mb-4 sm:h-14 sm:w-14">
                    <img
                      src={card.image}
                      alt={card.title}
                      className={`object-contain ${"imageSize" in card ? imageSizeClasses[card.imageSize] : imageSizeClasses.default}`}
                    />
                  </div>
                ) : (
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 sm:mb-4 sm:h-14 sm:w-14">
                    <card.icon className="h-6 w-6 text-primary sm:h-7 sm:w-7" />
                  </div>
                )}
              </div>
              <h3 className="font-display text-xl font-bold mb-3 sm:text-2xl sm:mb-4">{card.title}</h3>
              <p className="leading-relaxed text-sm text-muted-foreground sm:text-base">
                {card.desc}
              </p>
            </TiltCard>
          ))}
        </div>

        {/* B2B and D2D Explanation Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-12 sm:mt-16"
        >
          <div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-lg p-6 sm:p-8 lg:p-10">
            <h3 className="font-display text-2xl font-bold mb-6 text-center sm:text-3xl sm:mb-8">
              <span className="text-primary">B2B</span> & <span className="text-primary">D2D</span> {t("curriculum.b2bD2d.title").split(" ").slice(2).join(" ")}
            </h3>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-5 sm:p-6">
                <h4 className="font-display text-xl font-bold mb-3 text-primary sm:text-2xl">
                  {t("curriculum.b2bD2d.b2b.title")}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed sm:text-base">
                  {t("curriculum.b2bD2d.b2b.description")}
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-primary/5 p-5 sm:p-6">
                <h4 className="font-display text-xl font-bold mb-3 text-primary sm:text-2xl">
                  {t("curriculum.b2bD2d.d2d.title")}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed sm:text-base">
                  {t("curriculum.b2bD2d.d2d.description")}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="mt-12 text-center sm:mt-16"
        >
          <Link
            to="/events"
            className="inline-block rounded-lg bg-primary px-8 py-3 font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-[0_0_25px_rgba(197,22,49,0.5)]"
          >
            {t("curriculum.seeWildcardEvents")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Curriculum;
