import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { personalInfo } from "../data/portfolio";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { useLenis } from "../hooks/useLenis";
import { useGSAP } from "../hooks/useGSAP";
import {
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  Mail,
  Download,
} from "lucide-react";

export const Hero = () => {
  const activeSection = useScrollSpy([
    "hero",
    "about",
    "projects",
    "tech",
    "contact",
  ]);

  const lenis = useLenis();
  const scope = useGSAP(lenis);
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const bioRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    if (!scope.current) return;

    // GSAP animations
    const tl = gsap.timeline();

    // Stagger animation for floating cards
    gsap.fromTo(
      ".floating-card",
      {
        y: 100,
        opacity: 0,
        scale: 0.8,
        rotation: -45,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "power3.out",
      }
    );

    // Text reveal animations
    tl.fromTo(
      titleRef.current,
      {
        y: 100,
        opacity: 0,
        scale: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    )
      .fromTo(
        subtitleRef.current,
        {
          y: 50,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      )
      .fromTo(
        bioRef.current,
        {
          y: 50,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .fromTo(
        statsRef.current,
        {
          y: 80,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
        },
        "-=0.4"
      )
      .fromTo(
        ctaRef.current,
        {
          y: 50,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      )
      .fromTo(
        socialRef.current,
        {
          y: 30,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
        },
        "-=0.4"
      );

    // Parallax effect for floating elements
    gsap.utils.toArray(".floating-card").forEach((card, i) => {
      gsap.to(card, {
        y: -100,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Floating animation for particles
    gsap.to(".floating-particle", {
      y: -50,
      opacity: 0,
      scale: 0,
      duration: 3,
      stagger: 0.1,
      repeat: -1,
      ease: "power2.out",
    });
  }, [scope]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating 3D Cards */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`floating-card absolute w-32 h-32 bg-gradient-to-br from-[#00d4ff]/20 to-[#7c3aed]/20 backdrop-blur-sm rounded-lg border border-white/10`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00d4ff]/10 to-transparent animate-pulse" />
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-[#7c3aed]/10 to-transparent animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className={`floating-particle absolute w-2 h-2 bg-[#00d4ff] rounded-full`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* 3D Avatar */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0, rotateY: -180 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <div className="relative w-32 h-32 mx-auto">
            <motion.img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-full h-full object-cover rounded-full border-4 border-white/20 shadow-2xl"
              whileHover={{
                scale: 1.1,
                rotateY: 15,
                boxShadow: "0 0 30px rgba(0, 212, 255, 0.5)",
              }}
              animate={{
                y: [0, -10, 0],
                rotateY: [0, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
            {/* Glowing Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] opacity-20 blur-xl animate-pulse" />
          </div>
        </motion.div>

        {/* Enhanced Title */}
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#f59e0b] bg-clip-text text-transparent"
        >
          {personalInfo.name}
        </h1>

        {/* 3D Subtitle */}
        <h2
          ref={subtitleRef}
          className="text-2xl md:text-4xl font-semibold mb-8 text-white"
        >
          {personalInfo.title}
        </h2>

        {/* Enhanced Bio */}
        <p
          ref={bioRef}
          className="text-lg md:text-xl text-[#e0e0e0] mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          {personalInfo.bio}
        </p>

        {/* 3D Stats Cards */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {[
            { label: "Experience", value: personalInfo.experience },
            { label: "Projects", value: personalInfo.projectsCompleted },
            { label: "Satisfaction", value: personalInfo.clientsSatisfied },
          ].map((stat, index) => (
            <div key={stat.label} className="relative group">
              <div className="bg-gradient-to-br from-[#00d4ff]/20 to-[#7c3aed]/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-2xl">
                <div className="text-3xl font-bold text-[#00d4ff] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#a0a0a0]">{stat.label}</div>
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/20 to-[#7c3aed]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-[#00d4ff]/25 transition-all duration-300 group"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(0, 212, 255, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              View Projects
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </span>
          </motion.button>

          <motion.button
            className="px-8 py-4 border-2 border-white/20 text-white rounded-full font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
            whileHover={{
              scale: 1.05,
              borderColor: "rgba(0, 212, 255, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              Contact Me
              <motion.div
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Mail className="w-5 h-5" />
              </motion.div>
            </span>
          </motion.button>
        </div>

        {/* Social Links with 3D Effect */}
        <div ref={socialRef} className="flex justify-center gap-6 mt-12">
          {[
            { icon: Github, label: "GitHub", href: personalInfo.github },
            { icon: Linkedin, label: "LinkedIn", href: personalInfo.linkedin },
            { icon: Twitter, label: "Twitter", href: personalInfo.twitter },
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-br from-[#00d4ff]/20 to-[#7c3aed]/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl border border-white/10 hover:border-[#00d4ff]/50 transition-all duration-300 group"
              whileHover={{
                scale: 1.2,
                rotateY: 15,
                boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)",
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
            >
              <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
