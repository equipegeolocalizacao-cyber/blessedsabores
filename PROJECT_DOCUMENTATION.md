# Blessed Sabores Doces - Cardápio Premium

**Documentação Técnica Completa do Projeto**

---

## 📋 Visão Geral do Projeto

**Blessed Sabores Doces** é um cardápio digital premium otimizado para WhatsApp, desenvolvido para uma confeitaria artesanal de luxo. O site apresenta uma experiência de scroll contínuo elegante, com 10 telas temáticas que guiam o cliente desde a apresentação da marca até o contato direto para orçamentos.

**Objetivo Principal**: Criar um portfólio de vendas digital que transmita sofisticação, qualidade premium e facilite a conversão de visitantes em clientes.

**Stack Tecnológico**:
- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + CSS Variables
- **Routing**: Wouter (client-side)
- **UI Components**: shadcn/ui
- **Fonts**: Google Fonts (Playfair Display + Poppins)
- **Build Tool**: Vite
- **Deployment**: Manus WebDev (Static)

---

## 🎨 Filosofia de Design

### Movimento de Design
**Neoclassical Luxury meets Contemporary Minimalism**

Inspirado em galerias de arte de alta gama e boutiques de luxo, com foco em sofisticação através da simplicidade e espaçamento generoso.

### Princípios Fundamentais

| Princípio | Descrição | Aplicação |
|-----------|-----------|-----------|
| **Espaçamento Generoso** | Cada elemento respira; o vazio é tão importante quanto o preenchido | Padding/margin generosos entre seções (py-16 md:py-24) |
| **Hierarquia Tipográfica Forte** | Contraste claro entre títulos, descrições e CTAs | Playfair Display para títulos, Poppins para body |
| **Paleta Restrita e Intencional** | Apenas 4-5 cores, cada uma com propósito específico | Ver seção Paleta de Cores |
| **Fotografia Premium em Primeiro Plano** | Imagens dos produtos são o destaque, textos são suporte | Full-width product images com sombras elegantes |

### Paleta de Cores

```
Fundo Preto Elegante:      #1a1a1a (--background)
Dourado Champagne:         #d4af37 (--accent / --primary)
Branco/Off-white:          #f5f5f5 (--foreground)
Bege Suave:                #e8dcc8 (--secondary)
Cinza Médio (Muted):       #3a3a3a (--muted)
Cinza Claro (Muted FG):    #b0b0b0 (--muted-foreground)
```

**Intenção Emocional**: Transmitir que cada doce é uma obra de arte, digna de celebração e investimento.

### Sistema Tipográfico

| Elemento | Font | Peso | Tamanho Desktop | Tamanho Mobile | Uso |
|----------|------|------|-----------------|----------------|-----|
| **Títulos Principais** | Playfair Display | 700 | 48px | 32px | Nomes de produtos, títulos de seção |
| **Subtítulos** | Playfair Display | 600 | 24px | 18px | Seções secundárias |
| **Body/Descrições** | Poppins | 400 | 16px | 14px | Textos descritivos, preços |
| **Pequenos Textos** | Poppins | 400 | 12-14px | 12px | Labels, informações secundárias |

**Letter-spacing**: +0.3px para body, -0.5px para títulos (elegância clássica)

### Paradigma de Layout

- **Scroll Contínuo Vertical**: Simula experiência de folhear um menu físico premium
- **Seções Modulares**: Cada produto em seu próprio "quadro" com espaçamento generoso
- **Assimetria Controlada**: Imagens grandes alternam com texto, nunca grid simétrico
- **Full-Width Hero**: Primeira impressão impactante com imagem + logotipo

### Elementos Assinatura

1. **Separadores Elegantes**: Linhas finas em dourado champagne entre seções (`.section-divider`)
2. **Ícones Minimalistas**: Símbolos sutis (🍫, 🥥, 🤎) em dourado champagne
3. **Tipografia Serif para Títulos**: Elegância clássica, sofisticação inerente

### Filosofia de Interação

- **Suavidade em Tudo**: Transições de 300-400ms, easing `cubic-bezier(0.23, 1, 0.32, 1)` (ease-out)
- **Hover Subtil**: Leve mudança de opacidade ou cor em CTAs
- **Scroll Revelação**: Elementos aparecem suavemente conforme o usuário desce
- **Mobile-First**: Toques generosos, espaçamento confortável para dedos

### Animações

- **Fade-in ao carregar**: 300ms, ease-out
- **Hover em botões**: Mudança de cor + leve scale (1.02x)
- **Scroll parallax**: Leve em imagens de fundo (opcional, apenas em desktop)
- **Transições entre seções**: Fade suave, sem jarretões

---

## 📁 Estrutura de Arquivos

```
blessed-sabores-doces-menu/
├── client/
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── robots.txt
│   │   └── __manus__/
│   │       └── version.json
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/                    # shadcn/ui components
│   │   │   ├── ErrorBoundary.tsx
│   │   │   └── ManusDialog.tsx
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx       # Dark theme provider
│   │   ├── hooks/
│   │   │   ├── useComposition.ts
│   │   │   ├── useMobile.tsx
│   │   │   └── usePersistFn.ts
│   │   ├── lib/
│   │   │   └── utils.ts               # Utility functions
│   │   ├── pages/
│   │   │   ├── Home.tsx               # Main page (10 sections)
│   │   │   └── NotFound.tsx
│   │   ├── App.tsx                    # Router & theme setup
│   │   ├── main.tsx                   # React entry point
│   │   └── index.css                  # Global styles & theme variables
│   └── index.html
├── server/
│   └── index.ts                       # Express server (static serving)
├── shared/
│   └── const.ts                       # Shared constants
├── ideas.md                           # Design philosophy document
├── PROJECT_DOCUMENTATION.md           # This file
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── .prettierrc
```

---

## 🎯 Estrutura de Conteúdo (10 Telas)

### Tela 1 — CAPA (Hero)
**Arquivo**: `client/src/pages/Home.tsx` → `sections[0]`

**Componentes**:
- Background image com overlay gradient
- Logo Blessed Sabores Doces (imagem)
- Título principal: "Blessed Sabores Doces"
- Tagline: "Sabor, elegância e carinho em cada detalhe"
- Descrição: "Doces artesanais para festas, casamentos e momentos especiais"
- Localização com ícone: "📍 Paranavaí e região"
- CTA Button: "Explorar Cardápio"

**Imagem**: `/manus-storage/hero-doces_10aa207c.png`

**Estilos Aplicados**:
- `min-h-screen` (altura mínima da viewport)
- `bg-background` (preto elegante)
- `flex flex-col items-center justify-center` (centralização)
- Overlay gradient `from-background/50 via-background/70 to-background`

---

### Tela 2 — APRESENTAÇÃO
**Arquivo**: `client/src/pages/Home.tsx` → `sections[1]`

**Componentes**:
- Imagem de detalhes dos doces
- Título: "Feitos para celebrar momentos especiais"
- Descrição em dois parágrafos

**Imagem**: `/manus-storage/beijinhos_8413e0bb.png`

**Estilos Aplicados**:
- `section-spacing` (py-16 md:py-24)
- `product-image` (classe customizada com sombra)
- `serif-title` (Playfair Display, 48px desktop / 32px mobile)

---

### Tela 3 — MENU (Categorias)
**Arquivo**: `client/src/pages/Home.tsx` → `sections[2]`

**Componentes**:
- Título: "Cardápio"
- 5 cards de categorias com ícones:
  - 🍫 Brigadeiros Gourmet
  - 🥥 Beijinhos
  - 🍬 Bombons Especiais
  - 🤎 Casadinhos
  - 🎂 Bolos Especiais
- Frase motivacional: "Escolha seus favoritos e monte sua mesa de doces."

**Interatividade**:
- Cada card é clicável e navega para a seção do produto correspondente
- Hover effect: `hover:bg-card/80 hover:shadow-lg hover:border-accent/50`

**Estilos Aplicados**:
- Cards com `bg-card rounded-lg cursor-pointer transition-all duration-300`
- Border com `border-border` padrão, `border-accent/50` no hover

---

### Telas 4-8 — PRODUTOS (Brigadeiros, Beijinhos, Bombons, Casadinhos, Bolos)
**Arquivo**: `client/src/pages/Home.tsx` → `sections[3-7]` + `ProductSection` component

**Componente Reutilizável**: `ProductSection`

**Props**:
```typescript
{
  image: string;           // URL da imagem do produto
  title: string;           // Nome do produto
  description: string;     // Descrição curta
  prices: Array<{          // Array de opções de preço
    quantity: string;      // Ex: "Caixa 6 unidades"
    price: string;         // Ex: "R$ 24,90"
  }>;
  customText?: string;     // Texto adicional (ex: "Consulte sabores...")
}
```

**Layout**:
1. Imagem grande (full-width, rounded, sombra)
2. Título do produto (Playfair Display, 48px desktop)
3. Descrição (Poppins, 16px, text-muted-foreground)
4. Box de preços (bg-card, border, espaçamento interno)
5. Texto customizado (opcional)
6. CTA Button: "Solicitar Orçamento via WhatsApp"

**Imagens Utilizadas**:
- Brigadeiros: `/manus-storage/brigadeiros-gourmet_36cca0ef.png`
- Beijinhos: `/manus-storage/beijinhos_8413e0bb.png`
- Bombons: `/manus-storage/bombons-especiais_47905661.png`
- Casadinhos: `/manus-storage/casadinhos_955a6c65.png`
- Bolos: `/manus-storage/bolos-especiais_c0352dbc.png`

**Dados de Preços** (Tela 4 - Brigadeiros):
```
Caixa 6 unidades — R$ 24,90
Caixa 12 unidades — R$ 49,90
Cento — R$ 220,00
```

---

### Tela 9 — COMO ENCOMENDAR
**Arquivo**: `client/src/pages/Home.tsx` → `sections[8]`

**Componentes**:
- Título: "Seu momento merece um doce especial"
- Separador elegante (`.section-divider`)
- 3 passos do processo:
  1. 1️⃣ Escolha seus produtos
  2. 2️⃣ Informe os detalhes (Data, Quantidade, Local)
  3. 3️⃣ Receba seu orçamento

**Estilos Aplicados**:
- Layout em grid de 3 colunas (desktop), stack em mobile
- Ícones grandes (4xl)
- Títulos em Playfair Display
- Descrições em Poppins, cor muted-foreground

---

### Tela 10 — CONTATO FINAL
**Arquivo**: `client/src/pages/Home.tsx` → `sections[9]`

**Componentes**:
- Logo Blessed Sabores Doces
- Título: "Vamos adoçar sua celebração?"
- 2 cards de contato:
  - **WhatsApp**: (44) 99815-9745 (link: `https://wa.me/44998159745`)
  - **Instagram**: @blessedsabores.doces (link: `https://www.instagram.com/blessedsabores.doces/`)
- Footer: "Blessed Sabores Doces © 2024 • Paranavaí, PR"

**Interatividade**:
- Cards clicáveis com links externos (`target="_blank"`)
- Hover effect: `hover:bg-card/80 hover:border-accent/50`

---

## 🛠️ Componentes Técnicos

### Home.tsx - Estrutura Principal

**Estado**:
```typescript
const [activeSection, setActiveSection] = useState(0);
```

**Array de Seções**:
```typescript
const sections = [
  { id: "cover", component: <JSX> },
  { id: "about", component: <JSX> },
  // ... 8 mais
];
```

**Navegação**:
- **Desktop**: Dots de navegação na direita (fixed, hidden md:flex)
- **Mobile**: Botões anterior/próximo no footer (fixed bottom)

**Transição de Seções**:
```typescript
style={{
  transform: `translateY(-${activeSection * 100}vh)`,
}}
```

Usa `transform` (GPU-accelerated) para performance otimizada.

### ProductSection - Componente Reutilizável

Componente funcional que renderiza uma seção de produto com:
- Imagem grande
- Título e descrição
- Box de preços
- CTA para WhatsApp

**Vantagem**: Reduz duplicação de código para as 5 seções de produtos.

---

## 🎨 Customizações CSS

### Arquivo: `client/src/index.css`

**Variáveis CSS Customizadas**:
```css
:root {
  --primary: #d4af37;                    /* Dourado Champagne */
  --background: #1a1a1a;                /* Preto Elegante */
  --foreground: #f5f5f5;                 /* Off-white */
  --card: #242424;                       /* Cinza Escuro */
  --accent: #d4af37;                     /* Dourado Champagne */
  --muted: #3a3a3a;                      /* Cinza Médio */
  --muted-foreground: #b0b0b0;           /* Cinza Claro */
  --secondary: #e8dcc8;                  /* Bege Suave */
  --border: #3a3a3a;                     /* Cinza para Borders */
}
```

**Classes Customizadas** (em `@layer components`):

| Classe | Estilos | Uso |
|--------|---------|-----|
| `.section-divider` | Linha fina em dourado com gradient | Separadores entre seções |
| `.product-image` | Full-width, rounded, shadow-2xl | Imagens de produtos |
| `.product-title` | Serif, 3xl/4xl, bold, tracking-tight | Títulos de produtos |
| `.product-description` | Base/lg, muted-foreground, leading-relaxed | Descrições |
| `.product-price` | 2xl, semibold, accent color | Preços |
| `.cta-button` | Accent bg, padding, rounded, hover effects | Botões de ação |
| `.section-spacing` | py-16 md:py-24 | Espaçamento entre seções |
| `.elegant-separator` | Linha fina com gradient opacity | Separadores sutis |

**Fonts Importadas**:
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap');
```

---

## 🖼️ Imagens e Assets

### URLs das Imagens Geradas com IA

| Produto | URL | Dimensões | Uso |
|---------|-----|-----------|-----|
| Logo | `/manus-storage/logo-blessed_42182d02.png` | 1:1 | Header, footer |
| Hero | `/manus-storage/hero-doces_10aa207c.png` | 16:9 | Tela 1 background |
| Brigadeiros | `/manus-storage/brigadeiros-gourmet_36cca0ef.png` | 4:3 | Tela 4 |
| Beijinhos | `/manus-storage/beijinhos_8413e0bb.png` | 4:3 | Tela 2, 5 |
| Bombons | `/manus-storage/bombons-especiais_47905661.png` | 4:3 | Tela 6 |
| Casadinhos | `/manus-storage/casadinhos_955a6c65.png` | 4:3 | Tela 7 |
| Bolos | `/manus-storage/bolos-especiais_c0352dbc.png` | 4:3 | Tela 8 |

**Armazenamento**: Todas as imagens estão em `/manus-storage/` (CDN do Manus WebDev)

**Substituição de Imagens**: Para usar fotos reais:
1. Faça upload com `manus-upload-file --webdev path/to/image.png`
2. Copie a URL retornada
3. Substitua a URL no código correspondente

---

## 🔗 Links e CTAs

### WhatsApp
- **Número Principal**: (44) 99815-9745
- **Link**: `https://wa.me/44998159745`
- **Localização**: Telas 4-8 (botão de cada produto), Tela 10

### Instagram
- **Handle**: @blessedsabores.doces
- **Link**: `https://www.instagram.com/blessedsabores.doces/`
- **Localização**: Tela 10

---

## 📱 Responsividade

### Breakpoints Tailwind
- **Mobile**: < 640px (default)
- **Tablet**: 640px - 1023px (md)
- **Desktop**: ≥ 1024px (lg)

### Ajustes por Breakpoint

| Elemento | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| Título Principal | 32px | 40px | 48px |
| Subtítulo | 18px | 20px | 24px |
| Body | 14px | 15px | 16px |
| Padding Seção | py-12 | py-16 | py-24 |
| Navigation Dots | Hidden | Hidden | Visible (right-6) |
| Mobile Nav | Visible (bottom) | Visible (bottom) | Hidden |

### Estratégia Mobile-First
- Estilos base aplicados a mobile
- Modificadores `md:` e `lg:` para telas maiores
- Navegação adaptativa (dots desktop, botões mobile)

---

## 🚀 Como Desenvolver / Contribuir

### Setup Inicial

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Abrir em http://localhost:3000
```

### Estrutura de Desenvolvimento

**Para adicionar uma nova seção**:

1. Crie um novo objeto em `sections` array em `Home.tsx`
2. Defina o `id` único
3. Crie o componente JSX
4. Adicione a navegação (dots + botões mobile atualizarão automaticamente)

**Exemplo**:
```typescript
{
  id: "nova-secao",
  component: (
    <section className="min-h-screen bg-background section-spacing flex flex-col items-center justify-center px-6 md:px-12">
      {/* Seu conteúdo aqui */}
    </section>
  )
}
```

### Modificar Cores

1. Edite as variáveis CSS em `client/src/index.css`
2. Atualize `:root` e `.dark` sections
3. Reinicie o servidor

### Adicionar Novas Imagens

1. Gere ou obtenha a imagem
2. Faça upload: `manus-upload-file --webdev path/to/image.png`
3. Copie a URL retornada
4. Substitua no código

### Modificar Tipografia

1. Adicione nova font em `client/index.html` (Google Fonts)
2. Atualize as classes em `client/src/index.css`
3. Aplique com classes como `.serif-title` ou `.sans-body`

---

## 🧪 Testes e Validação

### Checklist de Qualidade

- [ ] Todas as imagens carregam corretamente
- [ ] Navegação funciona em desktop (dots) e mobile (botões)
- [ ] Links WhatsApp e Instagram abrem corretamente
- [ ] Responsividade em mobile (375px), tablet (768px), desktop (1280px)
- [ ] Contraste de texto atende WCAG AA
- [ ] Transições suaves (sem lag)
- [ ] Sem erros no console

### Performance

- **Imagens**: Otimizadas para web, comprimidas
- **CSS**: Tailwind purga estilos não utilizados
- **JavaScript**: Código-splitting automático com Vite
- **Fonts**: Google Fonts com `display=swap`

---

## 📝 Dados Editáveis

### Informações da Marca

```typescript
// Em Home.tsx, seção de contato
const brandInfo = {
  name: "Blessed Sabores Doces",
  tagline: "Sabor, elegância e carinho em cada detalhe",
  description: "Doces artesanais para festas, casamentos e momentos especiais",
  location: "Paranavaí e região",
  whatsapp: "(44) 99815-9745",
  whatsappLink: "https://wa.me/44998159745",
  instagram: "@blessedsabores.doces",
  instagramLink: "https://www.instagram.com/blessedsabores.doces/"
};
```

### Produtos e Preços

Cada tela de produto (4-8) pode ser editada diretamente no array `sections` em `Home.tsx`:

```typescript
{
  id: "brigadeiros",
  component: (
    <ProductSection
      image="/manus-storage/brigadeiros-gourmet_36cca0ef.png"
      title="Brigadeiros Gourmet"
      description="Descrição aqui..."
      prices={[
        { quantity: "Caixa 6 unidades", price: "R$ 24,90" },
        // ... mais preços
      ]}
    />
  )
}
```

---

## 🔄 Fluxo de Atualização

### Para Atualizar Conteúdo

1. Edite `client/src/pages/Home.tsx`
2. Modifique o array `sections` com as mudanças desejadas
3. Salve o arquivo
4. O servidor de desenvolvimento recarrega automaticamente (HMR)
5. Visualize em http://localhost:3000

### Para Atualizar Estilos

1. Edite `client/src/index.css` (variáveis CSS ou classes)
2. Ou edite Tailwind classes diretamente em componentes
3. Recarregamento automático via HMR

### Para Atualizar Imagens

1. Faça upload da nova imagem: `manus-upload-file --webdev path/to/image.png`
2. Copie a URL retornada
3. Substitua no código em `Home.tsx`
4. Recarregamento automático

---

## 🚢 Deploy

### Publicação

O projeto está configurado para deploy automático via Manus WebDev:

1. Crie um checkpoint: `webdev_save_checkpoint`
2. Clique no botão "Publish" na UI do Manus
3. Escolha domínio (auto-gerado ou customizado)
4. Site fica disponível publicamente

### Domínio Customizado

- Configure em Settings → Domains no Manus WebDev
- Suporta domínios próprios (CNAME)
- SSL automático

---

## 📚 Referências e Recursos

### Documentação Utilizada
- [React 19 Docs](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Wouter Router](https://github.com/molefrog/wouter)
- [Vite](https://vitejs.dev)

### Fonts
- [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) - Títulos elegantes
- [Poppins](https://fonts.google.com/specimen/Poppins) - Body text moderno

### Design Inspiration
- Luxury boutique websites
- Premium confectionery portfolios
- High-end restaurant menus

---

## 🤝 Contribuindo

### Padrões de Código

- **Componentes**: Functional components com hooks
- **Nomes**: camelCase para variáveis/funções, PascalCase para componentes
- **Estilos**: Tailwind classes, evitar CSS customizado quando possível
- **Comentários**: Explicar "por quê", não "o quê"

### Exemplo de Contribuição

```typescript
// ❌ Ruim: Sem contexto
const handleClick = () => setActiveSection(0);

// ✅ Bom: Claro e descritivo
const navigateToFirstSection = () => setActiveSection(0);

// ✅ Melhor: Com comentário explicativo
// Retorna à capa quando usuário clica no logo
const handleLogoClick = () => setActiveSection(0);
```

---

## 🐛 Troubleshooting

### Imagens não carregam
- Verifique se a URL está correta em `/manus-storage/`
- Certifique-se de que a imagem foi gerada/uploaded com sucesso
- Limpe o cache do navegador (Ctrl+Shift+Delete)

### Navegação não funciona
- Verifique se `activeSection` está entre 0 e `sections.length - 1`
- Confirme que os botões têm `onClick` handlers corretos
- Abra DevTools → Console para verificar erros

### Estilos não aplicam
- Verifique se as classes Tailwind estão corretas
- Reinicie o servidor: `pnpm dev`
- Limpe o cache: `rm -rf .next node_modules/.vite`

### Responsividade quebrada
- Teste em diferentes tamanhos de viewport
- Use DevTools → Toggle device toolbar (F12)
- Verifique breakpoints em `tailwind.config.js`

---

## 📞 Contato e Suporte

**Para dúvidas sobre o projeto**:
- Consulte este documento
- Revise o código em `client/src/pages/Home.tsx`
- Verifique `ideas.md` para filosofia de design

**Para suporte técnico do Manus WebDev**:
- Acesse https://help.manus.im

---

## 📄 Histórico de Versões

| Versão | Data | Descrição |
|--------|------|-----------|
| 1.0 | 2026-07-13 | Versão inicial com 10 telas, design premium, imagens geradas com IA |

---

**Última atualização**: 13 de julho de 2026

**Desenvolvido com ❤️ para Blessed Sabores Doces**
