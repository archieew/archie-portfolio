import { useState, useEffect, useCallback, useMemo } from "react";
import "./styles/Projects.css";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import type { Project, ProjectCategory } from "../types";

const PROJECTS_PER_PAGE = 6;
const CATEGORIES: ProjectCategory[] = ["All", "Web", "Mobile", "AI", "Games"];

const Projects = () => {
  const [page, setPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [descriptionProject, setDescriptionProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");
  
  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const startIdx = (page - 1) * PROJECTS_PER_PAGE;
  const endIdx = startIdx + PROJECTS_PER_PAGE;
  const pagedProjects = filteredProjects.slice(startIdx, endIdx);

  // Reset to page 1 when category changes
  useEffect(() => {
    setPage(1);
  }, [activeCategory]);

  const handleGalleryOpen = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const handleGalleryClose = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const handleDescriptionOpen = (project: Project) => {
    setDescriptionProject(project);
  };

  const handleDescriptionClose = () => {
    setDescriptionProject(null);
  };

  const nextImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.galleryImages.length - 1 ? 0 : prev + 1
      );
    }
  }, [selectedProject]);

  const prevImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.galleryImages.length - 1 : prev - 1
      );
    }
  }, [selectedProject]);

  // Keyboard navigation for gallery
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProject) {
        if (e.key === "ArrowRight") {
          nextImage();
        } else if (e.key === "ArrowLeft") {
          prevImage();
        } else if (e.key === "Escape") {
          handleGalleryClose();
        }
      }
      if (descriptionProject && e.key === "Escape") {
        handleDescriptionClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, descriptionProject, nextImage, prevImage]);

  if (selectedProject) {
    return (
      <div className="projects-container">
        <div className="gallery-view">
          <div className="gallery-header">
            <h2 className="gallery-title">{selectedProject.title} Gallery</h2>
            <button className="gallery-close-btn" onClick={handleGalleryClose}>
              ← Back to Projects
            </button>
          </div>
          <div className="gallery-main">
            <button 
              className="gallery-nav-btn gallery-prev" 
              onClick={prevImage}
              aria-label="Previous image"
            >
              ‹
            </button>
            <div className="gallery-image-container">
              <img 
                src={selectedProject.galleryImages[currentImageIndex]} 
                alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                className="gallery-main-image"
                loading="lazy"
              />
              <div className="gallery-counter">
                {currentImageIndex + 1} of {selectedProject.galleryImages.length}
              </div>
              <div className="gallery-hint">Use ← → arrow keys to navigate</div>
            </div>
            <button 
              className="gallery-nav-btn gallery-next" 
              onClick={nextImage}
              aria-label="Next image"
            >
              ›
            </button>
          </div>
          <div className="gallery-thumbnails">
            {selectedProject.galleryImages.map((img: string, idx: number) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className={`gallery-thumbnail ${idx === currentImageIndex ? 'active' : ''}`}
                onClick={() => setCurrentImageIndex(idx)}
                loading="lazy"
              />
            ))}
          </div>
          <div className="gallery-project-info">
            <div className="gallery-tech">
              {selectedProject.tech}
            </div>
            <div className="gallery-links">
              <a href={selectedProject.liveDemo} className="project-btn" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a href={selectedProject.github} className="project-btn" target="_blank" rel="noopener noreferrer">
                Github Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="projects-container">
      {/* Category Filter */}
      <div className="category-filter">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
            {category !== "All" && (
              <span className="category-count">
                {projects.filter(p => p.category === category).length}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {pagedProjects.map((proj) => (
          <ProjectCard 
            key={proj.title} 
            {...proj} 
            onGalleryOpen={() => handleGalleryOpen(proj)}
            onDescriptionOpen={() => handleDescriptionOpen(proj)}
          />
        ))}
      </div>
      <div className="pagination">
        <button 
          onClick={() => setPage(page - 1)} 
          disabled={page === 1}
          aria-label="Previous page"
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => setPage(idx + 1)}
            className={page === idx + 1 ? "active" : ""}
            aria-label={`Page ${idx + 1}`}
            aria-current={page === idx + 1 ? "page" : undefined}
          >
            {idx + 1}
          </button>
        ))}
        <button 
          onClick={() => setPage(page + 1)} 
          disabled={page === totalPages}
          aria-label="Next page"
        >
          Next
        </button>
      </div>
      
      {descriptionProject && (
        <div 
          className="description-popup-overlay" 
          onClick={handleDescriptionClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-title"
        >
          <div className="description-popup" onClick={(e) => e.stopPropagation()}>
            <div className="description-popup-header">
              <h2 id="popup-title" className="description-popup-title">{descriptionProject.title}</h2>
              <button 
                className="description-popup-close" 
                onClick={handleDescriptionClose}
                aria-label="Close popup"
              >
                ✕
              </button>
            </div>
            <div className="description-popup-content">
              <img 
                src={descriptionProject.mainImage} 
                alt={descriptionProject.title} 
                className="description-popup-image"
                loading="lazy"
              />
              <div className="description-popup-text">
                <p className="description-popup-desc">{descriptionProject.description}</p>
                <div className="description-popup-tech">
                  <span className="tech-label">Technologies:</span>
                  <div className="tech-icons">{descriptionProject.tech}</div>
                </div>
                <div className="description-popup-links">
                  <a href={descriptionProject.liveDemo} className="popup-btn demo-btn" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={descriptionProject.github} className="popup-btn github-btn" target="_blank" rel="noopener noreferrer">
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
