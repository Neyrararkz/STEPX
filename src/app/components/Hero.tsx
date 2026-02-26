import { motion } from "motion/react";
import { siteConfig } from "../config/data";

export function Hero() {
  return (
    <section id="hero" className="min-h-[60vh] flex items-center justify-center px-5 py-16 md:py-24">
      <div className="w-full max-w-[1100px]">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          {/* Left: STEPX */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1"
          >
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-zinc-900">
              {siteConfig.team.name}
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-4 text-lg md:text-xl text-zinc-600 font-light"
            >
              {siteConfig.team.slogan}
            </motion.p>
          </motion.div>

          {/* Right: ITSTEP COLLEGE */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:text-right"
          >
            <p className="text-sm md:text-base font-medium tracking-wide text-zinc-500 uppercase">
              {siteConfig.team.college}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
