import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggleButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const html = document.documentElement;

    if (savedTheme === "dark") {
      html.setAttribute("data-theme", "dark");
      setIsDarkMode(true);
    } else {
      html.setAttribute("data-theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);

    const html = document.documentElement;
    html.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-md transition-colors duration-300 bg-primary text-on-primary hover:bg-gray-600"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
