import { useState } from "react";
import "./styles/Projects.css";
import ProjectCard from "./ProjectCard";
import { SiHtml5, SiCss3, SiJavascript, SiSolidity, SiTypescript, SiAngular, SiFlutter, SiDart, SiAndroidstudio, SiFirebase, SiPhp, SiMysql, SiXampp } from "react-icons/si";
import { FaWallet } from "react-icons/fa";
import bvc1 from "../assets/projects/BVC/1.jpg";
import bvc2 from "../assets/projects/BVC/2.jpg";
import bvc3 from "../assets/projects/BVC/3.jpg";
import bvc4 from "../assets/projects/BVC/4.jpg";
import bvc5 from "../assets/projects/BVC/5.jpg";
import bvc6 from "../assets/projects/BVC/6.jpg";
import bvc7 from "../assets/projects/BVC/7.jpg";
import bvc8 from "../assets/projects/BVC/8.jpg";
import fp1 from "../assets/projects/FP/FP1.jpg";
import fp2 from "../assets/projects/FP/FP2.jpg";
import fp3 from "../assets/projects/FP/FP3.jpg";
import fp4 from "../assets/projects/FP/FP4.jpg";
import fp5 from "../assets/projects/FP/FP5.jpg";
import fp6 from "../assets/projects/FP/FP6.jpg";
import fp7 from "../assets/projects/FP/FP7.jpg";
import fp8 from "../assets/projects/FP/FP8.jpg";
import fp9 from "../assets/projects/FP/FP9.jpg";
import fp10 from "../assets/projects/FP/FP10.jpg";
import fp11 from "../assets/projects/FP/FP11.jpg";
import fp12 from "../assets/projects/FP/FP12.jpg";
import fp13 from "../assets/projects/FP/FP13.jpg";
import oldPortfolio from "../assets/projects/PF/1.jpg";
import oldPortfolio2 from "../assets/projects/PF/2.jpg";
import oldPortfolio3 from "../assets/projects/PF/3.jpg";
import oldPortfolio4 from "../assets/projects/PF/4.jpg";
import oldPortfolio5 from "../assets/projects/PF/5.jpg";
import oldPortfolio6 from "../assets/projects/PF/6.jpg";
import sariSari from "../assets/projects/SS/1.jpg";
import sariSari2 from "../assets/projects/SS/2.jpg";
import researchConference from "../assets/projects/CW/1.jpg";
import researchConference2 from "../assets/projects/CW/2.jpg";
import researchConference3 from "../assets/projects/CW/3.jpg";
import researchConference4 from "../assets/projects/CW/4.jpg";
import researchConference5 from "../assets/projects/CW/5.jpg";
import researchConference6 from "../assets/projects/CW/6.jpg";
import researchConference7 from "../assets/projects/CW/7.jpg";
import researchConference8 from "../assets/projects/CW/8.jpg";
import mrAssistance from "../assets/projects/MR/1.png";
import dentalWebsite from "../assets/projects/DW/1.jpg";
import dentalWebsite2 from "../assets/projects/DW/2.jpg";
import dentalWebsite3 from "../assets/projects/DW/3.jpg";
import dentalWebsite4 from "../assets/projects/DW/4.jpg";
import dentalWebsite5 from "../assets/projects/DW/5.jpg";
import dentalWebsite6 from "../assets/projects/DW/6.jpg";
import dentalWebsite7 from "../assets/projects/DW/7.jpg";
import rolePlayingGame from "../assets/projects/RPG/1.jpg";
import rolePlayingGame2 from "../assets/projects/RPG/2.jpg";
import rolePlayingGame3 from "../assets/projects/RPG/3.jpg";
import rolePlayingGame4 from "../assets/projects/RPG/4.jpg";  
import calorieCounter from "../assets/projects/CC/1.jpg";
import randomBackgroundColorChanger from "../assets/projects/BCC/1.jpg";


const PROJECTS_PER_PAGE = 6;

const projects = [
  {
    title: "Blockchain-Voting-App",
    mainImage: bvc2,
    description: "A decentralized voting application built on blockchain technology ensuring transparency, security, and immutable voting records. Features wallet integration, smart contract-based vote counting, and real-time results display. This project demonstrates the potential of blockchain in creating tamper-proof democratic systems.",
    tech: [
      <SiHtml5 className="tech-icon" color="#E44D26" />, 
      <SiCss3 className="tech-icon" color="#1572B6" />, 
      <SiJavascript className="tech-icon" color="#F7DF1E" />,
      <SiSolidity className="tech-icon" color="#363636" />,
      <FaWallet className="tech-icon" color="#F6851B" />
    ],
    liveDemo: "https://archieew.github.io/Blockchain-Voting-App/",
    github: "https://github.com/archieew/Blockchain-Voting-App",
    galleryImages: [bvc1, bvc2, bvc3, bvc4, bvc5, bvc6, bvc7, bvc8],
  },
  {
    title: "FP-Cuisines",
    mainImage: fp13,
    description: "An elegant restaurant website showcasing Filipino cuisine with beautiful food photography and an interactive menu. Features responsive design, smooth animations, and an intuitive user experience. Built with modern web technologies to create an engaging online presence for food enthusiasts.",
    tech: [
      <SiHtml5 className="tech-icon" color="#E44D26" />, 
      <SiCss3 className="tech-icon" color="#1572B6" />, 
      <SiJavascript className="tech-icon" color="#F7DF1E" />,
    ],
    liveDemo: "https://archieew.github.io/FP-Cuisines/",
    github: "https://github.com/archieew/FP-Cuisines",
    galleryImages: [fp1, fp2, fp3, fp4, fp5, fp6, fp7, fp8, fp9, fp10, fp11, fp12, fp13],
  },
  {
    title: "Old-Portfolio",
    mainImage: oldPortfolio,
    description: "My first portfolio website showcasing my journey as a web developer. Features a clean, minimalist design with smooth scrolling effects and interactive elements. This project marked my entry into professional web development and demonstrates my growth in creating user-friendly interfaces.",
    tech: [ <SiHtml5 className="tech-icon" color="#E44D26" />, 
      <SiCss3 className="tech-icon" color="#1572B6" />, 
      <SiJavascript className="tech-icon" color="#F7DF1E" />,
      
    ],
    liveDemo: "https://archieew.github.io/portfolio.github.io/",
    github: "https://github.com/archieew/portfolio.github.io",
    galleryImages: [oldPortfolio, oldPortfolio2, oldPortfolio3, oldPortfolio4, oldPortfolio5, oldPortfolio6],
  },
  {
    title: "Sari-Sari-Store App",
    mainImage: sariSari,
    description: "A digital solution for traditional Filipino neighborhood stores (Sari-Sari stores). Built with Angular and TypeScript, this application helps store owners manage inventory, track sales, and serve customers more efficiently. Features real-time updates and a user-friendly interface designed for small business operations.",
    tech: [<SiAngular className="tech-icon" color="#DD0031" />,
    <SiHtml5 className="tech-icon" color="#E44D26" />, 
    <SiCss3 className="tech-icon" color="#1572B6" />, 
    <SiTypescript className="tech-icon" color="#3178C6" />],
    liveDemo: "https://sarisaristore.netlify.app/",
    github: "https://github.com/archieew/Sari-sari-store-app",
    galleryImages: [sariSari, sariSari2],
  },
  {
    title: "Research Conference Website",
    mainImage: researchConference,
    description: "A comprehensive conference management platform designed for academic research events. Features speaker registration, agenda management, attendee registration, and real-time updates. Built with Angular and TypeScript, it provides a professional platform for organizing and promoting research conferences with modern UI/UX design.",
    tech: [<SiAngular className="tech-icon" color="#DD0031" />,
    <SiTypescript className="tech-icon" color="#3178C6" />,
    <SiHtml5 className="tech-icon" color="#E44D26" />,
    <SiCss3 className="tech-icon" color="#1572B6" />],
    liveDemo: "https://researchconferences.netlify.app/home",
    github: "https://github.com/archieew/Corporate-Project-Website",
    galleryImages: [researchConference, researchConference2, researchConference3, researchConference4, researchConference5, researchConference6, researchConference7, researchConference8],
  },
  {
    title: "Mr-Assistance-App",
    mainImage: mrAssistance,
    description: "A mobile assistance application built with Flutter and Firebase for real-time communication and support services. Features include live chat, location sharing, emergency assistance, and user authentication. This cross-platform app demonstrates modern mobile development practices with cloud integration and real-time functionality.",
    tech: [<SiFlutter className="tech-icon" color="#02569B" />, 
    <SiDart className="tech-icon" color="#0175C2" />, 
    <SiAndroidstudio className="tech-icon" color="#3DDC84" />, 
    <SiFirebase className="tech-icon" color="#FFCA28" />],
    liveDemo: "https://youtu.be/u3EVoa0EAXQ",
    github: "https://github.com/archieew/Mr-Assistance-App",
    galleryImages: [mrAssistance],
  },
  {
    title: "Dental-Website",
    mainImage: dentalWebsite,
    description: "A complete dental clinic website with appointment booking system, patient management, and service showcase. Built with PHP and MySQL, featuring user authentication, appointment scheduling, service information, and contact forms. This full-stack solution demonstrates database integration and server-side development skills.",
    tech: [<SiHtml5 className="tech-icon" color="#E44D26" />, 
    <SiCss3 className="tech-icon" color="#1572B6" />, 
    <SiJavascript className="tech-icon" color="#F7DF1E" />, 
    <SiPhp className="tech-icon" color="#777BB4" />, 
    <SiMysql className="tech-icon" color="#4479A1" />,
    <SiXampp className="tech-icon" color="#FB7A24" />],
    liveDemo: "https://archieew.github.io/DentalWebsite/",
    github: "https://github.com/archieew/Dental_Website",
    galleryImages: [dentalWebsite, dentalWebsite2, dentalWebsite3, dentalWebsite4, dentalWebsite5, dentalWebsite6, dentalWebsite7],
    },
    {
      title: "Role-Playing-Game",
      mainImage: rolePlayingGame,
      description: "A modern, interactive web application that generates beautiful color combinations with multiple modes, animations, and advanced features. Built with vanilla HTML, CSS, and JavaScript.",
      tech: [
        <SiHtml5 className="tech-icon" color="#E44D26" />, 
        <SiCss3 className="tech-icon" color="#1572B6" />, 
        <SiJavascript className="tech-icon" color="#F7DF1E" />
      ],
      liveDemo: "https://archieew.github.io/Role-Playing-Game/",
      github: "https://github.com/archieew/Random-Background-Color-Changer?tab=readme-ov-file",
      galleryImages: [rolePlayingGame, rolePlayingGame2, rolePlayingGame3, rolePlayingGame4],
    },
    {
      title: "Calorie-Counter",
      mainImage: calorieCounter,
      description: "A beautiful, modern web app for tracking your daily calories, macros, and exercise. Built with vanilla JavaScript, HTML, and CSS.",
      tech: [
        <SiHtml5 className="tech-icon" color="#E44D26" />, 
        <SiCss3 className="tech-icon" color="#1572B6" />, 
        <SiJavascript className="tech-icon" color="#F7DF1E" />,
        <SiPhp className="tech-icon" color="#777BB4" />
      ],
      liveDemo: "https://archieew.github.io/Calorie-Counter/",
      github: "https://github.com/archieew/Calorie-Counter",
      galleryImages: [calorieCounter],
    },
    {
      title: "Random-Background-Color-Changer",
      mainImage: randomBackgroundColorChanger,
      description: "A modern, interactive web application that generates beautiful color combinations with multiple modes, animations, and advanced features. Built with vanilla HTML, CSS, and JavaScript.",
      tech: [
        <SiHtml5 className="tech-icon" color="#E44D26" />, 
        <SiCss3 className="tech-icon" color="#1572B6" />, 
        <SiJavascript className="tech-icon" color="#F7DF1E" />
      ],
      liveDemo: "https://archieew.github.io/Random-Background-Color-Changer/",
      github: "https://github.com/archieew/Random-Background-Color-Changer",
      galleryImages: [randomBackgroundColorChanger],
    },



];

const Projects = () => {
  const [page, setPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [descriptionProject, setDescriptionProject] = useState<any>(null);
  
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const startIdx = (page - 1) * PROJECTS_PER_PAGE;
  const endIdx = startIdx + PROJECTS_PER_PAGE;
  const pagedProjects = projects.slice(startIdx, endIdx);

  const handleGalleryOpen = (project: any) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const handleGalleryClose = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const handleDescriptionOpen = (project: any) => {
    setDescriptionProject(project);
  };

  const handleDescriptionClose = () => {
    setDescriptionProject(null);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.galleryImages.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.galleryImages.length - 1 : prev - 1
      );
    }
  };

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
            <button className="gallery-nav-btn gallery-prev" onClick={prevImage}>
              ‹
            </button>
            <div className="gallery-image-container">
              <img 
                src={selectedProject.galleryImages[currentImageIndex]} 
                alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                className="gallery-main-image"
              />
              <div className="gallery-counter">
                {currentImageIndex + 1} of {selectedProject.galleryImages.length}
              </div>
            </div>
            <button className="gallery-nav-btn gallery-next" onClick={nextImage}>
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
      <div className="projects-grid">
        {pagedProjects.map((proj, idx) => (
          <ProjectCard 
            key={idx} 
            {...proj} 
            onGalleryOpen={() => handleGalleryOpen(proj)}
            onDescriptionOpen={() => handleDescriptionOpen(proj)}
          />
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
        {[...Array(totalPages)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => setPage(idx + 1)}
            className={page === idx + 1 ? "active" : ""}
          >
            {idx + 1}
          </button>
        ))}
        <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>Next</button>
      </div>
      
      {descriptionProject && (
        <div className="description-popup-overlay" onClick={handleDescriptionClose}>
          <div className="description-popup" onClick={(e) => e.stopPropagation()}>
            <div className="description-popup-header">
              <h2 className="description-popup-title">{descriptionProject.title}</h2>
              <button className="description-popup-close" onClick={handleDescriptionClose}>
                ✕
              </button>
            </div>
            <div className="description-popup-content">
              <img 
                src={descriptionProject.mainImage} 
                alt={descriptionProject.title} 
                className="description-popup-image"
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
