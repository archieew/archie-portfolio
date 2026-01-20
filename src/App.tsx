import { useState, useEffect } from "react";

import TopNav from "./components/TopNav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import LoadingScreen from "./components/LoadingScreen";
import FloatingParticles from "./components/FloatingParticles";
import ThemeToggle from "./components/ThemeToggle";
import styles from "./App.module.css";
import "./App.css";
import Sidebar from "./components/Sidebar";

function App() {
  const [active, setActive] = useState("About");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Set initial theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const handlePageChange = (newPage: string) => {
    if (newPage !== active) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActive(newPage);
        setIsTransitioning(false);
      }, 200);
    }
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Show loading screen
  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <>
      {/* Floating particles background */}
      <FloatingParticles />
      
      {/* Theme toggle button */}
      <ThemeToggle />
      
      {/* Main content */}
      <div className={`${styles.container} fade-in-up`}>
        <div className={`${styles.sidebar} slide-in-left`}>
          <Sidebar />
        </div>
        <div className={`${styles.mainContent} slide-in-right`}>
          <TopNav active={active} setActive={handlePageChange} />
          <div className={`${styles.pageContent} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}>
            {active === "About" && <About />}
            {active === "Projects" && <Projects />}
            {active === "Certificates" && <Contact />}
            {active === "Resume" && <Resume />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;