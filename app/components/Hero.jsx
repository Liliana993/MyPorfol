import { motion } from "framer-motion";
import {
  FaReact,
  FaGitAlt,
  FaJsSquare,
} from "react-icons/fa";

import {
  SiTypescript,
  SiFirebase,
  SiTailwindcss,
} from "react-icons/si";

import {
  HiMapPin,
  HiCodeBracket,
} from "react-icons/hi2";

import {
  FaRocket,
} from "react-icons/fa";

import { MdWavingHand } from "react-icons/md";

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-[#172121] flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Texto */}
        <div>

          <span className="text-[#E5D0CC] font-medium">
            <MdWavingHand size={24} /> Hola, soy
          </span>

          <h1 className="mt-4 text-5xl md:text-7xl font-bold text-white">
            Beatriz
            <span className="block text-pink-200">
              Escobar
            </span>
          </h1>

          <p className="mt-6 text-lg text-[#7F7B82] max-w-xl">
            Full Stack Developer apasionada por crear
            interfaces modernas, accesibles y
            funcionales.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">

  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#444554]">
    <HiMapPin className="text-[#E5D0CC]" />
    <span className="text-[#E5D0CC]">
      Misiones, Argentina
    </span>
  </div>

  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#444554]">
    <HiCodeBracket className="text-[#E5D0CC]" />
    <span className="text-[#E5D0CC]">
      Full Stack Developer
    </span>
  </div>

  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#444554]">
    <FaRocket className="text-[#E5D0CC]" />
    <span className="text-[#E5D0CC]">
      Disponible para proyectos
    </span>
  </div>

</div>

          <div className="mt-8 flex flex-wrap gap-4">

            <a
              className="hidden md:block bg-gradient-to-r
        from-pink-400 to-[#E5D0CC] text-[#172121] px-4 py-2 rounded-lg font-medium hover:scale-105 transition"
            >
              Ver proyectos
            </a>

            <a
              href="#contact"
              className="border border-[#E5D0CC] text-[#E5D0CC] px-4 py-2 rounded-xl hover:bg-[#E5D0CC] hover:text-[#172121] transition"
            >
              Contacto
            </a>

          </div>

        </div>

        {/* Imagen */}
        <div className="relative flex justify-center items-center">

  {/* React */}
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 3, repeat: Infinity }}
    className="absolute top-0 left-0"
  >
    <div className="bg-blue-500 px-4 py-2 rounded-xl shadow-lg">
      <FaReact size={24} />
    </div>
  </motion.div>

  {/* TypeScript */}
  <motion.div
    animate={{ y: [0, 12, 0] }}
    transition={{ duration: 4, repeat: Infinity }}
    className="absolute top-10 right-0"
  >
    <div className="bg-blue-500 px-4 py-2 rounded-xl shadow-lg">
        <SiTypescript size={24} />
    </div>
  </motion.div>

  {/* Firebase */}
  <motion.div
    animate={{ y: [0, -15, 0] }}
    transition={{ duration: 5, repeat: Infinity }}
    className="absolute bottom-16 left-0"
  >
    <div className="bg-red-500 px-4 py-2 rounded-xl shadow-lg">
        <SiFirebase size={24} />
    </div>
  </motion.div>

  {/* Tailwind */}
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 3.5, repeat: Infinity }}
    className="absolute bottom-0 right-8"
  >
    <div className="bg-blue-500 px-4 py-2 rounded-xl shadow-lg">
      <SiTailwindcss size={24} />
    </div>
  </motion.div>

  {/* JavaScript */}
  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 4.5, repeat: Infinity }}
    className="absolute left-[-40px] top-1/2"
  >
    <div className="bg-yellow-500 px-4 py-2 rounded-xl shadow-lg">
      <FaJsSquare size={24} />
    </div>
  </motion.div>

  {/* Git */}
  <motion.div
    animate={{ y: [0, 8, 0] }}
    transition={{ duration: 3.8, repeat: Infinity }}
    className="absolute right-[-40px] top-1/2"
  >
    <div className="bg-green-500 px-4 py-2 rounded-xl shadow-lg">
      <FaGitAlt size={24} />
    </div>
  </motion.div>

  {/* Avatar */}
  <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-[#E5D0CC] shadow-2xl">
    <img
      src="https://res.cloudinary.com/dcfo0mbfj/image/upload/v1780863146/yoAvatar_gprw8f.png"
      alt="Beatriz Escobar"
      className="w-full h-full object-cover"
    />
  </div>

</div>

      </div>
    </section>
  );
}