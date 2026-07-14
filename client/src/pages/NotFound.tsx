import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full h-screen overflow-hidden bg-background fixed inset-0 font-sans antialiased">
      <div className="w-full h-full overflow-y-auto flex flex-col items-center justify-center px-6 text-center">

        {/* Fundo sutil */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url('/mesa.webp')`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/85 to-background" />

        <div className="relative z-10 max-w-md w-full">

          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-white shadow-xl border border-accent/30 flex items-center justify-center p-1 overflow-hidden">
              <img src="/logo-blessed.webp" alt="Blessed Sabores Doces" className="w-full h-full object-contain scale-105" />
            </div>
          </div>

          {/* Emoji */}
          <div className="text-5xl mb-4">🍫</div>

          {/* Título */}
          <h1 className="serif-title text-3xl font-bold text-foreground mb-2">
            Página não encontrada
          </h1>

          {/* Descrição */}
          <p className="text-sm text-muted-foreground mb-2">
            O doce que você procura pode ter mudado de lugar.
          </p>
          <p className="text-xs text-muted-foreground/70 mb-8">
            Verifique o endereço ou volte para o cardápio.
          </p>

          {/* Localização */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs mb-6 bg-card/60 backdrop-blur-sm py-2 px-4 rounded-full border border-border inline-flex">
            <MapPin size={14} className="text-accent" />
            <span>Paranavaí e região</span>
          </div>

          {/* Botões */}
          <div className="space-y-2">
            <Button
              onClick={() => window.location.href = "/"}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg py-5 text-sm rounded-xl font-semibold"
            >
              Ver Cardápio
            </Button>

            <a
              href="https://wa.me/5544998159745?text=Oi!%20Vim%20pelo%20site%20da%20Blessed%20Sabores%20Doces.%20Gostaria%20de%20fazer%20uma%20encomenda.%20Podem%20me%20ajudar%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3 bg-[#25D366] text-white rounded-xl font-semibold shadow-sm text-sm hover:bg-[#20BD5A] transition-colors"
            >
              <Phone size={16} /> Falar no WhatsApp
            </a>
          </div>

          {/* Rodapé */}
          <p className="text-[10px] text-muted-foreground/60 mt-8">
            Blessed Sabores Doces © 2026<br/>Paranavaí - PR
          </p>
        </div>
      </div>
    </div>
  );
}
