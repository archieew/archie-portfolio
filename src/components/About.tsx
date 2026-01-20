import "./styles/About.css";
import { useState } from "react";
import { SiJavascript, SiHtml5, SiCss3, SiDart, SiAngular, SiReact, SiFlutter, SiBootstrap, SiWordpress, SiMongodb, SiMysql, SiPhp, SiFlask, SiNodedotjs, SiExpress, SiVite, SiTailwindcss, SiAdobephotoshop, SiAdobepremierepro, SiAdobeillustrator, SiCanva, SiFigma, SiGit, SiGithub, SiLaravel, SiLumen, SiNextdotjs, SiDocker, SiTypescript, SiPostgresql, SiJsonwebtokens } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import resumePDF from "../assets/Custodio_Archie_Resume.pdf";
import TypingText from "./TypingText";

// Button text variations for typing effect
const buttonTexts = [
  "Download my resume",
  "Get my CV"
];

const About = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleResumeClick = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Custodio_Archie_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show popup message
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Hide after 3 seconds
  };

  return (
    <div className="about-container">
      <div className="about-intro">
        <div className="intro-text">
          Hi, I am <span className="highlight-name">Archie</span> - a Software Engineer / Full Stack Developer tech entrepreneur who thrives on solving complex problems and building meaningful solutions.
          <br /><br />
          My expertise spans from full-stack development, backend infrastructure, cloud systems, API design, and software engineering. I enjoy the challenges of bringing ideas to life, leveling up my coding skills through practice and consistency, and understanding complex systems and improving debugging skills. I am also interested in building meaningful projects that challenge me.
          <br /><br />
          Beyond coding, I'm passionate about exploring other tech spaces and cultures. I'm continuously leveling up my skills and exploring AI advancements whenever I have free time.
          <br /><br />
          <span className="call-to-action">Let's connect - I'm always up for learning new experiences and ideas about technology.</span>
        </div>
      </div> 
      
      <div className="skills-section">
        <div className="skills-title">⚡ Stacks</div>
        <div className="skills-carousel-container">
          <div className="skills-grid">
            {/* First set of icons */}
            <SiJavascript title="JavaScript" />
            <SiTypescript title="TypeScript" />
            <SiHtml5 title="HTML5" />
            <SiCss3 title="CSS3" />
            <SiReact title="ReactJS" />
            <SiNextdotjs title="Next.js" />
            <SiAngular title="AngularJS" />
            <SiNodedotjs title="NodeJS" />
            <SiExpress title="ExpressJS" />
            <SiLaravel title="Laravel" />
            <SiLumen title="Lumen" />
            <SiPhp title="PHP" />
            <SiMongodb title="MongoDB" />
            <SiMysql title="MySQL" />
            <SiPostgresql title="PostgreSQL" />
            <TbApi title="REST API" />
            <SiDocker title="Docker" />
            <SiJsonwebtokens title="JWT" />
            <SiFlutter title="Flutter" />
            <SiDart title="Dart" />
            <SiFlask title="Flask" />
            <SiVite title="ViteJS" />
            <SiTailwindcss title="TailwindCSS" />
            <SiBootstrap title="Bootstrap" />
            <SiWordpress title="Wordpress" />
            {/* Duplicate set for seamless infinite loop */}
            <SiJavascript title="JavaScript" />
            <SiTypescript title="TypeScript" />
            <SiHtml5 title="HTML5" />
            <SiCss3 title="CSS3" />
            <SiReact title="ReactJS" />
            <SiNextdotjs title="Next.js" />
            <SiAngular title="AngularJS" />
            <SiNodedotjs title="NodeJS" />
            <SiExpress title="ExpressJS" />
            <SiLaravel title="Laravel" />
            <SiLumen title="Lumen" />
            <SiPhp title="PHP" />
            <SiMongodb title="MongoDB" />
            <SiMysql title="MySQL" />
            <SiPostgresql title="PostgreSQL" />
            <TbApi title="REST API" />
            <SiDocker title="Docker" />
            <SiJsonwebtokens title="JWT" />
            <SiFlutter title="Flutter" />
            <SiDart title="Dart" />
            <SiFlask title="Flask" />
            <SiVite title="ViteJS" />
            <SiTailwindcss title="TailwindCSS" />
            <SiBootstrap title="Bootstrap" />
            <SiWordpress title="Wordpress" />
          </div>
        </div>
      </div>
      <div className="skills-section">
        <div className="skills-title">🧰 Tool Kits</div>
        <div className="skills-carousel-container">
          <div className="skills-grid tools-grid">
            {/* First set of icons */}
            <SiAdobephotoshop title="Adobe Photoshop" />
            <SiAdobepremierepro title="Adobe Premiere" />
            <SiAdobeillustrator title="Adobe Illustrator" />
            <SiCanva title="Canva" />
            <SiFigma title="Figma" />
            <SiGit title="Git" />
            <SiGithub title="Github" />
            {/* Duplicate set for seamless infinite loop */}
            <SiAdobephotoshop title="Adobe Photoshop" />
            <SiAdobepremierepro title="Adobe Premiere" />
            <SiAdobeillustrator title="Adobe Illustrator" />
            <SiCanva title="Canva" />
            <SiFigma title="Figma" />
            <SiGit title="Git" />
            <SiGithub title="Github" />
            {/* Third set to fill visible area */}
            <SiAdobephotoshop title="Adobe Photoshop" />
            <SiAdobepremierepro title="Adobe Premiere" />
            <SiAdobeillustrator title="Adobe Illustrator" />
            <SiCanva title="Canva" />
            <SiFigma title="Figma" />
            <SiGit title="Git" />
            <SiGithub title="Github" />
            {/* Fourth set for smooth transition */}
            <SiAdobephotoshop title="Adobe Photoshop" />
            <SiAdobepremierepro title="Adobe Premiere" />
            <SiAdobeillustrator title="Adobe Illustrator" />
            <SiCanva title="Canva" />
            <SiFigma title="Figma" />
            <SiGit title="Git" />
            <SiGithub title="Github" />
          </div>
        </div>
      </div>
      
      <div className="download-container">
        <button className="download-btn" onClick={handleResumeClick}>
          <span className="download-icon">📄</span>
          <TypingText texts={buttonTexts} typingSpeed={60} deletingSpeed={30} pauseDuration={3000} showCursor={false} />
        </button>
        <div className="download-text">
          <span className="download-description">Discover my full potential & expertise!</span>
          <span className="download-hint">PDF • Ready to view</span>
        </div>
      </div>
      
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-message">
            <div className="popup-content">
              <h3>Thank You! 🎉</h3>
              <p>Thank you for downloading my resume!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default About;
