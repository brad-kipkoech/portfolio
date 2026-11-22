import { motion } from "framer-motion";
import {
  GraduationCap,
  Smartphone,
  Database,
  Code2,
} from "lucide-react";

const cards = [
  {
    icon: <Smartphone size={28} />,
    title: "Mobile Development",
    description:
      "Building cross-platform Android & iOS applications using Flutter, Dart and Firebase.",
  },
  {
    icon: <Code2 size={28} />,
    title: "Full Stack Development",
    description:
      "Developing modern web applications with React, APIs and scalable backend technologies.",
  },
  {
    icon: <Database size={28} />,
    title: "Data & Analytics",
    description:
      "Creating dashboards and data-driven solutions using Python, SQL and Power BI.",
  },
  {
    icon: <GraduationCap size={28} />,
    title: "Continuous Learning",
    description:
      "Computer Science student with professional training from LuxDevHQ.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-slate-950 border-t border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-blue-500 font-semibold uppercase tracking-[0.3em] text-sm">
            About Me
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-5">
            Passionate about building software that matters.
          </h2>

          <p className="text-slate-400 leading-8 mt-8">
            I'm Bradley Kipkoech Rono, a Flutter Mobile Developer, Full Stack
            Developer, Data Analyst and Data Engineer with hands-on experience
            building mobile applications, web platforms and data-driven
            solutions through university projects, internships, freelance work
            and real-world software development.
          </p>
        </motion.div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
          >
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8">

              <h3 className="text-2xl font-semibold text-white mb-6">
                My Journey
              </h3>

              <div className="space-y-5 text-slate-400 leading-8">

                <p>
                  Pursuing a Bachelor of Science in Computer Science at
                  Masinde Muliro University of Science and Technology.
                </p>

                <p>
                  Trained in Data Engineering and Data Analytics through
                  LuxDevHQ under Data Science East Africa.
                </p>

                <p>
                  Led the development of Konvene and contributed to CareLink,
                  delivering Flutter applications powered by Firebase.
                </p>

                <p>
                  Built complete software solutions including FarmXpat,
                  Tenwa Trading & Logistics and collaborated in building fuatilia and momentum_ledger
                </p>

                <p>
                  Passionate about creating intuitive digital experiences,
                  solving business problems and continuously learning modern
                  technologies.
                </p>

              </div>

            </div>
          </motion.div>

          {/* Right */}

          <div className="grid sm:grid-cols-2 gap-6">

            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * .1 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="rounded-2xl bg-slate-900 border border-slate-800 p-6"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-white mb-5">
                  {card.icon}
                </div>

                <h4 className="text-xl font-semibold text-white mb-3">
                  {card.title}
                </h4>

                <p className="text-slate-400 leading-7">
                  {card.description}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

        {/* Stats */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >

          {[
            ["2+", "Production Apps"],
            ["4+", "Major Projects"],
            ["10+", "Technologies"],
            ["2026", "Graduation"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="rounded-2xl bg-slate-900 border border-slate-800 p-8 text-center"
            >
              <h3 className="text-4xl font-bold text-blue-500">
                {number}
              </h3>

              <p className="text-slate-400 mt-2">
                {label}
              </p>
            </div>
          ))}

        </motion.div>

      </div>
    </section>
  );
}