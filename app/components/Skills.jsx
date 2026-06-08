import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiVite,
  SiExpress,
  SiPostman,
} from "react-icons/si";
import { MdAppShortcut } from "react-icons/md";
import { BsFiletypeSql } from "react-icons/bs";
import { FaWebAwesome } from "react-icons/fa6";
import { TbApi } from "react-icons/tb";
import CountUp from "react-countup";
import { motion } from "motion/react";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Responsive Design", icon: <MdAppShortcut /> },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST APIs", icon: <TbApi /> },
      { name: "Arquitectura Web", icon: <FaWebAwesome /> },
    ],
  },

  {
    title: "Bases de Datos",
    skills: [
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "SQL", icon: <BsFiletypeSql /> },
    ],
  },

  {
    title: "Herramientas",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Vite", icon: <SiVite /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
];

export function Skills() {
  return (
  <section
    id="skills"
    className="bg-[#172121] py-28 px-6"
  >
    <div className="max-w-6xl mx-auto">

      {/* Header */}
      <div className="text-center">

        <span className="text-[#E5D0CC]">
          Tecnologías
        </span>

        <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
          Skills & Herramientas
        </h2>

        <p className="mt-6 text-[#7F7B82] max-w-2xl mx-auto">
          Tecnologías, herramientas y conceptos que utilizo
          para construir aplicaciones web modernas,
          escalables y responsivas.
        </p>

      </div>

      {/* Estadísticas */}
      {/* Estadísticas */}
<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

  <motion.div
    initial={{
      opacity: 0,
      y: 30,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{
      y: -8,
      scale: 1.03,
    }}
    className="
      bg-[#444554]
      rounded-2xl
      p-6
      text-center
      shadow-lg
      border
      border-transparent
      hover:border-[#E5D0CC]
      transition-all
    "
  >
    <h3
      className="
        text-6xl
        font-extrabold
        bg-gradient-to-r
        from-pink-400
        to-[#E5D0CC]
        bg-clip-text
        text-transparent
      "
    >
      +3
    </h3>

    <p className="mt-3 text-white">
      Proyectos Full Stack
    </p>
  </motion.div>

  <motion.div
    initial={{
      opacity: 0,
      y: 30,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      delay: 0.1,
    }}
    whileHover={{
      y: -8,
      scale: 1.03,
    }}
    className="
      bg-[#444554]
      rounded-2xl
      p-6
      text-center
      shadow-lg
      border
      border-transparent
      hover:border-[#E5D0CC]
      transition-all
    "
  >
    <h3
      className="
        text-6xl
        font-extrabold
        bg-gradient-to-r
        from-pink-400
        to-[#E5D0CC]
        bg-clip-text
        text-transparent
      "
    >
      +12
    </h3>

    <p className="mt-3 text-white">
      Tecnologías aprendidas
    </p>
  </motion.div>

  <motion.div
    initial={{
      opacity: 0,
      y: 30,
    }}
    whileInView={{
      opacity: 1,
      y: 0,
    }}
    viewport={{ once: true }}
    transition={{
      duration: 0.5,
      delay: 0.2,
    }}
    whileHover={{
      y: -8,
      scale: 1.03,
    }}
    className="
      bg-[#444554]
      rounded-2xl
      p-6
      text-center
      shadow-lg
      border
      border-transparent
      hover:border-[#E5D0CC]
      transition-all
    "
  >
    <h3
      className="
        text-6xl
        font-extrabold
        bg-gradient-to-r
        from-pink-400
        to-[#E5D0CC]
        bg-clip-text
        text-transparent
      "
    >
      100%
    </h3>

    <p className="mt-3 text-white">
      Responsive Design
    </p>
  </motion.div>

</div>

      {/* Skills */}
      <div className="mt-16 space-y-14">

        {skillGroups.map((group) => (

          <div key={group.title}>

            <h3 className="text-2xl font-semibold text-[#E5D0CC] mb-6">
              {group.title}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

              {group.skills.map((skill) => (

                <motion.div
                  key={skill.name}
                  whileHover={{
                    y: -8,
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="
                    group
                    bg-[#444554]
                    rounded-2xl
                    p-6
                    flex
                    flex-col
                    items-center
                    justify-center
                    shadow-lg
                    border
                    border-transparent
                    hover:border-[#E5D0CC]
                  "
                >

                  <div
                    className="
                      text-4xl
                      text-[#E5D0CC]
                      transition-transform
                      duration-300
                      group-hover:rotate-12
                    "
                  >
                    {skill.icon}
                  </div>

                  <p className="mt-4 text-white text-center font-medium">
                    {skill.name}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </div>
  </section>
);
}