"use client";

import { use } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCart } from "../../../context/CartContext";
import { ShoppingCart, Cpu, Battery, HardDrive, Zap, Wind, Layers } from "lucide-react";

const PRODUCTS = {
  "hybrid-core": {
    id: "hybrid-core",
    name: "The Hybrid Core",
    price: 129,
    tagline: "Endless storage meets infinite power.",
    description: "The definitive upgrade. Features a high-speed integrated SD Card slot for infinite storage expansion, a massive built-in battery to double your screen time, and advanced thermal pad integration to keep it all running cool under pressure.",
    heroImage: "https://images.unsplash.com/photo-1592839719941-8e2651039d01?auto=format&fit=crop&q=80&w=2000",
    specs: [
      { label: "Storage Exp", value: "Up to 2TB MicroSD" },
      { label: "Battery", value: "5000mAh Integrated" },
      { label: "Cooling", value: "Passive Thermal Pads" }
    ],
    techContent: {
      title: "Storage & Power Integration",
      desc: "Our proprietary connector bridges the SD card interface directly to your phone's main bus, ensuring nvme-like speeds from standard physical cards. Simultaneously, the smart battery management intelligently routes power."
    },
    icons: [HardDrive, Battery, Layers]
  },
  "cryo-shield": {
    id: "cryo-shield",
    name: "The Cryo-Shield",
    price: 89,
    tagline: "Zero throttling. Pure performance.",
    description: "A pure performance cooling case. Focused entirely on deep thermal management using aerospace-grade thermal pads and conductive arrays to completely eliminate phone throttling during intensive tasks.",
    heroImage: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?auto=format&fit=crop&q=80&w=2000",
    specs: [
      { label: "Material", value: "Liquid Carbon Array" },
      { label: "Heat Dissipation", value: "-15°C Peak Drop" },
      { label: "Thickness", value: "Ultra-slim 2.4mm" }
    ],
    techContent: {
      title: "Thermodynamic Architecture",
      desc: "By mapping the exact heat hotspots of your device, The Cryo-Shield uses localized graphene layers paired with high-grade thermal pads to aggressively pull heat away from the CPU, maintaining maximum clock speeds infinitely."
    },
    icons: [Wind, Zap, Layers]
  },
  "neural-bridge": {
    id: "neural-bridge",
    name: "The Neural Bridge",
    price: 199,
    tagline: "Break the limits of your CPU.",
    description: "Features a dedicated external co-processor chip designed to offload heavy background tasks from the phone's main CPU, violently increasing overall system speed and AI task performance.",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000",
    specs: [
      { label: "Co-Processor", value: "NC-1 Tensor Chip" },
      { label: "Memory", value: "8GB Dedicated LPDDR5" },
      { label: "Connection", value: "Ultra-Wideband Link" }
    ],
    techContent: {
      title: "Distributed Computing Matrix",
      desc: "The internal chip constantly handshakes with your phone's OS. When it detects heavy ML or background computational loads, it instantly offloads the calculations to the external case logic board, freeing up your main CPU for buttery-smooth UI."
    },
    icons: [Cpu, Zap, Layers]
  }
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const { addToCart } = useCart();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 1000], [0, 300]);

  // Using optional chaining or fallback to avoid Next.js 15 breaking changes with async params if it is one, but we'll assume it's sync/handled.
  const productKey = params.id as keyof typeof PRODUCTS;
  const product = PRODUCTS[productKey];

  if (!product) {
    return <div className="pt-40 text-center text-nova-black">Product not found.</div>;
  }

  const [Icon1, Icon2, Icon3] = product.icons;

  return (
    <div className="bg-white min-h-screen pt-24 pb-20">
      <div className="section-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[70vh]">
          {/* Left: Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col z-10 space-y-6 pt-10"
          >
            <div>
              <p className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-3">Model</p>
              <h1 className="text-display-lg text-nova-black tracking-tight leading-none mb-4">{product.name}</h1>
              <p className="text-2xl font-light text-nova-grey">{product.tagline}</p>
            </div>
            
            <p className="text-lg text-nova-grey leading-relaxed max-w-lg">
              {product.description}
            </p>

            <div className="flex items-center gap-6 mt-8">
              <span className="text-4xl font-bold text-nova-black">${product.price}</span>
              <button
                onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 })}
                className="btn-primary bg-orange-500 hover:bg-orange-600 text-white py-4 px-8 rounded-full text-lg shadow-orange-500/25 shadow-lg flex items-center gap-2 transform transition-all active:scale-95"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>
            </div>
          </motion.div>

          {/* Right: Massive Parallax Image */}
          <div className="relative h-[600px] w-full rounded-[2.5rem] overflow-hidden bg-nova-grey-light">
            <motion.div style={{ y: imageY }} className="absolute inset-[-20%]">
              <img
                src={product.heroImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nova-black/40 to-transparent" />
            </motion.div>
          </div>
        </div>

        {/* Tech Specs Section - Asymmetrical Bento Grid */}
        <div className="mt-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display-md text-nova-black mb-12 text-center"
          >
            Technical Breakdown
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto auto-rows-[250px]">
            {/* Bento Box 1: Core Tech Explanation (Spans 2 cols) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-2 row-span-2 bg-nova-black text-white rounded-[2rem] p-10 flex flex-col justify-between overflow-hidden relative group"
            >
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-orange-500/20 to-transparent rounded-full blur-3xl opacity-50 transition-opacity group-hover:opacity-100" />
              <div className="relative z-10">
                <Icon1 size={48} className="text-orange-500 mb-6" />
                <h3 className="text-3xl font-bold mb-4">{product.techContent.title}</h3>
                <p className="text-nova-grey-light text-lg leading-relaxed max-w-md">
                  {product.techContent.desc}
                </p>
              </div>
            </motion.div>

            {/* Bento Box 2: Spec 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-nova-grey-light rounded-[2rem] p-8 flex flex-col justify-center"
            >
              <Icon2 size={32} className="text-nova-black mb-4" />
              <p className="text-nova-grey font-medium uppercase tracking-widest text-xs mb-1">{product.specs[0].label}</p>
              <p className="text-2xl font-bold text-nova-black">{product.specs[0].value}</p>
            </motion.div>

            {/* Bento Box 3: Spec 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-orange-500 text-white rounded-[2rem] p-8 flex flex-col justify-center relative overflow-hidden"
            >
              <Icon3 size={32} className="mb-4 text-white/80" />
              <p className="text-white/80 font-medium uppercase tracking-widest text-xs mb-1">{product.specs[1].label}</p>
              <p className="text-2xl font-bold">{product.specs[1].value}</p>
            </motion.div>

            {/* Bento Box 4: Spec 3 (Spans all cols on mobile, 1 on desktop) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="md:col-span-3 bg-white border border-nova-black/5 shadow-soft-lg rounded-[2rem] p-8 flex flex-row items-center justify-between"
            >
              <div>
                <p className="text-nova-grey font-medium uppercase tracking-widest text-xs mb-1">{product.specs[2].label}</p>
                <p className="text-2xl font-bold text-nova-black">{product.specs[2].value}</p>
              </div>
              <div className="h-16 w-16 rounded-full bg-nova-grey-light flex items-center justify-center">
                <Zap size={24} className="text-nova-black" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
