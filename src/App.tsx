import { useState } from "react";
import { ArrowDown, ArrowUpRight, Menu, X, Plus } from "lucide-react";
import { CtaButton } from "./components/CtaButton";
import { images, steps, features } from "./config/site";

const questions = [
  [
    "O que preciso enviar para começar?",
    "Uma breve descrição da sua ideia, referências visuais, medidas aproximadas e a cidade do projeto já ajudam a iniciar a conversa.",
  ],
  [
    "Como são definidos o investimento e o prazo?",
    "Cada proposta considera dimensões, material, acabamento, complexidade e condições de entrega. Esses pontos são alinhados antes da aprovação.",
  ],
  [
    "Posso conversar sobre uma solução sob medida?",
    "Sim. Compartilhe o ambiente e o que você deseja criar para conversarmos sobre as possibilidades e o escopo.",
  ],
];

function Brand() {
  return (
    <span className="brand">
      projeto <em>raiz</em>
      <small>MARCENARIA EM MADEIRA MACIÇA</small>
    </span>
  );
}

export default function App() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <header className="header">
        <div className="shell header-inner">
          <a href="#inicio" aria-label="Projeto Raiz — início">
            <Brand />
          </a>
          <nav
            className={menu ? "nav nav-open" : "nav"}
            id="mobile-nav"
            aria-label="Navegação principal"
          >
            {[
              ["#projeto", "O projeto"],
              ["#essencia", "Nossa essência"],
              ["#processo", "Como funciona"],
            ].map(([href, label]) => (
              <a href={href} key={href} onClick={() => setMenu(false)}>
                {label}
              </a>
            ))}
            <a
              className="nav-contact"
              href="#contato"
              onClick={() => setMenu(false)}
            >
              Seu projeto <ArrowUpRight size={16} />
            </a>
          </nav>
          <button
            className="menu-button"
            type="button"
            aria-label={menu ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menu}
            aria-controls="mobile-nav"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero-photo">
            <img
              src={images.fachada.src}
              alt={images.fachada.alt}
              width="1200"
              height="1600"
              fetchPriority="high"
            />
          </div>
          <div className="shell hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">
                <span /> A NATUREZA COMO MATÉRIA-PRIMA
              </p>
              <h1>
                Seu espaço.
                <br />
                Sua identidade.
                <br />
                <em>Madeira maciça.</em>
              </h1>
              <p className="hero-description">
                Marcenaria sob medida para quem valoriza a beleza do material e
                o cuidado em cada detalhe.
              </p>
              <CtaButton variant="light" />
              <p className="hero-note">
                Uma conversa sobre o que você imagina criar.
              </p>
            </div>
            <div className="hero-bottom">
              <a href="#projeto">
                <ArrowDown size={17} /> CONHEÇA OS DETALHES
              </a>
              <span>
                CASARIA CAFÉ <i>São Paulo</i>
              </span>
            </div>
          </div>
        </section>
        <div className="material-strip">
          <span>MADEIRA MACIÇA</span>
          <i />
          <span>PROJETO SOB MEDIDA</span>
          <i />
          <span>ATENÇÃO AOS DETALHES</span>
        </div>
        <section className="project shell section" id="projeto">
          <div className="section-top">
            <p className="eyebrow">01 / A MADEIRA NO AMBIENTE</p>
            <span className="side-note">UM OLHAR SOBRE O CASARIA CAFÉ</span>
          </div>
          <div className="project-heading">
            <h2>
              Mais que compor.
              <br />
              <em>Dar personalidade.</em>
            </h2>
            <p>
              Do conjunto aos pequenos detalhes, a madeira traz textura, calor e
              presença. Um material que participa da experiência do espaço.
            </p>
          </div>
          <div className="project-grid">
            <figure className="project-main">
              <img
                src={images.interior.src}
                alt={images.interior.alt}
                width="1200"
                height="1600"
                loading="lazy"
              />
              <figcaption>
                <span>01 — Interior</span>
                <span>Madeira e luz</span>
              </figcaption>
            </figure>
            <div className="project-side">
              <figure>
                <img
                  src={images.detalhe.src}
                  alt={images.detalhe.alt}
                  width="1200"
                  height="1600"
                  loading="lazy"
                />
                <figcaption>02 — A textura de perto</figcaption>
              </figure>
              <p className="editorial-note">
                A beleza está
                <br />
                no que é <em>natural.</em>
              </p>
            </div>
            <figure className="project-wide">
              <img
                src={images.banco.src}
                alt={images.banco.alt}
                width="1200"
                height="1600"
                loading="lazy"
              />
              <figcaption>
                <span>03 — Banco suspenso e mesa</span>
                <span>Detalhes que dão identidade</span>
              </figcaption>
            </figure>
          </div>
          <div className="project-link">
            <p>O que você imagina para o seu espaço?</p>
            <a href="#contato">
              Vamos conversar <ArrowUpRight size={18} />
            </a>
          </div>
        </section>
        <section className="essence" id="essencia">
          <div className="shell essence-grid">
            <div>
              <p className="eyebrow">02 / NOSSA ESSÊNCIA</p>
              <h2>
                O valor está
                <br />
                na matéria.
                <br />
                <em>E no cuidado.</em>
              </h2>
              <p className="essence-intro">
                Um projeto sob medida começa com escolhas que fazem sentido para
                você e para o ambiente.
              </p>
            </div>
            <div className="feature-list">
              {features.map((f, i) => (
                <article key={f.title}>
                  <span className="feature-number">0{i + 1}</span>
                  <div>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </div>
                  <ArrowUpRight size={20} aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="process section shell" id="processo">
          <div className="process-photo">
            <img
              src={images.instalacao.src}
              alt={images.instalacao.alt}
              width="1600"
              height="1200"
              loading="lazy"
            />
            <span>DO MATERIAL AO AMBIENTE</span>
          </div>
          <div className="process-copy">
            <p className="eyebrow">03 / COMO FUNCIONA</p>
            <h2>
              Uma boa execução
              <br />
              começa com uma
              <br />
              <em>boa conversa.</em>
            </h2>
            <ol>
              {steps.map((s) => (
                <li key={s.n}>
                  <span>{s.n}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className="faq shell">
          <div>
            <p className="eyebrow">ANTES DE COMEÇAR</p>
            <h2>
              Vamos aos
              <br />
              <em>detalhes?</em>
            </h2>
          </div>
          <div className="faq-list">
            {questions.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <Plus size={18} aria-hidden="true" />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="contact" id="contato">
          <div
            className="contact-image"
            style={{ backgroundImage: `url(${images.detalhe.src})` }}
          />
          <div className="shell contact-inner">
            <p className="eyebrow">SEU PRÓXIMO PROJETO</p>
            <h2>
              Uma ideia sua.
              <br />
              <em>Um espaço com identidade.</em>
            </h2>
            <p>
              Compartilhe suas referências. Vamos conversar sobre as
              possibilidades em madeira maciça.
            </p>
            <CtaButton variant="light" />
            <span className="contact-note">
              Para começar: sua ideia, medidas aproximadas e cidade.
            </span>
          </div>
        </section>
      </main>
      <footer className="shell footer">
        <a href="#inicio" aria-label="Voltar ao início">
          <Brand />
        </a>
        <p>Madeira natural. Um olhar sob medida.</p>
        <a href="#inicio">
          VOLTAR AO TOPO <ArrowUpRight size={15} />
        </a>
      </footer>
    </>
  );
}
