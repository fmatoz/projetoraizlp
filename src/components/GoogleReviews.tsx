import { ArrowUpRight, Star } from "lucide-react";

const googleProfile = "https://maps.app.goo.gl/cVBkca5xMBuPP2i56";
const reviews = [
  { name: "Gleise Lucas", initials: "GL", quote: "O móvel superou minhas expectativas, com um acabamento impecável", topic: "Acabamento e atenção aos detalhes" },
  { name: "Ines Rodrigues", initials: "IR", quote: "Um cuidado e carinho especial. Super recomendo !", topic: "Cuidado em cada atendimento" },
  { name: "Renata Silva Viotto", initials: "RV", quote: "Excelente experiência", topic: "Uma experiência positiva" },
];

function Stars() {
  return <span className="review-stars" aria-label="5 de 5 estrelas">{Array.from({length: 5}, (_, i) => <Star key={i} size={16} fill="currentColor" aria-hidden="true" />)}</span>;
}

export function GoogleReviews() {
  return <section className="reviews-section shell section" id="avaliacoes" aria-labelledby="reviews-title">
    <div className="reviews-heading">
      <div><p className="eyebrow">QUEM CONFIOU NA PROJETO RAIZ</p><h2 id="reviews-title">O cuidado aparece nos detalhes.<br/><em>E nas palavras de quem conhece.</em></h2></div>
      <a className="google-rating" href={googleProfile} target="_blank" rel="noopener noreferrer" aria-label="Nota 4,8 de 5 em 48 avaliações. Ver perfil no Google">
        <span className="google-word">Google</span><span className="rating-value">4,8 <span aria-hidden="true">★★★★★</span></span><span>48 avaliações no Google <ArrowUpRight size={15} aria-hidden="true" /></span>
      </a>
    </div>
    <div className="reviews-grid">{reviews.map(review => <article className="review-card" key={review.name}>
      <div className="review-author"><span className="review-avatar" aria-hidden="true">{review.initials}</span><div><h3>{review.name}</h3><span>Avaliação no Google</span></div></div>
      <Stars/><blockquote>“{review.quote}”</blockquote><p className="review-topic">{review.topic}</p>
      <a href={googleProfile} target="_blank" rel="noopener noreferrer">Ver avaliações no Google <ArrowUpRight size={14} aria-hidden="true" /></a>
    </article>)}</div>
    <div className="reviews-footnote"><p>Trechos de avaliações públicas. Nota e quantidade consultadas em 08/10/2026.</p><a href={googleProfile} target="_blank" rel="noopener noreferrer">Conheça outras experiências <ArrowUpRight size={16} aria-hidden="true" /></a></div>
  </section>;
}
