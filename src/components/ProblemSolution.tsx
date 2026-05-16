"use client";

import { motion } from "framer-motion";

export function ProblemSolution() {
  return (
    <section className="section-spacing bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-display-lg text-nova-black mb-8 leading-tight">
            Love the screen. Keep the camera. Ditch the lag.
          </h2>
          <p className="text-body-lg text-nova-grey leading-relaxed max-w-3xl mx-auto">
            Why buy a new smartphone when your current one just needs a boost? Our
            patented Smart Connector technology bridges the gap between your older
            device and flagship performance, seamlessly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
