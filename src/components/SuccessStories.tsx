import { motion, useInView } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const SuccessStories = () => {
  const { t } = useTranslation();
  const storyData = t("successStories.stories", { returnObjects: true }) as Array<{ prevJob: string; currentSalary: string }>;
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const handleWheel = useCallback((e: WheelEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    
    const deltaY = e.deltaY;
    const scrollLeft = el.scrollLeft;
    const scrollWidth = el.scrollWidth;
    const clientWidth = el.clientWidth;
    const maxScroll = scrollWidth - clientWidth;
    
    // Calculate if we're at the boundaries with a small threshold
    const isAtStart = scrollLeft <= 10;
    const isAtEnd = scrollLeft >= maxScroll - 10;
    
    const isScrollingDown = deltaY > 0;
    const isScrollingUp = deltaY < 0;
    
    // If at the end and scrolling down, or at the start and scrolling up, allow page scroll
    if ((isAtEnd && isScrollingDown) || (isAtStart && isScrollingUp)) {
      return; // Don't prevent default, allow page scroll
    }
    
    // Otherwise, prevent default and scroll horizontally
    e.preventDefault();
    e.stopPropagation();
    
    // Direct scroll manipulation for immediate response
    el.scrollLeft += deltaY;
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  return (
    <section id="stories" className="relative py-24 sm:py-32 overflow-hidden">
      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-primary sm:mb-3 sm:text-sm">{t("successStories.tag")}</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">{t("successStories.title")}</h2>
        </motion.div>

        <div className="mt-12 relative sm:mt-16">
          {/* Left fade gradient - narrower so edge cards appear further towards center */}
          <div className="absolute left-0 top-0 bottom-4 w-16 sm:w-20 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 bottom-4 w-16 sm:w-20 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
          
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto overflow-y-hidden pb-4 px-12 sm:px-16 [scrollbar-width:thin] [scrollbar-color:hsl(var(--muted-foreground)/0.45)_transparent] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-muted/20 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-muted-foreground/40 hover:[&::-webkit-scrollbar-thumb]:bg-muted-foreground/55"
          >
            {storyData.map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="min-w-[120px] flex-shrink-0 sm:min-w-[150px]"
              >
                <img
                  src={i === 0 ? "/Jess%20Stewart.png" : i === 1 ? "/Fred%20Chevarie.png" : i === 2 ? "/Charles%20Plamondon.png" : i === 3 ? "/Felix%20Joly.png" : i === 4 ? "/Luca.png" : i === 5 ? "/Ayman%20picture.png" : "/Dave%20mugshot.png"}
                  alt="Social proof"
                  className="w-full h-auto rounded-xl object-contain"
                />
                <div className="mt-3 rounded-lg bg-card/80 backdrop-blur-sm p-3 text-center border border-border/50">
                  <p className="text-xs text-muted-foreground">
                    {t("successStories.previous")}: <span className="text-foreground/70">{story.prevJob}</span>
                  </p>
                  <p className="text-sm font-semibold text-primary mt-1">
                    {t("successStories.now")}: {story.currentSalary}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
