import { motion } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './icons';
import { useInView } from '../hooks';

const contactLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/theprajwaldongare',
    username: '@theprajwaldongare',
    icon: GithubIcon,
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/prajwaldongare/',
    username: 'prajwaldongare',
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/Prajwal2307/',
    username: 'Prajwal2307',
    icon: LeetCodeIcon,
    external: true,
  },
  {
    label: 'Email',
    href: 'mailto:prajwaldongare112@gcoea.ac.in',
    username: 'prajwaldongare112@gcoea.ac.in',
    icon: Mail,
    external: false,
  },
] as const;

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

          <p className="text-[#A1A1AA] leading-relaxed mb-12 text-base">
            I'm always open to interesting conversations, collaboration
            opportunities, and technical discussions. If you're working on
            something exciting or just want to chat about technology, feel free
            to reach out.
          </p>
        </motion.div>

        {/* Contact cards grid */}
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.08,
                  ease: 'easeOut',
                }}
                className="group flex items-center gap-4 rounded-xl border border-[#2A2C2A] bg-[#181A18]/40 px-5 py-4 hover:border-[#3A3C3A] hover:bg-[#1E201E]/60 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[#252725] border border-[#2A2C2A]/60 flex items-center justify-center shrink-0 group-hover:border-[#3A3C3A] transition-colors duration-300">
                  {'size' in Icon ? (
                    <Icon
                      size={18}
                      className="text-[#A1A1AA] group-hover:text-[#A3B18A] transition-colors duration-300"
                    />
                  ) : (
                    <Icon
                      width={18}
                      height={18}
                      className="text-[#A1A1AA] group-hover:text-[#A3B18A] transition-colors duration-300"
                    />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-[#F5F5F0] group-hover:text-[#A3B18A] transition-colors duration-200">
                    {link.label}
                  </p>
                  <p className="text-xs text-[#71717A] truncate mt-0.5 font-mono">
                    {link.username}
                  </p>
                </div>

                <ArrowUpRight
                  size={14}
                  className="text-[#71717A] group-hover:text-[#A1A1AA] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
                />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
