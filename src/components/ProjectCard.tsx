import { useState, type JSX } from "react";

type ProjectCardProps = {
  title: string;
  mainImage: string;
  tech: JSX.Element[];
  liveDemo: string;
  github: string;
  galleryImages: string[];
};

const ProjectCard = ({ title, mainImage, tech, liveDemo, github, galleryImages }: ProjectCardProps) => {
  const [showGallery, setShowGallery] = useState(false);
  const [current, setCurrent] = useState(0);

  const total = galleryImages.length;

  const closeGallery = () => {
    setShowGallery(false);
    setCurrent(0);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div className="project-card">
      <img src={mainImage} alt={title + " screenshot"} className="project-main-image" />
      <h3 className="project-title">{title}</h3>
      <div className="project-subtitle">Web Development</div>
      <div className="project-tech">{tech}</div>
      <hr className="project-divider" />
      <div className="project-links">
        <a href={liveDemo} className="project-btn" target="_blank" rel="noopener noreferrer">Live Demo</a>
        <a href={github} className="project-btn" target="_blank" rel="noopener noreferrer">Github Repo</a>
        <button className="project-btn" onClick={() => setShowGallery(true)}>Gallery</button>
      </div>
      {showGallery && (
        <div className="modal-overlay" onClick={closeGallery}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ position: "relative", textAlign: "center" }}>
            <button className="modal-close" onClick={closeGallery}>×</button>
            <div style={{ position: "relative", textAlign: "center" }}>
              <img
                src={galleryImages[current]}
                alt={`Gallery ${current + 1}`}
                className="gallery-image"
                style={{ maxHeight: "60vh", maxWidth: "80vw", borderRadius: "12px" }}
              />
              <button
                className="carousel-arrow left"
                onClick={prevImage}
                style={{ position: "absolute", top: "15rem", left: "1.5rem", color: "#fff" }}
              >
                &lt;
              </button>
              <button
                className="carousel-arrow right"
                onClick={nextImage}
                style={{ position: "absolute", top: "15rem", right: "1.5rem", color: "#fff" }}
              >
                &gt;
              </button>
            </div>
            <div style={{ marginTop: "1rem", color: "#fff", fontWeight: 600 }}>
              {current + 1} of {total}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard; 