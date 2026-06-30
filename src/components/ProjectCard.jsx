import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  live,
  github,
  featured,
  status,
  category,
}) {
  return (
    <motion.div
      layout
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 hover:border-blue-500/40 transition-all"
    >
      {/* Image */}

      <div className="relative h-72 bg-slate-950 overflow-hidden">

        {category === "mobile" ? (
          <div className="flex h-full items-center justify-center">

            {/* Phone Frame */}

            <div className="rounded-[2rem] border-[8px] border-slate-700 bg-black shadow-2xl overflow-hidden">

              <img
                src={image}
                alt={title}
                className="h-60 object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

          </div>
        ) : (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent opacity-80" />

        {featured && (
          <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-1 text-sm font-medium text-white">
            Featured
          </span>
        )}

        <span className="absolute right-5 top-5 rounded-full bg-slate-900/80 px-4 py-1 text-sm text-white backdrop-blur">
          {status}
        </span>

      </div>

      {/* Content */}

      <div className="p-7">

        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          {description}
        </p>

        {/* Tech */}

        <div className="mt-6 flex flex-wrap gap-2">

          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm text-blue-300"
            >
              {item}
            </span>
          ))}

        </div>

        {/* Buttons */}

        <div className="mt-8 flex items-center gap-4 flex-wrap">

          {/* CareLink */}

          {title === "CareLink" && (
            <span className="rounded-xl border border-blue-500/30 bg-blue-500/10 px-5 py-3 text-blue-300 font-medium">
              Coming Soon
            </span>
          )}

          {/* Live Projects */}

          {title !== "CareLink" && live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium transition hover:bg-blue-700"
            >
              <ExternalLink size={18} />

              {title === "Konvene"
                ? "Google Play"
                : "Visit Website"}

            </a>
          )}

          {/* GitHub */}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-700 p-3 transition hover:border-blue-500"
            >
              <FaGithub size={20} />
            </a>
          )}

        </div>

      </div>

    </motion.div>
  );
}