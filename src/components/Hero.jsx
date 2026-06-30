import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import {
  FaReact,
  FaPython,
  FaGithub,
} from "react-icons/fa";

import {
  SiFlutter,
  SiFirebase,
  SiTailwindcss,
  SiJavascript,
  SiPostgresql,
} from "react-icons/si";

import { ArrowDown, Download } from "lucide-react";
import hero from "../assets/hero.png";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950"
    >
      {/* Background Blur */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full top-20 -left-20" />

        <div className="absolute w-96 h-96 bg-cyan-500/20 blur-[120px] rounded-full bottom-20 right-0" />

      </div>

      {/* Grid */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
          >

            <span className="px-4 py-2 rounded-full border border-blue-500 text-blue-400 bg-blue-500/10">
               Welcome to my portfolio
            </span>

            <h1 className="text-5xl lg:text-7xl font-black mt-8 leading-tight text-white">

              Bradley{" "}

              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">

                Kipkoech

              </span>

            </h1>

            <div className="mt-6 text-2xl font-semibold text-slate-300">

              <TypeAnimation
                sequence={[
                  "Flutter Mobile Developer",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "Data Analyst",
                  2000,
                  "Data Engineer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />

            </div>

            <p className="text-slate-400 text-lg mt-8 leading-8 max-w-xl">

              I build cross-platform mobile applications, scalable web
              platforms and data-driven solutions that solve real-world
              problems using Flutter, React, Firebase, Python and SQL.

            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="#projects"
                className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold"
              >
                View Projects
              </a>

              <a
                href="public/cv/Bradley_Kipkoech_CV.pdf"
                className="px-8 py-4 rounded-xl border border-slate-700 hover:border-blue-500 transition flex items-center gap-2"
              >
                <Download size={18} />

                Download CV

              </a>

              <a
                href="https://github.com/brad-kipkoech"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 transition flex items-center gap-2"
              >
                <FaGithub />

                GitHub

              </a>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-8 mt-16">

              <div>

                <h2 className="text-4xl font-bold text-blue-400">

                  2+

                </h2>

                <p className="text-slate-400">

                  Production Apps

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-blue-400">

                  4+

                </h2>

                <p className="text-slate-400">

                  Major Projects

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-blue-400">

                  10+

                </h2>

                <p className="text-slate-400">

                  Technologies

                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: .9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .8 }}
            className="relative flex justify-center"
          >

            <img
              src={hero}
              alt="Bradley"
              className="w-[430px] relative z-20"
            />

            {/* Floating Icons */}

            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-0 left-10 bg-slate-900 p-4 rounded-2xl shadow-xl"
            >
              <SiFlutter size={35} color="#42A5F5" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 25, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-24 right-0 bg-slate-900 p-4 rounded-2xl"
            >
              <FaReact size={35} color="#61DBFB" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-10 left-0 bg-slate-900 p-4 rounded-2xl"
            >
              <SiFirebase size={30} color="#F59E0B" />
            </motion.div>

            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute bottom-20 right-10 bg-slate-900 p-4 rounded-2xl"
            >
              <FaPython size={32} color="#4B8BBE" />
            </motion.div>

            <motion.div
              animate={{ rotate: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-60 left-0 bg-slate-900 p-4 rounded-2xl"
            >
              <SiTailwindcss size={30} color="#38BDF8" />
            </motion.div>

            <motion.div
              animate={{ rotate: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-0 right-32 bg-slate-900 p-4 rounded-2xl"
            >
              <SiJavascript size={30} color="#FACC15" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute top-44 right-24 bg-slate-900 p-4 rounded-2xl"
            >
              <SiPostgresql size={30} color="#3B82F6" />
            </motion.div>

          </motion.div>

        </div>

      </div>

      {/* Scroll */}

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="text-blue-400" size={28} />
      </motion.div>

    </section>
  );
}