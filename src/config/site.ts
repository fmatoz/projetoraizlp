export const WHATSAPP_NUMBER: string = "";
export const WHATSAPP_MESSAGE =
  "Olá! Gostaria de conversar sobre um projeto em madeira maciça. Posso enviar minhas referências?";
export const CTA_LABEL = "Conversar sobre meu projeto";
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
    title: "Madeira de verdade.",
    text: "Veios, tons e texturas naturais. A singularidade do material como parte do desenho de cada peça.",
  },
  {
    title: "Um olhar sob medida.",
    text: "Proporções e detalhes pensados a partir da sua ideia e das necessidades do ambiente.",
  },
  {
    title: "Cuidado que aparece.",
    text: "Atenção aos encontros, ao desenho e ao acabamento. O detalhe participa do resultado.",
  },
];
export const steps = [
  {
    n: "01",
    title: "Compartilhe sua ideia",
    text: "Conte o que deseja criar. Referências, medidas aproximadas e sua cidade ajudam a começar.",
  },
  {
    n: "02",
    title: "Alinhamos as escolhas",
    text: "Conversamos sobre materiais, desenho e escopo para definir a proposta e as condições.",
  },
  {
    n: "03",
    title: "Damos forma ao projeto",
    text: "Produção e entrega seguem os detalhes e as condições aprovadas para o seu projeto.",
  },
];
