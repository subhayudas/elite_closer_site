import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

const qualifications = [
  { text: "You are hungry for a 6-figure income.", pass: true },
  { text: "You are tired of the 9-5 grind.", pass: true },
  { text: "You're coachable and willing to put in the reps.", pass: true },
  { text: "You want a \"get rich quick\" scheme.", pass: false },
  { text: "You are afraid of rejection.", pass: false },
  { text: "You need hand-holding for every decision.", pass: false },
];

const Qualification = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="qualification" className="py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">Be Honest With Yourself</p>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">Who Is This For?</h2>
        </motion.div>

        <div className="mt-12 space-y-4">
          {qualifications.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: q.pass ? -20 : 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="flex items-center gap-4 rounded-lg border border-border bg-secondary/50 px-6 py-4"
            >
              {q.pass ? (
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/15">
                  <Check className="h-4 w-4 text-emerald-400" />
                </div>
              ) : (
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15">
                  <X className="h-4 w-4 text-primary" />
                </div>
              )}
              <span className="text-base text-muted-foreground sm:text-lg">{q.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
