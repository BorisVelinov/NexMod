"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function Hero() {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background radial gradient for subtle depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-orange-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          variants={containerVars}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <motion.h1
            variants={itemVars}
            className="text-display-xl tracking-tighter-custom mb-6 bg-gradient-to-br from-nova-orange via-rose-500 to-nova-black bg-clip-text text-transparent"
          >
            The power your <br className="hidden sm:block" /> phone deserves.
          </motion.h1>

          <motion.p
            variants={itemVars}
            className="text-body-lg text-nova-grey max-w-2xl mb-10"
          >
            Introducing the entirely redesigned lineup. Expand storage, violently increase speed, or stay infinitely cool under pressure. Keep the device you love.
          </motion.p>

          <motion.div
            variants={itemVars}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          >
            <button className="btn-primary w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white border-0">
              Discover NovaCore
            </button>
            <button className="btn-ghost w-full sm:w-auto group">
              <span className="flex items-center gap-2">
                Watch the film
                <Play className="w-4 h-4 fill-current group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Massive 3D Product Render Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 lg:mt-28 relative mx-auto max-w-5xl"
        >
          <div className="aspect-[16/9] md:aspect-[2/1] rounded-[2rem] bg-gradient-to-b from-nova-grey-light to-white border border-nova-black/5 shadow-soft-lg overflow-hidden relative group">
            {/* Soft inner glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10" />
            
            <img 
              src="https://images.unsplash.com/photo-1621360841013-c76831f17360?auto=format&fit=crop&q=80&w=2000" 
              alt="NovaCore Hero Rendering" 
              className="w-full h-full object-cover rounded-[2rem]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
