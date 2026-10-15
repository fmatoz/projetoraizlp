import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Expand, X, Check } from "lucide-react";
import { projects } from "../config/projects";

function ProjectStory({ project }: { project: (typeof projects)[number] }) {
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const photos = project.stages.flatMap((stage, stageIndex) => stage.photos.map(photo => ({ ...photo, stage: stage.title, stageIndex })));
  const photo = selected === null ? null : photos[selected];
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
      opener.current?.focus({ preventScroll: true });
    };
  }, [isOpen]);
  const openPhoto = (index: number, button: HTMLButtonElement) => { opener.current = button; setSelected(index); };
  const move = (direction: number) => setSelected(current => current === null ? null : (current + direction + photos.length) % photos.length);
  return <div className="project-stories">
    <section id={`projeto-${project.id}`} className="project-story" aria-label={project.name}>
      <div className="story-intro"><div><p className="eyebrow">DA EXECUÇÃO AO RESULTADO</p><h3>{project.name}</h3></div><p>{project.summary}</p></div>
      <div className="story-stages">{project.stages.map((stage, stageIndex) => {
        const offset = project.stages.slice(0, stageIndex).reduce((total, item) => total + item.photos.length, 0);
        return <article className="story-stage" key={stage.title}>
          <div className="story-step"><span>0{stageIndex + 1}</span><h4>{stage.title}</h4></div>
          <p>{stage.description}</p>
          <div className="story-photo-grid">{stage.photos.map((item, index) => <figure key={item.src}>
            <button className="story-photo" type="button" aria-label={`Ampliar ${project.name}: ${item.caption}`} onClick={event => openPhoto(offset + index, event.currentTarget)}><img src={item.src} alt={item.alt} width={item.width} height={item.height} loading="lazy" decoding="async"/><span className="gallery-expand"><Expand size={15} aria-hidden="true"/> Ampliar</span></button>
            <figcaption>{item.caption}</figcaption>
          </figure>)}</div>
        </article>;
      })}</div>
    </section>
    <dialog ref={dialog} className="lightbox story-lightbox" aria-labelledby={`story-photo-caption-${project.id}`} onClose={() => setSelected(null)} onClick={event => {if(event.target === event.currentTarget) setSelected(null);}} onKeyDown={event => {if(event.key === "ArrowRight" || event.key === "ArrowLeft"){event.preventDefault();move(event.key === "ArrowRight" ? 1 : -1);}}}>
      {photo && <div className="lightbox-content"><button className="lightbox-close" type="button" aria-label="Fechar fotografia" autoFocus onClick={() => setSelected(null)}><X/></button><img src={photo.src} alt={photo.alt}/><div className="lightbox-controls"><button type="button" aria-label="Fotografia anterior" onClick={() => move(-1)}><ArrowLeft/></button><p id={`story-photo-caption-${project.id}`}><strong>{project.name} · {photo.stage}</strong><br/>{photo.caption}<span>{(selected ?? 0) + 1} / {photos.length}</span></p><button type="button" aria-label="Próxima fotografia" onClick={() => move(1)}><ArrowRight/></button></div></div>}
    </dialog>
  </div>;
}

export function ProjectStories() {
  const [active, setActive] = useState(0);
  const project = projects[active];
  return <div className="project-collection">
    <div className="project-selector" role="group" aria-label="Escolha um projeto">
      {projects.map((item, index) => <button type="button" key={item.id} aria-pressed={active === index} aria-controls="selected-project" onClick={() => setActive(index)}><span className="project-selector-number">0{index + 1}</span>{item.name}<span className="project-selector-status"><Check size={13} aria-hidden="true"/> Finalizado</span></button>)}
    </div>
    <div id="selected-project"><ProjectStory key={project.id} project={project}/></div>
  </div>;
}
