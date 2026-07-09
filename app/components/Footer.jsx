import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  CircleFadingPlus,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-12">
      <div className="max-w-4xl mx-auto text-center px-4 mb-24">
        <h2 className="text-4xl font-black mb-4">
          Pronto para <span className="text-red-600">mudar de vida?</span>
        </h2>
        <p className="text-zinc-400 text-sm max-w-xl mx-auto mb-8 font-light leading-relaxed">
          Venha fazer parte da BlackFit e alcance seus objetivos com uma
          estrutura completa e profissionais preparados para acompanhar sua
          evolução.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-md transition-all shadow-lg shadow-red-600/10">
          Matricule-se Agora
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-900/80 pt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="text-xl font-black tracking-wider mb-4">
            BLACK<span className="text-red-600">FIT</span>
          </div>
          <p className="text-zinc-500 text-xs leading-relaxed max-w-xs">
            Transformando vidas através do fitness. Estrutura completa para você
            alcançar seus objetivos.
          </p>
        </div>

        <div>
          <h4 className="text-zinc-300 font-bold text-sm mb-4 tracking-wider uppercase">
            Contato
          </h4>
          <ul className="space-y-2.5 text-xs text-zinc-500">
            <li className="flex flex-row">
              <Phone className="size-4 mr-2" />
              035 98818-2655
            </li>
            <li className="flex flex-row">
              <MessageCircle className="size-4 mr-2" /> WhatsApp: (35)
              98818-2655
            </li>
            <li className="flex flex-row">
              <Mail className="size-4 mr-2" /> contato@blackfit.com.br
            </li>
            <li className="flex flex-row">
              <MapPin className="size-6 mr-2" /> Av. Ernesto Matioli, 681 -
              Artur Bernades, Lavras - MG, 37200-000
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-zinc-300 font-bold text-sm mb-4 tracking-wider uppercase">
            Redes Sociais
          </h4>
          <div className="flex gap-3">
            {/* Insta */}
            <span className="w-9 h-9 flex items-center justify-center bg-zinc-900 border border-zinc-800 rounded-full cursor-pointer hover:bg-zinc-800 transition-colors text-sm">
              <CircleFadingPlus />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
