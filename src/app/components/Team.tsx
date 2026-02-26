import { motion } from "motion/react";
import { siteConfig } from "../config/data";

export function Team() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="team" className="px-5 py-12 md:py-16">
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-3"
        >
          <motion.p variants={item} className="text-zinc-600 font-light">
            Команда:
          </motion.p>

          {siteConfig.members.map((member, index) => (
            <motion.div key={index} variants={item} className="flex gap-3">
              <span className="font-semibold text-zinc-900 uppercase tracking-wide text-sm">
                {member.role}:
              </span>
              <span className="text-zinc-700">{member.name}</span>
            </motion.div>
          ))}

          <motion.div variants={item} className="flex gap-3 pt-3">
            <span className="font-semibold text-zinc-900 uppercase tracking-wide text-sm">
              Преподаватель:
            </span>
            <span className="text-zinc-700">{siteConfig.teacher}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
