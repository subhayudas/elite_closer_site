import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CalendlyInline from "@/components/CalendlyInline";

const ApplicationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="application" className="py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-2xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-3 text-base font-medium uppercase tracking-[0.2em] text-primary sm:text-lg lg:text-xl">Application</p>
          <h2 className="font-display text-3xl font-bold sm:text-5xl lg:text-6xl">
            We only accept <span className="text-primary">50 students</span> per month.
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-xl lg:text-2xl">This isn't for everyone. Prove you belong.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 min-h-[750px]"
        >
          <CalendlyInline />
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationSection;
