import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/portfolio";
import { ImageCarousel } from "./ImageCarousel";
import {
  ArrowLeft,
  Github,
  Globe,
  Star,
  Code,
  Zap,
  Lightbulb,
  TrendingUp,
  Shield,
  ExternalLink,
  Play,
  Calendar,
  Users,
  Target,
} from "lucide-react";

export const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  console.log("ProjectDetails rendered with id:", id);
  console.log("Found project:", project);

  if (!project) {
    console.log("Project not found for id:", id);
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Project not found</h1>
          <Link to="/" className="text-cyan-400 hover:text-cyan-300">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Project Details - Scrollable */}
          <div className="h-[calc(100vh-120px)] overflow-y-auto pr-4 scrollbar-hide">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Project Header */}
              <div className="pt-4">
                {/* Back Button */}
                <div className="mb-6">
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg hover:bg-gray-800/50 hover:scale-105 transition-all duration-300"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Portfolio
                  </Link>
                </div>

                <div className="bg-gray-800/30 rounded-xl border border-gray-700/50 p-6 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    {project.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-purple-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                    <span className="px-3 py-1 bg-gray-700 text-cyan-400 text-sm font-medium rounded-full border border-cyan-400/50">
                      {project.category}
                    </span>
                  </div>

                  <h1 className="text-4xl font-bold text-white mb-4">
                    {project.title}
                  </h1>

                  <p className="text-xl text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div className="pt-6">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5 text-cyan-400" />
                  Technologies Used
                </h3>
                <div className="bg-gray-800/30 rounded-xl border border-gray-700/50 p-6 backdrop-blur-sm">
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gray-700/50 text-cyan-400 text-sm rounded-lg border border-gray-600 hover:border-cyan-400/50 hover:bg-gray-700/70 transition-all duration-300 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Key Features */}
              {project.keyFeatures && (
                <div className="pt-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-yellow-400" />
                    Key Features
                  </h3>
                  <div className="bg-gray-800/30 rounded-xl border border-gray-700/50 p-6 backdrop-blur-sm">
                    <div className="grid gap-3">
                      {project.keyFeatures.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors group"
                        >
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Technical Highlights */}
              {project.technicalHighlights && (
                <div className="pt-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-purple-400" />
                    Technical Highlights
                  </h3>
                  <div className="bg-gray-800/30 rounded-xl border border-gray-700/50 p-6 backdrop-blur-sm">
                    <div className="grid gap-3">
                      {project.technicalHighlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors group"
                        >
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Challenges */}
              {project.challenges && (
                <div className="pt-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-400" />
                    Challenges
                  </h3>
                  <div className="bg-gray-800/30 rounded-xl border border-gray-700/50 p-6 backdrop-blur-sm">
                    <div className="grid gap-3">
                      {project.challenges.map((challenge, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors group"
                        >
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {challenge}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Impact & Results */}
              {project.impact && (
                <div className="pt-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    Impact & Results
                  </h3>
                  <div className="bg-gray-800/30 rounded-xl border border-gray-700/50 p-6 backdrop-blur-sm">
                    <div className="grid gap-3">
                      {project.impact.map((result, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors group"
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                          <span className="group-hover:translate-x-1 transition-transform duration-300">
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Architecture */}
              {project.architecture && (
                <div className="pt-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-400" />
                    Architecture
                  </h3>
                  <div className="bg-gray-800/30 rounded-xl border border-gray-700/50 p-6 backdrop-blur-sm">
                    <div className="grid gap-4">
                      {Object.entries(project.architecture).map(
                        ([key, value]) => (
                          <div
                            key={key}
                            className="border-l-2 border-cyan-400/50 pl-4 hover:border-cyan-400 transition-colors duration-300 group"
                          >
                            <h4 className="text-cyan-400 font-medium capitalize mb-2 group-hover:text-cyan-300 transition-colors">
                              {key.replace(/_/g, " ")}
                            </h4>
                            <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors">
                              {value}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Demo Credentials - HIDDEN */}
              {/* {project.demoCredentials && (
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-400" />
                    Demo Credentials
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {Object.entries(project.demoCredentials).map(
                      ([role, creds]) => (
                        <div
                          key={role}
                          className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50"
                        >
                          <h4 className="text-cyan-400 font-medium capitalize mb-3">
                            {role}
                          </h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <span className="text-gray-500 w-16">Email:</span>
                              <span className="text-gray-300 font-mono">
                                {creds.email}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-gray-500 w-16">
                                Password:
                              </span>
                              <span className="text-gray-300 font-mono">
                                {creds.password}
                              </span>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              )} */}
            </motion.div>
          </div>

          {/* Right Side - Project Preview - Fixed */}
          <div className="lg:sticky lg:top-24 h-fit">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Project Image Carousel */}
              <ImageCarousel
                images={project.images || [project.image]}
                projectTitle={project.title}
              />

              {/* Quick Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-cyan-500 text-white rounded-lg font-medium hover:bg-cyan-600 transition-colors flex-1 justify-center"
                >
                  <Play className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors flex-1 justify-center"
                >
                  <Code className="w-4 h-4" />
                  Source Code
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                {project.keyFeatures && (
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 text-center">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">
                      {project.keyFeatures.length}
                    </div>
                    <div className="text-gray-400 text-sm">Key Features</div>
                  </div>
                )}

                {project.impact && (
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      {project.impact.length}
                    </div>
                    <div className="text-gray-400 text-sm">Impact Metrics</div>
                  </div>
                )}

                {project.technicalHighlights && (
                  <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">
                      {project.technicalHighlights.length}
                    </div>
                    <div className="text-gray-400 text-sm">Tech Highlights</div>
                  </div>
                )}

                <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50 text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    {project.technologies.length}
                  </div>
                  <div className="text-gray-400 text-sm">Technologies</div>
                </div>
              </div>

              {/* Project Links */}
              <div className="space-y-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  <Globe className="w-5 h-5" />
                  Visit Live Demo
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                  View Source Code
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
