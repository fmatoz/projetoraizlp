import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Expand, X, Check } from "lucide-react";
import { projects } from "../config/projects";

export function ProjectStories() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const project = projects[projectIndex];
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
    <div className="project-selector" role="group" aria-label="Escolha um projeto">
      {projects.map((item, index) => <button type="button" key={item.id} aria-pressed={index === projectIndex} onClick={() => setProjectIndex(index)} aria-controls="project-story"><span className="project-selector-number">0{index + 1}</span>{item.name}<span className="project-selector-status"><Check size={13} aria-hidden="true"/> Finalizado</span></button>)}
    </div>
    <div id="project-story" className="project-story" key={project.id}>
      <div className="story-intro"><div><p className="eyebrow">DA EXECUÇÃO AO RESULTADO</p><h3>{project.name}</h3></div><p>{project.summary}</p></div>
      <div className="story-stages">{project.stages.map((stage, stageIndex) => {
        const offset = project.stages.slice(0, stageIndex).reduce((total, item) => total + item.photos.length, 0);
        const cover = stage.photos[0];
        return <article className="story-stage" key={stage.title}>
          <div className="story-step"><span>0{stageIndex + 1}</span><h4>{stage.title}</h4></div>
          <button className="story-cover" type="button" aria-label={`Ampliar ${project.name}: ${cover.caption}`} onClick={event => openPhoto(offset, event.currentTarget)}><img src={cover.src} alt={cover.alt} width={cover.width} height={cover.height} loading="lazy" decoding="async"/><span className="gallery-expand"><Expand size={16} aria-hidden="true"/> Ver etapa · {stage.photos.length} fotos</span></button>
          <p>{stage.description}</p>
          <div className="story-thumbnails" aria-label={`Fotos de ${stage.title}`}>{stage.photos.map((item, index) => <button type="button" key={item.src} aria-label={`Ampliar ${project.name}: ${item.caption}`} onClick={event => openPhoto(offset + index, event.currentTarget)}><img src={item.src} alt="" width={item.width} height={item.height} loading="lazy" decoding="async"/></button>)}</div>
        </article>;
      })}</div>
      <p className="story-hint">Acompanhe as etapas da esquerda para a direita. Toque nas fotos para ampliar os registros.</p>
    </div>
    <dialog ref={dialog} className="lightbox story-lightbox" aria-labelledby="story-photo-caption" onClose={() => setSelected(null)} onClick={event => {if(event.target === event.currentTarget) setSelected(null);}} onKeyDown={event => {if(event.key === "ArrowRight" || event.key === "ArrowLeft"){event.preventDefault();move(event.key === "ArrowRight" ? 1 : -1);}}}>
      {photo && <div className="lightbox-content"><button className="lightbox-close" type="button" aria-label="Fechar fotografia" autoFocus onClick={() => setSelected(null)}><X/></button><img src={photo.src} alt={photo.alt}/><div className="lightbox-controls"><button type="button" aria-label="Fotografia anterior" onClick={() => move(-1)}><ArrowLeft/></button><p id="story-photo-caption"><strong>{project.name} · {photo.stage}</strong><br/>{photo.caption}<span>{(selected ?? 0) + 1} / {photos.length}</span></p><button type="button" aria-label="Próxima fotografia" onClick={() => move(1)}><ArrowRight/></button></div></div>}
    </dialog>
  </div>;
}
