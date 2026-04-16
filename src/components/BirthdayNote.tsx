import { motion } from "framer-motion";

export default function BirthdayNote() {
  return (
    <section id="birthday-note" className="py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
            A Note From My Heart
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 text-gradient-gold">
            My Dearest Umar
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 space-y-6 text-foreground/90 text-lg leading-relaxed font-body"
        >
          <p>
            Today you turn 25, and my heart is bursting with so much love and pride for the 
            incredible man you've become. From the very first moment you came into my life, 
            everything changed — colors got brighter, laughter got louder, and love got deeper.
          </p>
          <p>
            You are my safe place, my biggest cheerleader, and the most thoughtful soul I know. 
            The way you love — wholeheartedly, generously, and without conditions — inspires me 
            every single day. You make ordinary moments feel magical and hard days feel bearable.
          </p>
          <p>
            A quarter of a century is such a beautiful milestone, and I want you to know that 
            every year of your life has been a gift to everyone around you — especially to me. 
            I am endlessly grateful that I get to walk this journey with you.
          </p>
          <p className="text-gold font-display text-xl italic">
            Here's to 25 years of your beautiful existence, and to many more years of 
            us — together, always. Happy Birthday, my love. 🤍
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        />
      </div>
    </section>
  );
}
