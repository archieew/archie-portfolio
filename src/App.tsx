import { useState } from "react";

import TopNav from "./components/TopNav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import styles from "./App.module.css";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  const [active, setActive] = useState("About");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePageChange = (newPage: string) => {
    if (newPage !== active) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActive(newPage);
        setIsTransitioning(false);
      }, 150);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.mainContent}>
        <TopNav active={active} setActive={handlePageChange} />
        <div className={`${styles.pageContent} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}>
          {active === "About" && <About />}
          {active === "Projects" && <Projects />}
          {active === "Certificates" && <Contact />}
          {active === "Resume" && <Resume />}
        </div>
      </div>
    </div>
  );
}

export default App;