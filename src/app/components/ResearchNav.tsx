import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { siteConfig } from "../config/data";

export function ResearchNav() {
  const scrollToSection = (direction: "prev" | "next") => {
    const sections = ["hero", "team", "photo", "research", "survey", "github"];
    const currentIndex = sections.indexOf("research");
    
    if (direction === "prev" && currentIndex > 0) {
      document.getElementById(sections[currentIndex - 1])?.scrollIntoView({ 
        behavior: "smooth",
        block: "center"
      });
    } else if (direction === "next" && currentIndex < sections.length - 1) {
      document.getElementById(sections[currentIndex + 1])?.scrollIntoView({ 
        behavior: "smooth",
        block: "center"
      });
    }
  };

  return (
    <section id="research" className="px-5 py-12 md:py-16">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Navigation */}
          <div className="flex items-center justify-between gap-4">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("prev")}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 hover:border-sky-500 hover:text-sky-600 transition-colors active:bg-zinc-50"
              aria-label="Previous section"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 tracking-tight">
              Research
            </h2>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("next")}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 hover:border-sky-500 hover:text-sky-600 transition-colors active:bg-zinc-50"
              aria-label="Next section"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

          {/* Figma Link */}
          <motion.a
            href={siteConfig.research.figmaUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 transition-colors group"
          >
            <span className="font-medium">Figma (Research)</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
