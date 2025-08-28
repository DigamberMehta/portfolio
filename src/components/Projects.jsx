import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import {
  ExternalLink,
  Github,
  Play,
  Star,
  Rocket,
  Code,
  Globe,
  ArrowRight,
  Eye,
} from "lucide-react";
import { projects } from "../data/portfolio";

export const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  console.log("=== PROJECTS COMPONENT DEBUG ===");
  console.log("Projects component rendering");

  const navigate = useNavigate();

  console.log("Navigate function from useNavigate:", navigate);
  console.log("Navigate function type:", typeof navigate);

  // Check if we're inside a Router context
  if (typeof navigate !== "function") {
    console.error("ERROR: useNavigate returned:", navigate);
    console.error("This means we're not inside a Router context!");
  }

  const handleProjectClick = (projectId) => {
    console.log("=== PROJECT CLICK DEBUG ===");
    console.log("Project clicked:", projectId);
    console.log("Project ID type:", typeof projectId);
    console.log("Navigate function:", navigate);
    console.log("Current window location:", window.location.href);

    try {
      const targetPath = `/project/${projectId}`;
      console.log("Attempting to navigate to:", targetPath);
      navigate(targetPath);
      console.log("Navigation call completed");
    } catch (error) {
      console.error("Navigation error:", error);
    }
  };

  return (
    <section id="projects" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-blue-900/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work, featuring cutting-edge technologies
            and innovative solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative perspective-container h-full"
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              style={{
                transformStyle: "preserve-3d",
                pointerEvents: "auto",
              }}
              onClick={(e) => {
                console.log("=== CARD CONTAINER CLICKED ===");
                console.log("Card clicked for project:", project.id);
                console.log("Event target:", e.target);
                console.log("Current target:", e.currentTarget);
              }}
            >
              {/* Project card glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden cursor-hover hover:border-cyan-400/50 transition-all duration-300 shadow-2xl h-full flex flex-col">
                {/* Animated background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-purple-500/5 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Project Image - Fixed height */}
                <div className="relative overflow-hidden flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg font-medium cursor-hover"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Play className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg font-medium cursor-hover"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Code className="w-4 h-4" />
                        Source Code
                      </motion.a>
                    </div>
                  </div>

                  {/* Featured Badge and Category */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {project.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-purple-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                    <span className="px-3 py-1 bg-gray-800/80 text-cyan-400 text-xs font-bold rounded-full border border-cyan-400/50">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content - Flexible height with consistent spacing */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-4 leading-relaxed line-clamp-3 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies - Fixed height section */}
                  <div className="mb-6 flex-shrink-0">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700/50 text-cyan-400 text-sm rounded-full border border-gray-600 hover:border-cyan-400/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 6 && (
                        <span className="px-3 py-1 bg-gray-700/50 text-gray-400 text-sm rounded-full border border-gray-600">
                          +{project.technologies.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quick Stats - Fixed height section */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm flex-shrink-0">
                    {project.keyFeatures && (
                      <div className="text-gray-400">
                        <span className="text-cyan-400 font-medium">
                          {project.keyFeatures.length}
                        </span>{" "}
                        Key Features
                      </div>
                    )}
                    {project.impact && (
                      <div className="text-gray-400">
                        <span className="text-green-400 font-medium">
                          {project.impact.length}
                        </span>{" "}
                        Impact Metrics
                      </div>
                    )}
                  </div>

                  {/* Action Buttons - Fixed at bottom */}
                  <div className="flex gap-3 pt-4 border-t border-gray-700/50 mt-auto flex-shrink-0">
                    <button
                      onClick={(e) => {
                        console.log("=== VIEW DETAILS BUTTON CLICKED ===");
                        console.log("Project ID:", project.id);
                        console.log("Project Title:", project.title);
                        console.log("Event:", e);
                        console.log("Navigate function:", navigate);

                        e.preventDefault();
                        e.stopPropagation();

                        try {
                          const targetPath = `/project/${project.id}`;
                          console.log("Navigating to:", targetPath);
                          navigate(targetPath);
                          console.log("Navigation call completed successfully");
                        } catch (error) {
                          console.error("Navigation failed:", error);
                          // Fallback to window.location
                          console.log("Trying fallback navigation...");
                          window.location.href = `/project/${project.id}`;
                        }
                      }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex-1 justify-center"
                      style={{
                        pointerEvents: "auto",
                        zIndex: 10,
                        position: "relative",
                      }}
                      onMouseEnter={() =>
                        console.log(`Button hover - Project ${project.id}`)
                      }
                      onMouseLeave={() =>
                        console.log(`Button leave - Project ${project.id}`)
                      }
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>

                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-hover"
                      whileHover={{ x: 4 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Globe className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 text-gray-400 hover:text-white transition-colors cursor-hover"
                      whileHover={{ x: 4 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <motion.button
            className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all cursor-hover flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Rocket className="w-5 h-5" />
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
