import { useState } from "react";
import { ArrowDown, ArrowUpRight, Menu, X, Plus } from "lucide-react";
import { PhotoGallery } from "./components/PhotoGallery";
import { CtaButton } from "./components/CtaButton";
import { images, steps, features } from "./config/site";

const questions = [
  [
    "Quais tipos de projetos vocês realizam?",
    "Trabalhamos com projetos personalizados em madeira maciça. Conte sua ideia para avaliarmos as possibilidades.",
  ],
  [
    "Preciso ter todas as medidas antes de entrar em contato?",
    "Não necessariamente. Você pode começar compartilhando sua ideia e as informações que já possui.",
  ],
  [
    "Como funciona o orçamento?",
    "Primeiro entendemos o que você deseja. A partir disso, conversamos sobre materiais, detalhes, valores e prazos.",
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
              ["#projeto", "Portfólio"],
              ["#essencia", "Nossa essência"],
              ["#processo", "Como funciona"],
            ].map(([href, label]) => (
              <a href={href} key={href} onClick={() => setMenu(false)}>
                {label}
              </a>
            ))}
            <CtaButton
              className="nav-contact"
              variant="outline"
              label="Solicitar orçamento"
            />
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
                MARCENARIA EM MADEIRA MACIÇA • PROJETOS SOB MEDIDA
              </p>
              <h1>
                Seu espaço merece a autenticidade da <em>madeira maciça.</em>
              </h1>
              <p className="hero-description">
                Criamos projetos sob medida que unem beleza natural,
                funcionalidade e personalidade. Cada detalhe pensado para
                transformar sua ideia em algo único.
              </p>
              <CtaButton variant="light" label="Solicitar meu orçamento" />
              <p className="hero-note">
                Conte sua ideia e vamos conversar sobre as possibilidades.
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
            <p className="eyebrow">01 / PORTFÓLIO</p>
            <span className="side-note">UM OLHAR SOBRE O CASARIA CAFÉ</span>
          </div>
          <div className="project-heading">
            <h2>
              Da madeira à realidade. <em>Conheça nossos projetos.</em>
            </h2>
            <p>
              Cada projeto nasce de uma ideia e ganha forma por meio da escolha
              dos materiais, do trabalho artesanal e da atenção aos detalhes.
            </p>
          </div>
          <PhotoGallery />
          <div className="project-link">
            <p>Seu projeto também começa com uma ideia.</p>
            <CtaButton label="Quero um projeto assim" />
          </div>
        </section>
        <section className="essence" id="essencia">
          <div className="shell essence-grid">
            <div>
              <p className="eyebrow">02 / NOSSA ESSÊNCIA</p>
              <h2>
                Mais do que madeira. <em>Um projeto com identidade.</em>
              </h2>
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
              Sua ideia merece <em>ganhar forma.</em>
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
            <CtaButton label="Conversar sobre meu projeto" />
          </div>
        </section>
        <section className="faq shell">
          <div>
            <p className="eyebrow">DÚVIDAS FREQUENTES</p>
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
              Sua ideia. Nossa madeira. <em>Um projeto único.</em>
            </h2>
            <p>
              Tem algo em mente? Conte para a Projeto Raiz o que você deseja
              criar. Vamos conversar sobre as possibilidades para o seu espaço.
            </p>
            <CtaButton
              variant="light"
              label="Solicitar orçamento pelo WhatsApp"
            />
            <span className="contact-note">
              O primeiro passo é uma boa conversa.
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
      <div className="mobile-whatsapp">
        <CtaButton
          className="cta-floating"
          label="Solicitar orçamento pelo WhatsApp"
          iconOnly
        />
      </div>
    </>
  );
}
