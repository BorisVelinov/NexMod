"use client";

import { motion } from "framer-motion";
import { Zap, Battery, Shield } from "lucide-react";

export function HowItWorks() {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="section-spacing bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-display-md text-nova-black mb-4"
          >
            Engineering, uninterrupted.
          </motion.h2>
        </div>

        <motion.div
          variants={containerVars}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {/* Block 1 */}
          <motion.div variants={itemVars} className="bento-card group flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-white rounded-2xl shadow-soft flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Zap className="w-6 h-6 text-nova-orange" />
            </div>
            <h3 className="text-xl font-semibold text-nova-black mb-3">
              Zero Latency.
            </h3>
            <p className="text-nova-grey text-sm leading-relaxed">
              Direct port connection ensures zero lag between the case and your OS.
            </p>
          </motion.div>

          {/* Block 2 */}
          <motion.div variants={itemVars} className="bento-card group flex flex-col items-center text-center">
             <div className="w-14 h-14 bg-white rounded-2xl shadow-soft flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Battery className="w-6 h-6 text-nova-black" />
            </div>
            <h3 className="text-xl font-semibold text-nova-black mb-3">
              Pass-through Charging.
            </h3>
            <p className="text-nova-grey text-sm leading-relaxed">
              Charge your phone and the case simultaneously.
            </p>
          </motion.div>

          {/* Block 3 */}
          <motion.div variants={itemVars} className="bento-card group flex flex-col items-center text-center md:col-span-2 lg:col-span-1">
             <div className="w-14 h-14 bg-white rounded-2xl shadow-soft flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Shield className="w-6 h-6 text-nova-black" />
            </div>
            <h3 className="text-xl font-semibold text-nova-black mb-3">
              Aviation-Grade Aluminum.
            </h3>
            <p className="text-nova-grey text-sm leading-relaxed">
              Drop-tested. Thermally optimized. Incredibly light.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
