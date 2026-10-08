import img1 from "@/assets/casaria-1.jpg.asset.json";
import img2 from "@/assets/casaria-2.jpg.asset.json";
import img3 from "@/assets/casaria-3.jpg.asset.json";
import img4 from "@/assets/casaria-4.jpg.asset.json";

/**
 * WHATSAPP — PREENCHER AQUI.
 * Apenas dígitos, com DDI + DDD. Ex.: "5511999999999".
 * Enquanto vazio, os botões exibem "Contato em configuração."
 */
export const WHATSAPP_NUMBER = "";

export const WHATSAPP_MESSAGE =
  "Olá! Gostaria de conversar sobre um projeto em madeira maciça. Posso enviar minhas referências?";

export const whatsappUrl = (): string | null =>
  WHATSAPP_NUMBER.trim()
    ? `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
    : null;

export const CTA_LABEL = "Conversar sobre meu projeto";

export const images = {
  fachada: {
    src: img1.url,
    alt: "Fachada de café com revestimento em madeira maciça e deck",
    caption: "Casaria Café — fachada e materialidade",
  },
  interior: { src: img2.url, alt: "Balcão em madeira maciça com iluminação inferior" },
  detalhe: { src: img3.url, alt: "Detalhe dos veios da madeira na fachada" },
  banco: { src: img4.url, alt: "Banco suspenso por correntes e pequena mesa em madeira" },
};

/** Galeria editorial: imagem principal + duas menores empilhadas à direita. */
export const gallery = {
  main: { ...images.interior, caption: "Interior com balcão em madeira maciça" },
  side: [
    { ...images.detalhe, caption: "Veios da madeira na fachada" },
    { ...images.banco, caption: "Banco suspenso e mesa" },
  ],
};

export const features = [
  { title: "Madeira maciça", text: "Veios e texturas naturais que dão identidade a cada peça." },
  { title: "Sob medida", text: "Dimensões e detalhes definidos a partir das necessidades do seu espaço." },
  { title: "Atenção aos detalhes", text: "Cuidado com as proporções, os encontros e o acabamento." },
];

export const steps = [
  { n: "01", title: "Conte sua ideia", text: "Compartilhe o tipo de projeto, referências, medidas aproximadas e sua cidade." },
  { n: "02", title: "Alinhamos os detalhes", text: "Conversamos sobre possibilidades, materiais e escopo para definir a proposta." },
  { n: "03", title: "Produção e entrega", text: "A execução segue as condições e os detalhes aprovados para o projeto." },
];
