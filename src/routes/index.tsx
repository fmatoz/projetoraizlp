import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown } from "lucide-react";
import { CtaButton } from "@/components/CtaButton";
import { features, gallery, images, steps } from "@/config/site";

const TITLE = "Projeto Raiz | Marcenaria em Madeira Maciça";
const DESC = "Marcenaria em madeira maciça e projetos sob medida. Converse com a Projeto Raiz sobre sua ideia.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#projeto", label: "Projeto" },
  { href: "#essencia", label: "Essência" },
  { href: "#processo", label: "Processo" },
];

function Index() {
  return (
    <div className="overflow-x-hidden">
      <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-4 md:px-10">
          <a href="#" className="font-serif text-2xl text-foreground">Projeto Raiz</a>
          <nav aria-label="Principal" className="hidden gap-8 text-sm md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-muted-foreground transition-colors hover:text-foreground">{n.label}</a>
            ))}
          </nav>
          <div className="hidden sm:block [&_span[role=status]]:absolute [&_span[role=status]]:top-full"><CtaButton className="px-4 py-2" /></div>
        </div>
      </header>

      <main>
        {/* Abertura */}
        <section className="mx-auto max-w-[1440px] px-5 pb-12 pt-8 md:pb-20 md:pl-10 md:pt-12 lg:pl-16 md:pr-0">
          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-14">
            <div>
              <p className="text-xs font-medium tracking-[0.18em] text-accent">MARCENARIA EM MADEIRA MACIÇA</p>
              <h1 className="mt-5 max-w-[14ch] font-serif text-[38px] leading-[1.08] text-foreground md:text-[64px] md:leading-[1.05]">
                Seu espaço, com a identidade da madeira maciça.
              </h1>
              <p className="mt-6 max-w-md text-lg text-muted-foreground">
                Marcenaria sob medida que valoriza a textura natural da madeira e os detalhes de cada ambiente.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                <CtaButton />
                <a
                  href="#projeto"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  Explorar os detalhes
                  <ArrowDown aria-hidden className="size-4" />
                </a>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">Envie sua ideia, referências e medidas aproximadas.</p>
            </div>
            <figure className="min-w-0">
              <img
                src={images.fachada.src}
                alt={images.fachada.alt}
                fetchPriority="high"
                width={1200}
                height={1600}
                className="aspect-[4/5] w-full rounded-sm object-cover md:aspect-[3/4] lg:aspect-[4/5]"
              />
              <figcaption className="mt-3 text-xs tracking-wide text-muted-foreground md:pr-10">
                {images.fachada.caption}
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Galeria editorial */}
        <section id="projeto" className="scroll-mt-20 bg-secondary py-16 md:py-20">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <p className="text-xs font-medium tracking-[0.22em] text-accent">CASARIA CAFÉ</p>
            <h2 className="mt-3 max-w-2xl font-serif text-3xl text-foreground md:text-5xl">Textura que se vê. Presença que se sente.</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Explore a madeira em diferentes escalas: no ambiente, nas peças e nos detalhes.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-5 md:gap-8">
              <figure className="min-w-0 md:col-span-3">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-sm md:aspect-none md:h-[680px]">
                  <img
                    src={gallery.main.src}
                    alt={gallery.main.alt}
                    loading="lazy"
                    width={1200}
                    height={1600}
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-muted-foreground">{gallery.main.caption}</figcaption>
              </figure>
              <div className="grid min-w-0 gap-6 md:col-span-2 md:content-start md:gap-8">
                {gallery.side.map((g) => (
                  <figure key={g.caption} className="min-w-0">
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-sm md:aspect-none md:h-[324px]">
                      <img
                        src={g.src}
                        alt={g.alt}
                        loading="lazy"
                        width={1200}
                        height={1600}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <figcaption className="mt-3 text-sm text-muted-foreground">{g.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Diferenciais — faixa escura */}
        <section id="essencia" className="scroll-mt-20 bg-primary py-16 text-primary-foreground md:py-20">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <h2 className="max-w-xl font-serif text-3xl md:text-5xl">Cada espaço pede um olhar próprio.</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-12">
              {features.map((f) => (
                <div key={f.title} className="border-t border-primary-foreground/25 pt-5">
                  <h3 className="font-serif text-2xl">{f.title}</h3>
                  <p className="mt-2 text-primary-foreground/70">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Processo — composição tipográfica */}
        <section id="processo" className="scroll-mt-20 py-16 md:py-20">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10">
            <h2 className="max-w-2xl font-serif text-3xl text-foreground md:text-5xl">Um projeto começa pela sua ideia.</h2>
            <ol className="mt-10 grid gap-8 md:grid-cols-3 md:gap-12">
              {steps.map((s) => (
                <li key={s.n} className="border-t border-border pt-5">
                  <span aria-hidden className="font-serif text-4xl text-accent md:text-5xl">{s.n}</span>
                  <h3 className="mt-3 font-serif text-xl text-foreground">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Fechamento — bloco escuro */}
        <section className="bg-primary py-16 text-primary-foreground md:py-20">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <h2 className="font-serif text-3xl md:text-5xl">Vamos criar algo que faça sentido para o seu espaço?</h2>
            <p className="mx-auto mt-4 max-w-xl text-primary-foreground/70">
              Compartilhe suas referências e converse sobre as possibilidades do seu projeto em madeira maciça.
            </p>
            <div className="mt-7 flex justify-center [&>span]:items-center">
              <CtaButton variant="light" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10">
          <p className="font-serif text-xl text-foreground">Projeto Raiz</p>
          <p className="text-sm text-muted-foreground">Marcenaria em madeira maciça.</p>
        </div>
      </footer>
    </div>
  );
}
