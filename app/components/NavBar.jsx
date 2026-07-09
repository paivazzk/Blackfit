export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="text-2xl font-black tracking-wider">
          BLACK<span className="text-red-600">FIT</span>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6 text-sm font-medium text-zinc-400">
            <a href="#sobre" className="hover:text-white transition-colors">
              Sobre
            </a>
            <a href="#horarios" className="hover:text-white transition-colors">
              Horários
            </a>
            <a href="#planos" className="hover:text-white transition-colors">
              Planos
            </a>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm px-5 py-2.5 rounded-md transition-all duration-300 transform hover:scale-105">
            Matricule-se
          </button>
        </div>
      </div>
    </nav>
  );
}
