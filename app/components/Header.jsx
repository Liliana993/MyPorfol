import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export function Header() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#172121]/80 border-b border-[#444554]">
      
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" className="text-2xl font-bold text-pink-400">
          BE
        </a>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8 text-white">
          <li><a href="#about" className="hover:text-[#E5D0CC]">Sobre mí</a></li>
          <li><a href="#skills" className="hover:text-[#E5D0CC]">Tecnologías</a></li>
          <li><a href="#projects" className="hover:text-[#E5D0CC]">Proyectos</a></li>
          <li><a href="#contact" className="hover:text-[#E5D0CC]">Contacto</a></li>
        </ul>

        {/* CV button (desktop) */}
        <a
          href="/Profile.pdf"
          download
          className="hidden md:flex items-center gap-2 bg-pink-400 text-[#172121] px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Descargar CV
        </a>

        {/* Hamburger button (mobile) */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white text-2xl"
        >
          <FaBars />
        </button>

      </nav>

      {/* MOBILE MODAL MENU */}
      {open && (
        <div className="fixed inset-0 bg-black/70 flex justify-end z-50">

          <div className="w-72 h-full bg-[#172121] p-6 flex flex-col gap-8">

            {/* Close */}
            <button
              onClick={handleClose}
              className="text-white text-2xl self-end"
            >
              <FaTimes />
            </button>

            {/* Links */}
            <a onClick={handleClose} href="#about" className="text-white text-lg hover:text-pink-400">
              Sobre mí
            </a>

            <a onClick={handleClose} href="#skills" className="text-white text-lg hover:text-pink-400">
              Tecnologías
            </a>

            <a onClick={handleClose} href="#projects" className="text-white text-lg hover:text-pink-400">
              Proyectos
            </a>

            <a onClick={handleClose} href="#contact" className="text-white text-lg hover:text-pink-400">
              Contacto
            </a>

            {/* CV button */}
            <a
              href="/Profile.pdf"
              download
              className="mt-6 bg-pink-400 text-[#172121] px-4 py-3 rounded-xl font-semibold text-center"
            >
              Descargar CV
            </a>

          </div>

        </div>
      )}

    </header>
  );
}