import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Expand, X, Pause, Play } from "lucide-react";
import { images } from "../config/site";

const photos = [
  { ...images.interior, caption: "Interior — Casaria Café" },
  { ...images.fachada, caption: "Fachada — Casaria Café" },
  { ...images.detalhe, caption: "Detalhes da madeira" },
  { ...images.banco, caption: "Banco suspenso e mesa" },
];

export function PhotoGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [pageVisible, setPageVisible] = useState(!document.hidden);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 },
    );
    if (track.current) observer.observe(track.current);
    const pageVisibility = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", pageVisibility);
    return () => {
      media.removeEventListener("change", update);
      observer.disconnect();
      document.removeEventListener("visibilitychange", pageVisibility);
    };
  }, []);

  const goTo = (index: number, interaction = true) => {
    if (interaction) setPlaying(false);
    const next = (index + photos.length) % photos.length;
    const slide = track.current?.children[next] as HTMLElement | undefined;
    if (slide)
      track.current?.scrollTo({
        left: slide.offsetLeft,
        behavior: reducedMotion ? "instant" : "smooth",
      });
    setActive(next);
  };

  useEffect(() => {
    if (
      !playing ||
      reducedMotion ||
      !visible ||
      !pageVisible ||
      hovered ||
      focused ||
      selected !== null
    )
      return;
    const timer = window.setInterval(() => goTo(active + 1, false), 6500);
    return () => window.clearInterval(timer);
  }, [
    playing,
    reducedMotion,
    visible,
    pageVisible,
    hovered,
    focused,
    selected,
    active,
  ]);

  const isOpen = selected !== null;
  useEffect(() => {
    if (!isOpen) return;
    const modal = dialog.current;
    const previousOverflow = document.body.style.overflow;
    modal?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      modal?.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);
  const move = (direction: number) =>
    setSelected((current) =>
      current === null
        ? null
        : (current + direction + photos.length) % photos.length,
    );
  const photo = selected === null ? null : photos[selected];
  return (
    <>
      <div
        className="carousel"
        role="region"
        aria-roledescription="carrossel"
        aria-label="Fotografias do Casaria Café"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocusCapture={() => setFocused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget))
            setFocused(false);
        }}
      >
        <div
          ref={track}
          className="carousel-track"
          id="project-photos"
          onPointerDown={() => setPlaying(false)}
          onWheel={() => setPlaying(false)}
          onKeyDown={(event) => {
            if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
              event.preventDefault();
              goTo(active + (event.key === "ArrowRight" ? 1 : -1));
            }
          }}
          onScroll={() => {
            const element = track.current;
            if (!element) return;
            const slides = Array.from(element.children) as HTMLElement[];
            const nearest = slides.reduce(
              (best, item, index) =>
                Math.abs(item.offsetLeft - element.scrollLeft) <
                Math.abs(slides[best].offsetLeft - element.scrollLeft)
                  ? index
                  : best,
              0,
            );
            setActive(nearest);
          }}
        >
          {photos.map((item, index) => (
            <figure
              key={item.src}
              className="carousel-slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} de ${photos.length}`}
            >
              <button
                type="button"
                className="gallery-photo"
                aria-label={`Ampliar fotografia: ${item.caption}`}
                tabIndex={index === active ? 0 : -1}
                onClick={() => {
                  setPlaying(false);
                  setSelected(index);
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  width="1200"
                  height="1600"
                  loading="lazy"
                  decoding="async"
                />
                <span className="gallery-expand">
                  <Expand size={18} aria-hidden="true" />
                  <span>Ampliar</span>
                </span>
              </button>
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
        <div className="carousel-toolbar">
          <div className="carousel-dots" aria-label="Selecionar fotografia">
            {photos.map((item, index) => (
              <button
                type="button"
                key={item.src}
                aria-label={`Ver fotografia ${index + 1}: ${item.caption}`}
                aria-current={index === active ? "true" : undefined}
                onClick={() => goTo(index)}
              >
                <span />
              </button>
            ))}
          </div>
          <span
            className="carousel-count"
            aria-live={playing ? "off" : "polite"}
          >
            {String(active + 1).padStart(2, "0")} / 04
          </span>
          <div className="carousel-actions">
            {!reducedMotion && (
              <button
                type="button"
                aria-label={
                  playing
                    ? "Pausar reprodução automática"
                    : "Ativar reprodução automática"
                }
                onClick={() => setPlaying(!playing)}
              >
                {playing ? <Pause size={17} /> : <Play size={17} />}
              </button>
            )}
            <button
              type="button"
              aria-label="Foto anterior no carrossel"
              aria-controls="project-photos"
              onClick={() => goTo(active - 1)}
            >
              <ArrowLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="Próxima foto no carrossel"
              aria-controls="project-photos"
              onClick={() => goTo(active + 1)}
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
      <dialog
        ref={dialog}
        className="lightbox"
        aria-labelledby="photo-caption"
        onClose={() => setSelected(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelected(null);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            move(1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            move(-1);
          }
        }}
      >
        {photo && (
          <div className="lightbox-content">
            <button
              className="lightbox-close"
              type="button"
              aria-label="Fechar fotografia"
              onClick={() => setSelected(null)}
              autoFocus
            >
              <X />
            </button>
            <img src={photo.src} alt={photo.alt} />
            <div className="lightbox-controls">
              <button
                type="button"
                aria-label="Fotografia anterior"
                onClick={() => move(-1)}
              >
                <ArrowLeft />
              </button>
              <p id="photo-caption">
                {photo.caption}
                <span>
                  {(selected ?? 0) + 1} / {photos.length}
                </span>
              </p>
              <button
                type="button"
                aria-label="Próxima fotografia"
                onClick={() => move(1)}
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
