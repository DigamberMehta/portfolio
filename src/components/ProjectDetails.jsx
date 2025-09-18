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
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 pt-20 sm:pt-24">
        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden space-y-6">
          {/* Mobile Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Back Button */}
            <div className="pt-2">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-gray-800/50 hover:scale-105 transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back to Portfolio</span>
              </Link>
            </div>

            {/* Mobile Project Info */}
            <div className="bg-[#0d0d0d] rounded-xl border border-[#1a1a1a] p-4 sm:p-6 shadow-2xl">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {project.featured && (
                  <span className="px-2 py-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-lg">
                    <Star className="w-3 h-3" />
                    Featured
                  </span>
                )}
                <span className="px-2 py-1 bg-[#1a1a1a] text-[#00d4ff] text-sm font-medium rounded-full border border-[#00d4ff]/50">
                  {project.category}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
                {project.title}
              </h1>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Mobile Image Carousel */}
            <div className="pt-2">
              <ImageCarousel
                images={project.images || [project.image]}
                projectTitle={project.title}
              />
            </div>

            {/* Mobile Quick Actions - Visit button commented out */}
            {/* {project.liveUrl && project.liveUrl.trim() !== "" && (
              <div className="space-y-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00d4ff]/25 transition-all duration-300 shadow-xl"
                >
                  <Globe className="w-5 h-5" />
                  Visit
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )} */}

            {/* Mobile Quick Stats */}
            <div className="grid grid-cols-2 gap-3">
              {project.keyFeatures && (
                <div className="p-3 bg-[#0d0d0d] rounded-lg border border-[#1a1a1a] text-center shadow-xl">
                  <div className="text-xl font-bold text-[#f59e0b] mb-1">
                    {project.keyFeatures.length}
                  </div>
                  <div className="text-[#a0a0a0] text-xs">Key Features</div>
                </div>
              )}

              {project.impact && (
                <div className="p-3 bg-[#0d0d0d] rounded-lg border border-[#1a1a1a] text-center shadow-xl">
                  <div className="text-xl font-bold text-[#10b981] mb-1">
                    {project.impact.length}
                  </div>
                  <div className="text-[#a0a0a0] text-xs">Impact Metrics</div>
                </div>
              )}

              {project.technicalHighlights && (
                <div className="p-3 bg-[#0d0d0d] rounded-lg border border-[#1a1a1a] text-center shadow-xl">
                  <div className="text-xl font-bold text-[#7c3aed] mb-1">
                    {project.technicalHighlights.length}
                  </div>
                  <div className="text-[#a0a0a0] text-xs">Tech Highlights</div>
                </div>
              )}

              <div className="p-3 bg-[#0d0d0d] rounded-lg border border-[#1a1a1a] text-center shadow-xl">
                <div className="text-xl font-bold text-[#00d4ff] mb-1">
                  {project.technologies.length}
                </div>
                <div className="text-[#a0a0a0] text-xs">Technologies</div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Content Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Technologies */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-cyan-400" />
                Technologies Used
              </h3>
              <div className="bg-[#0d0d0d] rounded-xl border border-[#1a1a1a] p-4 sm:p-6 shadow-xl">
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-2 bg-[#1a1a1a] text-[#00d4ff] text-xs sm:text-sm rounded-lg border border-[#2a2a2a] hover:border-[#00d4ff] hover:bg-[#151515] transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Features */}
            {project.keyFeatures && (
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  Key Features
                </h3>
                <div className="bg-[#0d0d0d] rounded-xl border border-[#1a1a1a] p-4 sm:p-6 shadow-xl">
                  <div className="grid gap-3">
                    {project.keyFeatures.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 text-[#e0e0e0] hover:text-white transition-colors group"
                      >
                        <div className="w-2 h-2 bg-[#f59e0b] rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        <span className="text-sm sm:text-base group-hover:translate-x-1 transition-transform duration-300">
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
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-purple-400" />
                  Technical Highlights
                </h3>
                <div className="bg-[#0d0d0d] rounded-xl border border-[#1a1a1a] p-4 sm:p-6 shadow-xl">
                  <div className="grid gap-3">
                    {project.technicalHighlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 text-[#e0e0e0] hover:text-white transition-colors group"
                      >
                        <div className="w-2 h-2 bg-[#7c3aed] rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        <span className="text-sm sm:text-base group-hover:translate-x-1 transition-transform duration-300">
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
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-400" />
                  Challenges
                </h3>
                <div className="bg-[#0d0d0d] rounded-xl border border-[#1a1a1a] p-4 sm:p-6 shadow-xl">
                  <div className="grid gap-3">
                    {project.challenges.map((challenge, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 text-[#e0e0e0] hover:text-white transition-colors group"
                      >
                        <div className="w-2 h-2 bg-[#00d4ff] rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        <span className="text-sm sm:text-base group-hover:translate-x-1 transition-transform duration-300">
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
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  Impact & Results
                </h3>
                <div className="bg-[#0d0d0d] rounded-xl border border-[#1a1a1a] p-4 sm:p-6 shadow-xl">
                  <div className="grid gap-3">
                    {project.impact.map((result, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 text-[#e0e0e0] hover:text-white transition-colors group"
                      >
                        <div className="w-2 h-2 bg-[#10b981] rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        <span className="text-sm sm:text-base group-hover:translate-x-1 transition-transform duration-300">
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
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-400" />
                  Architecture
                </h3>
                <div className="bg-[#0d0d0d] rounded-xl border border-[#1a1a1a] p-4 sm:p-6 shadow-xl">
                  <div className="grid gap-4">
                    {Object.entries(project.architecture).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="border-l-2 border-[#00d4ff]/50 pl-4 hover:border-[#00d4ff] transition-colors duration-300 group"
                        >
                          <h4 className="text-[#00d4ff] font-medium capitalize mb-2 group-hover:text-[#00d4ff]/80 transition-colors text-sm sm:text-base">
                            {key.replace(/_/g, " ")}
                          </h4>
                          <p className="text-[#e0e0e0] text-xs sm:text-sm leading-relaxed group-hover:text-white transition-colors">
                            {value}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12">
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

                <div className="bg-[#0d0d0d] rounded-xl border border-[#1a1a1a] p-6 mb-6 shadow-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    {project.featured && (
                      <span className="px-3 py-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-lg">
                        <Star className="w-3 h-3" />
                        Featured
                      </span>
                    )}
                    <span className="px-3 py-1 bg-[#1a1a1a] text-[#00d4ff] text-sm font-medium rounded-full border border-[#00d4ff]/50">
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
                <div className="bg-[#0d0d0d] rounded-xl border border-[#1a1a1a] p-6 shadow-xl">
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-[#1a1a1a] text-[#00d4ff] text-sm rounded-lg border border-[#2a2a2a] hover:border-[#00d4ff] hover:bg-[#151515] transition-all duration-300 hover:scale-105 shadow-lg"
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
                  <div className="bg-[#0d0d0d] rounded-xl border border-[#1a1a1a] p-6 shadow-xl">
                    <div className="grid gap-3">
                      {project.keyFeatures.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 text-[#e0e0e0] hover:text-white transition-colors group"
                        >
                          <div className="w-2 h-2 bg-[#f59e0b] rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
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
                  <div className="bg-[#0d0d0d] rounded-xl border border-[#1a1a1a] p-6 shadow-xl">
                    <div className="grid gap-3">
                      {project.technicalHighlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 text-[#e0e0e0] hover:text-white transition-colors group"
                        >
                          <div className="w-2 h-2 bg-[#7c3aed] rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
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
                  <div className="bg-[#0d0d0d] rounded-xl border border-[#1a1a1a] p-6 shadow-xl">
                    <div className="grid gap-3">
                      {project.challenges.map((challenge, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 text-[#e0e0e0] hover:text-white transition-colors group"
                        >
                          <div className="w-2 h-2 bg-[#00d4ff] rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
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
                  <div className="bg-[#0d0d0d] rounded-xl border border-[#1a1a1a] p-6 shadow-xl">
                    <div className="grid gap-3">
                      {project.impact.map((result, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 text-[#e0e0e0] hover:text-white transition-colors group"
                        >
                          <div className="w-2 h-2 bg-[#10b981] rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
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
                  <div className="bg-[#0d0d0d] rounded-xl border border-[#1a1a1a] p-6 shadow-xl">
                    <div className="grid gap-4">
                      {Object.entries(project.architecture).map(
                        ([key, value]) => (
                          <div
                            key={key}
                            className="border-l-2 border-[#00d4ff]/50 pl-4 hover:border-[#00d4ff] transition-colors duration-300 group"
                          >
                            <h4 className="text-[#00d4ff] font-medium capitalize mb-2 group-hover:text-[#00d4ff]/80 transition-colors">
                              {key.replace(/_/g, " ")}
                            </h4>
                            <p className="text-[#e0e0e0] text-sm leading-relaxed group-hover:text-white transition-colors">
                              {value}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right Side - Project Preview - Fixed */}
          <div className="lg:sticky lg:top-24 h-fit">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 pt-4"
            >
              {/* Project Image Carousel */}
              <ImageCarousel
                images={project.images || [project.image]}
                projectTitle={project.title}
              />

              {/* Quick Action Buttons - Removed duplicate Live Demo button */}

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                {project.keyFeatures && (
                  <div className="p-4 bg-[#0d0d0d] rounded-lg border border-[#1a1a1a] text-center shadow-xl">
                    <div className="text-2xl font-bold text-[#f59e0b] mb-1">
                      {project.keyFeatures.length}
                    </div>
                    <div className="text-[#a0a0a0] text-sm">Key Features</div>
                  </div>
                )}

                {project.impact && (
                  <div className="p-4 bg-[#0d0d0d] rounded-lg border border-[#1a1a1a] text-center shadow-xl">
                    <div className="text-2xl font-bold text-[#10b981] mb-1">
                      {project.impact.length}
                    </div>
                    <div className="text-[#a0a0a0] text-sm">Impact Metrics</div>
                  </div>
                )}

                {project.technicalHighlights && (
                  <div className="p-4 bg-[#0d0d0d] rounded-lg border border-[#1a1a1a] text-center shadow-xl">
                    <div className="text-2xl font-bold text-[#7c3aed] mb-1">
                      {project.technicalHighlights.length}
                    </div>
                    <div className="text-[#a0a0a0] text-sm">
                      Tech Highlights
                    </div>
                  </div>
                )}

                <div className="p-4 bg-[#0d0d0d] rounded-lg border border-[#1a1a1a] text-center shadow-xl">
                  <div className="text-2xl font-bold text-[#00d4ff] mb-1">
                    {project.technologies.length}
                  </div>
                  <div className="text-[#a0a0a0] text-sm">Technologies</div>
                </div>
              </div>

              {/* Project Links - Visit button commented out */}
              {/* {project.liveUrl && project.liveUrl.trim() !== "" && (
                <div className="space-y-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00d4ff]/25 transition-all duration-300 shadow-xl"
                  >
                    <Globe className="w-5 h-5" />
                    Visit
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )} */}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
