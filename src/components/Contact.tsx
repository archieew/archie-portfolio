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

const CERTS_PER_PAGE = 16;

// Add your certificates here
const certificates: Certificate[] = [
  {
    id: 1,
    title: "Certificate Title",
    image: Cert1, // Replace with your image path
    issuer: "Issuing Organization",
    date: "Date Received"
  },
  {
    id: 2,
    title: "Certificate Title",
    image: Cert2, // Replace with your image path
    issuer: "Issuing Organization",
    date: "Date Received"
  },
  {
    id: 3,
    title: "Certificate Title",
    image: Cert3, // Replace with your image path
    issuer: "Issuing Organization",
    date: "Date Received"
  },
  {
    id: 4,
    title: "Certificate Title",
    image: Cert4, // Replace with your image path
    issuer: "Issuing Organization",
    date: "Date Received"
  },
  {
    id: 5,
    title: "Certificate Title",
    image: Cert5, // Replace with your image path
    issuer: "Issuing Organization",
    date: "Date Received"
  },
  {
    id: 6,
    title: "Certificate Title",
    image: Cert6, // Replace with your image path
    issuer: "Issuing Organization",
    date: "Date Received"
  },
  {
    id: 7,
    title: "Certificate Title",
    image: Cert7, // Replace with your image path
    issuer: "Issuing Organization",
    date: "Date Received"
  },
  {
    id: 8,
    title: "Certificate Title",
    image: Cert8, // Replace with your image path
    issuer: "Issuing Organization",
    date: "Date Received"
  },
  {
    id: 9,
    title: "Certificate Title",
    image: Cert9, // Replace with your image path
    issuer: "Issuing Organization",
    date: "Date Received"
  },
  {
    id: 10,
    title: "Certificate Title",
    image: Cert10, // Replace with your image path
    issuer: "Issuing Organization",
    date: "Date Received"
  },
  {
    id: 11,
    title: "Certificate Title",
    image: Cert11, // Replace with your image path
    issuer: "Issuing Organization",
    date: "Date Received"
  },
  {
    id: 12,
    title: "Certificate Title",
    image: Cert12, // Replace with your image path
    issuer: "Issuing Organization",
    date: "Date Received"
  },
  {
    id: 13,
    title: "Certificate Title",
    image: Cert13, // Replace with your image path
    issuer: "Issuing Organization",
    date: "Date Received"
  },
  {
    id: 14,
    title: "Certificate Title",
    image: Cert14, // Replace with your image path
    issuer: "Issuing Organization",
    date: "Date Received"
  },
  {
    id: 15,
    title: "Certificate Title",
    image: Cert15, // Replace with your image path
    issuer: "Issuing Organization",
    date: "Date Received"
  },
  {
    id: 16,
    title: "Certificate Title",
    image: Cert16, // Replace with your image path
    issuer: "Issuing Organization",
    date: "Date Received"
  },
  {
    id: 17,
    title: "Certificate Title",
    image: Cert17, // Replace with your image path
    issuer: "Issuing Organization",
    date: "Date Received"
  },
  {
    id: 18,
    title: "Certificate Title",
    image: Cert18, // Replace with your image path
    issuer: "Issuing Organization",
    date: "Date Received"
  },
  {
    id: 19,
    title: "Certificate Title",
    image: Cert19, // Replace with your image path
    issuer: "Issuing Organization",
    date: "Date Received"
  },
  // Add more certificates following the same format
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
