import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Download,
  ArrowRight,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] -top-40 -right-40" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >

          <span className="uppercase tracking-[0.35em] text-blue-500 font-semibold">
            Contact
          </span>

          <h2 className="text-5xl md:text-6xl font-black text-white mt-6">
            Let's Build Something Amazing
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-slate-400 leading-8 text-lg">
            Whether you're looking for a Flutter developer, Full Stack
            developer or someone to help build scalable software, I'd
            love to hear about your project.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mt-20">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-slate-900 border border-slate-800 p-10"
          >

            <h3 className="text-3xl font-bold text-white">
              Contact Information
            </h3>

            <div className="space-y-7 mt-10">

              <a
                href="mailto:bradkipkoech@gmail.com"
                className="flex items-center gap-5 group"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center">
                  <Mail />
                </div>

                <div>

                  <p className="text-slate-500 text-sm">
                    Email
                  </p>

                  <p className="text-white group-hover:text-blue-400 transition">
                    bradkipkoech@gmail.com
                  </p>

                </div>

              </a>

              <a
                href="tel:+254729053795"
                className="flex items-center gap-5 group"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center">
                  <Phone />
                </div>

                <div>

                  <p className="text-slate-500 text-sm">
                    Phone
                  </p>

                  <p className="text-white group-hover:text-blue-400 transition">
                    +254 729 053 795
                  </p>

                </div>

              </a>

              <a
                href="https://github.com/brad-kipkoech"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-5 group"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center">
                  <FaGithub size={20} />
                </div>

                <div>

                  <p className="text-slate-500 text-sm">
                    GitHub
                  </p>

                  <p className="text-white group-hover:text-blue-400 transition">
                    github.com/brad-kipkoech
                  </p>

                </div>

              </a>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-600 p-10 flex flex-col justify-between"
          >

            <div>

              <h3 className="text-4xl font-black text-white leading-tight">
                Interested in working together?
              </h3>

              <p className="mt-6 text-blue-100 leading-8">
                I'm always open to discussing Flutter apps,
                full-stack development, freelance work,
                collaborations and exciting opportunities.
              </p>

            </div>

            <div className="flex flex-wrap gap-4 mt-12">

              <a
                href="public/cv/Bradley_Kipkoech_CV.pdf"
                className="flex items-center gap-3 bg-white text-slate-900 px-6 py-4 rounded-xl font-semibold hover:scale-105 transition"
              >
                <Download size={20} />

                Download CV

              </a>

              <a
                href="mailto:bradkipkoech@gmail.com"
                className="flex items-center gap-3 border border-white px-6 py-4 rounded-xl hover:bg-white hover:text-slate-900 transition"
              >
                Get In Touch

                <ArrowRight size={20} />

              </a>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}