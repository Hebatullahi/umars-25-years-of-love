import { motion } from "framer-motion";

const reasons = [
  "Your smile lights up every room you walk into",
  "The way you make me laugh until my stomach hurts",
  "Your unwavering kindness to everyone around you",
  "How you always know exactly what to say",
  "Your incredible determination and drive",
  "The way you hold my hand — like you never want to let go",
  "Your patience with me, even on my difficult days",
  "How passionate you are about the things you love",
  "The way your eyes crinkle when you genuinely laugh",
  "Your ability to turn any situation into an adventure",
  "How you remember the smallest details about me",
  "Your warm, comforting hugs that feel like home",
  "The way you support my dreams without hesitation",
  "Your contagious positive energy",
  "How you always put others before yourself",
  "The beautiful way you see the world",
  "Your strength — both physical and emotional",
  "How you make even ordinary days feel special",
  "Your voice — whether talking, laughing, or saying my name",
  "The way you look at me like I'm the only person in the world",
  "Your honesty and how real you always are",
  "How safe and protected I feel with you",
  "Your intelligence and the depth of your thoughts",
  "The way you love me — completely and unconditionally",
  "Simply because you are you — my Umar, my everything",
];

export default function ReasonsSection() {
  return (
    <section id="reasons" className="py-24 md:py-32 px-6 bg-gradient-section-alt">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm tracking-[0.3em] uppercase font-body">
            One For Every Year
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 text-gradient-gold">
            25 Reasons I Love You
          </h2>
          <p className="mt-4 text-muted-foreground font-body max-w-xl mx-auto">
            For every year you've been alive, here's a reason my heart chose you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.08 }}
              className="reason-card flex items-start gap-4"
            >
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold font-display font-bold text-sm">
                {i + 1}
              </span>
              <p className="text-foreground/90 font-body text-sm leading-relaxed pt-2">
                {reason}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
