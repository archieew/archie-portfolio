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


const PROJECTS_PER_PAGE = 6;

const projects = [
  {
    title: "Blockchain-Voting-App",
    mainImage: bvc2,
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

];

const Projects = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const startIdx = (page - 1) * PROJECTS_PER_PAGE;
  const endIdx = startIdx + PROJECTS_PER_PAGE;
  const pagedProjects = projects.slice(startIdx, endIdx);

  return (
    <div className="projects-container">
      <div className="projects-grid">
        {pagedProjects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
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
    </div>
  );
};

export default Projects;
