import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionContainer from "../shared/SectionContainer";

const criteria = [
  {
    title: "Strong Brand Equity",
    description:
      "You have strong brand equity and international traction in your home or global markets.",
    image:
      "https://framerusercontent.com/images/rwnPsA6NPZl8pqz4jAUpZfb1EU.jpg?width=827&height=1034",
  },
  {
    title: "Outcome-Focused",
    description:
      "You want a partner who invests in outcomes, not outputs — focusing on profit, not just activities.",
    image:
      "https://framerusercontent.com/images/MruZ95T8wLdXPlWUbkNsLzeHohw.jpg?width=1120&height=1400",
  },
  {
    title: "Long-Term Commitment",
    description:
      "You’re ready to commit to long-term growth in China, valuing brand integrity over short-term spikes.",
    image:
      "https://framerusercontent.com/images/JrO5lgm9G7MTmbzBt13ATW5s7gk.jpg?width=6702&height=4468",
  },
];

const BrandFit: React.FC = () => {
  return (
    <SectionContainer id="brand-fit" className="bg-white">
      <div className="text-center mb-24">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-6 block"
        >
          Partnership
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-neutral-900 tracking-framer"
        >
          Is Your Brand a Fit?
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {criteria.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-brand-dark rounded-[18px] overflow-hidden shadow-sm"
          >
            <div className="aspect-[4/5] relative flex flex-col">
              <div className="relative flex-grow overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-105"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, black 0%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 0%, transparent 100%)",
                  }}
                />
              </div>

              <div className="p-8 pb-10">
                <div className="flex items-start gap-3 mb-4">
                  <div className="mt-1 bg-white rounded-full p-0.5 shadow-lg flex-shrink-0">
                    <CheckCircle2
                      size={14}
                      className="text-brand-dark fill-brand-dark overflow-visible"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-framer leading-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-white/50 text-xs leading-relaxed tracking-tight group-hover:text-white/80 transition-colors duration-500">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="mt-24 p-12 rounded-[18px] bg-brand-dark text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 noise opacity-[0.05] pointer-events-none" />
        <p className="text-2xl md:text-3xl font-bold text-center md:text-left tracking-framer z-10 max-w-xl">
          Does this sound like your brand? <br className="hidden md:block" />
          <span className="opacity-50">
            Let’s talk about your China strategy.
          </span>
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-5 bg-white text-brand-dark rounded-full font-bold text-lg hover:bg-neutral-100 transition-all shadow-xl z-10 tracking-framer"
        >
          Apply to Partner
        </motion.button>
      </motion.div>
    </SectionContainer>
  );
};

export default BrandFit;
