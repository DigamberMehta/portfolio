import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CursorFollow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Only run in browser
    if (typeof window === "undefined") return;

    // Check if device is mobile/touch device
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(isTouchDevice || isSmallScreen);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Don't run cursor effects on mobile
    if (isMobile) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      // Check if the target or any of its parents has the cursor-hover class
      let element = e.target;
      while (element) {
        if (element.classList && element.classList.contains("cursor-hover")) {
          setIsHovering(true);
          return;
        }
        element = element.parentElement;
      }
      setIsHovering(false);
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Don't render cursor on mobile devices
  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Main cursor ring */}
      <motion.div
        className="fixed w-8 h-8 border-2 border-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Inner cursor dot */}
      <motion.div
        className="fixed w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 28,
        }}
      />
    </>
  );
};
