# Arquitetura Técnica - Blessed Sabores Doces

Documentação detalhada da arquitetura, fluxos de dados e componentes do projeto.

---

## 🏗️ Visão Geral da Arquitetura

```
┌─────────────────────────────────────────────────────────────┐
│                    BLESSED SABORES DOCES                    │
│                   Premium Menu Website                      │
└─────────────────────────────────────────────────────────────┘
                              │
                ┌─────────────┴─────────────┐
                │                           │
        ┌───────▼────────┐         ┌───────▼────────┐
        │   Frontend     │         │   Static CDN   │
        │   (React 19)   │         │   (Manus)      │
        └────────────────┘         └────────────────┘
                │                           │
        ┌───────▼────────────────────────────▼──────┐
        │      Tailwind CSS + shadcn/ui             │
        │      Theme: Dark (Preto + Dourado)        │
        └───────────────────────────────────────────┘
                              │
        ┌─────────────────────┴─────────────────────┐
        │                                           │
    ┌───▼────┐  ┌────────┐  ┌──────────┐  ┌──────▼────┐
    │ Router │  │ Pages  │  │Components│  │ Contexts  │
    │(Wouter)│  │(Home)  │  │(UI)      │  │(Theme)    │
    └────────┘  └────────┘  └──────────┘  └───────────┘
```

---

## 📊 Fluxo de Dados

### Navegação Entre Seções

```
User Action
    │
    ├─ Click Navigation Dot (Desktop)
    │  └─ setActiveSection(index)
    │
    ├─ Click "Próximo" Button (Mobile)
    │  └─ setActiveSection(activeSection + 1)
    │
    └─ Click Product Card (Menu)
       └─ setActiveSection(targetIndex)
           │
           ▼
    Update State: activeSection = newIndex
           │
           ▼
    Re-render Home Component
           │
           ▼
    Apply Transform: translateY(-${activeSection * 100}vh)
           │
           ▼
    CSS Transition (500ms)
           │
           ▼
    Section Visible to User
```

### Fluxo de Imagens

```
Image Generation (AI)
    │
    ├─ Prompt: "Premium brigadeiros..."
    │
    ▼
Manus Image Generation Service
    │
    ├─ Generate 5 product images
    ├─ Generate logo
    ├─ Generate hero image
    │
    ▼
Reserved URLs Created
    │
    ├─ /manus-storage/brigadeiros-gourmet_36cca0ef.png
    ├─ /manus-storage/beijinhos_8413e0bb.png
    ├─ /manus-storage/bombons-especiais_47905661.png
    ├─ /manus-storage/casadinhos_955a6c65.png
    ├─ /manus-storage/bolos-especiais_c0352dbc.png
    ├─ /manus-storage/logo-blessed_42182d02.png
    └─ /manus-storage/hero-doces_10aa207c.png
           │
           ▼
    URLs Referenced in JSX
           │
           ▼
    Browser Fetches from CDN
           │
           ▼
    Image Rendered on Page
```

### Fluxo de Interação - CTA WhatsApp

```
User Clicks "Solicitar Orçamento via WhatsApp"
    │
    ▼
<a href="https://wa.me/44998159745" target="_blank">
    │
    ▼
Browser Opens WhatsApp Link
    │
    ├─ Desktop: Abre WhatsApp Web
    ├─ Mobile: Abre App WhatsApp
    │
    ▼
Conversation Started with Business
```

---

## 🗂️ Estrutura de Componentes

### Hierarquia de Componentes

```
App (ThemeProvider + Router)
  │
  ├─ ThemeProvider (dark theme)
  │
  ├─ TooltipProvider
  │
  └─ Router (Wouter)
      │
      └─ Route "/"
          │
          └─ Home Component
              │
              ├─ Navigation Dots (Desktop)
              │
              ├─ Sections Container
              │  │
              │  ├─ Section 1: Cover
              │  ├─ Section 2: About
              │  ├─ Section 3: Menu
              │  ├─ Section 4-8: Products (ProductSection)
              │  ├─ Section 9: How to Order
              │  └─ Section 10: Contact
              │
              └─ Mobile Navigation (Bottom)
```

### ProductSection - Componente Reutilizável

```
ProductSection
├─ Props:
│  ├─ image: string (URL)
│  ├─ title: string
│  ├─ description: string
│  ├─ prices: Array<{quantity, price}>
│  └─ customText?: string
│
├─ Render:
│  ├─ <img> (product-image class)
│  ├─ <h2> (product-title class)
│  ├─ <p> (product-description class)
│  ├─ <div> (prices box)
│  │  └─ Map over prices array
│  ├─ <p> (customText if provided)
│  └─ <a> (WhatsApp CTA button)
│
└─ Styling:
   └─ Tailwind classes + custom CSS classes
```

---

## 🎨 Sistema de Temas

### Implementação de Tema

```
ThemeProvider (contexts/ThemeContext.tsx)
  │
  ├─ defaultTheme: "dark"
  │
  └─ CSS Variables (client/src/index.css)
      │
      ├─ :root (Light theme - não usado)
      │
      └─ .dark (Dark theme - ativo)
          │
          ├─ --background: #1a1a1a
          ├─ --foreground: #f5f5f5
          ├─ --accent: #d4af37
          ├─ --card: #242424
          ├─ --secondary: #e8dcc8
          ├─ --muted: #3a3a3a
          ├─ --muted-foreground: #b0b0b0
          └─ ... (mais 10+ variáveis)
```

### Fluxo de Aplicação de Cores

```
Tailwind Class (e.g., bg-background)
    │
    ▼
Tailwind Maps to CSS Variable (--background)
    │
    ▼
CSS Variable Resolves to Hex Value (#1a1a1a)
    │
    ▼
Browser Applies Color to Element
```

---

## 📱 Responsividade

### Breakpoints e Estratégia

```
Mobile First Approach
    │
    ├─ Base Styles (< 640px)
    │  └─ Single column, large touch targets
    │
    ├─ md: (640px - 1023px)
    │  └─ Adjusted spacing, larger fonts
    │
    └─ lg: (≥ 1024px)
       └─ Full desktop experience, navigation dots
```

### Exemplo de Responsividade

```typescript
// Título que muda tamanho
<h2 className="text-3xl md:text-4xl lg:text-5xl">
  Brigadeiros Gourmet
</h2>

// Navegação que muda
Desktop:  Navigation Dots (fixed right, hidden md:flex)
Mobile:   Bottom Buttons (fixed bottom, md:hidden)

// Padding que muda
<section className="px-6 md:px-12 lg:px-16">
  Conteúdo
</section>
```

---

## 🔄 Ciclo de Vida do Componente

### Home Component Lifecycle

```
1. MOUNT
   ├─ useState(0) → activeSection = 0
   ├─ Create sections array (10 items)
   └─ Render initial state (Section 0 - Cover)

2. RENDER
   ├─ Map sections array
   ├─ Apply transform based on activeSection
   ├─ Render navigation (dots + buttons)
   └─ Display current section

3. USER INTERACTION
   ├─ Click dot / button
   ├─ Call setActiveSection(newIndex)
   ├─ Trigger re-render
   └─ Apply CSS transition

4. TRANSITION
   ├─ CSS transform: translateY(-${activeSection * 100}vh)
   ├─ Duration: 500ms
   ├─ Easing: ease-out
   └─ Section slides into view

5. UNMOUNT
   └─ Component cleaned up (if navigating away)
```

---

## 🚀 Performance Otimizations

### Estratégias Implementadas

| Otimização | Implementação | Benefício |
|------------|---------------|-----------|
| **GPU Acceleration** | Usar `transform` em animações | Transições suaves, sem lag |
| **CSS Variables** | Tema definido em CSS, não JS | Sem re-renders desnecessários |
| **Lazy Loading** | `loading="lazy"` em imagens | Carregamento mais rápido |
| **Code Splitting** | Vite automático | Bundles menores |
| **Font Optimization** | `display=swap` Google Fonts | Texto visível enquanto fonts carregam |
| **Tailwind Purge** | Apenas classes usadas no build | CSS mais leve |

### Exemplo - Transform vs Top/Left

```typescript
// ❌ Ruim: Causa layout recalculation
style={{ top: `${activeSection * 100}%` }}

// ✅ Bom: GPU-accelerated, suave
style={{ transform: `translateY(-${activeSection * 100}vh)` }}
```

---

## 🔐 Segurança

### Considerações de Segurança

| Aspecto | Implementação | Risco |
|--------|---------------|-------|
| **Links Externos** | `target="_blank" rel="noopener noreferrer"` | Previne acesso ao `window.opener` |
| **Inputs** | Nenhum (site estático) | Baixo risco |
| **APIs** | Nenhuma (site estático) | Sem backend vulnerável |
| **Secrets** | Nenhum (site estático) | Sem credenciais expostas |
| **HTTPS** | Automático via Manus | Dados criptografados |

---

## 🧪 Fluxo de Testes

### Testes Manuais Recomendados

```
1. NAVEGAÇÃO
   ├─ Desktop: Clique em cada dot
   ├─ Mobile: Use botões anterior/próximo
   └─ Verifique transições suaves

2. RESPONSIVIDADE
   ├─ 375px (Mobile)
   ├─ 768px (Tablet)
   └─ 1280px (Desktop)

3. IMAGENS
   ├─ Todas carregam?
   ├─ Qualidade adequada?
   └─ Sem distorção?

4. LINKS
   ├─ WhatsApp abre corretamente?
   ├─ Instagram abre corretamente?
   └─ Links internos funcionam?

5. ACESSIBILIDADE
   ├─ Navegação por teclado (Tab)?
   ├─ Contraste de texto adequado?
   └─ Alt text em imagens?
```

---

## 📦 Dependências Principais

### Frontend Dependencies

```json
{
  "react": "^19.2.1",                    // Framework UI
  "react-dom": "^19.2.1",                // React DOM rendering
  "wouter": "^3.3.5",                    // Client-side routing
  "tailwindcss": "^4.1.14",              // Utility-first CSS
  "@radix-ui/*": "^1.x",                 // Headless UI components
  "lucide-react": "^0.453.0",            // Icon library
  "framer-motion": "^12.23.22",          // Animation library
  "sonner": "^2.0.7"                     // Toast notifications
}
```

### Dev Dependencies

```json
{
  "vite": "^7.1.7",                      // Build tool
  "typescript": "5.6.3",                 // Type safety
  "tailwindcss": "^4.1.14",              // CSS framework
  "@tailwindcss/vite": "^4.1.3",         // Vite plugin
  "prettier": "^3.6.2",                  // Code formatter
  "tsx": "^4.19.1"                       // TypeScript executor
}
```

---

## 🔄 Build e Deploy

### Build Process

```
pnpm build
    │
    ├─ Vite compiles TypeScript
    ├─ Tailwind generates CSS
    ├─ React components bundled
    ├─ Assets optimized
    │
    ▼
dist/ folder created
    │
    ├─ dist/index.html
    ├─ dist/assets/
    │  ├─ main.js (bundled React)
    │  └─ style.css (Tailwind)
    │
    ▼
Ready for deployment
```

### Deployment to Manus

```
1. Create Checkpoint
   └─ webdev_save_checkpoint

2. Click Publish Button
   └─ Manus UI

3. Choose Domain
   ├─ Auto-generated: xxx.manus.space
   └─ Custom: your-domain.com

4. Site Live
   └─ Accessible globally via HTTPS
```

---

## 🐛 Debugging

### Ferramentas de Debug

| Ferramenta | Uso |
|-----------|-----|
| **Chrome DevTools** | Inspecionar elementos, console, network |
| **React DevTools** | Inspecionar componentes, props, state |
| **Tailwind IntelliSense** | VS Code, autocomplete de classes |
| **TypeScript Checker** | `pnpm check` para erros de tipo |
| **Vite HMR** | Hot Module Replacement automático |

### Erros Comuns

| Erro | Causa | Solução |
|-----|-------|--------|
| Imagens não carregam | URL incorreta | Verifique `/manus-storage/` |
| Navegação não funciona | activeSection fora de range | Verifique array length |
| Cores erradas | CSS variables não aplicadas | Reinicie servidor |
| Texto invisível | Contraste baixo | Ajuste cores em index.css |
| Lag ao navegar | Animação pesada | Use transform/opacity |

---

## 📈 Escalabilidade

### Como Escalar o Projeto

#### Adicionar Mais Produtos

Atual: 5 produtos (Brigadeiros, Beijinhos, Bombons, Casadinhos, Bolos)

Futuro: Adicionar mais categorias

```typescript
// Basta adicionar novo objeto ao array sections
{
  id: "novo-produto",
  component: <ProductSection {...props} />
}
```

#### Adicionar Backend

Se precisar de formulário de contato, pagamentos, etc:

```bash
webdev_add_feature web-db-user
```

Isso adiciona:
- Express backend
- Database (PostgreSQL)
- User authentication
- API routes
- File storage

#### Adicionar E-commerce

Se precisar de carrinho, checkout, pagamentos:

```bash
webdev_add_feature stripe
# ou
webdev_add_feature shopify
```

---

## 📚 Referências Técnicas

### Documentação Oficial

- [React 19 Docs](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Wouter Router](https://github.com/molefrog/wouter)
- [Vite](https://vitejs.dev)
- [TypeScript](https://www.typescriptlang.org)

### Padrões Utilizados

- **Component-Based Architecture**: Componentes reutilizáveis
- **Functional Components**: Hooks em vez de class components
- **CSS-in-JS (Tailwind)**: Utility-first CSS framework
- **Client-Side Routing**: Navegação sem page reload
- **Responsive Design**: Mobile-first approach

---

## 🔮 Roadmap Futuro

### Possíveis Melhorias

1. **Galeria de Trabalhos Anteriores**
   - Adicionar seção com fotos de eventos realizados
   - Carousel ou grid de imagens

2. **Formulário de Contato**
   - Upgrade para web-db-user
   - Receber pedidos diretamente no site

3. **Sistema de Avaliações**
   - Depoimentos de clientes
   - Ratings e reviews

4. **Blog/Notícias**
   - Artigos sobre confeitaria
   - Dicas e receitas

5. **E-commerce Integrado**
   - Carrinho de compras
   - Checkout online
   - Pagamentos com Stripe/Shopify

6. **Dark Mode Toggle**
   - Permitir usuário escolher tema
   - Persistir preferência em localStorage

7. **Multilíngue**
   - Suporte a português, inglês, espanhol

---

**Última atualização**: 13 de julho de 2026

**Desenvolvido com ❤️ para Blessed Sabores Doces**
