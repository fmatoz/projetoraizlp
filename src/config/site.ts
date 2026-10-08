export const WHATSAPP_NUMBER: string = "";
export const WHATSAPP_MESSAGE =
  "Olá! Conheci a Projeto Raiz pelo site e gostaria de conversar sobre um projeto em madeira maciça.";
export const CTA_LABEL = "Solicitar meu orçamento";
export function whatsappUrl(): string | null {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");
  return number
    ? `https://wa.me/${number}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
    : null;
}
export const images = {
  fachada: {
    src: "/images/casaria-fachada.jpg",
    alt: "Fachada do Casaria Café com madeira e flores",
  },
  interior: {
    src: "/images/casaria-interior.jpg",
    alt: "Interior do Casaria Café com balcão de madeira iluminado",
  },
  detalhe: {
    src: "/images/casaria-detalhe.jpg",
    alt: "Textura e veios da madeira na fachada do Casaria Café",
  },
  banco: {
    src: "/images/casaria-banco.jpg",
    alt: "Banco suspenso por correntes com mesa de madeira na lateral",
  },
  instalacao: {
    src: "/images/casaria-instalacao.jpg",
    alt: "Balcão de madeira durante a instalação no ambiente",
  },
};
export const features = [
  {
    title: "A beleza da madeira natural",
    text: "Veios, cores e texturas que tornam cada criação especial. A autenticidade da madeira maciça em cada detalhe.",
  },
  {
    title: "Feito para o seu espaço",
    text: "Projetos personalizados que consideram suas ideias, necessidades e as características do ambiente.",
  },
  {
    title: "Cuidado em cada acabamento",
    text: "Da escolha dos materiais aos detalhes finais, buscamos unir estética, funcionalidade e qualidade de execução.",
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
