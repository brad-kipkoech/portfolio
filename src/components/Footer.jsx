import { Heart, ArrowUp } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-slate-800 bg-slate-950">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Left */}

          <div>

            <h2 className="text-3xl font-black text-white">

              Bradley
              <span className="text-blue-500">.</span>

            </h2>

            <p className="mt-5 leading-8 text-slate-400">

              Flutter Mobile Developer,
              Full Stack Developer,
              Data Analyst and
              Data Engineer passionate
              about building software
              that solves real-world
              problems.

            </p>

          </div>

          {/* Center */}

          <div>

            <h3 className="text-white font-semibold mb-5">

              Quick Links

            </h3>

            <div className="space-y-4">

              <a href="#about" className="block text-slate-400 hover:text-blue-400 transition">
                About
              </a>

              <a href="#projects" className="block text-slate-400 hover:text-blue-400 transition">
                Projects
              </a>

              <a href="#skills" className="block text-slate-400 hover:text-blue-400 transition">
                Skills
              </a>

              <a href="#experience" className="block text-slate-400 hover:text-blue-400 transition">
                Experience
              </a>

              <a href="#contact" className="block text-slate-400 hover:text-blue-400 transition">
                Contact
              </a>

            </div>

          </div>

          {/* Right */}

          <div>

            <h3 className="text-white font-semibold mb-5">

              Connect

            </h3>

            <a
              href="https://github.com/brad-kipkoech"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-400 hover:text-blue-400 transition"
            >

              <FaGithub size={20} />

              GitHub

            </a>

            <p className="mt-5 text-slate-400">

              bradkipkoech@gmail.com

            </p>

            <p className="mt-2 text-slate-400">

              +254 729 053 795

            </p>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-slate-500 flex items-center gap-2">

            © {year} Bradley Kipkoech Rono.

          </p>

          <button
            onClick={scrollTop}
            className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 transition flex items-center justify-center"
          >

            <ArrowUp />

          </button>

        </div>

      </div>

    </footer>
  );
}