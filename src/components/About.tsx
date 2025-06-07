import "./styles/About.css";
import { useState } from "react";
import { SiJavascript, SiHtml5, SiCss3, SiDart, SiAngular, SiReact, SiFlutter, SiBootstrap, SiWordpress, SiMongodb, SiMysql, SiPhp, SiFlask, SiNodedotjs, SiExpress, SiVite, SiTailwindcss, SiAdobephotoshop, SiAdobepremierepro, SiAdobeillustrator, SiCanva, SiFigma, SiGit, SiGithub } from "react-icons/si";
import resumePDF from "../assets/Custodio_Archie_Resume.pdf";

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
          Hey! I'm <span className="highlight-name">Archie Custodio</span> and I graduated from <a href="https://www.hau.edu.ph/" target="_blank" rel="noopener noreferrer" className="futuristic-link"> Holy Angel University</a> with a degree of Bachelor of Science in Information Technology with specialization in Web Development. I am a passionate full-stack developer who loves building clean, user-friendly web apps. I'm always excited to take on new challenges that help me grow and make an impact.  I'm confident in using tools like ReactJS, AngularJS, ViteJS, ExpressJS, NodeJS, and Figma and always up for learning more.
          <br /><br />
          I've worked on real projects during my internship at 
          <a href="https://itsquarehub.com/" target="_blank" rel="noopener noreferrer" className="futuristic-link"> IT Squarehub</a>,
          where I designed visuals and interfaces that blend functionality with great user experience.
          <br /> <br />
          When I'm not coding, you'll probably find me gaming or leveling up my skills through online courses. <span className="call-to-action">Let's build something awesome together!</span>
        </div>
      </div> 
      
      <div className="skills-section">
        <div className="skills-title">⚡ Stacks</div>
        <div className="skills-carousel-container">
          <div className="skills-grid">
            {/* 3x full set for seamless loop */}
            <SiJavascript title="JavaScript" />
            <SiHtml5 title="HTML5" />
            <SiCss3 title="CSS3" />
            <SiDart title="Dart" />
            <SiAngular title="AngularJS" />
            <SiReact title="ReactJS" />
            <SiFlutter title="Flutter" />
            <SiBootstrap title="Bootstrap" />
            <SiWordpress title="Wordpress" />
            <SiMongodb title="MongoDB" />
            <SiMysql title="MySQL" />
            <SiPhp title="PHP" />
            <SiFlask title="Flask" />
            <SiNodedotjs title="NodeJS" />
            <SiExpress title="ExpressJS" />
            <SiVite title="ViteJS" />
            <SiTailwindcss title="TailwindCSS" />
          </div>
        </div>
      </div>
      <div className="skills-section">
        <div className="skills-title">🧰 Tool Kits</div>
        <div className="skills-carousel-container">
          <div className="skills-grid">
            {/* 3x full set for seamless loop */}
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
          Download my resume
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
