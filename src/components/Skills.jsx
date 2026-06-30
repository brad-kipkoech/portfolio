import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Database,
  BarChart3,
  Globe,
  Server,
} from "lucide-react";

const skillCategories = [
  {
    icon: <Smartphone size={28} />,
    title: "Mobile Development",
    skills: ["Flutter", "Dart", "Firebase", "Android", "iOS"],
  },
  {
    icon: <Globe size={28} />,
    title: "Frontend",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    icon: <Server size={28} />,
    title: "Backend",
    skills: ["FastAPI", "Python", "REST APIs", "Authentication"],
  },
  {
    icon: <Database size={28} />,
    title: "Database",
    skills: ["PostgreSQL", "SQL", "Firestore", "Supabase"],
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Data Analytics",
    skills: ["Power BI", "Pandas", "NumPy", "Data Visualization"],
  },
  {
    icon: <Code2 size={28} />,
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Linux", "Figma"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 bg-slate-950 border-t border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="uppercase tracking-[0.3em] text-blue-500 font-semibold">
            Skills
          </span>

          <h2 className="text-5xl font-bold text-white mt-5">
            Technologies I Work With
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-slate-400 leading-8">
            I enjoy building mobile applications, web platforms and
            data-driven solutions using modern technologies.
          </p>
        </motion.div>

        {/* Skills Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                {category.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white mt-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3 mt-6">

                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}