import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
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
      <div className="project-grid">
        {photos.map((item, index) => (
          <figure key={item.src}>
            <button
              type="button"
              className="gallery-photo"
              aria-label={`Ampliar fotografia: ${item.caption}`}
              onClick={() => setSelected(index)}
            >
              <img
                src={item.src}
                alt={item.alt}
                width="1200"
                height="1600"
                loading="lazy"
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
