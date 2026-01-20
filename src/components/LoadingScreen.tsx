import { useEffect, useState } from "react";
import "./styles/LoadingScreen.css";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // Start fade out animation
          setTimeout(() => setFadeOut(true), 200);
          // Complete loading after fade
          setTimeout(() => onLoadingComplete(), 800);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
      {/* Animated background orbs */}
      <div className="loading-orb loading-orb-1"></div>
      <div className="loading-orb loading-orb-2"></div>
      <div className="loading-orb loading-orb-3"></div>
      
      <div className="loading-content">
        {/* Logo/Name */}
        <div className="loading-logo">
          <span className="loading-letter">A</span>
          <span className="loading-letter">r</span>
          <span className="loading-letter">c</span>
          <span className="loading-letter">h</span>
          <span className="loading-letter">i</span>
          <span className="loading-letter">e</span>
        </div>
        
        {/* Tagline */}
        <p className="loading-tagline">Building the future, one line at a time</p>
        
        {/* Progress bar */}
        <div className="loading-progress-container">
          <div 
            className="loading-progress-bar" 
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>
        
        {/* Progress percentage */}
        <span className="loading-percentage">{Math.min(Math.round(progress), 100)}%</span>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="loading-grid"></div>
    </div>
  );
};

export default LoadingScreen;
