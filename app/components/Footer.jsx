

export function Footer() {
  return (
    <footer className="bg-[#172121] border-t border-[#444554] py-8">

  <div className="max-w-6xl mx-auto px-6 text-center">

    <h3 className="text-pink-400 font-semibold text-lg">
      Liliana Beatriz Escobar
    </h3>

    <p className="mt-2 text-[#7F7B82] text-sm">
      Full Stack Developer
    </p>

    <p className="mt-4 text-[#7F7B82] text-xs">
      © {new Date().getFullYear()} Beatriz Escobar. Todos los derechos reservados.
    </p>

  </div>

</footer>
  );
}