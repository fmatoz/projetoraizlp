# Projeto Raiz

Landing page estática em React, TypeScript e Vite. As fotografias estão em `public/images`, incluídas no repositório, sem depender da hospedagem do Lovable.

## Executar

Requer Node.js 22.12+ ou 24+ e pnpm.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm preview
```

O build verifica o TypeScript e gera `dist/`, pronta para hospedagem estática. Não requer backend, banco ou variáveis secretas.

## Contato e conteúdo

Preencha `WHATSAPP_NUMBER` em `src/config/site.ts` com DDI, DDD e número. Enquanto estiver vazio, os botões mostram “Contato em configuração.”. O mesmo arquivo reúne imagens, diferenciais e etapas.

A composição está em `src/App.tsx`; os estilos responsivos em `src/styles.css`.

## Antes de publicar

Confirmar com o cliente quais elementos do Casaria foram executados pela marcenaria e preencher o WhatsApp. A página usa legendas descritivas, sem alegar autoria arquitetônica, cobertura da empresa na imprensa ou identidade de pessoas retratadas.

O projeto foi convertido de TanStack Start para uma LP estática. Rotas e dependências não utilizadas da exportação foram removidas.

## Galeria e conversão

As fotografias do portfólio podem ser ampliadas. A galeria aceita setas do teclado, Escape e botões de navegação, devolvendo o foco à foto ao fechar. O botão flutuante de contato aparece no mobile e usa a mesma configuração de WhatsApp dos demais CTAs.

## Carrossel e rastreamento

O portfólio usa scroll horizontal nativo com snap, setas, indicadores, gestos touch e lightbox. A reprodução automática avança a cada 6,5 segundos somente enquanto a galeria está visível. Pausa em hover, foco, lightbox e aba oculta; após interação manual, só retoma pelo controle de reprodução. A preferência por movimento reduzido desativa a reprodução automática.

As fotos exibidas usam WebP, com os JPGs originais preservados em `public/images`.

Cada CTA tem `data-cta-id` e `data-cta-location`: header, hero, portfolio, process, final e mobile_floating. O clique dispara o evento DOM `projetoraiz:cta-click` e, quando `window.dataLayer` já existir, envia `whatsapp_cta_click` com `cta_id`, `cta_location`, `cta_label` e `contact_configured`. Não instala GA4, GTM ou Meta Pixel; as integrações podem consumir esses identificadores. Cliques com contato vazio são diferenciados por `contact_configured: false`.
