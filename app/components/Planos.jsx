export default function Planos() {
  return (
    <section
      id="planos"
      className="py-24 bg-zinc-950 border-t border-zinc-900/50"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <span className="text-red-600 text-sm font-bold uppercase tracking-widest block mb-2">
          Planos
        </span>
        <h2 className="text-3xl md:text-4xl font-black mb-4">
          Escolha o plano ideal para você
        </h2>
        <p className="text-zinc-400 mb-16 text-sm">
          Todos os planos incluem acesso a toda estrutura da academia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/*Semestral */}
          <div className="relative bg-zinc-900/20 border border-zinc-900 rounded-2xl p-8 flex flex-col justify-between transition-all">
            <div>
              <h3 className="text-xl font-bold text-left text-zinc-100 mb-4">
                Black Semestral
              </h3>
              <div className="text-left mb-8">
                <span className="text-sm text-zinc-500 font-medium mr-1">
                  R$
                </span>
                <span className="text-4xl font-black text-white">119,90</span>
                <span className="text-zinc-500 text-xs font-normal">/mês</span>
              </div>

              <ul className="space-y-4 text-left mb-8">
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  Contrato de 6 meses
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  Acesso ilimitado
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  Avaliação física
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  Treinos personalizados
                </li>
              </ul>
            </div>

            <button className="w-full py-3.5 font-bold rounded-lg transition-colors text-sm bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800">
              Assinar Plano
            </button>
          </div>

          {/*Anual */}
          <div className="relative bg-zinc-900/40 border border-zinc-900 md:scale-105 z-10 rounded-2xl p-8 flex flex-col justify-between transition-all">
            <div>
              <h3 className="text-xl font-bold text-left text-zinc-100 mb-4">
                Black Anual
              </h3>
              <div className="text-left mb-8">
                <span className="text-sm text-zinc-500 font-medium mr-1">
                  R$
                </span>
                <span className="text-4xl font-black text-white">99,90</span>
                <span className="text-zinc-500 text-xs font-normal">/mês</span>
              </div>

              <ul className="space-y-4 text-left mb-8">
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  Contrato de 12 meses
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  Acesso ilimitado
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  Avaliação física
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  Treinos personalizados
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  Melhor custo-benefício
                </li>
              </ul>
            </div>

            <button className="w-full py-3.5 font-bold rounded-lg transition-colors text-sm bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800">
              Assinar Plano
            </button>
          </div>

          {/*Mensal */}
          <div className="relative bg-zinc-900/20 border border-zinc-900 rounded-2xl p-8 flex flex-col justify-between transition-all">
            <div>
              <h3 className="text-xl font-bold text-left text-zinc-100 mb-4">
                Mensal
              </h3>
              <div className="text-left mb-8">
                <span className="text-sm text-zinc-500 font-medium mr-1">
                  R$
                </span>
                <span className="text-4xl font-black text-white">149,90</span>
                <span className="text-zinc-500 text-xs font-normal">/mês</span>
              </div>

              <ul className="space-y-4 text-left mb-8">
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  Sem fidelidade
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  Acesso ilimitado
                </li>
                <li className="flex items-center gap-3 text-sm text-zinc-300">
                  Cancelamento a qualquer momento
                </li>
              </ul>
            </div>

            <button className="w-full py-3.5 font-bold rounded-lg transition-colors text-sm bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800">
              Assinar Plano
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
