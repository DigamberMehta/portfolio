import { useState, useEffect } from "react";
import { ThreeBackground } from "./components/ThreeBackground";
import { ParticleField } from "./components/ParticleField";
import { CursorFollow } from "./components/CursorFollow";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { TechStack } from "./components/TechStack";
import { Contact } from "./components/Contact";
import { ErrorBoundary } from "./components/ErrorBoundary";

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
