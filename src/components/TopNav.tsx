import React, { type JSX } from "react";
import "./styles/TopNav.css";
import { FaBriefcase, FaFolderOpen, FaCertificate } from "react-icons/fa";
import logo from "../assets/Asset 1.png";

const NAVS = ["About", "Projects", "Certificates", "Resume"];

const PAGE_TITLES: Record<string, string> = {
  About: "About Archie",
  Projects: "Archie's Projects",
  Certificates: "Archie's Certificates",
  Resume: "Archie's Resume",
};

const PAGE_ICONS: Record<string, JSX.Element> = {
  About: <img src={logo} alt="Logo" style={{ height: "1.5em", marginRight: "0.5rem", verticalAlign: "middle" }} />,
  Projects: <FaFolderOpen style={{ marginRight: "0.5rem", color: "#f59e42" }} />,
  Certificates: <FaCertificate style={{ marginRight: "0.5rem", color: "#f472b6" }} />,
  Resume: <FaBriefcase style={{ marginRight: "0.5rem", color: "#facc15" }} />,
};

type TopNavProps = {
  active: string;
  setActive: (section: string) => void;
};

const TopNav: React.FC<TopNavProps> = ({ active, setActive }) => (
  <nav className="topnav">
    <div className="topnav-left">
      {PAGE_ICONS[active]}
      <span className="gradient-title">{PAGE_TITLES[active]}</span>
    </div>
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
  </nav>
);

export default TopNav;
