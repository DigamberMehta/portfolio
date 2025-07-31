import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code,
  Zap,
  Users,
  Trophy,
  Sparkles,
  Cpu,
  Rocket,
  Brain,
} from "lucide-react";
import { personalInfo } from "../data/portfolio";
import { useEffect, useRef } from "react";

export const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      label: "Experience",
      value: personalInfo.experience,
      icon: Code,
      color: "from-blue-400 to-cyan-500",
    },
    {
      label: "Projects",
      value: personalInfo.projectsCompleted,
      icon: Zap,
      color: "from-yellow-400 to-orange-500",
    },
    {
      label: "Client Satisfaction",
      value: personalInfo.clientsSatisfied,
      icon: Users,
      color: "from-green-400 to-emerald-500",
    },
    {
      label: "Awards",
      value: "15+",
      icon: Trophy,
      color: "from-purple-400 to-pink-500",
    },
  ];

  // 3D mouse tracking effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const rotateX = ((clientY - centerY) / centerY) * 10;
      const rotateY = ((clientX - centerX) / centerX) * 10;

      cardRefs.current.forEach((card, index) => {
        if (card) {
          const delay = index * 0.1;
          card.style.transform = `perspective(1000px) rotateX(${
            rotateX * 0.5
          }deg) rotateY(${rotateY * 0.5}deg) translateZ(${
            Math.sin(Date.now() * 0.001 + index) * 10
          }px)`;
          card.style.transition = `transform 0.1s ease-out`;
        }
      });

      // Floating elements parallax
      if (floatingElementsRef.current) {
        const elements = floatingElementsRef.current.children;
        Array.from(elements).forEach((element, index) => {
          const speed = ((index % 3) + 1) * 0.5;
          const x = (clientX - centerX) * speed * 0.01;
          const y = (clientY - centerY) * speed * 0.01;
          (
            element as HTMLElement
          ).style.transform = `translate(${x}px, ${y}px) rotate(${x * 0.1}deg)`;
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="about" ref={ref} className="py-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-cyan-900/20" />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,210,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,210,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse" />
      </div>

      {/* Floating 3D Elements */}
      <div
        ref={floatingElementsRef}
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: 0,
              scale: 0,
            }}
            animate={{
              rotate: 360,
              scale: [0, 1, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <div
              className={`w-4 h-4 bg-gradient-to-r ${
                [
                  "from-cyan-400 to-blue-500",
                  "from-purple-400 to-pink-500",
                  "from-green-400 to-emerald-500",
                ][i % 3]
              } rounded-full blur-sm opacity-60`}
            />
          </motion.div>
        ))}

        {/* Geometric shapes */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`geo-${i}`}
            className="absolute"
            initial={{ rotate: 0, scale: 0 }}
            animate={{
              rotate: [0, 180, 360],
              scale: [0, 1, 0.8, 1],
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
          >
            <div
              className={`w-8 h-8 border-2 border-cyan-400/30 ${
                i % 2 === 0 ? "rotate-45" : ""
              } ${i % 3 === 0 ? "rounded-full" : ""}`}
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Crafting Digital Experiences with{" "}
              <span className="text-cyan-400">Innovation</span>
            </h3>

            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a passionate full-stack developer with over 5 years of
                experience building scalable web applications and exploring
                cutting-edge technologies. My journey began with a curiosity
                about how things work, which led me to dive deep into the world
                of software development.
              </p>

              <p>
                When I'm not coding, you'll find me experimenting with AI/ML
                models, contributing to open-source projects, or sharing
                knowledge with the developer community. I believe in writing
                clean, maintainable code and creating user experiences that
                truly matter.
              </p>

              <p>
                Currently focused on building AI-powered applications and
                exploring the intersection of web technologies with machine
                learning to create intelligent, responsive user experiences.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8"
            >
              <motion.button
                className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full overflow-hidden group cursor-hover"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 20px 40px rgba(0, 210, 255, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Button background animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500"
                  initial={{ x: "100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />

                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                />

                <span className="relative z-10 flex items-center gap-2">
                  Let's Collaborate
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Sparkles className="w-5 h-5" />
                  </motion.div>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Enhanced 3D Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                ref={(el) => (cardRefs.current[index] = el)}
                initial={{ opacity: 0, y: 20, rotateX: -15 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="relative group cursor-hover"
                whileHover={{
                  y: -10,
                  rotateX: 5,
                  rotateY: 5,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                {/* Card glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                />

                {/* Main card */}
                <div className="relative bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 text-center group-hover:border-cyan-400/50 transition-all duration-300 shadow-2xl">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-purple-500/5 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Icon with enhanced 3D effect */}
                  <motion.div
                    className={`relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-xl mb-4 shadow-lg`}
                    whileHover={{
                      scale: 1.2,
                      rotateY: 180,
                      transition: { duration: 0.6 },
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl" />
                    <stat.icon className="w-8 h-8 text-white relative z-10" />

                    {/* Icon reflection */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl" />
                  </motion.div>

                  {/* Value with counter animation */}
                  <motion.h4
                    className="text-3xl md:text-4xl font-bold text-white mb-2 relative"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span
                      className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                    >
                      {stat.value}
                    </span>

                    {/* Sparkle effect */}
                    <motion.div
                      className="absolute -top-2 -right-2"
                      animate={{
                        rotate: [0, 360],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Sparkles className="w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  </motion.h4>

                  <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                    {stat.label}
                  </p>

                  {/* Hover particles */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100"
                        style={{
                          left: `${20 + i * 30}%`,
                          top: `${20 + i * 20}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <motion.h3
            className="text-3xl font-bold text-center mb-12 text-white relative"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Core Expertise
            </span>

            {/* Floating icons around title */}
            <motion.div
              className="absolute -top-4 -left-8"
              animate={{
                rotate: [0, 360],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Cpu className="w-6 h-6 text-blue-400 opacity-60" />
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-8"
              animate={{
                rotate: [360, 0],
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Brain className="w-6 h-6 text-purple-400 opacity-60" />
            </motion.div>
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                skill: "Frontend Development",
                level: 95,
                icon: Code,
                color: "from-blue-400 to-cyan-500",
              },
              {
                skill: "Backend Development",
                level: 90,
                icon: Zap,
                color: "from-green-400 to-emerald-500",
              },
              {
                skill: "AI/ML Integration",
                level: 85,
                icon: Brain,
                color: "from-purple-400 to-pink-500",
              },
              {
                skill: "Cloud Architecture",
                level: 88,
                icon: Rocket,
                color: "from-orange-400 to-red-500",
              },
            ].map((item, index) => (
              <motion.div
                key={item.skill}
                className="relative group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 },
                }}
              >
                {/* Skill card background */}
                <div className="relative bg-gray-800/30 backdrop-blur-lg border border-gray-700/50 rounded-xl p-6 group-hover:border-cyan-400/50 transition-all duration-300">
                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <motion.div
                          className={`p-2 bg-gradient-to-r ${item.color} rounded-lg`}
                          whileHover={{
                            rotate: 360,
                            scale: 1.1,
                            transition: { duration: 0.5 },
                          }}
                        >
                          <item.icon className="w-5 h-5 text-white" />
                        </motion.div>
                        <span className="text-white font-medium text-lg">
                          {item.skill}
                        </span>
                      </div>
                      <motion.span
                        className={`text-xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {item.level}%
                      </motion.span>
                    </div>

                    {/* Enhanced progress bar */}
                    <div className="relative h-3 bg-gray-800/50 rounded-full overflow-hidden">
                      {/* Background glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full" />

                      {/* Progress fill */}
                      <motion.div
                        className={`relative h-full bg-gradient-to-r ${item.color} rounded-full shadow-lg`}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${item.level}%` } : {}}
                        transition={{
                          duration: 1.5,
                          delay: 1.2 + index * 0.2,
                          ease: "easeOut",
                        }}
                      >
                        {/* Animated shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 3,
                            ease: "easeInOut",
                          }}
                        />

                        {/* Progress indicator dot */}
                        <motion.div
                          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"
                          animate={{
                            scale: [1, 1.2, 1],
                            boxShadow: [
                              "0 0 0 0 rgba(255, 255, 255, 0.4)",
                              "0 0 0 8px rgba(255, 255, 255, 0)",
                              "0 0 0 0 rgba(255, 255, 255, 0)",
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 1.5 + index * 0.2,
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Floating particles on hover */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1 h-1 bg-gradient-to-r ${item.color} rounded-full opacity-0 group-hover:opacity-100`}
                      style={{
                        left: `${10 + i * 20}%`,
                        top: `${10 + (i % 2) * 60}%`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
