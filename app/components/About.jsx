import { motion } from "motion/react";
import {
  FaReact,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTypescript,
  SiFirebase,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

export function About() {
  const skills = [
    {
      icon: <FaReact size={30} />,
      title: "React",
    },
    {
      icon: <SiTypescript size={30} />,
      title: "TypeScript",
    },
    {
      icon: <SiFirebase size={30} />,
      title: "Firebase",
    },
    {
      icon: <SiTailwindcss size={30} />,
      title: "Tailwind CSS",
    },
    {
      icon: <SiJavascript size={30} />,
      title: "JavaScript",
    },
    {
      icon: <FaGitAlt size={30} />,
      title: "Git",
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#172121] py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >

          {/* Texto */}
          <div>

            <span className="text-[#E5D0CC] font-medium">
              Sobre mí
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
              Transformo ideas en
              experiencias digitales.
            </h2>

            <p className="mt-8 text-lg text-[#7F7B82] leading-relaxed">
              Soy desarrolladora Full Stack apasionada por crear
              interfaces modernas, intuitivas y centradas en el usuario.
              Disfruto transformar diseños e ideas en aplicaciones web
              funcionales utilizando tecnologías actuales y buenas prácticas
              de desarrollo.
            </p>

            <p className="mt-6 text-lg text-[#7F7B82] leading-relaxed">
              Además de mi experiencia técnica, cuento con conocimientos
              en social media management y análisis de datos, lo que me
              permite comprender mejor las necesidades del negocio y de
              los usuarios para construir soluciones con impacto real.
            </p>

          </div>

          {/* Skills */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

            {skills.map((skill) => (
              <motion.div
                key={skill.title}
                whileHover={{
                  y: -6,
                }}
                className="bg-[#444554] rounded-2xl p-6 flex flex-col items-center justify-center text-center"
              >
                <div className="text-pink-300">
                  {skill.icon}
                </div>

                <h3 className="mt-4 text-white font-medium">
                  {skill.title}
                </h3>
              </motion.div>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}