"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Eye, ArrowRight } from "lucide-react";

const NEW_MODELS = [
  {
    id: "hybrid-core",
    name: "The Hybrid Core",
    description: "Integrated SD Card slot, high-capacity battery, and advanced thermal pads.",
    badge: "Core",
    price: 129,
    image: "https://images.unsplash.com/photo-1592839719941-8e2651039d01?auto=format&fit=crop&q=80&w=800",
    specs: ["MicroSD Slot", "5000mAh Battery", "Thermal Pads"]
  },
  {
    id: "cryo-shield",
    name: "The Cryo-Shield",
    description: "Pure performance cooling. High-grade thermal pads to eliminate throttling.",
    badge: "Cooling",
    price: 89,
    image: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&q=80&w=800",
    specs: ["Liquid Carbon", "-15°C Drop", "Ultra-slim"]
  },
  {
    id: "neural-bridge",
    name: "The Neural Bridge",
    description: "External co-processor chip designed to offload heavy background tasks.",
    badge: "Pro",
    price: 199,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    specs: ["NC-1 Tensor", "8GB LPDDR5", "AI Boost"]
  },
];

export function ProductShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Parallax effects
  const yParallaxFast = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yParallaxSlow = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section id="products" className="py-32 bg-gray-50 overflow-hidden" ref={containerRef}>
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <h2 className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-3">Lineup</h2>
            <h3 className="text-display-md text-nova-black leading-tight">Choose your <br/> unfair advantage.</h3>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-nova-grey text-lg max-w-sm"
          >
            Three distinct models engineered to violently push the boundaries of what your pocket supercomputer can do.
          </motion.div>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEW_MODELS.map((model, index) => {
            // Apply different parallax speeds for asymmetry
            const yTransform = index % 2 === 0 ? yParallaxFast : yParallaxSlow;

            return (
              <motion.div
                key={model.id}
                style={{ y: yTransform }}
                onMouseEnter={() => setHoveredCard(model.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative group bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-soft-lg flex flex-col justify-between h-[500px] transition-transform duration-500 hover:-translate-y-2 ${index === 0 ? 'md:mt-12 lg:mt-24' : index === 1 ? 'lg:mt-0' : 'md:mt-0 lg:mt-16'}`}
              >
                <div className="relative z-10 flex justify-between items-start mb-6">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-semibold tracking-wide text-nova-black">
                    {model.badge}
                  </span>
                  <span className="text-xl font-bold text-nova-black">${model.price}</span>
                </div>

                <div className="absolute inset-0 w-full h-[60%] top-[40%] bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-[2.5rem] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Background Image */}
                <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
                  <motion.img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover"
                    animate={{ scale: hoveredCard === model.id ? 1.05 : 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                <div className="relative z-20 flex flex-col justify-end h-full">
                  <AnimatePresence>
                    {hoveredCard === model.id ? (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="text-white"
                      >
                        {/* Quick Look Specs */}
                        <div className="flex gap-2 mb-4 text-xs font-medium">
                          {model.specs.map(s => (
                            <span key={s} className="bg-white/20 backdrop-blur-md px-2 py-1 rounded-md">{s}</span>
                          ))}
                        </div>
                        <h4 className="text-2xl font-bold mb-2">{model.name}</h4>
                        <Link 
                          href={`/products/${model.id}`}
                          className="flex items-center gap-2 text-white bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-full font-medium transition-colors w-fit"
                        >
                          <Eye size={18} />
                          Quick Look
                        </Link>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="bg-white/80 backdrop-blur-md p-6 rounded-3xl group-hover:opacity-0 transition-opacity duration-300"
                      >
                        <h4 className="text-xl font-bold text-nova-black mb-2">{model.name}</h4>
                        <Link 
                          href={`/products/${model.id}`}
                          className="flex items-center gap-2 text-orange-500 font-semibold group/link"
                        >
                          View Details 
                          <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
