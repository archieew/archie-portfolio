import "./styles/Resume.css";
import { FaGraduationCap, FaBriefcase, FaCalendar, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import hauLogo from "../assets/logos/HAU.png";
import itsquareLogo from "../assets/logos/ITS.jpg";

const Resume = () => {
  return (
    <div className="resume-container">
      {/* Education Section */}
      <div className="resume-section">
        <div className="section-header">
          <FaGraduationCap className="section-icon" />
          <h2>Education</h2>
        </div>
        <div className="timeline-container">
          <div className="resume-card">
            <div className="card-logo">
              <img src={hauLogo} alt="Holy Angel University" />
            </div>
            <div className="card-content">
              <h3 className="primary-title">Holy Angel University</h3>
              <p className="secondary-title">Bachelor of Science in Information Technology</p>
              <div className="badge-container">
                <div className="info-badge">
                  <FaBuilding className="badge-icon" />
                  Area of Specialization in Web Development
                </div>
                <div className="info-badge">
                  <FaMapMarkerAlt className="badge-icon" />
                  Angeles, Pampanga
                </div>
                <div className="info-badge">
                  <FaCalendar className="badge-icon" />
                  2021 - 2025
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Experience Section */}
      <div className="resume-section">
        <div className="section-header">
          <FaBriefcase className="section-icon" />
          <h2>Professional Experiences</h2>
        </div>
        <div className="timeline-container">
          <div className="resume-card">
            <div className="card-logo">
              <img src={itsquareLogo} alt="IT Squarehub" />
            </div>
            <div className="card-content">
              <h3 className="primary-title">IT SQUAREHUB</h3>
              <p className="secondary-title">Creative Designer</p>
              <div className="badge-container">
                <div className="info-badge">
                  <FaBuilding className="badge-icon" />
                  Internship/On the Job Training
                </div>
                <div className="info-badge">
                  <FaMapMarkerAlt className="badge-icon" />
                  Angeles, Pampanga
                </div>
                <div className="info-badge">
                  <FaCalendar className="badge-icon" />
                  June 2024 - October 2024
                </div>
              </div>
              <div className="responsibilities">
                <ul>
                  <li>Formulate design strategies that align with client objectives and target demographics</li>
                  <li>Create high-quality visuals for digital and print media, ensuring brand consistency</li>
                  <li>Design intuitive interfaces for websites and mobile apps, focusing on user experience (UX)</li>
                  <li>Edit and retouch photos to enhance visual appeal and ensure quality</li>
                  <li>Work closely with marketing, product, and development teams to ensure cohesive project execution</li>
                  <li>Design engaging visuals for email marketing, web content, and social media campaigns</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
