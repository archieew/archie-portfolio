import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import "./styles/ThemeToggle.css";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <button 
      className={`theme-toggle ${isDark ? "dark" : "light"}`}
      onClick={() => setIsDark(!isDark)}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="toggle-track">
        <div className="toggle-thumb">
          {isDark ? (
            <FaMoon className="toggle-icon moon" />
          ) : (
            <FaSun className="toggle-icon sun" />
          )}
        </div>
        <div className="toggle-icons">
          <FaSun className="track-icon sun-icon" />
          <FaMoon className="track-icon moon-icon" />
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
