import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './icons';
import { projects } from '../data';
import { useInView } from '../hooks';

export default function GitHubSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const repoCount = projects.length;

  return (
    <section className="relative py-20 md:py-28">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] max-w-xl h-px bg-gradient-to-r from-transparent via-[#2A2C2A] to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref as React.Ref<HTMLDivElement>}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="rounded-xl border border-[#2A2C2A] bg-[#181A18]/40 p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#252725] border border-[#2A2C2A] flex items-center justify-center">
                  <GithubIcon width={22} height={22} className="text-[#F5F5F0]/70" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#F5F5F0]">
                    @theprajwaldongare
                  </h3>
                  <p className="text-sm text-[#A1A1AA] mt-0.5">
                    {repoCount}+ public repositories
                  </p>
                </div>
              </div>

              <a
                href="https://github.com/theprajwaldongare"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[#F5F5F0] border border-[#2A2C2A] rounded-lg hover:border-[#3A3C3A] hover:bg-[#252725] transition-all duration-200"
              >
                View Profile
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Mini language distribution */}
            <div className="mt-8 pt-6 border-t border-[#2A2C2A]/60">
              <p className="text-xs font-mono text-[#71717A] mb-3 uppercase tracking-wider">
                Languages used across projects
              </p>
              <div className="flex gap-4 flex-wrap">
                {[
                  { lang: 'Python', color: '#A3B18A' },
                  { lang: 'JavaScript', color: '#D6A75C' },
                  { lang: 'TypeScript', color: '#7C9A6E' },
                ].map(({ lang, color }) => (
                  <div key={lang} className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-xs text-[#A1A1AA]">{lang}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
