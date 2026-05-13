import { useState, type JSX } from "react";

type ProjectCardProps = {
  title: string;
  mainImage: string;
  tech: JSX.Element[];
  liveDemo: string;
  github: string;
  galleryImages: string[];
  onGalleryOpen: () => void;
  onDescriptionOpen: () => void;
};

const ProjectCard = ({ title, mainImage, tech, liveDemo, github, onGalleryOpen, onDescriptionOpen }: ProjectCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="project-card" onClick={onDescriptionOpen}>
      <div className="project-image-wrapper">
        {!imageLoaded && <div className="image-skeleton" />}
        <img 
          src={mainImage} 
          alt={title + " screenshot"} 
          className={`project-main-image ${imageLoaded ? 'loaded' : ''}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <h3 className="project-title">{title}</h3>
      <div className="project-tech">{tech}</div>
      <hr className="project-divider" />
      <div className="project-links">
        <a href={liveDemo} className="project-btn" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Live Demo</a>
        <a href={github} className="project-btn" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>Github Repo</a>
        <button className="project-btn" onClick={(e) => { e.stopPropagation(); onGalleryOpen(); }}>Gallery</button>
      </div>
    </div>
  );
};

export default ProjectCard;
