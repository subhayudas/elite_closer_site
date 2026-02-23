import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const faqs = [
    {
      q: t("faq.questions.freeTraining.q"),
      a: t("faq.questions.freeTraining.a"),
    },
    {
      q: t("faq.questions.getStarted.q"),
      a: t("faq.questions.getStarted.a"),
    },
    {
      q: t("faq.questions.timeCommitment.q"),
      a: t("faq.questions.timeCommitment.a"),
    },
    {
      q: t("faq.questions.experienceRequired.q"),
      a: t("faq.questions.experienceRequired.a"),
    },
    {
      q: t("faq.questions.joinTeam.q"),
      a: t("faq.questions.joinTeam.a"),
    },
    {
      q: t("faq.questions.b2bD2d.q"),
      a: t("faq.questions.b2bD2d.a"),
    },
  ];

  return (
    <section id="faq" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="animated-grid absolute inset-0" />

      <div ref={ref} className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            {t("faq.title")}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl border border-white/10 bg-black/40 backdrop-blur-lg overflow-hidden"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-white/10 px-4 sm:px-6"
              >
                <AccordionTrigger className="text-left text-white hover:text-primary hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
