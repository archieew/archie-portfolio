import React, { useState, type JSX } from "react";
import "./styles/TopNav.css";
import { FaBriefcase, FaFolderOpen, FaCertificate, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Asset 1.png";

const NAVS = ["About", "Projects", "Certificates", "Resume", "Contact"];

const PAGE_TITLES: Record<string, string> = {
  About: "About Archie",
  Projects: "Archie's Projects",
  Certificates: "Archie's Certificates",
  Contact: "Contact Archie",
  Resume: "Archie's Resume",
};

const PAGE_ICONS: Record<string, JSX.Element> = {
  About: <img src={logo} alt="Logo" style={{ height: "1.5em", marginRight: "0.5rem", verticalAlign: "middle" }} />,
  Projects: <FaFolderOpen style={{ marginRight: "0.5rem", color: "#f59e42" }} />,
  Certificates: <FaCertificate style={{ marginRight: "0.5rem", color: "#f472b6" }} />,
  Contact: <FaEnvelope style={{ marginRight: "0.5rem", color: "#10B981" }} />,
  Resume: <FaBriefcase style={{ marginRight: "0.5rem", color: "#facc15" }} />,
};

type TopNavProps = {
  active: string;
  setActive: (section: string) => void;
};

const TopNav: React.FC<TopNavProps> = ({ active, setActive }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (nav: string) => {
    setActive(nav);
    setIsMenuOpen(false);
  };

  return (
    <nav className="topnav">
      <div className="topnav-left">
        {PAGE_ICONS[active]}
        <span className="gradient-title">{PAGE_TITLES[active]}</span>
      </div>
      
      {/* Mobile menu button */}
      <button 
        className="mobile-menu-btn"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Desktop tabs */}
      <div className="topnav-tabs">
        {NAVS.map((nav) => (
          <button
            key={nav}
            className={active === nav ? "active" : ""}
            onClick={() => setActive(nav)}
          >
            {nav}
          </button>
        ))}
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setIsMenuOpen(false)}>
          <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
            {NAVS.map((nav) => (
              <button
                key={nav}
                className={`mobile-menu-item ${active === nav ? "active" : ""}`}
                onClick={() => handleNavClick(nav)}
              >
                {PAGE_ICONS[nav]}
                {nav}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default TopNav;
