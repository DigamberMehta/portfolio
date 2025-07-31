import { useState, useEffect } from "react";
import { ThreeBackground } from "./components/ThreeBackground.jsx";
import { ParticleField } from "./components/ParticleField.jsx";
import { CursorFollow } from "./components/CursorFollow.jsx";
import { Navigation } from "./components/Navigation.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Projects } from "./components/Projects.jsx";
import { TechStack } from "./components/TechStack.jsx";
import { Contact } from "./components/Contact.jsx";
import { ErrorBoundary } from "./components/ErrorBoundary.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Update document title
    document.title = "Alex Chen - Full Stack Developer";

    // Apply dark mode class
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen relative overflow-x-hidden">
      {/* 3D Background with Error Boundary */}
      <ErrorBoundary>
        <ThreeBackground />
      </ErrorBoundary>

      {/* Enhanced Particle Field */}
      <ErrorBoundary>
        <ParticleField />
      </ErrorBoundary>

      {/* Cursor Follow Effect */}
      <CursorFollow />

      {/* Navigation */}
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </main>
    </div>
  );
}

export default App;
