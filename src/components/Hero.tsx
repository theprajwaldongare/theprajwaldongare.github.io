import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GithubIcon } from './icons';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#101110] via-[#101110] to-[#141614] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A3B18A]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-40 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2A2C2A] bg-[#181A18]/60 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A3B18A] animate-pulse" />
              <span className="text-xs font-mono text-[#A1A1AA]">
                Open to opportunities
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold leading-tight tracking-tight mb-4">
              Hi, I'm{' '}
              <span className="text-[#A3B18A]">Prajwal Dongare</span>
              <span className="text-[#A3B18A]/40">.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#A1A1AA] font-light mb-6">
              Information Technology Student{' '}
              <span className="text-[#F5F5F0]/20">|</span> Software Developer
            </p>

            <p className="text-base text-[#A1A1AA]/80 leading-relaxed max-w-lg mb-10">
              I enjoy turning ideas into practical software — from backend
              systems and developer tools to AI-powered applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleScrollTo('#projects')}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-[#A3B18A] text-[#101110] font-medium text-sm rounded-lg hover:bg-[#b5c49e] transition-all duration-200"
              >
                Explore My Projects
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </button>
              <a
                href="https://github.com/theprajwaldongare"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#2A2C2A] text-[#F5F5F0] font-medium text-sm rounded-lg hover:border-[#3A3C3A] hover:bg-[#181A18] transition-all duration-200"
              >
                <GithubIcon width={16} height={16} />
                GitHub Profile
              </a>
            </div>
          </motion.div>

          {/* Right side — terminal card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Terminal window */}
              <div className="rounded-xl border border-[#2A2C2A] bg-[#181A18]/80 backdrop-blur-sm overflow-hidden shadow-2xl shadow-black/20">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[#2A2C2A]/60">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3A3C3A]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3A3C3A]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3A3C3A]" />
                  </div>
                  <span className="ml-2 text-xs font-mono text-[#71717A]">
                    profile.py
                  </span>
                </div>

                {/* Code */}
                <div className="p-5 font-mono text-sm leading-relaxed">
                  <div className="text-[#71717A]"># about me</div>
                  <div className="mt-2">
                    <span className="text-[#A3B18A]">developer</span>
                    <span className="text-[#F5F5F0]/40"> = </span>
                    <span className="text-[#F5F5F0]/60">{'{'}</span>
                  </div>
                  <div className="pl-6">
                    <span className="text-[#D6A75C]">"name"</span>
                    <span className="text-[#F5F5F0]/40">: </span>
                    <span className="text-[#A3B18A]">"Prajwal Dongare"</span>
                    <span className="text-[#F5F5F0]/40">,</span>
                  </div>
                  <div className="pl-6">
                    <span className="text-[#D6A75C]">"role"</span>
                    <span className="text-[#F5F5F0]/40">: </span>
                    <span className="text-[#A3B18A]">"IT Student"</span>
                    <span className="text-[#F5F5F0]/40">,</span>
                  </div>
                  <div className="pl-6">
                    <span className="text-[#D6A75C]">"interests"</span>
                    <span className="text-[#F5F5F0]/40">: </span>
                    <span className="text-[#F5F5F0]/60">[</span>
                  </div>
                  <div className="pl-10">
                    <span className="text-[#A3B18A]">"backend"</span>
                    <span className="text-[#F5F5F0]/40">,</span>
                  </div>
                  <div className="pl-10">
                    <span className="text-[#A3B18A]">"dev tools"</span>
                    <span className="text-[#F5F5F0]/40">,</span>
                  </div>
                  <div className="pl-10">
                    <span className="text-[#A3B18A]">"AI/ML"</span>
                  </div>
                  <div className="pl-6">
                    <span className="text-[#F5F5F0]/60">]</span>
                    <span className="text-[#F5F5F0]/40">,</span>
                  </div>
                  <div className="pl-6">
                    <span className="text-[#D6A75C]">"building"</span>
                    <span className="text-[#F5F5F0]/40">: </span>
                    <span className="text-[#A3B18A]">True</span>
                  </div>
                  <div>
                    <span className="text-[#F5F5F0]/60">{'}'}</span>
                  </div>
                </div>
              </div>

              {/* Floating accent line */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border border-[#A3B18A]/10 rounded-xl pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
