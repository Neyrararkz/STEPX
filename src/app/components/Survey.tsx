import { motion } from "motion/react";
import { ExternalLink, Download } from "lucide-react";
import { siteConfig } from "../config/data";

export function Survey() {
  return (
    <section id="survey" className="px-5 py-12 md:py-16">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 tracking-tight">
            Опрос
          </h2>

          {/* Survey Links */}
          <div className="space-y-3">
            <motion.a
              href={siteConfig.survey.survey1Url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-between p-4 rounded-2xl border border-zinc-200 bg-white hover:border-sky-500 transition-colors group"
            >
              <span className="text-zinc-900 font-medium">Пройти опрос #1</span>
              <ExternalLink className="w-5 h-5 text-zinc-400 group-hover:text-sky-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </motion.a>

            <motion.a
              href={siteConfig.survey.survey2Url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-between p-4 rounded-2xl border border-zinc-200 bg-white hover:border-sky-500 transition-colors group"
            >
              <span className="text-zinc-900 font-medium">Пройти опрос #2</span>
              <ExternalLink className="w-5 h-5 text-zinc-400 group-hover:text-sky-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </motion.a>
          </div>

          {/* Report Buttons */}
          <div className="flex flex-col md:flex-row gap-3">
            <motion.a
              href={siteConfig.survey.report1Url}
              download
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border border-zinc-300 bg-white text-zinc-900 font-medium hover:border-zinc-900 hover:bg-zinc-50 active:bg-zinc-100 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Скачать отчёт #1</span>
            </motion.a>

            <motion.a
              href={siteConfig.survey.report2Url}
              download
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border border-zinc-300 bg-white text-zinc-900 font-medium hover:border-zinc-900 hover:bg-zinc-50 active:bg-zinc-100 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Скачать отчёт #2</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
