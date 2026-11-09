import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './icons';
import { useInView } from '../hooks';

export default function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-xl h-px bg-gradient-to-r from-transparent via-[#2A2C2A] to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref as React.Ref<HTMLDivElement>}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Section label */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#A3B18A]/40" />
            <span className="text-xs font-mono text-[#A3B18A] uppercase tracking-widest">
              Contact
            </span>
            <div className="w-8 h-px bg-[#A3B18A]/40" />
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            Have an idea? Let's connect.
          </h2>

          <p className="text-[#A1A1AA] leading-relaxed mb-10 text-base">
            I'm always open to interesting conversations, collaboration
            opportunities, and technical discussions. If you're working on
            something exciting or just want to chat about technology, feel free
            to reach out.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/theprajwaldongare"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-[#A3B18A] text-[#101110] font-medium text-sm rounded-lg hover:bg-[#b5c49e] transition-all duration-200"
            >
              <GithubIcon width={16} height={16} />
              Connect on GitHub
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
