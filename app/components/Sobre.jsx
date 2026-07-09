import {
  Dumbbell,
  Users,
  Snowflake,
  ClipboardList,
  Shield,
  Building,
} from "lucide-react";

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
    >
      <div className="rounded-lg overflow-hidden border border-zinc-900 shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1000"
          className="w-full h-[500px] object-cover object-center"
        />
      </div>

      <div>
        <span className="text-red-600 text-sm font-bold uppercase tracking-widest block mb-2">
          Sobre Nós
        </span>
        <h2 className="text-3xl md:text-4xl font-black mb-6">
          Sua melhor versão começa aqui
        </h2>
        <p className="text-zinc-400 leading-relaxed mb-10">
          A BlackFit é uma academia criada para pessoas que buscam resultados
          reais. Contamos com equipamentos modernos, ambiente climatizado,
          profissionais qualificados e uma estrutura completa para musculação,
          cardio e treinamento funcional. Nosso objetivo é oferecer um espaço
          motivador para que cada aluno alcance sua melhor versão.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {/* C1*/}
          <div className="rounded-xl p-5 flex flex-col items-center text-center justify-center min-h-[120px] hover:border-zinc-800 transition-all">
            <span className="text-2xl mb-2">
              <Dumbbell />
            </span>
            <span className="text-xs sm:text-sm font-medium text-zinc-300">
              Equipamentos modernos
            </span>
          </div>

          {/* C2 */}
          <div className="rounded-xl p-5 flex flex-col items-center text-center justify-center min-h-[120px] hover:border-zinc-800 transition-all">
            <span className="text-2xl mb-2">
              <Users />
            </span>
            <span className="text-xs sm:text-sm font-medium text-zinc-300">
              Professores qualificados
            </span>
          </div>

          {/*C3 */}
          <div className="rounded-xl p-5 flex flex-col items-center text-center justify-center min-h-[120px] hover:border-zinc-800 transition-all">
            <span className="text-2xl mb-2">
              <Snowflake />
            </span>
            <span className="text-xs sm:text-sm font-medium text-zinc-300">
              Ambiente climatizado
            </span>
          </div>

          {/* C4 */}
          <div className="rounded-xl p-5 flex flex-col items-center text-center justify-center min-h-[120px] hover:border-zinc-800 transition-all">
            <span className="text-2xl mb-2">
              <ClipboardList />
            </span>
            <span className="text-xs sm:text-sm font-medium text-zinc-300">
              Treinos personalizados
            </span>
          </div>

          {/* C5*/}
          <div className="rounded-xl p-5 flex flex-col items-center text-center justify-center min-h-[120px] hover:border-zinc-800 transition-all">
            <span className="text-2xl mb-2">
              <Shield />
            </span>
            <span className="text-xs sm:text-sm font-medium text-zinc-300">
              Segurança
            </span>
          </div>

          {/* C6 */}
          <div className="rounded-xl p-5 flex flex-col items-center text-center justify-center min-h-[120px] hover:border-zinc-800 transition-all">
            <span className="text-2xl mb-2">
              <Building />
            </span>
            <span className="text-xs sm:text-sm font-medium text-zinc-300">
              Estrutura completa
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
