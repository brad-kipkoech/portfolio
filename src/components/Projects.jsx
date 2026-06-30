import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const filters = [
  "all",
  "mobile",
  "web",
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="py-28 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="uppercase tracking-[0.3em] text-blue-500 font-semibold">
            Portfolio
          </span>

          <h2 className="text-5xl font-bold text-white mt-5">

            Featured Projects

          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-slate-400 leading-8">

            A selection of mobile applications, web platforms
            and software solutions I've designed and developed.

          </p>

        </motion.div>

        {/* Filters */}

        <div className="flex justify-center gap-4 mt-14 flex-wrap">

          {filters.map((item) => (

            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-6 py-3 rounded-full transition ${
                filter === item
                  ? "bg-blue-600"
                  : "bg-slate-900 border border-slate-700"
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>

          ))}

        </div>

        {/* Cards */}

        <motion.div
          layout
          className="grid lg:grid-cols-2 gap-8 mt-16"
        >

          {filtered.map((project) => (

            <ProjectCard
              key={project.id}
              {...project}
              onView={() =>
                console.log(project.title)
              }
            />

          ))}

        </motion.div>

      </div>
    </section>
  );
}