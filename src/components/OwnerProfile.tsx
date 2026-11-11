import { CtaButton } from "./CtaButton";

export function OwnerProfile() {
  return <section className="owner-section shell" id="valdemar" aria-labelledby="owner-title">
    <figure className="owner-photo"><img src="/images/valdemar-projeto-raiz.webp" alt="Valdemar, proprietário da Projeto Raiz, sentado em um banco de madeira" width="1100" height="1467" loading="lazy" decoding="async"/><figcaption>Valdemar · Proprietário da Projeto Raiz</figcaption></figure>
    <div className="owner-copy">
      <p className="eyebrow">CONHEÇA QUEM ESTÁ À FRENTE</p>
      <h2 id="owner-title">Valdemar.<br/><em>O nome por trás da Projeto Raiz.</em></h2>
      <p>Foi Raimunda, sua mãe, quem apresentou a marcenaria a Valdemar. Em 1987, ela o levou ao Liceu de Artes e Ofícios, no Pelourinho, em Salvador. No ano seguinte, ele começou sua formação no ofício.</p>
      <p>A trajetória seguiu por outras marcenarias e, a partir de 1993, também pelo Exército, onde trabalhou na área e aprendeu com outros profissionais.</p>
      <p>Já em São Paulo, depois de atuar também em outros setores, Valdemar retomou a dedicação integral à marcenaria em 2019. Hoje, à frente da Projeto Raiz e com sua equipe, desenvolve projetos em madeira maciça, da criação de novos ambientes à renovação de espaços existentes.</p>
      <div className="owner-signoff"><strong>Valdemar</strong><span>PROPRIETÁRIO · PROJETO RAIZ</span></div>
      <CtaButton label="Conversar sobre meu projeto" placement="owner"/>
    </div>
  </section>;
}
