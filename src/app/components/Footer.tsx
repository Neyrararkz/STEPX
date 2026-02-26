import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="px-5 py-16 md:py-20">
      <div className="max-w-[1100px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-zinc-500 font-light italic"
        >
          Спасибо за внимание, с любовью STEPX!
        </motion.p>
      </div>
    </footer>
  );
}
