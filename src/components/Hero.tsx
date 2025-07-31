import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { personalInfo } from "../data/portfolio";

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const glitchVariants = {
    initial: { x: 0 },
    animate: {
      x: [0, -2, 2, -2, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 3,
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,210,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,210,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1 animate-pulse">
              <div className="w-32 h-32 rounded-full bg-gray-900" />
            </div>
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="relative w-32 h-32 rounded-full object-cover border-4 border-gray-900 cursor-hover"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900 animate-ping" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900" />
          </div>
        </motion.div>

        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-4"
        >
          <span className="text-cyan-400 text-lg font-medium">Hello, I'm</span>
        </motion.div>

        {/* Enhanced Name with 3D Glitch Effect */}
        <motion.h1
          variants={glitchVariants}
          initial="initial"
          animate="animate"
          className="text-5xl md:text-7xl font-bold mb-6 relative perspective-container"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.span
            className="relative bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent neon-text"
            whileHover={{
              scale: 1.05,
              rotateX: 5,
              rotateY: 5,
              transition: { duration: 0.3 },
            }}
          >
            {personalInfo.name}

            {/* 3D depth layers */}
            <span
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent opacity-50 blur-sm"
              style={{ transform: "translateZ(-10px)" }}
            >
              {personalInfo.name}
            </span>
            <span
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent opacity-30 blur-md"
              style={{ transform: "translateZ(-20px)" }}
            >
              {personalInfo.name}
            </span>
          </motion.span>

          {/* Enhanced glitch layers */}
          <motion.span
            className="absolute inset-0 text-red-500 opacity-70 mix-blend-multiply"
            animate={{
              x: [0, -2, 2, -1, 0],
              y: [0, 1, -1, 0],
              opacity: [0, 0.7, 0.3, 0.8, 0],
              skewX: [0, -2, 2, 0],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 4,
            }}
          >
            {personalInfo.name}
          </motion.span>

          <motion.span
            className="absolute inset-0 text-cyan-400 opacity-50 mix-blend-screen"
            animate={{
              x: [0, 1, -2, 1, 0],
              y: [0, -1, 1, 0],
              opacity: [0, 0.5, 0.2, 0.6, 0],
            }}
            transition={{
              duration: 0.25,
              repeat: Infinity,
              repeatDelay: 5,
              delay: 0.1,
            }}
          >
            {personalInfo.name}
          </motion.span>
        </motion.h1>

        {/* Title with Typing Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-xl md:text-2xl text-gray-300 font-light">
            {personalInfo.title}
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-gray-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {personalInfo.bio}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all cursor-hover group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToProjects}
          >
            <span className="flex items-center justify-center gap-2">
              View My Work
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </span>
          </motion.button>

          <motion.button
            className="px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-full hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 transition-all cursor-hover group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              Download CV
            </span>
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex justify-center gap-6 mb-16"
        >
          {[
            {
              icon: Github,
              href: personalInfo.github,
              color: "hover:text-gray-400",
            },
            {
              icon: Linkedin,
              href: personalInfo.linkedin,
              color: "hover:text-blue-400",
            },
            {
              icon: Mail,
              href: `mailto:${personalInfo.email}`,
              color: "hover:text-green-400",
            },
          ].map(({ icon: Icon, href, color }, index) => (
            <motion.a
              key={index}
              href={href}
              className={`p-3 rounded-full bg-gray-800/50 text-gray-400 ${color} transition-all cursor-hover`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-hover"
            onClick={scrollToProjects}
          >
            <ChevronDown className="w-8 h-8 text-gray-400 hover:text-cyan-400 transition-colors" />
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced 3D Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles with 3D effect */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0
                ? "w-3 h-3 bg-cyan-400/30"
                : i % 3 === 1
                ? "w-2 h-2 bg-purple-400/40"
                : "w-1 h-1 bg-pink-400/50"
            }`}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              z: Math.random() * 100 - 50,
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
              rotateZ: [0, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
            style={{
              filter: `blur(${Math.random() * 2}px)`,
            }}
          />
        ))}

        {/* Geometric shapes floating */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`geo-${i}`}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -200, 0],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          >
            <div
              className={`w-6 h-6 border-2 ${
                i % 4 === 0
                  ? "border-cyan-400/40 rotate-45"
                  : i % 4 === 1
                  ? "border-purple-400/40 rounded-full"
                  : i % 4 === 2
                  ? "border-pink-400/40"
                  : "border-green-400/40 rotate-12"
              }`}
            />
          </motion.div>
        ))}

        {/* Glowing orbs */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-8 h-8 rounded-full"
            style={{
              background: `radial-gradient(circle, ${
                i % 3 === 0
                  ? "rgba(0, 210, 255, 0.3)"
                  : i % 3 === 1
                  ? "rgba(139, 92, 246, 0.3)"
                  : "rgba(236, 72, 153, 0.3)"
              } 0%, transparent 70%)`,
              left: `${10 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};
