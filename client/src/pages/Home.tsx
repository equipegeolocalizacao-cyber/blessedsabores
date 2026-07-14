import { Button } from "@/components/ui/button";
import { MapPin, Phone, Instagram, X, Plus, Minus } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface Product {
  name: string;
  price: string;
  images: string[];
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
  const sectionsCount = 13;

  const sectionHashes = [
    "inicio", "sobre", "categorias",
    "tradicionais-1", "tradicionais-2", "tradicionais-3", "tradicionais-4", "tradicionais-5",
    "bombons-1", "bombons-2", "bolos", "instrucoes", "contato"
  ];

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

  // IntersectionObserver para detectar seção ativa
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
      { threshold: 0.5, root: containerRef.current }
    );

    sectionHashes.forEach((hash) => {
      const el = document.getElementById(hash);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeSection]);

  const docesTradicionaisBloco1: Product[] = [
    { name: "Brigadeiro", price: "Cento • R$ 140,00", images: ["/brigadeiro.jpeg", "/brig2.jpeg", "/brig.jpeg"], description: "Feito com cacau nobre e granulado de verdade.", flavors: ["Ao Leite", "Meio Amargo", "Cacau 50%"], tag: { text: "★ Clássico", type: "classic" } },
    { name: "Beijinho", price: "Cento • R$ 140,00", images: ["/beijinho.jpeg", "/beijinho 3.jpeg", "/beijinho 5.jpeg"], description: "Delicioso doce de coco macio e úmido.", flavors: ["Coco Tradicional", "Com Cravo"], tag: { text: "★ Favorito", type: "classic" } },
  ];

  const docesTradicionaisBloco2: Product[] = [
    { name: "Cajuzinho", price: "Cento • R$ 140,00", images: ["/cajuzinho.jpeg", "/cajuzinho 2.jpeg", "/cajuzinho 6.jpeg"], description: "Sabor marcante do amendoim selecionado com textura incrível.", flavors: ["Amendoim Tradicional"] },
    { name: "Brigadeiro de Ninho", price: "Cento • R$ 140,00", images: ["/brigadeiro de ninho.jpeg", "/brigadeiro de ninho1.jpeg", "/brigadeiro de ninho (2).jpeg"], description: "Feito puramente com leite Ninho premium.", flavors: ["Leite Ninho Tradicional"] },
  ];

  const docesTradicionaisBloco3: Product[] = [
    { name: "Doce Rosa", price: "Cento • R$ 140,00", images: ["/rosa (1).jpeg", "/rosa (2).jpeg", "/doce rosa 3.jpeg"], description: "Encanto e delicadeza em cor de rosa para mesas românticas.", flavors: ["Bicho de Pé (Morango)"] },
    { name: "Ouriço", price: "Cento • R$ 140,00", images: ["/ouriço.jpeg", "/ouri.jpeg", "/ouriço 2.jpeg"], description: "Textura externa crocante com recheio cremoso.", flavors: ["Coco Queimado"] },
  ];

  const docesTradicionaisBloco4: Product[] = [
    { name: "Casadinho", price: "Cento • R$ 145,00", images: ["/casadinho.jpeg", "/casadinho 8.jpeg", "/casadinho 3.jpeg"], description: "A perfeita união do brigadeiro tradicional com o branco.", flavors: ["Preto e Branco Casados"] },
    { name: "Brigadeiro de Churros", price: "Cento • R$ 145,00", images: ["/churr3.jpeg", "/curr.jpeg", "/churr1.jpeg"], description: "Doce de leite premium polvilhado com açúcar e canela.", flavors: ["Doce de Leite com Canela"] },
  ];

  const docesTradicionaisBloco5: Product[] = [
    { name: "Brigadeiro de Ninho com Creme de Avelã", price: "Cento • R$ 145,00", images: ["/brigadeiro de ninho (2).jpeg", "/brigadeiro de ninho1.jpeg", "/brigadeiro de ninho.jpeg"], description: "Brigadeiro de Ninho recheado com creme de avelã.", flavors: ["Ninho & Nutella"], tag: { text: "★ Mais Vendido", type: "best" } },
    { name: "Casquinha de Chocolate com Brigadeiro e Cereja", price: "Cento • R$ 350,00", images: ["/casquinha com cereja.jpeg", "/casc (1).jpeg", "/casc (2).jpeg"], description: "Chocolate crocante, brigadeiro e nobreza da cereja.", flavors: ["Cereja Inteira com Licor"] },
    { name: "Copinho de Chocolate com Frissalys", price: "Cento • R$ 350,00", images: ["/copinho com frissalys.jpeg", "/fic.jpeg", "/fric.jpeg"], description: "Delicioso copinho recheado com brigadeiro e finalizado com frissalys crocante.", flavors: ["Brigadeiro com Frissalys"], tag: { text: "★ Especial", type: "premium" } },
  ];

  const bombonsBloco1: Product[] = [
    { name: "Bombons Dourado, Branco, Rosa e Quadrado", price: "Cento • R$ 245,00", images: ["/bombom colorido.jpeg", "/bombom.jpeg", "/com com dourado.jpeg"], description: "Estilo luxuoso, casca fina de chocolate nobre em formatos variados.", flavors: ["Brigadeiro", "Beijinho", "Maracujá"], tag: { text: "★ Premium", type: "premium" } },
    { name: "Bombom Quadrado de Nozes", price: "Cento • R$ 250,00", images: ["/bombom quadrado.jpeg", "/bombom 4.jpeg", "/bomb quad.jpeg"], description: "Toque nobre e crocante do recheio de nozes selecionadas.", flavors: ["Nozes com Doce de Leite"] },
  ];

  const bombonsBloco2: Product[] = [
    { name: "Camafeu", price: "Cento • R$ 250,00", images: ["/camafeu.jpeg", "/camafeu 2.jpeg", "/camafeu 7.jpeg"], description: "O clássico doce fino de nozes envolvido em fondant.", flavors: ["Fondant de Nozes Tradicional"], tag: { text: "★ Fino", type: "premium" } },
  ];

  const bolosBloco: Product[] = [
    { name: "Bolos Decorados Sob Consulta", price: "Sob Consulta", images: ["/bolo.jpeg", "/bol.jpeg", "/bolo 4.jpeg"], description: "Massa fofinha e recheios generosos criados sob medida para seu evento.", flavors: ["Ninho com Morango", "Doce de Leite", "Chocolate Belga"] },
  ];

  return (
    <div className="w-full h-screen overflow-hidden bg-background fixed inset-0 font-sans antialiased">

      {/* CONTAINER PRINCIPAL */}
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
          <div className="absolute inset-0 opacity-25" style={{ backgroundImage: `url('/mesa.jpeg')`, backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/85 to-background" />

          <div className="relative z-10 max-w-xl w-full">
            <div className="mb-6 flex justify-center">
              <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-white shadow-2xl border-2 border-accent/30 flex items-center justify-center p-1 overflow-hidden">
                <img src="/logo-blessed.png" alt="Blessed Sabores Doces" className="w-full h-full object-contain scale-105" />
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
            <img src="/mesa.jpeg" alt="Mesa de Doces Montada" className="w-full h-[40vh] object-cover rounded-2xl shadow-xl mb-4 border border-border" />
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
                    <span className="text-accent text-xs font-normal">Ver →</span>
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
                    <span className="text-accent text-xs font-normal">Ver →</span>
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
                    <span className="text-accent text-xs font-normal">Ver →</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 text-accent ${expandedCategory === 'bombons' ? 'rotate-180' : ''}`}>
                      <path d="m6 9 6 6 6-6"/>
                    </svg>
                  </div>
                </button>
                {expandedCategory === 'bombons' && (
                  <div className="bg-card/50 p-2 space-y-1 border-t border-border max-h-[60vh] overflow-y-auto">
                    <button onClick={() => navigateToSection(8)} className="w-full text-left p-2 text-sm text-foreground hover:bg-accent/10 rounded transition-colors flex justify-between items-center"><span>• Bombons Dourado, Branco, Rosa e Quadrado</span><span className="text-accent/60 text-xs">Ir →</span></button>
                    <button onClick={() => navigateToSection(8)} className="w-full text-left p-2 text-sm text-foreground hover:bg-accent/10 rounded transition-colors flex justify-between items-center"><span>• Bombom Quadrado de Nozes</span><span className="text-accent/60 text-xs">Ir →</span></button>
                    <button onClick={() => navigateToSection(9)} className="w-full text-left p-2 text-sm text-foreground hover:bg-accent/10 rounded transition-colors flex justify-between items-center"><span>• Camafeu</span><span className="text-accent/60 text-xs">Ir →</span></button>
                  </div>
                )}
              </div>

              <div className="border border-border rounded-xl overflow-hidden">
                <button onClick={() => navigateToSection(10)} className="w-full p-3 bg-card hover:bg-card/80 font-bold text-foreground flex justify-between items-center transition-all">
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
                <img src="/logo-blessed.png" alt="Blessed Logo" className="w-full h-full object-contain scale-105" />
              </div>
            </div>
            <h2 className="serif-title text-2xl font-bold text-foreground mb-6">Orçamentos & Pedidos</h2>

            <div className="space-y-2 mb-8">
              <a href="https://wa.me/5544998159745" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-3 bg-accent text-accent-foreground rounded-xl font-semibold shadow-sm text-sm hover:bg-accent/90">
                <Phone size={16} /> WhatsApp: (44) 99815-9745
              </a>
              <a href="https://instagram.com/blessedsabores.doces" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 p-3 bg-card text-foreground border border-border rounded-xl text-sm hover:bg-card/80">
                <Instagram size={16} className="text-accent" /> @blessedsabores.doces
              </a>
            </div>

            <p className="text-[10px] text-muted-foreground">Blessed Sabores Doces © 2026<br/>Paranavaí - PR</p>
          </div>
        </section>

      </div>

      {/* BARRA INFERIOR FIXA */}
      <div className={`fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border px-4 py-3 flex justify-between items-center z-50 select-none shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] transition-all duration-300`}>
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
        <p className="text-[11px] text-muted-foreground mt-1">{label} • Role para ver mais</p>
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

  const getTagStyles = (type: 'classic' | 'best' | 'premium') => {
    switch (type) {
      case 'best': return 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20';
      case 'premium': return 'bg-amber-500/10 text-amber-600 border-amber-500/20';
      default: return 'bg-accent/10 text-accent border-accent/20';
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden flex flex-col shadow-sm w-full select-none relative shrink-0">
      <div className="relative">
        {product.tag && (
          <span className={`absolute top-3 left-3 z-10 text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full border shadow-sm backdrop-blur-md ${getTagStyles(product.tag.type)}`}>
            {product.tag.text}
          </span>
        )}

        <div className="grid grid-cols-3 gap-1.5 p-2 bg-muted/20">
          {product.images.map((imgUrl, idx) => (
            <button
              key={idx}
              type="button"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setZoomImage(imgUrl); }}
              className="touch-photo-btn relative aspect-square w-full rounded-lg overflow-hidden border border-border/40 bg-card cursor-pointer outline-none focus:outline-none transition-transform active:scale-95 block"
            >
              <img
                src={imgUrl}
                alt=""
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
              />
              <div className="absolute right-1 bottom-1 bg-black/60 text-white rounded px-1 py-0.5 text-[8px] font-bold pointer-events-none">🔍</div>
            </button>
          ))}
        </div>
      </div>

      <div className="p-3 flex flex-col justify-between flex-1">
        <div>
          <div className="flex justify-between items-start gap-2 mb-1.5">
            <h3 className="font-bold text-sm text-foreground serif-title leading-tight">{product.name}</h3>
            <span className="text-accent font-bold text-xs shrink-0 bg-accent/5 px-2 py-0.5 rounded border border-accent/10">
              {product.price}
            </span>
          </div>

          {product.description && (
            <p className="text-[11px] text-muted-foreground leading-normal line-clamp-2">{product.description}</p>
          )}

          {product.flavors && product.flavors.length > 0 && (
            <div className="mt-2.5 p-1.5 bg-muted/30 border border-border/40 rounded-lg flex flex-wrap gap-1 items-center">
              <span className="text-[9px] font-bold text-muted-foreground/80 uppercase tracking-widest mr-1 shrink-0">Sabores:</span>
              {product.flavors.map((flv, idx) => (
                <span key={idx} className="text-[10px] bg-card px-2 py-0.5 rounded border border-border/80 text-foreground/90 font-medium shadow-sm">
                  {flv}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="text-[10px] text-muted-foreground/60 border-t border-border/40 mt-3 pt-1.5 flex justify-between">
          <span>Toque na foto para ampliar</span>
          <span className="font-semibold text-accent">Blessed Doces</span>
        </div>
      </div>

      {zoomImage && typeof window !== "undefined" && createPortal(
        <div className="modal-contain fixed inset-0 bg-black/95 backdrop-blur-sm z-[9999] flex items-center justify-center p-4" onClick={(e) => { e.stopPropagation(); setZoomImage(null); }}>
          <button type="button" className="absolute top-4 right-4 bg-white/20 text-white rounded-full p-2.5 hover:bg-white/30 transition-colors" onClick={(e) => { e.stopPropagation(); setZoomImage(null); }}>
            <X size={24} />
          </button>
          <div className="max-w-full max-h-[85vh] rounded-lg overflow-hidden flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img src={zoomImage} alt="Zoom" className="w-full h-auto max-h-[85vh] object-contain" />
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}