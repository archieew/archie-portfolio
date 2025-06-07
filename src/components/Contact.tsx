import { useState } from "react";
import "./styles/Contact.css";
import Cert1 from "../assets/Cert1.jpg";
import Cert2 from "../assets/Cert2.jpg";  
import Cert3 from "../assets/Cert3.jpg";
import Cert4 from "../assets/Cert4.jpg";
import Cert5 from "../assets/Cert5.jpg";
import Cert6 from "../assets/Cert6.jpg";
import Cert7 from "../assets/Cert7.jpg";
import Cert8 from "../assets/Cert8.jpg";
import Cert9 from "../assets/Cert9.jpg";
import Cert10 from "../assets/Cert10.jpg";
import Cert11 from "../assets/Cert11.jpg";
import Cert12 from "../assets/Cert12.jpg";
import Cert13 from "../assets/Cert13.jpg";
import Cert14 from "../assets/Cert14.jpg";
import Cert15 from "../assets/Cert15.jpg";
import Cert16 from "../assets/Cert16.jpg";
import Cert17 from "../assets/Cert17.jpg";
import Cert18 from "../assets/Cert18.jpg";
import Cert19 from "../assets/Cert19.jpg";


interface Certificate {
  id: number;
  title: string;
  image: string;
  issuer: string;
  date: string;
}

const CERTS_PER_PAGE = 6;


const certificates: Certificate[] = [
  {
    id: 1,
    title: "Responsive Web Design",
    image: Cert1, 
    issuer: "freeCodeCamp",
    date: "2024"
  },
  {
    id: 2,
    title: "Red Hat System Administration I",
    image: Cert2,
    issuer: "Red Hat",
    date: "2022"
  },
  {
    id: 3,
    title: "ReactJS for Beginners",
    image: Cert3,
    issuer: "Simplilearn",
    date: "2025"
  },
  {
    id: 4,
    title: "PSM in Cybersecurity",
    image: Cert4,
    issuer: "Holy Angel University",
    date: "2025"
  },
  {
    id: 5,
    title: "TryHackMe Level 2",
    image: Cert5,
    issuer: "TryHackMe",
    date: "2022"
  },
  {
    id: 6,
    title: "TryHackMe Level 1",
    image: Cert6,
    issuer: "TryHackMe",
    date: "2022"
  },
  {
    id: 7,
    title: "JavaScript Essentials 2",
    image: Cert7,
    issuer: "Cisco",
    date: "2025"
  },
  {
    id: 8,
    title: "JavaScript Essentials 1",
    image: Cert8,
    issuer: "Cisco",
    date: "2024"
  },
  {
    id: 9,
    title: "Introduction to Cybersecurity",
    image: Cert9,
    issuer: "Cisco",
    date: "2021"
  },
  {
    id: 10,
    title: "Introduction to Internet of Things",
    image: Cert10,
    issuer: "Cisco",
    date: "2021"
  },
  {
    id: 11,
    title: "Google Analytics",
    image: Cert11,
    issuer: "Google",
    date: "2023"
  },
  {
    id: 12,
    title: "Get Started with Google Analytics",
    image: Cert12,
    issuer: "Google",
    date: "2023"
  },
  {
    id: 13,
    title: "Git it Done",
    image: Cert13,
    issuer: "Holy Angel University",
    date: "2024"
  },
  {
    id: 14,
    title: "GA4 Data and Read Reports",
    image: Cert14,
    issuer: "Google",
    date: "2023"
  },
  {
    id: 15,
    title: "CyberOps Associate",
    image: Cert15,
    issuer: "LeetCode",
    date: "2023"
  },
  {
    id: 16,
    title: "SEO Rank & Rise",
    image: Cert16,
    issuer: "Holy Angel University",
    date: "2024"
  },
  {
    id: 17,
    title: "STS",
    image: Cert17,
    issuer: "Holy Angel University",
    date: "2021"
  },
  {
    id: 18,
    title: "Getting Started with ReactJS",
    image: Cert18,
    issuer: "Simplilearn",
    date: "2025"
  },
  {
    id: 19,
    title: "AWS Academy Graduate",
    image: Cert19,
    issuer: "AWS Academy",
    date: "2024"
  }
];


const Contact = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(certificates.length / CERTS_PER_PAGE);
  const startIdx = (page - 1) * CERTS_PER_PAGE;
  const endIdx = startIdx + CERTS_PER_PAGE;
  const pagedCertificates = certificates.slice(startIdx, endIdx);

  const placeholders = CERTS_PER_PAGE - pagedCertificates.length;

  const handleCertClick = (certificate: Certificate) => {
    setSelectedCert(certificate);
  };

  const handleCloseModal = () => {
    setSelectedCert(null);
  };

  return (
    <div className="certificates-container">
      <h2 className="certificates-title"></h2>
      <div className="certificates-grid">
        {pagedCertificates.map((cert) => (
          <div key={cert.id} className="certificate-card" onClick={() => handleCertClick(cert)}>
            <img src={cert.image} alt={cert.title} className="certificate-image" />
            <div className="certificate-info">
              <h3 className="certificate-title">{cert.title}</h3>
              <div className="certificate-details">
                <p className="certificate-issuer">{cert.issuer}</p>
                <span className="certificate-date">{cert.date}</span>
              </div>
            </div>
          </div>
        ))}
        {Array.from({ length: placeholders }).map((_, idx) => (
          <div key={`placeholder-${idx}`} className="certificate-card placeholder" />
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

      {selectedCert && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>×</button>
            <img src={selectedCert.image} alt={selectedCert.title} className="modal-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
