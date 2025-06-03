import "./styles/Sidebar.css";
import profileImg from "../assets/profile.jpg"; 
import { FaGithub, FaMapMarkerAlt, FaLinkedin, FaGlobe, FaBriefcase, FaTwitter, FaSuitcase, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../assets/Asset 1.png";

const Sidebar = () => (
  <aside className="sidebar">
    <img src={profileImg} alt="Profile" className="sidebar__avatar" />
    <h2 className="sidebar__name">Archie D. Custodio</h2>
    <div className="sidebar__tagline">Building until Scale is an Issue 🚀</div>
    <hr className="sidebar__divider" />

    <div className="sidebar__info">
      <a className="sidebar__info-item" href="https://www.google.com/maps/place/Pampanga,+Philippines" target="_blank" rel="noopener noreferrer">
        <div className="sidebar__icon-box">
          <FaMapMarkerAlt className="sidebar__icon" />
        </div>
        <div>
          <div className="sidebar__label">LOCATION</div>
          <div className="sidebar__value">Pampanga, Philippines</div>
        </div>
      </a>
      <a className="sidebar__info-item" href="mailto:archieew2custodio@gmail.com" target="_blank" rel="noopener noreferrer">
        <div className="sidebar__icon-box">
          <MdEmail className="sidebar__icon" />
        </div>
        <div>
          <div className="sidebar__label">EMAIL</div>
          <div className="sidebar__value">archieew2custodio@gmail.com</div>
        </div>
      </a>
      <a className="sidebar__info-item" href="https://github.com/archieew" target="_blank" rel="noopener noreferrer">
        <div className="sidebar__icon-box">
          <FaGithub className="sidebar__icon" />
        </div>
        <div>
          <div className="sidebar__label">GITHUB</div>  
          <div className="sidebar__value">@archieew</div>
        </div>
      </a>
      <a className="sidebar__info-item" href="https://www.linkedin.com/in/archie-custodio-0b29b2144/" target="_blank" rel="noopener noreferrer">
        <div className="sidebar__icon-box">
          <FaLinkedin className="sidebar__icon" />
        </div>
        <div>
          <div className="sidebar__label">LINKEDIN</div>
          <div className="sidebar__value">Archie Custodio</div>
        </div>
      </a>
    </div>

    <div className="sidebar__socials">
      <a href="https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-homepage" target="_blank" rel="noopener noreferrer" data-tooltip="Indeed">
        <FaGlobe className="sidebar__icon" />
      </a>
      <a href="https://Custodio-Archie.jobs180.com" target="_blank" rel="noopener noreferrer" data-tooltip="Jobs180">
        <FaBriefcase className="sidebar__icon" />
      </a>
      <a href="https://x.com/archiecustodioo" target="_blank" rel="noopener noreferrer" data-tooltip="Twitter">
        <FaTwitter className="sidebar__icon" />
      </a>
      <a href="https://ph.jobstreet.com/profile/archie-custodio-mM2R9wYQ3m" target="_blank" rel="noopener noreferrer" data-tooltip="JobStreet">
        <FaSuitcase className="sidebar__icon" />
      </a>
      <a href="https://discord.com/users/archieew" target="_blank" rel="noopener noreferrer" data-tooltip="Discord">
        <FaDiscord className="sidebar__icon" />
      </a>
    </div>

    <hr className="sidebar__divider" />

    <div className="sidebar__footer">
      <div style={{ display: "flex", alignItems: "center", gap: "0.5em", justifyContent: "center" }}>
        <span>© 2025</span>
        <img src={logo} alt="Logo" style={{ height: "1.2em", verticalAlign: "middle", filter: "invert(54%) sepia(94%) saturate(484%) hue-rotate(110deg) brightness(92%) contrast(91%)" }} />
      </div>
    </div>
  </aside>
);

export default Sidebar;
