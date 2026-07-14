import { Button } from "@/components/ui/button";
import { MapPin, Phone, Instagram, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface Product {
  name: string;
  price: string;
  images: string[];
  zoomImages?: string[];
  description?: string;
  flavors?: string[];
  tag?: {
    text: string;
    type: 'classic' | 'best' | 'premium';
  };
}

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const sectionHashes = [
    "inicio", "sobre", "categorias",
    "tradicionais-1", "tradicionais-2", "tradicionais-3", "tradicionais-4", "tradicionais-5",
    "bombons-1", "bombons-2",
    "pao-de-mel",
    "bolos", "instrucoes", "contato"
  ];

  const sectionsCount = sectionHashes.length;

  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash.replace("#", "");
      const targetIndex = sectionHashes.indexOf(currentHash);
      if (targetIndex !== -1 && targetIndex !== activeSection) {
        setActiveSection(targetIndex);
      } else if (!currentHash && activeSection !== 0) {
        setActiveSection(0);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    if (!window.location.hash) {
      window.history.replaceState(null, "", `#${sectionHashes[0]}`);
    } else {
      handleHashChange();
    }

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [activeSection]);

  const navigateToSection = (nextIndex: number) => {
    if (nextIndex < 0 || nextIndex >= sectionsCount) return;
    const targetId = sectionHashes[nextIndex];
    const el = document.getElementById(targetId);
    if (el && containerRef.current) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const index = sectionHashes.indexOf(id);
            if (index !== -1 && index !== activeSection) {
              setActiveSection(index);
              window.history.replaceState(null, "", `#${id}`);
            }
          }
        });
      },
      { threshold: 0.5, root: containerRef.current || undefined }
    );

    sectionHashes.forEach((hash) => {
      const el = document.getElementById(hash);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeSection]);

  const docesTradicionaisBloco1: Product[] = [
    { name: "Brigadeiro", price: "Cento • R$ 140,00", images: ["/brigadeiro.webp", "/brig2.webp", "/brig.webp"], description: "Feito com cacau nobre e granulado de verdade.", flavors: ["Ao Leite", "Meio Amargo", "Cacau 50%"], tag: { text: "★ Clássico", type: "classic" } },
    { name: "Beijinho", price: "Cento • R$ 140,00", images: ["/beijinho.webp", "/beijinho 3.webp", "/beijinho 5.webp"], description: "Delicioso doce de coco macio e úmido.", flavors: ["Coco Tradicional", "Com Cravo"], tag: { text: "★ Favorito", type: "classic" } },
  ];

  const docesTradicionaisBloco2: Product[] = [
    { name: "Cajuzinho", price: "Cento • R$ 140,00", images: ["/cajuzinho.webp", "/cajuzinho 2.webp", "/cajuzinho 6.webp"], description: "Sabor marcante do amendoim selecionado com textura incrível.", flavors: ["Amendoim Tradicional"] },
    { name: "Brigadeiro de Ninho", price: "Cento • R$ 140,00", images: ["/brigadeiro de ninho.webp", "/brigadeiro de ninho1.webp", "/brigadeiro de ninho (2).webp"], description: "Feito puramente com leite Ninho premium.", flavors: ["Leite Ninho Tradicional"] },
  ];

  const docesTradicionaisBloco3: Product[] = [
    { name: "Doce Rosa", price: "Cento • R$ 140,00", images: ["/rosa (1).webp", "/rosa (2).webp", "/doce rosa 3.webp"], description: "Encanto e delicadeza em cor de rosa para mesas românticas.", flavors: ["Bicho de Pé (Morango)"] },
    { name: "Ouriço", price: "Cento • R$ 140,00", images: ["/ouriço.webp", "/ouri.webp", "/ouriço 2.webp"], description: "Textura externa crocante com recheio cremoso.", flavors: ["Coco Queimado"] },
  ];

  const docesTradicionaisBloco4: Product[] = [
    { name: "Casadinho", price: "Cento • R$ 145,00", images: ["/casadinho.webp", "/casadinho 8.webp", "/casadinho 3.webp"], description: "A perfeita união do brigadeiro tradicional com o branco.", flavors: ["Preto e Branco Casados"] },
    { name: "Brigadeiro de Churros", price: "Cento • R$ 145,00", images: ["/churr3.webp", "/churr1.webp", "/curr.webp"], description: "Doce de leite premium polvilhado com açúcar e canela.", flavors: ["Doce de Leite com Canela"] },
  ];

  const docesTradicionaisBloco5: Product[] = [
    { name: "Brigadeiro de Ninho com Creme de Avelã", price: "Cento • R$ 145,00", images: ["/avela.webp", "/avela.webp", "/avela.webp"], description: "Brigadeiro de Ninho recheado com creme de avelã.", flavors: ["Ninho & Nutella"], tag: { text: "★ Mais Vendido", type: "best" } },
    { name: "Casquinha de Chocolate com Brigadeiro e Cereja", price: "Cento • R$ 350,00", images: ["/casquinha com cereja.webp", "/casc (1).webp", "/casc (2).webp"], description: "Chocolate crocante, brigadeiro e nobreza da cereja.", flavors: ["Cereja Inteira com Licor"] },
    { name: "Copinho de Chocolate com Frissalys", price: "Cento • R$ 350,00", images: ["/copinho com frissalys.webp", "/fric.webp", "/fic.webp"], description: "Delicioso copinho recheado com brigadeiro e finalizado com frissalys crocante.", flavors: ["Brigadeiro com Frissalys"], tag: { text: "★ Especial", type: "premium" } },
  ];

  const bombonsBloco1: Product[] = [
    { name: "Bombons Dourado, Branco, Rosa", price: "Cento • R$ 245,00", images: ["/bombom colorido.webp", "/bombom.webp", "/com com dourado.webp"], description: "Estilo luxuoso, casca fina de chocolate nobre em formatos variados.", flavors: ["Brigadeiro", "Beijinho", "Maracujá"], tag: { text: "★ Premium", type: "premium" } },
    { name: "Bombom Quadrado de Nozes", price: "Cento • R$ 250,00", images: ["/bombom quadrado.webp", "/bombom 4.webp", "/bomb quad.webp"], description: "Toque nobre e crocante do recheio de nozes selecionadas.", flavors: ["Nozes com Doce de Leite"] },
  ];

  const bombonsBloco2: Product[] = [
    { name: "Camafeu", price: "Cento • R$ 250,00", images: ["/camafeu.webp", "/camafeu 2.webp", "/camafeu 7.webp"], description: "O clássico doce fino de nozes envolvido em fondant.", flavors: ["Fondant de Nozes Tradicional"], tag: { text: "★ Fino", type: "premium" } },
  ];

  const paoDeMelBloco: Product[] = [
    { name: "Pão de Mel", price: "Unidade • R$ 8,00", images: ["/pao de mel (3).webp", "/pao-de-m.webp", "/pao de mel.webp"], description: "Pão de mel macio recheado e decorado com carinho artesanal.", flavors: ["Beijinho", "Brigadeiro", "Doce de Leite"], tag: { text: "★ Artesanal", type: "classic" } },
  ];

  const bolosBloco: Product[] = [
    { name: "Bolos Decorados Sob Consulta", price: "Sob Consulta", images: ["/bolo.webp", "/bol.webp", "/bolo 4.webp"], description: "Massa fofinha e recheios generosos criados sob medida para seu evento.", flavors: ["Ninho com Morango", "Doce de Leite", "Chocolate Belga"] },
  ];

  return (
    <div className="w-full h-screen overflow-hidden bg-background fixed inset-0 font-sans antialiased">

      <div
        ref={containerRef}
        className="w-full h-full overflow-y-auto scroll-smooth snap-y snap-proximity select-none"
        style={{
          WebkitOverflowScrolling: 'touch',
          touchAction: 'pan-y'
        }}
      >

        {/* TELA 1: CAPA */}
        <section id="inicio" className="w-full min-h-screen shrink-0 snap-start flex flex-col items-center justify-center relative px-6 text-center">
          <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url('/mesa.webp')`, backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/85 to-background" />

          <div className="relative z-10 max-w-xl w-full">
            <div className="mb-6 flex justify-center">
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-white shadow-2xl border-2 border-accent/30 flex items-center justify-center p-1 overflow-hidden">
                <img src="/logo-blessed.webp" alt="Blessed Sabores Doces" className="w-full h-full object-contain scale-105" />
              </div>
            </div>
            <h1 className="serif-title text-4xl md:text-5xl text-foreground mb-2 font-bold tracking-tight">Blessed Sabores Doces</h1>
            <p className="text-base md:text-lg text-accent mb-2 font-semibold tracking-wide uppercase">Catálogo de Doces para Encomenda</p>
            <p className="text-sm text-muted-foreground mb-6">Sabor, elegância e carinho em cada detalhe</p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm mb-8 bg-card/60 backdrop-blur-sm py-2 px-4 rounded-full border border-border inline-flex">
              <MapPin size={16} className="text-accent" />
              <span>Paranavaí e região</span>
            </div>
            <div>
              <Button onClick={() => navigateToSection(2)} className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg px-8 py-5 text-sm rounded-full font-semibold">
                Ver Cardápio
              </Button>
            </div>
            <p className="text-[11px] text-muted-foreground/70 mt-8 animate-bounce">Role para baixo para navegar ↓</p>
          </div>
        </section>

        {/* TELA 2: INFORMAÇÕES */}
        <section id="sobre" className="w-full min-h-screen shrink-0 snap-start flex flex-col items-center justify-center px-6 text-center">
          <div className="max-w-md w-full py-2">
            <img src="/mesa.webp" alt="Mesa de Doces Montada" className="w-full h-[40vh] object-cover rounded-2xl shadow-xl mb-4 border border-border" />
            <h2 className="serif-title text-2xl text-foreground mb-2 font-bold">Informações Importantes</h2>
            <p className="text-xs text-muted-foreground mb-4 leading-relaxed px-2">
              Explore nosso cardápio nas próximas telas. Ao final, entre em contato pelo WhatsApp para fazer seu pedido.
            </p>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 text-left space-y-2 shadow-sm mb-4">
              <ul className="space-y-2.5 text-sm text-foreground">
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✔</span><span>Consulte disponibilidade da data</span></li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✔</span><span>Produção 100% sob encomenda</span></li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✔</span><span>Ingredientes selecionados</span></li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold mt-0.5">✔</span><span>Entrega em Paranavaí e região</span></li>
              </ul>
            </div>

            <div className="mb-5">
              <p className="text-xs text-muted-foreground font-medium mb-2">Produção artesanal para:</p>
              <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs font-semibold text-foreground">
                <span>🎂 Aniversários</span><span>💍 Casamentos</span><span>🎉 Eventos</span><span>👶 Chá de bebê</span>
              </div>
            </div>

            <Button onClick={() => navigateToSection(2)} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg py-5 text-sm rounded-xl font-semibold">
              Ver Categorias
            </Button>
          </div>
        </section>

        {/* TELA 3: CATEGORIAS */}
        <section id="categorias" className="w-full min-h-screen shrink-0 snap-start flex flex-col items-center justify-start px-4 py-4">
          <div className="w-full max-w-md">
            <h2 className="serif-title text-2xl text-foreground mb-3 font-bold text-center">Categorias</h2>
            <div className="space-y-2">
              <div className="border border-border rounded-xl overflow-hidden">
                <button onClick={() => setExpandedCategory(expandedCategory === 'tradicionais' ? null : 'tradicionais')} className="w-full p-3 bg-card hover:bg-card/80 font-bold text-foreground flex justify-between items-center transition-all">
                  <span>🍫 Doces Tradicionais</span>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-accent text-xs">Ver →</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 text-accent ${expandedCategory === 'tradicionais' ? 'rotate-180' : ''}`}>
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </div>
                </button>
                {expandedCategory === 'tradicionais' && (
                  <div className="bg-card/50 p-2 space-y-1 border-t border-border max-h-[60vh] overflow-y-auto">
                    <button onClick={() => navigateToSection(3)} className="w-full text-left p-2 text-sm text-foreground hover:bg-accent/10 rounded transition-colors flex justify-between items-center"><span>• Brigadeiro</span><span className="text-accent/60 text-xs">Ir →</span></button>
                    <button onClick={() => navigateToSection(3)} className="w-full text-left p-2 text-sm text-foreground hover:bg-accent/10 rounded transition-colors flex justify-between items-center"><span>• Beijinho</span><span className="text-accent/60 text-xs">Ir →</span></button>
                    <button onClick={() => navigateToSection(4)} className="w-full text-left p-2 text-sm text-foreground hover:bg-accent/10 rounded transition-colors flex justify-between items-center"><span>• Cajuzinho</span><span className="text-accent/60 text-xs">Ir →</span></button>
                    <button onClick={() => navigateToSection(4)} className="w-full text-left p-2 text-sm text-foreground hover:bg-accent/10 rounded transition-colors flex justify-between items-center"><span>• Brigadeiro de Ninho</span><span className="text-accent/60 text-xs">Ir →</span></button>
                    <button onClick={() => navigateToSection(5)} className="w-full text-left p-2 text-sm text-foreground hover:bg-accent/10 rounded transition-colors flex justify-between items-center"><span>• Doce Rosa</span><span className="text-accent/60 text-xs">Ir →</span></button>
                    <button onClick={() => navigateToSection(5)} className="w-full text-left p-2 text-sm text-foreground hover:bg-accent/10 rounded transition-colors flex justify-between items-center"><span>• Ouriço</span><span className="text-accent/60 text-xs">Ir →</span></button>
                  </div>
                )}
              </div>

              <div className="border border-border rounded-xl overflow-hidden">
                <button onClick={() => setExpandedCategory(expandedCategory === 'premium' ? null : 'premium')} className="w-full p-3 bg-card hover:bg-card/80 font-bold text-foreground flex justify-between items-center transition-all">
                  <span>👑 Doces Premium</span>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-accent text-xs">Ver →</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 text-accent ${expandedCategory === 'premium' ? 'rotate-180' : ''}`}>
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </div>
                </button>
                {expandedCategory === 'premium' && (
                  <div className="bg-card/50 p-2 space-y-1 border-t border-border max-h-[60vh] overflow-y-auto">
                    <button onClick={() => navigateToSection(6)} className="w-full text-left p-2 text-sm text-foreground hover:bg-accent/10 rounded transition-colors flex justify-between items-center"><span>• Casadinho</span><span className="text-accent/60 text-xs">Ir →</span></button>
                    <button onClick={() => navigateToSection(6)} className="w-full text-left p-2 text-sm text-foreground hover:bg-accent/10 rounded transition-colors flex justify-between items-center"><span>• Brigadeiro de Churros</span><span className="text-accent/60 text-xs">Ir →</span></button>
                    <button onClick={() => navigateToSection(7)} className="w-full text-left p-2 text-sm text-foreground hover:bg-accent/10 rounded transition-colors flex justify-between items-center"><span>• Brigadeiro de Ninho com Creme de Avelã</span><span className="text-accent/60 text-xs">Ir →</span></button>
                    <button onClick={() => navigateToSection(7)} className="w-full text-left p-2 text-sm text-foreground hover:bg-accent/10 rounded transition-colors flex justify-between items-center"><span>• Casquinha de Chocolate com Brigadeiro e Cereja</span><span className="text-accent/60 text-xs">Ir →</span></button>
                    <button onClick={() => navigateToSection(7)} className="w-full text-left p-2 text-sm text-foreground hover:bg-accent/10 rounded transition-colors flex justify-between items-center"><span>• Copinho de Chocolate com Frissalys</span><span className="text-accent/60 text-xs">Ir →</span></button>
                  </div>
                )}
              </div>

              <div className="border border-border rounded-xl overflow-hidden">
                <button onClick={() => setExpandedCategory(expandedCategory === 'bombons' ? null : 'bombons')} className="w-full p-3 bg-card hover:bg-card/80 font-bold text-foreground flex justify-between items-center transition-all">
                  <span>🍬 Bombons</span>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-accent text-xs">Ver →</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 text-accent ${expandedCategory === 'bombons' ? 'rotate-180' : ''}`}>
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </div>
                </button>
                {expandedCategory === 'bombons' && (
                  <div className="bg-card/50 p-2 space-y-1 border-t border-border max-h-[60vh] overflow-y-auto">
                    <button onClick={() => navigateToSection(8)} className="w-full text-left p-2 text-sm text-foreground hover:bg-accent/10 rounded transition-colors flex justify-between items-center"><span>• Bombons Dourado, Branco, Rosa</span><span className="text-accent/60 text-xs">Ir →</span></button>
                    <button onClick={() => navigateToSection(8)} className="w-full text-left p-2 text-sm text-foreground hover:bg-accent/10 rounded transition-colors flex justify-between items-center"><span>• Bombom Quadrado de Nozes</span><span className="text-accent/60 text-xs">Ir →</span></button>
                    <button onClick={() => navigateToSection(9)} className="w-full text-left p-2 text-sm text-foreground hover:bg-accent/10 rounded transition-colors flex justify-between items-center"><span>• Camafeu</span><span className="text-accent/60 text-xs">Ir →</span></button>
                  </div>
                )}
              </div>

              <div className="border border-border rounded-xl overflow-hidden">
                <button onClick={() => setExpandedCategory(expandedCategory === 'paodemel' ? null : 'paodemel')} className="w-full p-3 bg-card hover:bg-card/80 font-bold text-foreground flex justify-between items-center transition-all">
                  <span>🍯 Pão de Mel</span>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-accent text-xs">Ver →</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 text-accent ${expandedCategory === 'paodemel' ? 'rotate-180' : ''}`}>
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </div>
                </button>
                {expandedCategory === 'paodemel' && (
                  <div className="bg-card/50 p-2 space-y-1 border-t border-border max-h-[60vh] overflow-y-auto">
                    <button onClick={() => navigateToSection(10)} className="w-full text-left p-2 text-sm text-foreground hover:bg-accent/10 rounded transition-colors flex justify-between items-center"><span>• Pão de Mel</span><span className="text-accent/60 text-xs">Ir →</span></button>
                  </div>
                )}
              </div>

              <div className="border border-border rounded-xl overflow-hidden">
                <button onClick={() => navigateToSection(11)} className="w-full p-3 bg-card hover:bg-card/80 font-bold text-foreground flex justify-between items-center transition-all">
                  <span>🎂 Bolos</span>
                  <span className="text-accent text-xs">Ver →</span>
                </button>
              </div>

              <button onClick={() => navigateToSection(3)} className="w-full p-3 bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded-xl font-bold text-accent flex justify-between items-center transition-all shadow-sm">
                <span>⭐ Ver Todos os Produtos</span>
                <span className="text-xs">Ver →</span>
              </button>
            </div>
          </div>
        </section>

        {/* PRODUTOS */}
        <section id="tradicionais-1" className="w-full min-h-screen shrink-0 snap-start">
          <VerticalProductPage title="Doces Tradicionais" label="Parte 1 de 5" products={docesTradicionaisBloco1} />
        </section>
        <section id="tradicionais-2" className="w-full min-h-screen shrink-0 snap-start">
          <VerticalProductPage title="Doces Tradicionais" label="Parte 2 de 5" products={docesTradicionaisBloco2} />
        </section>
        <section id="tradicionais-3" className="w-full min-h-screen shrink-0 snap-start">
          <VerticalProductPage title="Doces Tradicionais" label="Parte 3 de 5" products={docesTradicionaisBloco3} />
        </section>
        <section id="tradicionais-4" className="w-full min-h-screen shrink-0 snap-start">
          <VerticalProductPage title="Doces Premium" label="Parte 4 de 5" products={docesTradicionaisBloco4} />
        </section>
        <section id="tradicionais-5" className="w-full min-h-screen shrink-0 snap-start">
          <VerticalProductPage title="Doces Premium" label="Parte 5 de 5" products={docesTradicionaisBloco5} />
        </section>

        <section id="bombons-1" className="w-full min-h-screen shrink-0 snap-start">
          <VerticalProductPage title="Bombons" label="Parte 1 de 2" products={bombonsBloco1} />
        </section>
        <section id="bombons-2" className="w-full min-h-screen shrink-0 snap-start">
          <VerticalProductPage title="Bombons" label="Parte 2 de 2" products={bombonsBloco2} />
        </section>

        <section id="pao-de-mel" className="w-full min-h-screen shrink-0 snap-start">
          <VerticalProductPage title="Pão de Mel" label="Artesanal" products={paoDeMelBloco} />
        </section>

        <section id="bolos" className="w-full min-h-screen shrink-0 snap-start">
          <VerticalProductPage title="Bolos" label="Opções Sob Encomenda" products={bolosBloco} />
        </section>

        {/* INSTRUÇÕES */}
        <section id="instrucoes" className="w-full min-h-screen shrink-0 snap-start flex flex-col items-center justify-center px-6 text-center">
          <div className="max-w-sm w-full space-y-4">
            <h2 className="serif-title text-2xl font-bold text-foreground mb-4">Como encomendar?</h2>
            {[
              { step: "1", title: "Escolha as opções", text: "Navegue pelo cardápio rolando a tela verticalmente." },
              { step: "2", title: "Defina as quantidades", text: "Trabalhamos com a produção sob medida por cento." },
              { step: "3", title: "Chame no WhatsApp", text: "Clique no botão na última tela para garantir sua data." }
            ].map((s, i) => (
              <div key={i} className="flex gap-3 text-left p-3 bg-card border border-border rounded-xl">
                <div className="w-6 h-6 rounded-full bg-accent/20 text-accent font-bold flex items-center justify-center text-xs shrink-0">{s.step}</div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">{s.title}</h4>
                  <p className="text-xs text-muted-foreground">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="w-full min-h-screen shrink-0 snap-start flex flex-col items-center justify-center px-6 text-center">
          <div className="max-w-sm w-full">
            <div className="mb-4 flex justify-center">
              <div className="w-24 h-24 rounded-full bg-white shadow-lg border border-border p-1 overflow-hidden">
                <img src="/logo-blessed.webp" alt="Blessed Logo" className="w-full h-full object-contain scale-105" />
              </div>
            </div>
            <h2 className="serif-title text-2xl font-bold text-foreground mb-6">Orçamentos & Pedidos</h2>

            <div className="space-y-2 mb-8">
              <a href="https://wa.me/5544998159745?text=Oi!%20Vim%20pelo%20site%20da%20Blessed%20Sabores%20Doces.%20Gostaria%20de%20fazer%20uma%20encomenda.%20Podem%20me%20ajudar%3F" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-3 bg-accent text-accent-foreground rounded-xl font-semibold shadow-sm text-sm hover:bg-accent/90">
                <Phone size={16} /> WhatsApp: (44) 99815-9745
              </a>
              <a href="https://instagram.com/blessedsabores.doces" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-3 bg-card text-foreground border border-border rounded-xl text-sm hover:bg-card/80">
                <Instagram size={16} className="text-accent" /> @blessedsabores.doces
              </a>
            </div>

            <div className="space-y-2 mt-4">
              <button
                onClick={() => {
                  const text = encodeURIComponent(
                    "🍫 *Blessed Sabores Doces*\n\nDoces artesanais para casamentos, aniversários e eventos em Paranavaí!\n\nConfira o cardápio completo:\nhttps://blessedsabores.vercel.app/"
                  );
                  window.open(`https://wa.me/?text=${text}`, '_blank');
                }}
                className="w-full p-3 bg-[#25D366] text-white rounded-xl font-semibold shadow-sm text-sm hover:bg-[#20BD5A] transition-colors"
              >
                📤 Compartilhar Cardápio no WhatsApp
              </button>
            </div>

            <p className="text-[10px] text-muted-foreground mt-2">Blessed Sabores Doces © 2026<br/>Paranavaí - PR</p>
          </div>
        </section>

      </div>

      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <a
        href="https://wa.me/5544998159745?text=Oi!%20Vim%20pelo%20site%20da%20Blessed%20Sabores%20Doces.%20Gostaria%20de%20fazer%20uma%20encomenda.%20Podem%20me%20ajudar%3F"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-4 z-[60] bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200"
        style={{ boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {activeSection < sectionsCount - 2 && (
        <div className="fixed bottom-16 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center pointer-events-none">
          <span className="text-[10px] text-muted-foreground font-medium bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full border border-border shadow-sm">
            Role para ver mais
          </span>
          <svg className="w-4 h-4 text-accent mt-0.5 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      )}

      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border px-4 py-3 flex justify-between items-center z-50 select-none shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] transition-all duration-300">
        <button
          onClick={() => navigateToSection(activeSection - 1)}
          className="text-xs font-semibold px-3 py-2 bg-card border border-border rounded-lg text-foreground disabled:opacity-30 transition-colors hover:bg-muted"
          disabled={activeSection === 0}
        >
          ↑ Voltar
        </button>

        <button
          onClick={() => navigateToSection(0)}
          className="text-xs font-semibold px-3 py-2 bg-card border border-accent/30 text-accent rounded-lg transition-colors hover:bg-accent/10"
        >
          🏠 Capa
        </button>
      </div>

    </div>
  );
}

function VerticalProductPage({ title, label, products }: { title: string; label: string; products: Product[] }) {
  return (
    <div className="w-full h-full flex flex-col pt-4 px-4 bg-background relative">
      <div className="text-center max-w-md mx-auto w-full mt-2 shrink-0">
        <span className="text-[10px] text-accent font-bold tracking-widest uppercase bg-accent/10 px-2.5 py-0.5 rounded-full">{title}</span>
      </div>

      <div className="w-full max-w-sm mx-auto flex flex-col gap-4 py-4 pb-32">
        {products.map((product, index) => (
          <StaticProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

function StaticProductCard({ product }: { product: Product }) {
  const [zoomImage, setZoomImage] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden flex flex-col shadow-sm w-full select-none relative shrink-0">

      <div className="p-3 pb-0">
        <h3 className="font-bold text-sm text-foreground serif-title leading-tight text-center">{product.name}</h3>
      </div>

      <div className="px-3 pt-2 pb-1">
        <button
          type="button"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); setZoomImage(product.zoomImages?.[selectedImage] || product.images[selectedImage]); }}
          className="touch-photo-btn w-full aspect-[4/3] rounded-xl overflow-hidden border border-border/40 bg-muted/20 cursor-pointer outline-none focus:outline-none transition-transform active:scale-[0.98] block mb-2"
        >
          <img
            src={product.images[selectedImage]}
            alt={product.name}
            loading="lazy"
            decoding="async"
            width="400"
            height="300"
            className="w-full h-full object-cover pointer-events-none transition-opacity duration-300"
            draggable={false}
          />
          <div className="absolute right-2 bottom-2 bg-black/60 text-white rounded px-1.5 py-0.5 text-[9px] font-bold pointer-events-none">🔍</div>
        </button>

        {product.images.length > 1 && (
          <div className="flex justify-center gap-1.5">
            {product.images.map((imgUrl, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); setSelectedImage(idx); }}
                className={`touch-photo-btn relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden bg-card cursor-pointer outline-none focus:outline-none transition-all active:scale-95 block ${selectedImage === idx ? 'border-2 border-accent shadow-md' : 'border border-border/40'}`}
              >
                <img
                  src={imgUrl}
                  alt={`${product.name} ${idx + 1}`}
                  loading="lazy"
                  decoding="async"
                  width="64"
                  height="64"
                  className="w-full h-full object-cover pointer-events-none"
                  draggable={false}
                />
              </button>
            ))}
          </div>
        )}

        <p className="text-[10px] text-muted-foreground/60 text-center mt-1.5">Toque na foto para ampliar</p>
      </div>

      <div className="px-3 pb-2 text-center">
        <span className="text-accent font-bold text-sm bg-accent/5 px-3 py-1 rounded-lg border border-accent/10 inline-block">
          {product.price}
        </span>
      </div>

      <div className="px-3 pb-3">
        {product.flavors && product.flavors.length > 0 && (
          <div className="flex flex-wrap gap-x-1 gap-y-0.5 items-center">
            <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mr-1 shrink-0">Sabores:</span>
            {product.flavors.map((flv, idx) => (
              <span key={idx} className="text-[10px] text-foreground/80">
                {flv}{idx < product.flavors.length - 1 ? " • " : ""}
              </span>
            ))}
          </div>
        )}
      </div>

      {zoomImage && typeof window !== "undefined" && createPortal(
        <div className="modal-contain fixed inset-0 bg-black/95 backdrop-blur-sm z-[9999] flex items-center justify-center p-4" onClick={(e) => { e.stopPropagation(); setZoomImage(null); }}>
          <button type="button" className="absolute top-4 right-4 bg-white/20 text-white rounded-full p-2.5 hover:bg-white/30 transition-colors" onClick={(e) => { e.stopPropagation(); setZoomImage(null); }}>
            <X size={24} />
          </button>
          <div className="max-w-full max-h-[85vh] rounded-lg overflow-hidden flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img src={zoomImage} alt={product.name} loading="eager" decoding="async" className="w-full h-auto max-h-[85vh] object-contain" />
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}