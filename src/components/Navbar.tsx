"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ShoppingCart, Trash2 } from "lucide-react";
import { useCart } from "../context/CartContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cart, cartCount, totalPrice, removeFromCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Products", href: "/#products" },
    { label: "Technology", href: "/#technology" },
    { label: "Specs", href: "/#specs" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-4" : "py-6"
        }`}
      >
        <div className="section-container relative">
          <div
            className={`flex items-center justify-between rounded-full bg-white/70 px-6 py-3 transition-all duration-500 @apply backdrop-blur-nav ${
              isScrolled ? "shadow-soft border border-nova-black/5" : "border border-transparent"
            }`}
            style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
          >
            {/* Logo */}
            <Link href="/" className="text-xl font-bold tracking-tight text-nova-black">
              NovaCore
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[0.9375rem] font-medium text-nova-grey hover:text-nova-black transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA, Cart & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <button
                className="relative p-2 text-nova-black hover:text-orange-500 transition-colors"
                onClick={() => setCartOpen(true)}
              >
                <ShoppingCart size={22} />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-orange-500 rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>

              <Link href="/#buy" className="hidden md:flex btn-primary py-2 px-5 text-sm bg-orange-500 hover:bg-orange-600 text-white rounded-full">
                Buy Now
              </Link>
              
              <button
                className="md:hidden p-2 text-nova-black"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 px-6 md:hidden"
            >
              <div className="rounded-2xl bg-white/95 p-6 shadow-soft-lg border border-nova-black/5 backdrop-blur-nav">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium text-nova-black border-b border-nova-black/5 pb-4"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="mt-2">
                    <Link
                      href="/#buy"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex w-full btn-primary justify-center bg-orange-500 text-white py-3 rounded-full"
                    >
                      Buy Now
                    </Link>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Cart Drawer */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCartOpen(false)}
              className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-nova-black">Your Cart</h2>
                <button
                  onClick={() => setCartOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} className="text-nova-grey" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-nova-grey space-y-4">
                    <ShoppingCart size={48} className="opacity-20" />
                    <p className="text-lg">Your cart is empty.</p>
                  </div>
                ) : (
                  <ul className="space-y-6">
                    {cart.map((item) => (
                      <li key={item.id} className="flex items-center gap-4 border border-gray-100 p-4 rounded-xl">
                        <div className="flex-1">
                          <h3 className="font-semibold text-nova-black">{item.name}</h3>
                          <p className="text-nova-grey text-sm">${item.price.toFixed(2)} x {item.quantity}</p>
                        </div>
                        <div className="text-right flex flex-col items-end gap-2">
                          <span className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</span>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-600 transition-colors p-1"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="p-6 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-nova-grey font-medium">Subtotal</span>
                  <span className="text-2xl font-bold text-nova-black">${totalPrice.toFixed(2)}</span>
                </div>
                <button
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-full font-bold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={cart.length === 0}
                >
                  Checkout
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

