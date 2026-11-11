import { CtaButton } from "./CtaButton";

export function OwnerProfile() {
  return <section className="owner-section shell" id="valdemar" aria-labelledby="owner-title">
    <figure className="owner-photo"><img src="/images/valdemar-projeto-raiz.webp" alt="Valdemar, proprietário da Projeto Raiz, sentado em um banco de madeira" width="1100" height="1467" loading="lazy" decoding="async"/><figcaption>Valdemar · Proprietário da Projeto Raiz</figcaption></figure>
    <div className="owner-copy">
      <p className="eyebrow">CONHEÇA QUEM ESTÁ À FRENTE</p>
      <h2 id="owner-title">Valdemar.<br/><em>O nome por trás da Projeto Raiz.</em></h2>
      <p>À frente da Projeto Raiz, Valdemar é o proprietário da marcenaria que dá forma a projetos sob medida em madeira maciça.</p>
      <p>Os trabalhos que você conhece por aqui mostram a madeira em diferentes espaços e etapas. Agora, o próximo passo pode ser uma conversa sobre o que você deseja criar.</p>
      <div className="owner-signoff"><strong>Valdemar</strong><span>PROPRIETÁRIO · PROJETO RAIZ</span></div>
      <CtaButton label="Conversar sobre meu projeto" placement="owner"/>
    </div>
  </section>;
}
