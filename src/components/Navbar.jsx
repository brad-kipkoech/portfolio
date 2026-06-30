import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
const links = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Skills", href: "#skills" },
  { title: "Experience", href: "#experience" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/70 backdrop-blur-xl border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <motion.a
          href="#home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-bold text-white tracking-wide"
        >
          Bradley<span className="text-blue-500">.</span>
        </motion.a>

        <nav className="hidden lg:flex items-center gap-8">

          {links.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="text-slate-300 hover:text-blue-400 transition duration-300"
            >
              {item.title}
            </a>
          ))}

          <a
            href="https://github.com/brad-kipkoech"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-blue-600 transition"
          >
            <FaGithub size={18} />
            GitHub
          </a>

          <a
            href="/cv/Bradley_Kipkoech_CV.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition"
          >
            <Download size={18} />
            CV
          </a>

        </nav>

        <button
          className="lg:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="lg:hidden bg-slate-950 border-t border-slate-800"
          >
            <div className="flex flex-col p-6 gap-5">

              {links.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-300"
                >
                  {item.title}
                </a>
              ))}

              <a
                href="https://github.com/brad-kipkoech"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400"
              >
                GitHub
              </a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}