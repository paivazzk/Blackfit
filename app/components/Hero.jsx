export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920')",
      }}
    >
      <div className="text-center max-w-4xl px-4 mt-20">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 uppercase">
          Transforme seu corpo.
          <br />
          <span className="text-red-600">Supere seus limites.</span>
        </h1>
        <p className="text-zinc-400 text-base md:text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          A academia que vai mudar a sua rotina. Estrutura completa,
          profissionais qualificados e um ambiente feito para quem busca
          resultados de verdade.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-md transition-all">
            Comece Agora
          </button>
          <button className="w-full sm:w-auto border border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 text-white font-bold px-8 py-4 rounded-md transition-all">
            Conheça os Planos
          </button>
        </div>
      </div>
    </section>
  );
}
