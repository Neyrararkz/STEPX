import { motion } from "motion/react";
import { Github } from "lucide-react";
import { siteConfig } from "../config/data";

export function GithubLink() {
  return (
    <section id="github" className="px-5 py-12 md:py-16">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 tracking-tight">
            GitHub
          </h2>

          {/* GitHub Button */}
          <motion.a
            href={siteConfig.github.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl border-2 border-zinc-900 bg-zinc-900 text-white font-medium hover:bg-zinc-800 hover:border-zinc-800 active:bg-zinc-950 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>Открыть репозиторий</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
