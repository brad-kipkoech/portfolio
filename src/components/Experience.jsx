import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    year: "2025",
    title: "Data Analyst Intern",
    company: "LuxDevHQ • Data Science East Africa",
    description:
      "Worked on data analysis, SQL, Python, Power BI dashboards, and data engineering projects while collaborating in Agile teams.",
    icon: <GraduationCap size={22} />,
  },
  {
    year: "2025 - Present",
    title: "Lead Flutter Developer",
    company: "CareLink",
    description:
      "Developing a healthcare platform using Flutter and Firebase with authentication, bookings, emergency services and notifications.",
    icon: <Briefcase size={22} />,
  },
  {
    year: "2025",
    title: "Lead Mobile Developer",
    company: "Konvene",
    description:
      "Led the mobile development team, coordinated feature implementation and delivered a production Flutter application published on Google Play.",
    icon: <Briefcase size={22} />,
  },
  {
    year: "2026",
    title: "Full Stack Developer",
    company: "FarmXpat & Tenwa Trading",
    description:
      "Designed and developed modern web applications using React, FastAPI and PostgreSQL while managing deployment and hosting.",
    icon: <Briefcase size={22} />,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 bg-slate-950 border-t border-slate-900"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="uppercase tracking-[0.3em] text-blue-500 font-semibold">
            Experience
          </span>

          <h2 className="text-5xl font-bold text-white mt-5">
            My Journey
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto leading-8">
            A timeline of my education, internships, leadership roles,
            and software engineering projects.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-20">

          {/* Vertical Line */}

          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-800 -translate-x-1/2" />

          <div className="space-y-16">

            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -60 : 60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                }}
                className={`relative flex ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >

                {/* Circle */}

                <div className="absolute left-4 md:left-1/2 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white -translate-x-1/2 z-10">
                  {item.icon}
                </div>

                {/* Card */}

                <div
                  className={`ml-16 md:ml-0 w-full md:w-[46%] rounded-3xl bg-slate-900 border border-slate-800 p-7`}
                >

                  <span className="text-blue-400 font-semibold">
                    {item.year}
                  </span>

                  <h3 className="text-2xl font-bold text-white mt-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 mt-2 font-medium">
                    {item.company}
                  </p>

                  <p className="text-slate-400 leading-7 mt-5">
                    {item.description}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}