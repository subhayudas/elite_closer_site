import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ProblemSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="relative py-24 sm:py-32">
      <div ref={ref} className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">The Broken System</p>
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">Why pay to learn?</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Most "gurus" make money selling you the course. We make money when you <span className="font-semibold text-foreground">WIN</span>. We are an agency, not a school. We invest in you, place you in high-ticket roles, and earn when you close deals.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            The old model is broken. Pay $5K, get a Slack group and recycled PDFs. Our model? Train you for free, place you in a role, and build a partnership that lasts.
          </p>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <div className="relative flex h-72 w-72 items-center justify-center rounded-2xl border border-border bg-secondary sm:h-80 sm:w-80">
            {/* Stylized chip visual */}
            <div className="absolute inset-4 rounded-xl border border-primary/20 bg-background" />
            <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary/30" />
            <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10" />
            <span className="relative z-10 font-display text-2xl font-bold tracking-wider text-primary">W</span>
            {/* Glow */}
            <div className="absolute -inset-1 rounded-2xl bg-primary/5 blur-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
