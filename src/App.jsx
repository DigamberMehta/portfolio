import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThreeBackground } from "./components/ThreeBackground.jsx";
import { ParticleField } from "./components/ParticleField.jsx";
import { CursorFollow } from "./components/CursorFollow.jsx";
import { Navigation } from "./components/Navigation.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Projects } from "./components/Projects.jsx";
import { TechStack } from "./components/TechStack.jsx";
import { Contact } from "./components/Contact.jsx";
import { ProjectDetails } from "./components/ProjectDetails.jsx";
import { ErrorBoundary } from "./components/ErrorBoundary.jsx";
import { personalInfo } from "./data/portfolio.js";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Update document title
    document.title = `${personalInfo.name} - ${personalInfo.title}`;
    console.log("App component mounted, title set to:", document.title);

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

  console.log("App component rendering with Router");

  return (
    <Router>
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
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Projects />
                  <TechStack />
                  <Contact />
                </>
              }
            />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route
              path="/test"
              element={
                <div className="p-20 text-center">
                  <h1 className="text-4xl text-white">Test Route Working!</h1>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
