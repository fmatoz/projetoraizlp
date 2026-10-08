export const WHATSAPP_NUMBER: string = "5511974779874";
export const WHATSAPP_MESSAGE =
  "Olá! Conheci os projetos da Projeto Raiz e gostaria de solicitar um orçamento.";
export const CTA_LABEL = "Solicitar meu orçamento";
export function whatsappUrl(): string | null {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");
  return number
    ? `https://wa.me/${number}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
    : null;
}
export const images = {
  fachada: {
    src: "/images/casaria-fachada.webp",
    alt: "Fachada do Casaria Café com madeira e flores",
  },
  interior: {
    src: "/images/casaria-interior.webp",
    alt: "Interior do Casaria Café com balcão de madeira iluminado",
  },
  detalhe: {
    src: "/images/casaria-detalhe.webp",
    alt: "Textura e veios da madeira na fachada do Casaria Café",
  },
  banco: {
    src: "/images/casaria-banco.webp",
    alt: "Banco suspenso por correntes com mesa de madeira na lateral",
  },
  instalacao: {
    src: "/images/casaria-instalacao.webp",
    alt: "Balcão de madeira durante a instalação no ambiente",
  },
};
export const features = [
  {
    title: "Madeira com personalidade",
    text: "Cada veio e textura carrega a beleza única da madeira natural.",
  },
  {
    title: "Feito para o seu espaço",
    text: "Soluções pensadas para suas necessidades, seu ambiente e sua ideia.",
  },
  {
    title: "Atenção aos acabamentos",
    text: "Do material aos detalhes finais, cada escolha faz diferença no resultado.",
  },
];
export const steps = [
  {
    n: "01",
    title: "Conte o que você imagina",
    text: "Compartilhe sua ideia, referências e as necessidades do seu espaço.",
  },
  {
    n: "02",
    title: "Planejamos os detalhes",
    text: "Conversamos sobre materiais, dimensões, acabamento e investimento para definir a proposta.",
  },
  {
    n: "03",
    title: "Transformamos em realidade",
    text: "Com o projeto alinhado, seguimos para a execução conforme as condições combinadas.",
  },
];

