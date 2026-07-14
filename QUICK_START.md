# Quick Start - Blessed Sabores Doces

Guia rápido para começar a trabalhar no projeto em 5 minutos.

---

## ⚡ Setup Inicial (2 minutos)

### 1. Instalar Dependências

```bash
cd blessed-sabores-doces-menu
pnpm install
```

### 2. Iniciar Servidor de Desenvolvimento

```bash
pnpm dev
```

Abra http://localhost:3000 no navegador.

### 3. Pronto!

O servidor está rodando com **Hot Module Replacement (HMR)** ativado. Qualquer mudança no código é refletida instantaneamente.

---

## 📁 Arquivos Principais

| Arquivo | Propósito |
|---------|-----------|
| `client/src/pages/Home.tsx` | Página principal com 10 seções |
| `client/src/index.css` | Estilos globais + variáveis de tema |
| `client/index.html` | HTML base + fonts |
| `ideas.md` | Filosofia de design |
| `PROJECT_DOCUMENTATION.md` | Documentação técnica completa |

---

## 🎯 Tarefas Comuns

### Adicionar um Novo Produto

1. Abra `client/src/pages/Home.tsx`
2. Localize o array `sections` (linha ~50)
3. Adicione novo objeto:

```typescript
{
  id: "novo-produto",
  component: (
    <ProductSection
      image="/manus-storage/novo-produto.png"
      title="Nome do Produto"
      description="Descrição..."
      prices={[
        { quantity: "Caixa 6", price: "R$ XX,XX" },
      ]}
    />
  )
}
```

4. Salve e veja a mudança em tempo real

### Mudar Cores

1. Abra `client/src/index.css`
2. Localize `:root` (linha ~45)
3. Modifique valores HEX:

```css
--primary: #d4af37;        /* Mude para outra cor */
--background: #1a1a1a;     /* Mude para outra cor */
```

4. Salve e veja a mudança em tempo real

### Atualizar Texto

1. Abra `client/src/pages/Home.tsx`
2. Localize o texto desejado
3. Modifique a string
4. Salve

---

## 🖼️ Adicionar Imagens

### Opção 1: Usar Imagens Geradas (Já Incluídas)

As imagens já estão geradas e prontas:

- `/manus-storage/brigadeiros-gourmet_36cca0ef.png`
- `/manus-storage/beijinhos_8413e0bb.png`
- `/manus-storage/bombons-especiais_47905661.png`
- `/manus-storage/casadinhos_955a6c65.png`
- `/manus-storage/bolos-especiais_c0352dbc.png`
- `/manus-storage/logo-blessed_42182d02.png`
- `/manus-storage/hero-doces_10aa207c.png`

### Opção 2: Fazer Upload de Novas Imagens

```bash
manus-upload-file --webdev path/to/your-image.png
```

Copie a URL retornada e use no código:

```typescript
<img src="/manus-storage/sua-imagem_abc123.png" alt="Descrição" />
```

---

## 🧪 Testar Mudanças

### Desktop

1. Abra http://localhost:3000
2. Clique nos dots de navegação (direita)
3. Verifique cada seção

### Mobile

1. Abra DevTools (F12)
2. Clique em "Toggle device toolbar" (Ctrl+Shift+M)
3. Escolha um dispositivo (iPhone 12, etc)
4. Use botões anterior/próximo

### Responsividade

Teste em 3 tamanhos:
- **Mobile**: 375px
- **Tablet**: 768px
- **Desktop**: 1280px

---

## 🔗 Links Importantes

| Link | Propósito |
|------|-----------|
| http://localhost:3000 | Site local |
| `client/src/pages/Home.tsx` | Código principal |
| `client/src/index.css` | Estilos |
| `ideas.md` | Design philosophy |
| `PROJECT_DOCUMENTATION.md` | Docs completas |

---

## 📋 Checklist Antes de Publicar

- [ ] Todas as imagens carregam
- [ ] Navegação funciona (desktop + mobile)
- [ ] Links WhatsApp/Instagram abrem
- [ ] Sem erros no console
- [ ] Responsividade OK em 3+ tamanhos
- [ ] Texto tem contraste adequado

---

## 🚀 Publicar o Site

### 1. Criar Checkpoint

```bash
# No Manus WebDev UI
webdev_save_checkpoint
```

### 2. Publicar

1. Clique no botão "Publish" (canto superior direito)
2. Escolha domínio (auto ou customizado)
3. Clique "Publish"
4. Site fica público em ~2 minutos

---

## 🆘 Troubleshooting Rápido

| Problema | Solução |
|----------|---------|
| Servidor não inicia | `pnpm install` e `pnpm dev` novamente |
| Mudanças não aparecem | Limpe cache (Ctrl+Shift+Delete) |
| Imagens não carregam | Verifique URL em `/manus-storage/` |
| Cores erradas | Reinicie servidor (`pnpm dev`) |
| Navegação quebrada | Verifique `activeSection` em console |

---

## 📚 Próximos Passos

1. **Leia** `PROJECT_DOCUMENTATION.md` para entender a arquitetura
2. **Revise** `ideas.md` para filosofia de design
3. **Explore** `CONTRIBUTING.md` para contribuições
4. **Consulte** `ARCHITECTURE.md` para detalhes técnicos

---

## 💡 Dicas Rápidas

- Use `pnpm format` para formatar código
- Use `pnpm check` para verificar erros TypeScript
- Mantenha o servidor rodando enquanto desenvolve
- Teste em mobile frequentemente
- Não altere `server/` (backend não é necessário)

---

**Pronto para começar? Execute `pnpm dev` e abra http://localhost:3000!** 🚀
