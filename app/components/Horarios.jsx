export default function Horarios() {
  return (
    <section
      id="horarios"
      className="py-24 bg-zinc-950 border-t border-zinc-900/50"
    >
      <div className="max-w-3xl mx-auto px-4 text-center">
        <span className="text-red-600 text-sm font-bold uppercase tracking-widest block mb-2">
          Horários
        </span>
        <h2 className="text-3xl md:text-4xl font-black mb-12">
          Horário de Funcionamento
        </h2>

        <div className="bg-zinc-900/30 border border-zinc-900 rounded-xl overflow-hidden divide-y divide-zinc-900/60">
          {/* Segunda a Sexta*/}
          <div className="flex justify-between items-center px-6 py-5">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-zinc-300">
                Segunda a Sexta
              </span>
            </div>
            <div className="text-zinc-400 text-sm">05:00 às 23:00</div>
          </div>

          {/* Sábado */}
          <div className="flex justify-between items-center px-6 py-5">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-zinc-300">Sábado</span>
            </div>
            <div className="text-zinc-400 text-sm">08:00 às 18:00</div>
          </div>

          {/* Domingo */}
          <div className="flex justify-between items-center px-6 py-5">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-zinc-300">Domingo</span>
            </div>
            <div className="text-zinc-400 text-sm">08:00 às 14:00</div>
          </div>

          {/* Feriados */}
          <div className="flex justify-between items-center px-6 py-5">
            <div className="flex items-center gap-3">
              <span className="font-semibold text-zinc-300">Feriados</span>
            </div>
            <div className="text-zinc-400 text-sm">
              Acompanhe Stories da Academia
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
