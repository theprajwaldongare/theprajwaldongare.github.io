import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import { GithubIcon } from './icons';
import { projects, type Project } from '../data';
import { useInView } from '../hooks';

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className="group relative rounded-xl border border-[#2A2C2A] bg-[#181A18]/60 p-7 md:p-8 hover:border-[#A3B18A]/20 hover:bg-[#1E201E]/80 transition-all duration-300 block"
    >
      {/* Featured badge */}
      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#A3B18A]/10 border border-[#A3B18A]/15 mb-5">
        <Star size={11} className="text-[#A3B18A]" />
        <span className="text-[10px] font-mono text-[#A3B18A] uppercase tracking-wider">
          Featured
        </span>
      </div>

      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-semibold text-[#F5F5F0] group-hover:text-[#A3B18A] transition-colors duration-200">
          {project.name}
        </h3>
        <ExternalLink
          size={16}
          className="text-[#71717A] group-hover:text-[#A3B18A] transition-colors mt-1 shrink-0 ml-4"
        />
      </div>

      <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[11px] font-mono text-[#A1A1AA] bg-[#252725] rounded-md border border-[#2A2C2A]/60"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-xs font-mono text-[#71717A] shrink-0 ml-3">
          {project.language}
        </span>
      </div>
    </motion.a>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
      className="group rounded-xl border border-[#2A2C2A] bg-[#181A18]/40 p-6 hover:border-[#3A3C3A] hover:bg-[#1E201E]/60 transition-all duration-300 block"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-base font-semibold text-[#F5F5F0] group-hover:text-[#A3B18A] transition-colors duration-200">
          {project.name}
        </h3>
        <ExternalLink
          size={14}
          className="text-[#71717A] group-hover:text-[#A1A1AA] transition-colors mt-0.5 shrink-0 ml-3"
        />
      </div>

      <p className="text-sm text-[#A1A1AA]/80 leading-relaxed mb-5">
        {project.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-mono text-[#71717A] bg-[#252725]/60 rounded border border-[#2A2C2A]/40"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="text-[11px] font-mono text-[#71717A] shrink-0 ml-2">
          {project.language}
        </span>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-28 md:py-36">
      {/* Subtle section separator */}
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
              Projects
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Things I've built
            </h2>
            <a
              href="https://github.com/theprajwaldongare"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#A1A1AA] hover:text-[#A3B18A] transition-colors"
            >
              <GithubIcon width={15} height={15} />
              View all on GitHub
            </a>
          </div>
        </motion.div>

        {/* Featured projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {featured.map((project, i) => (
            <FeaturedCard key={project.name} project={project} index={i} />
          ))}
        </div>

        {/* Other projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {others.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
