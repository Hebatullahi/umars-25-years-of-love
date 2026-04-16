import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="inline-block text-lg md:text-xl tracking-[0.3em] uppercase text-accent font-body mb-4">
            June 1st, 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight"
        >
          Happy 25th Birthday,{" "}
          <span className="text-gradient-gold">Umar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed"
        >
          A quarter century of an incredible life — and I'm so blessed to be part of your story. 
          This is my love letter to you, wrapped in pixels and light.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-12"
        >
          <a
            href="#birthday-note"
            className="inline-flex items-center gap-2 text-gold font-body text-sm tracking-widest uppercase hover:text-warm transition-colors"
          >
            Scroll to explore
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              ↓
            </motion.span>
          </a>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-3 h-3 rounded-full bg-gold opacity-40"
        animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-2 h-2 rounded-full bg-teal opacity-50"
        animate={{ y: [0, -15, 0], opacity: [0.5, 0.9, 0.5] }}
        transition={{ repeat: Infinity, duration: 4, delay: 1 }}
      />
      <motion.div
        className="absolute top-1/3 right-10 w-4 h-4 rounded-full bg-warm opacity-30"
        animate={{ y: [0, -25, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ repeat: Infinity, duration: 3.5, delay: 0.5 }}
      />
    </section>
  );
}
