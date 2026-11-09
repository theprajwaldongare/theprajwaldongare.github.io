import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { useInView } from '../hooks';

export default function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" className="relative py-28 md:py-36">
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
              About
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-12">
            A bit about me
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Text content */}
            <div className="lg:col-span-3 space-y-5">
              <p className="text-[#A1A1AA] leading-relaxed text-base">
                I'm a third-year Information Technology student at Government
                College of Engineering, Amravati. I'm drawn to software
                development because it lets me turn abstract ideas into
                something tangible and useful.
              </p>
              <p className="text-[#A1A1AA] leading-relaxed text-base">
                My interests span backend engineering, building developer tools,
                and exploring practical applications of AI and machine learning.
                I enjoy the process of understanding how things work under the
                hood and using that understanding to build better software.
              </p>
              <p className="text-[#A1A1AA] leading-relaxed text-base">
                I like to experiment with different technologies and learn by
                building projects. Whether it's a RAG-based document chat
                system, a VS Code extension, or a real-time chat application — I
                believe the best way to learn is by implementing.
              </p>
            </div>

            {/* Education card */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-[#2A2C2A] bg-[#181A18]/60 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-[#A3B18A]/10 flex items-center justify-center">
                    <GraduationCap size={18} className="text-[#A3B18A]" />
                  </div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#F5F5F0]/60">
                    Education
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-[#F5F5F0] text-sm leading-snug">
                      Government College of Engineering, Amravati
                    </h4>
                    <p className="text-sm text-[#A1A1AA] mt-1">
                      B.Tech in Information Technology
                    </p>
                    <p className="text-xs text-[#71717A] mt-0.5 font-mono">
                      3rd Year
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-5 border-t border-[#2A2C2A]/60">
                  <div className="flex items-center gap-2 text-xs text-[#71717A]">
                    <MapPin size={12} />
                    <span>Amravati, Maharashtra, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
