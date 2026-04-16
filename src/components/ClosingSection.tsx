import { motion } from "framer-motion";

export default function ClosingSection() {
  return (
    <section className="py-24 md:py-32 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-6xl mb-8"
          >
            🤍
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-gold">
            Forever & Always
          </h2>
          <p className="mt-6 text-foreground/80 font-body text-lg leading-relaxed">
            Here's to your 25th trip around the sun, Umar. May this year bring you 
            everything your beautiful heart desires — and know that through it all, 
            I'll be right here, loving you endlessly.
          </p>
          <p className="mt-8 text-gold font-display text-2xl italic">
            With all my love, always. ♾️
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="mt-16 h-px max-w-md mx-auto bg-gradient-to-r from-transparent via-gold/30 to-transparent"
      />

      <p className="mt-8 text-muted-foreground/50 text-xs font-body tracking-widest uppercase">
        Made with love for Umar • June 1, 2026
      </p>
    </section>
  );
}
