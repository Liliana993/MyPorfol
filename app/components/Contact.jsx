import { motion } from "motion/react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#172121] py-28 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div className="text-center">

            <span className="text-[#E5D0CC]">
              Contacto
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
              Hablemos
            </h2>

            <p className="mt-6 text-[#7F7B82] max-w-2xl mx-auto">
              ¿Tenés un proyecto en mente, una oportunidad laboral
              o simplemente querés conectar? Estoy disponible para
              colaborar y crear soluciones digitales.
            </p>

          </div>

          {/* Tarjetas */}
          <div className="mt-14 grid md:grid-cols-3 gap-6">

            <a
               href="mailto:lilibesco@gmail.com"
               target="_blank"
               rel="noreferrer"
               className="bg-[#444554] rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-2 transition"
            >
              <FaEnvelope
                size={32}
                className="text-[#E5D0CC]"
              />

              <h3 className="mt-4 text-white font-semibold">
                Email
              </h3>

              <p className="mt-2 text-[#7F7B82]">
                lilibesco@gmail.com
              </p>
            </a>

            <a
              href="https://github.com/Liliana993"
              target="_blank"
              rel="noreferrer"
              className="bg-[#444554] rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-2 transition"
            >
              <FaGithub
                size={32}
                className="text-[#E5D0CC]"
              />

              <h3 className="mt-4 text-white font-semibold">
                GitHub
              </h3>

              <p className="mt-2 text-[#7F7B82]">
                Ver repositorios
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/liliana-escobar-a9714a22a/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#444554] rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-2 transition"
            >
              <FaLinkedin
                size={32}
                className="text-[#E5D0CC]"
              />

              <h3 className="mt-4 text-white font-semibold">
                LinkedIn
              </h3>

              <p className="mt-2 text-[#7F7B82]">
                Conectemos
              </p>
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}