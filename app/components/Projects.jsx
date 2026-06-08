import { motion } from "motion/react";
import { projects } from "../utils/dataProjects";

export function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#172121] py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center">

          <span className="text-[#E5D0CC]">
            Mi trabajo
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Proyectos destacados
          </h2>

          <p className="mt-6 text-[#7F7B82] max-w-2xl mx-auto">
            Algunos proyectos donde puse en práctica
            desarrollo frontend, gestión de estado,
            consumo de datos y diseño responsive.
          </p>

        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <motion.article
              key={project.id}
              whileHover={{
                y: -10,
              }}
              className="bg-[#444554] rounded-3xl overflow-hidden"
            >
                 {/* Barra navegador */}
  <div className="flex gap-2 px-4 py-3 bg-[#3a3b47]">
    <span className="w-3 h-3 bg-red-400 rounded-full"></span>
    <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
    <span className="w-3 h-3 bg-green-400 rounded-full"></span>
  </div>

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-[#E5D0CC]">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">

                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-[#172121] text-[#E5D0CC] text-sm"
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="mt-6 flex gap-3">

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden md:block bg-gradient-to-r
        from-pink-400 to-[#E5D0CC] text-[#172121] px-4 py-2 rounded-lg font-medium hover:scale-105 transition"
                  >
                    Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-[#E5D0CC] text-[#E5D0CC] px-4 py-2 rounded-xl"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}