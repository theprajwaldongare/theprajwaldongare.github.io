import { motion } from 'framer-motion';
import { skills } from '../data';
import { useInView } from '../hooks';

const categoryIcons: Record<string, string> = {
  'Programming': '{ }',
  'Web Development': '</>',
  'Backend & Tools': '$ _',
  'AI & Machine Learning': 'f(x)',
  'Other': '+ +',
};

export default function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.15 });

  return (
    <section id="skills" className="relative py-28 md:py-36">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-xl h-px bg-gradient-to-r from-transparent via-[#2A2C2A] to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref as React.Ref<HTMLDivElement>}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#A3B18A]/40" />
            <span className="text-xs font-mono text-[#A3B18A] uppercase tracking-widest">
              Skills
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Technologies I work with
          </h2>
          <p className="text-[#A1A1AA] text-sm max-w-lg mb-14">
            Technologies and tools I've used across my projects and coursework.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
              className="rounded-xl border border-[#2A2C2A] bg-[#181A18]/40 p-6 hover:border-[#3A3C3A] transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-xs text-[#A3B18A]/60 bg-[#A3B18A]/5 px-2 py-1 rounded border border-[#A3B18A]/10">
                  {categoryIcons[group.category] || '//'}
                </span>
                <h3 className="text-sm font-semibold text-[#F5F5F0]/80 tracking-wide">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs font-mono text-[#A1A1AA] bg-[#252725]/60 rounded-lg border border-[#2A2C2A]/50 hover:text-[#F5F5F0] hover:border-[#3A3C3A] transition-colors duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
