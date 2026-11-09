import { GithubIcon } from './icons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#2A2C2A]/50 py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 md:flex-1">
            <span className="font-mono text-sm font-semibold text-[#A3B18A]">
              PD
            </span>
            <span className="text-[#2A2C2A]">·</span>
            <span className="text-xs text-[#71717A]">
              © {year} Prajwal Dongare
            </span>
          </div>

          <p className="text-xs text-[#71717A]">
            Designed & Built with curiosity.
          </p>

          <div className="md:flex-1 md:flex md:justify-end">
            <a
              href="https://github.com/theprajwaldongare"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#71717A] hover:text-[#A1A1AA] transition-colors duration-200"
              aria-label="GitHub"
            >
              <GithubIcon width={16} height={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
