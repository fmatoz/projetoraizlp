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
