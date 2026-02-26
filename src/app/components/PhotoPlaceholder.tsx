import { motion } from "motion/react";

export function PhotoPlaceholder() {
  return (
    <section id="photo" className="px-5 py-12 md:py-16">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-video rounded-2xl border border-zinc-200 bg-zinc-50/50 overflow-hidden group"
        >
          <motion.img
            src="/photo.jfif"
            alt="Team photo"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />

          {/* если хочешь оставить подпись поверх */}
          <div className="absolute bottom-3 left-3 rounded-xl bg-white/70 backdrop-blur px-3 py-1 text-xs text-zinc-700">
            Team photo
          </div>
        </motion.div>
      </div>
    </section>
  );
}