import {education, certifications} from "../utils/education";
import { motion } from "framer-motion";
import { HiAcademicCap } from "react-icons/hi2";
import { FaRocket } from "react-icons/fa";

export function Education() {
  return (
    <section
      id="education"
      className="bg-[#172121] py-28 px-6"
    >
      <div className="max-w-5xl mx-auto">

        {/* Título */}
        <div className="text-center">

          <span className="text-[#E5D0CC]">
            Formación
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Formación & Certificaciones
          </h2>

          <p className="mt-6 text-[#7F7B82] max-w-2xl mx-auto">
            Mi recorrido académico y profesional,
            enfocado en el desarrollo web y el
            aprendizaje continuo.
          </p>

        </div>

        {/* Timeline */}
        {/* Timeline */}
<div className="relative mt-20">

  {/* Línea central */}
  <div
    className="
      absolute
      left-4
      md:left-1/2
      top-0
      h-full
      w-1
      bg-[#E5D0CC]
      -translate-x-1/2
    "
  />

  {education.map((item, index) => (

    <motion.div
      key={item.id}
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -40 : 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
      className={`
        relative mb-12
        md:w-1/2
        ${
          index % 2 === 0
            ? "md:pr-10 md:mr-auto"
            : "md:pl-10 md:ml-auto"
        }
      `}
    >

      {/* Punto */}
      <div
        className={`
    absolute
    top-8
    left-4

    md:left-auto

    ${
      index % 2 === 0
        ? "md:right-[-13px]"
        : "md:left-[-13px]"
    }

    w-6
    h-6
    rounded-full
    bg-pink-400
    border-4
    border-[#172121]
    shadow-[0_0_15px_rgba(244,114,182,0.6)]
  `}
      />

      {/* Card */}
      <div className="ml-12 md:ml-0 bg-[#444554] rounded-2xl p-6 shadow-xl">

        <span className="text-[#E5D0CC] font-semibold">
          {item.year}
        </span>

        <h3 className="mt-2 text-xl font-bold text-white">
          {item.title}
        </h3>

        <p className="mt-1 text-[#E5D0CC]">
          {item.institution}
        </p>

        <p className="mt-4 text-[#7F7B82]">
          {item.description}
        </p>

      </div>

    </motion.div>

  ))}

</div>

{/*Actualmente */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  className="mt-20"
>
  <div className="bg-pink-200 rounded-3xl p-8 text-center">

    <h3
  className="
    text-2xl
    font-bold
    text-[#172121]
    flex
    items-center
    justify-center
    gap-3
  "
>
  <FaRocket />
  Actualmente
</h3>

    <p className="mt-4 text-[#172121]">
      Continuando mi formación en Programación Backend mientras desarrollo proyectos reales
      utilizando tecnologías modernas.
    </p>

  </div>
</motion.div>

{/* Certificaciones */}
<div className="mt-20">

  <h3 className="text-3xl font-bold text-white text-center">
    Certificaciones
  </h3>

  <p className="text-[#7F7B82] text-center mt-3">
    Cursos y formaciones complementarias que fortalecen mi perfil profesional.
  </p>

  {/* Carousel wrapper */}
  <div
    className="
      mt-12
      flex
      gap-6
      overflow-x-auto
      pb-6
      scroll-smooth
      snap-x
      snap-mandatory
      scrollbar-hide
    "
  >

    {certifications.map((certification, index) => (

      <motion.article
        key={certification.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: index * 0.1,
        }}
        whileHover={{
          y: -10,
          scale: 1.03,
        }}
        className="
          snap-center
          min-w-[280px]
          md:min-w-[320px]

          group
          bg-[#444554]
          border border-transparent
          hover:border-pink-400/40
          rounded-3xl
          p-6
          shadow-xl
          transition-all
        "
      >

        {/* Icon */}
        <div
          className="
            w-14 h-14
            rounded-2xl
            bg-[#E5D0CC]
            flex items-center justify-center
            transition-transform
            duration-300
            group-hover:rotate-6
          "
        >
          <HiAcademicCap className="text-[#172121] text-3xl" />
        </div>

        {/* Title */}
        <h4 className="mt-5 text-xl font-bold text-white tracking-wide">
          {certification.title}
        </h4>

        {/* Institution */}
        <p className="mt-2 text-[#E5D0CC] font-medium">
          {certification.institution}
        </p>

        {/* Year */}
        {certification.year && (
          <span
            className="
              inline-block
              mt-4
              px-3
              py-1
              rounded-full
              bg-[#172121]/60
              backdrop-blur
              text-pink-300
              text-sm
              border border-pink-400/20
            "
          >
            {certification.year}
          </span>
        )}

      </motion.article>

    ))}

  </div>

</div>
      </div>
    </section>
  );
}

