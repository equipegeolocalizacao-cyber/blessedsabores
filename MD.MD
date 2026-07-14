Abaixo está um roadmap de implementação, em ordem de prioridade, já escrito para ser entregue ao programador.

FASE 01 — Melhorias na apresentação inicial
Objetivo

Melhorar a experiência da primeira impressão sem alterar a lógica do sistema.

Alterações
Alterar o texto principal para destacar que é um catálogo de doces para encomenda.
Adicionar uma foto grande de uma mesa montada antes do cardápio.
Inserir um bloco informativo antes das categorias contendo:
Todos os doces são produzidos artesanalmente.

✔ Produção sob encomenda

✔ Ingredientes selecionados

✔ Consulte disponibilidade da data

✔ Entrega em Paranavaí e região
Critérios de teste
Layout continua responsivo.
Foto não distorce.
Texto permanece legível no celular.
Não altera a navegação existente.
FASE 02 — Melhorar as categorias
Objetivo

Eliminar a sensação de "Parte 1 de 5".

Alterações

Trocar os nomes atuais por:

🍫 Doces Tradicionais

👑 Doces Premium

🍬 Bombons

🎂 Bolos

⭐ Todos os Produtos

Criar links diretos para cada categoria.

Ao clicar, o usuário deve ir diretamente para o primeiro produto daquela categoria.

Critérios de teste
Todos os botões funcionam.
Scroll continua funcionando normalmente.
Botão voltar continua correto.
FASE 03 — Melhorar os cards dos produtos
Objetivo

Facilitar a leitura.

Alterações

Substituir

R$140

por

Cento • R$ 140

Adicionar abaixo do nome:

Sabores:

• Tradicional

• Meio Amargo

• Ninho

• Churros

(onde existir)

Adicionar um selo quando necessário.

Exemplo:

Mais vendido

Favorito

Premium
Critérios de teste
Cards continuam com mesma altura.
Fotos continuam alinhadas.
Não quebra em telas pequenas.
FASE 04 — Botão "Adicionar ao Pedido"
Objetivo

Substituir o envio direto para WhatsApp.

Alterações

Adicionar em todos os produtos:

[Adicionar ao Pedido]

Ainda NÃO criar o carrinho.

Ao clicar apenas mostrar:

Produto adicionado.
Critérios de teste
Botão funciona.
Feedback aparece.
Não envia WhatsApp.
FASE 05 — Controle de quantidade
Objetivo

Permitir escolher quantos centos deseja.

Alterações

Adicionar em cada produto:

Quantidade

[-]

1 cento

[+]

ou

Quantidade

▼

1

2

3

4

5

Outro
Critérios

Quantidade nunca menor que 1.

FASE 06 — Criar Carrinho
Objetivo

Guardar vários produtos.

Alterações

Criar estrutura:

Pedido

Produto

Quantidade

Valor

Subtotal

Adicionar:

Adicionar

Remover

Editar quantidade

Excluir

Persistir apenas durante a navegação (estado da aplicação).

Ainda não usar LocalStorage.

Critérios

Adicionar vários produtos.

Excluir.

Alterar quantidade.

Total atualizado.

FASE 07 — Barra inferior fixa
Objetivo

Mostrar resumo do pedido.

Sempre visível.

Exemplo

🛒

3 itens

R$425

Ver Pedido

Ao clicar abre o carrinho.

Critérios

Atualiza automaticamente.

FASE 08 — Tela do Pedido

Criar página/modal:

Meu Pedido

Itens

Quantidade

Subtotal

Total

Botões

Continuar Comprando

Limpar Pedido

Enviar para WhatsApp

Critérios

Total correto.

FASE 09 — Dados do cliente

Antes do WhatsApp.

Solicitar:

Nome

Telefone

Data do evento

Cidade

Observações
Critérios

Campos opcionais.

FASE 10 — Integração com WhatsApp

Montar automaticamente:

Olá!

Gostaria de fazer um orçamento.

Nome:

Telefone:

Cidade:

Data do evento:

Itens:

• Brigadeiro
2 centos

• Casadinho
1 cento

• Bombom
3 centos

Observações:

Total estimado:
R$785

Obrigado.

Abrir:

https://wa.me/...

com texto codificado.

Critérios

Mensagem correta.

Caracteres especiais funcionando.

FASE 11 — Busca

Adicionar:

🔍 Buscar doce...

Filtrar em tempo real.

Critérios

Buscar:

Briga

Retorna:

Brigadeiro

Brigadeiro Ninho

FASE 12 — Filtros

Criar:

Todos

Tradicionais

Premium

Bombons

Bolos
Critérios

Filtro instantâneo.

FASE 13 — Produtos relacionados

Ao abrir:

Brigadeiro

Mostrar:

Clientes também pediram

Beijinho

Casadinho

Cajuzinho
Critérios

Apenas sugestão visual.

FASE 14 — Informações finais

Adicionar antes do contato.

Como fazer seu pedido

1️⃣ Escolha seus doces.

2️⃣ Informe as quantidades.

3️⃣ Revise seu pedido.

4️⃣ Envie pelo WhatsApp.

5️⃣ Receba seu orçamento.

Depois:

✔ Faça seu pedido com antecedência.

✔ Consulte disponibilidade da data.

✔ Entrega em Paranavaí e região.
FASE 15 — Refinamento visual

Somente depois de tudo funcionando.

Melhorar:

animações
transições
carregamento
espaçamentos
responsividade
performance
acessibilidade
otimização de imagens
FASE 16 — Revisão técnica completa

Antes da publicação, realizar uma revisão abrangente:

Verificar funcionamento em Android, iPhone, tablets e desktop.
Testar Chrome, Safari, Edge e Firefox.
Confirmar que todos os links, botões e atalhos funcionam.
Validar o fluxo completo do pedido, desde a seleção dos produtos até o envio para o WhatsApp.
Revisar mensagens de erro e estados vazios.
Confirmar que o layout permanece consistente em diferentes tamanhos de tela.
Otimizar imagens e garantir bom tempo de carregamento.
Revisar o código para remover duplicações, componentes não utilizados e possíveis vazamentos de estado.
Verificar acessibilidade básica (contraste, foco por teclado, áreas de toque).
Executar testes de regressão para garantir que alterações anteriores continuem funcionando.
Regra para todas as fases

Cada fase deve ser concluída seguindo este ciclo:

Implementar apenas as alterações previstas para a fase atual.
Corrigir todos os erros encontrados.
Validar o funcionamento em desktop e dispositivos móveis.
Confirmar que nenhuma funcionalidade existente foi afetada.
Somente após a aprovação da fase iniciar a próxima.

Essa abordagem incremental tornará o projeto mais estável, facilitará a identificação de problemas e permitirá validar continuamente a experiência do usuário antes de adicionar novas funcionalidades.