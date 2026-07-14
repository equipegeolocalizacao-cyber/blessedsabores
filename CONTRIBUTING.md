# Guia de Contribuição - Blessed Sabores Doces

Este documento fornece instruções detalhadas para desenvolvedores e IAs que desejam contribuir ao projeto do cardápio premium da Blessed Sabores Doces.

---

## 📖 Antes de Começar

Leia os seguintes documentos para entender o projeto:

1. **PROJECT_DOCUMENTATION.md** - Documentação técnica completa
2. **ideas.md** - Filosofia de design e diretrizes visuais
3. **README.md** (template) - Stack tecnológico e estrutura

---

## 🎯 Tipos de Contribuições

### 1. Adicionar Novos Produtos

**Objetivo**: Expandir o cardápio com novos itens

**Passos**:

1. **Prepare a imagem do produto**
   - Resolução: Mínimo 1200x900px (4:3)
   - Formato: PNG ou JPG
   - Estilo: Fotografia profissional, iluminação premium, fundo limpo

2. **Faça upload da imagem**
   ```bash
   manus-upload-file --webdev path/to/product-image.png
   ```
   - Copie a URL retornada (ex: `/manus-storage/produto_abc123.png`)

3. **Adicione à seção de produtos em `Home.tsx`**
   ```typescript
   {
     id: "novo-produto",
     component: (
       <ProductSection
         image="/manus-storage/novo-produto_abc123.png"
         title="Nome do Novo Produto"
         description="Descrição curta e atraente do produto..."
         prices={[
           { quantity: "Caixa 6 unidades", price: "R$ XX,XX" },
           { quantity: "Caixa 12 unidades", price: "R$ XX,XX" },
           { quantity: "Cento", price: "R$ XXX,XX" },
         ]}
       />
     )
   }
   ```

4. **Atualize o menu (Tela 3)**
   - Adicione o novo item ao array de categorias
   - Mantenha os ícones consistentes (emoji + nome)

5. **Teste a navegação**
   - Verifique se o novo produto aparece no menu
   - Confirme que o link para WhatsApp funciona

---

### 2. Modificar Cores e Tema

**Objetivo**: Ajustar a paleta de cores ou tema visual

**Arquivo Principal**: `client/src/index.css`

**Variáveis CSS Disponíveis**:

```css
:root {
  --primary: #d4af37;              /* Cor primária (dourado) */
  --background: #1a1a1a;           /* Fundo (preto) */
  --foreground: #f5f5f5;           /* Texto (off-white) */
  --card: #242424;                 /* Cards (cinza escuro) */
  --accent: #d4af37;               /* Acentos (dourado) */
  --secondary: #e8dcc8;            /* Secundária (bege) */
  --muted: #3a3a3a;                /* Muted (cinza) */
  --muted-foreground: #b0b0b0;     /* Muted text (cinza claro) */
  --border: #3a3a3a;               /* Borders (cinza) */
}
```

**Como Modificar**:

1. Edite os valores HEX em `:root` (linhas 45-60)
2. Mantenha a mesma estrutura em `.dark` (linhas 62-80)
3. Reinicie o servidor: `pnpm dev`
4. Visualize em http://localhost:3000

**Exemplo - Mudar cor primária de dourado para prata**:

```css
:root {
  --primary: #c0c0c0;              /* Prata */
  --accent: #c0c0c0;               /* Prata */
  /* ... resto das cores */
}
```

**⚠️ Importante**: Mantenha contraste suficiente entre `--background` e `--foreground` para acessibilidade (WCAG AA).

---

### 3. Atualizar Tipografia

**Objetivo**: Mudar fonts ou tamanhos de texto

**Arquivo Principal**: `client/src/index.css`

**Fonts Atuais**:
- **Títulos**: Playfair Display (serif)
- **Body**: Poppins (sans-serif)

**Para Mudar Fonts**:

1. **Adicione nova font em `client/index.html`**:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=NovaFont:wght@400;700&display=swap" rel="stylesheet" />
   ```

2. **Atualize `client/src/index.css`**:
   ```css
   body {
     font-family: 'NovaFont', sans-serif;
   }
   
   h1, h2, h3, h4, h5, h6 {
     font-family: 'NovaFont', serif;
   }
   ```

3. **Atualize classes customizadas** (se necessário):
   ```css
   .serif-title {
     font-family: 'NovaFont', serif;
   }
   ```

**Para Mudar Tamanhos**:

Em `Home.tsx`, modifique as classes Tailwind:

```typescript
// Antes
<h2 className="serif-title text-4xl md:text-5xl">Título</h2>

// Depois (maior)
<h2 className="serif-title text-5xl md:text-6xl">Título</h2>

// Depois (menor)
<h2 className="serif-title text-3xl md:text-4xl">Título</h2>
```

---

### 4. Adicionar Novas Seções

**Objetivo**: Criar uma página/seção completamente nova

**Exemplo - Adicionar "Galeria de Trabalhos Anteriores"**:

1. **Crie o componente**:
   ```typescript
   // Em Home.tsx, dentro do array sections
   {
     id: "gallery",
     component: (
       <section className="min-h-screen bg-background section-spacing flex flex-col items-center justify-center px-6 md:px-12">
         <div className="max-w-4xl">
           <h2 className="serif-title text-4xl md:text-5xl text-foreground mb-12 text-center">
             Trabalhos Anteriores
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {/* Adicione cards de imagens aqui */}
           </div>
         </div>
       </section>
     )
   }
   ```

2. **Adicione imagens**:
   - Faça upload: `manus-upload-file --webdev image1.png image2.png`
   - Use as URLs retornadas

3. **Atualize a navegação**:
   - O número de dots e botões se ajusta automaticamente
   - Não precisa modificar nada, apenas adicionar ao array `sections`

4. **Teste**:
   - Verifique se a nova seção aparece na navegação
   - Confirme a responsividade em mobile e desktop

---

### 5. Modificar Conteúdo de Texto

**Objetivo**: Atualizar textos, descrições ou taglines

**Arquivo Principal**: `client/src/pages/Home.tsx`

**Locais Principais**:

| Seção | Localização | Exemplo |
|-------|-------------|---------|
| Tagline | Tela 1 | "Sabor, elegância e carinho em cada detalhe" |
| Descrição | Tela 1 | "Doces artesanais para festas..." |
| Título Produto | Telas 4-8 | "Brigadeiros Gourmet" |
| Descrição Produto | Telas 4-8 | "Pequenas experiências de sabor..." |
| CTA Button | Telas 4-8 | "Solicitar Orçamento via WhatsApp" |

**Como Editar**:

1. Abra `client/src/pages/Home.tsx`
2. Localize o texto desejado
3. Modifique mantendo a estrutura JSX
4. Salve e visualize em http://localhost:3000

**Exemplo**:
```typescript
// Antes
<p className="text-lg md:text-xl text-accent mb-6 font-light tracking-wide">
  Sabor, elegância e carinho em cada detalhe
</p>

// Depois
<p className="text-lg md:text-xl text-accent mb-6 font-light tracking-wide">
  Qualidade, sofisticação e amor em cada criação
</p>
```

---

### 6. Adicionar Funcionalidades Interativas

**Objetivo**: Adicionar recursos como modais, formulários, animações

**Exemplo - Adicionar Modal de Contato**:

1. **Importe componentes necessários**:
   ```typescript
   import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
   import { Button } from "@/components/ui/button";
   import { Input } from "@/components/ui/input";
   ```

2. **Adicione estado**:
   ```typescript
   const [isContactOpen, setIsContactOpen] = useState(false);
   ```

3. **Crie o componente**:
   ```typescript
   <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
     <DialogContent className="bg-card border-border">
       <DialogHeader>
         <DialogTitle className="text-foreground">Entre em Contato</DialogTitle>
       </DialogHeader>
       {/* Formulário aqui */}
     </DialogContent>
   </Dialog>
   ```

4. **Adicione trigger**:
   ```typescript
   <Button onClick={() => setIsContactOpen(true)}>
     Abrir Contato
   </Button>
   ```

---

### 7. Otimizar Performance

**Objetivo**: Melhorar velocidade de carregamento

**Checklist**:

- [ ] **Imagens**: Comprimir com TinyPNG ou similar
- [ ] **Lazy Loading**: Adicionar `loading="lazy"` em imagens abaixo do fold
- [ ] **Code Splitting**: Usar `React.lazy()` para componentes grandes
- [ ] **CSS**: Verificar se Tailwind está purgando estilos não utilizados
- [ ] **Fonts**: Usar `display=swap` no Google Fonts (já configurado)

**Exemplo - Lazy Loading**:
```typescript
<img 
  src="/manus-storage/image.png" 
  alt="Descrição"
  loading="lazy"
  className="product-image"
/>
```

---

### 8. Melhorar Acessibilidade

**Objetivo**: Tornar o site acessível para todos

**Checklist**:

- [ ] **Alt Text**: Todas as imagens têm `alt` descritivo
- [ ] **Contraste**: Texto tem contraste mínimo 4.5:1 (WCAG AA)
- [ ] **Keyboard Navigation**: Todos os botões são acessíveis via Tab
- [ ] **Focus Rings**: Elementos focados têm indicador visual
- [ ] **Semantic HTML**: Usar `<button>`, `<a>`, `<section>` apropriadamente
- [ ] **ARIA Labels**: Adicionar quando necessário

**Exemplo - Melhorar Alt Text**:
```typescript
// ❌ Ruim
<img src="image.png" alt="imagem" />

// ✅ Bom
<img src="image.png" alt="Brigadeiros gourmet em apresentação elegante" />
```

---

## 🔧 Ferramentas e Comandos

### Desenvolvimento

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Preview do build
pnpm preview

# Verificar tipos TypeScript
pnpm check

# Formatar código
pnpm format
```

### Upload de Imagens

```bash
# Upload único
manus-upload-file --webdev path/to/image.png

# Upload múltiplo
manus-upload-file --webdev image1.png image2.png image3.png
```

### Git (se aplicável)

```bash
# Ver status
git status

# Adicionar mudanças
git add .

# Commit
git commit -m "Descrição clara da mudança"

# Push
git push origin main
```

---

## 📋 Checklist de Qualidade

Antes de considerar uma contribuição completa, verifique:

### Código
- [ ] Sem erros TypeScript (`pnpm check`)
- [ ] Sem console errors/warnings
- [ ] Código formatado (`pnpm format`)
- [ ] Nomes de variáveis/funções claros
- [ ] Comentários explicativos onde necessário

### Design
- [ ] Consistente com filosofia de design (ideas.md)
- [ ] Paleta de cores respeitada
- [ ] Tipografia adequada
- [ ] Espaçamento generoso
- [ ] Sem elementos "fora de lugar"

### Funcionalidade
- [ ] Todos os links funcionam
- [ ] Navegação suave entre seções
- [ ] Responsividade em 3+ tamanhos
- [ ] Imagens carregam corretamente
- [ ] CTAs levam ao destino correto

### Performance
- [ ] Sem lag ao navegar
- [ ] Imagens otimizadas
- [ ] Transições suaves
- [ ] Carregamento rápido

### Acessibilidade
- [ ] Contraste de texto adequado
- [ ] Alt text em imagens
- [ ] Navegação por teclado funciona
- [ ] Sem erros de acessibilidade

---

## 🚀 Processo de Submissão

1. **Faça as mudanças** no código
2. **Teste localmente**: `pnpm dev` e verifique em http://localhost:3000
3. **Verifique qualidade**: Execute checklist acima
4. **Crie checkpoint**: `webdev_save_checkpoint`
5. **Documente mudanças**: Atualize este arquivo se necessário
6. **Comunique**: Descreva as mudanças claramente

---

## 🐛 Reportando Issues

Se encontrar um bug ou problema:

1. **Descreva o problema** claramente
2. **Forneça passos para reproduzir**
3. **Indique navegador/dispositivo** usado
4. **Anexe screenshots** se relevante
5. **Sugira solução** se tiver ideia

---

## 💡 Dicas para Contribuidores

### Mantendo Consistência

- Sempre consulte `ideas.md` para decisões de design
- Use as classes customizadas em `index.css` em vez de criar novas
- Mantenha a estrutura de componentes reutilizáveis
- Não altere o tema sem discussão prévia

### Performance

- Prefira `transform` e `opacity` para animações (GPU-accelerated)
- Use `lazy` loading para imagens abaixo do fold
- Minimize re-renders com `useMemo` e `useCallback` quando necessário

### Segurança

- Nunca commite credenciais ou secrets
- Valide dados de entrada (se houver formulários)
- Use HTTPS para links externos

### Documentação

- Atualize este arquivo se adicionar novos processos
- Adicione comentários em código complexo
- Mantenha README.md atualizado

---

## 📞 Suporte

**Dúvidas sobre desenvolvimento?**
- Revise PROJECT_DOCUMENTATION.md
- Consulte ideas.md para filosofia de design
- Verifique código existente para exemplos

**Dúvidas sobre Manus WebDev?**
- Acesse https://help.manus.im
- Consulte documentação oficial do Manus

---

## 📜 Licença

Este projeto é parte da Blessed Sabores Doces. Todas as contribuições devem estar alinhadas com os objetivos da marca.

---

**Obrigado por contribuir! 🎉**

Suas melhorias ajudam a tornar o cardápio premium da Blessed Sabores Doces ainda melhor.
