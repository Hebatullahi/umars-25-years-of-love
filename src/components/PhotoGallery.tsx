import { motion } from "framer-motion";

interface PhotoGalleryProps {
  id: string;
  label: string;
  title: string;
  description: string;
  placeholderCount: number;
  accentColor: "gold" | "teal" | "warm";
}

const accentMap = {
  gold: { border: "border-gold/30 hover:border-gold/60", glow: "glow-gold", text: "text-gold" },
  teal: { border: "border-teal/30 hover:border-teal/60", glow: "glow-teal", text: "text-teal" },
  warm: { border: "border-warm/30 hover:border-warm/60", glow: "glow-gold", text: "text-warm" },
};

export default function PhotoGallery({ id, label, title, description, placeholderCount, accentColor }: PhotoGalleryProps) {
  const accent = accentMap[accentColor];

  return (
    <section id={id} className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className={`text-sm tracking-[0.3em] uppercase font-body ${accent.text}`}>
            {label}
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 text-gradient-gold">
            {title}
          </h2>
          <p className="mt-4 text-muted-foreground font-body max-w-xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {Array.from({ length: placeholderCount }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative overflow-hidden rounded-xl border-2 ${accent.border} transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group`}
            >
              <div className={`aspect-[4/5] bg-surface flex items-center justify-center`}>
                <div className="text-center p-4">
                  <div className={`text-4xl mb-3 ${accent.text} opacity-50`}>📷</div>
                  <p className="text-muted-foreground text-xs font-body">
                    Photo {i + 1}
                  </p>
                  <p className="text-muted-foreground/50 text-[10px] font-body mt-1">
                    Replace with your image
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
