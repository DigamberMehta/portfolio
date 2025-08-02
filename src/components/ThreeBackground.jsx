import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { detectWebGLSupport } from "../utils/webglSupport";

export const ThreeBackground = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef();
  const rendererRef = useRef();
  const animationIdRef = useRef();
  const [webglError, setWebglError] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    // Check WebGL support using utility
    const webglSupport = detectWebGLSupport();

    if (!webglSupport.supported) {
      console.warn(
        "WebGL not supported, falling back to CSS background:",
        webglSupport.error
      );
      setWebglError(true);
      return;
    }

    console.log("WebGL support detected:", webglSupport);

    try {
      // Scene setup
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      // Camera setup with better positioning
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 8;

      // Renderer setup with error handling
      let renderer;
      try {
        renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
          powerPreference: "default",
          failIfMajorPerformanceCaveat: false,
        });
      } catch (error) {
        console.warn(
          "WebGL renderer creation failed, trying with reduced settings:",
          error
        );
        try {
          renderer = new THREE.WebGLRenderer({
            antialias: false,
            alpha: true,
            powerPreference: "low-power",
            failIfMajorPerformanceCaveat: false,
          });
        } catch (fallbackError) {
          console.error(
            "WebGL renderer creation failed completely:",
            fallbackError
          );
          setWebglError(true);
          return;
        }
      }

      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      rendererRef.current = renderer;
      mountRef.current.appendChild(renderer.domElement);

      // Enhanced geometries with more variety
      const geometries = [
        new THREE.BoxGeometry(0.8, 0.8, 0.8),
        new THREE.SphereGeometry(0.5, 24, 24),
        new THREE.OctahedronGeometry(0.6),
        new THREE.TetrahedronGeometry(0.6),
        new THREE.TorusGeometry(0.4, 0.2, 16, 32),
        new THREE.IcosahedronGeometry(0.5),
      ];

      // Enhanced materials with better colors and effects
      const materials = [
        new THREE.MeshBasicMaterial({
          color: 0x00d2ff,
          wireframe: true,
          transparent: true,
          opacity: 0.7,
        }),
        new THREE.MeshBasicMaterial({
          color: 0x8b5cf6,
          wireframe: true,
          transparent: true,
          opacity: 0.7,
        }),
        new THREE.MeshBasicMaterial({
          color: 0x10f956,
          wireframe: true,
          transparent: true,
          opacity: 0.7,
        }),
        new THREE.MeshBasicMaterial({
          color: 0xff6b6b,
          wireframe: true,
          transparent: true,
          opacity: 0.7,
        }),
        new THREE.MeshBasicMaterial({
          color: 0xffd93d,
          wireframe: true,
          transparent: true,
          opacity: 0.7,
        }),
      ];

      const meshes = [];

      // Create more objects with better distribution
      for (let i = 0; i < 25; i++) {
        const geometry =
          geometries[Math.floor(Math.random() * geometries.length)];
        const material =
          materials[Math.floor(Math.random() * materials.length)];
        const mesh = new THREE.Mesh(geometry, material);

        // Better positioning with depth
        mesh.position.x = (Math.random() - 0.5) * 30;
        mesh.position.y = (Math.random() - 0.5) * 30;
        mesh.position.z = (Math.random() - 0.5) * 20;

        // Random rotation
        mesh.rotation.x = Math.random() * Math.PI;
        mesh.rotation.y = Math.random() * Math.PI;

        // Enhanced rotation speeds
        mesh.rotationSpeed = {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02,
        };

        // Add floating animation
        mesh.floatOffset = Math.random() * Math.PI * 2;
        mesh.floatSpeed = 0.5 + Math.random() * 0.5;

        meshes.push(mesh);
        scene.add(mesh);
      }

      // Enhanced particle system
      const particleCount = 800;
      const particles = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 60;
        positions[i + 1] = (Math.random() - 0.5) * 60;
        positions[i + 2] = (Math.random() - 0.5) * 40;

        // Color gradient
        const color = new THREE.Color();
        color.setHSL(Math.random(), 0.8, 0.6);
        colors[i] = color.r;
        colors[i + 1] = color.g;
        colors[i + 2] = color.b;
      }

      particles.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      particles.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      const particleMaterial = new THREE.PointsMaterial({
        size: 0.08,
        transparent: true,
        opacity: 0.8,
        vertexColors: true,
        blending: THREE.AdditiveBlending,
      });

      const particleSystem = new THREE.Points(particles, particleMaterial);
      scene.add(particleSystem);

      // Mouse interaction
      const handleMouseMove = (event) => {
        mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
      };

      window.addEventListener("mousemove", handleMouseMove);

      // Enhanced animation loop
      const animate = () => {
        try {
          animationIdRef.current = requestAnimationFrame(animate);

          // Rotate and float meshes
          meshes.forEach((mesh) => {
            const speed = mesh.rotationSpeed;
            mesh.rotation.x += speed.x;
            mesh.rotation.y += speed.y;
            mesh.rotation.z += speed.z;

            // Floating animation
            mesh.position.y +=
              Math.sin(
                Date.now() * 0.001 * mesh.floatSpeed + mesh.floatOffset
              ) * 0.01;
            mesh.position.x +=
              Math.cos(
                Date.now() * 0.001 * mesh.floatSpeed + mesh.floatOffset
              ) * 0.01;
          });

          // Rotate particle system
          particleSystem.rotation.y += 0.002;
          particleSystem.rotation.x += 0.001;

          // Camera movement based on mouse
          camera.position.x +=
            (mouseRef.current.x * 2 - camera.position.x) * 0.02;
          camera.position.y +=
            (-mouseRef.current.y * 2 - camera.position.y) * 0.02;
          camera.lookAt(scene.position);

          // Add subtle camera rotation
          camera.rotation.z = mouseRef.current.x * 0.1;

          renderer.render(scene, camera);
        } catch (error) {
          console.error("Animation error:", error);
          setWebglError(true);
        }
      };

      animate();

      // Handle window resize
      const handleResize = () => {
        try {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        } catch (error) {
          console.error("Resize error:", error);
        }
      };

      window.addEventListener("resize", handleResize);

      // Cleanup
      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("mousemove", handleMouseMove);
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current);
        }
        if (mountRef.current && renderer.domElement) {
          try {
            mountRef.current.removeChild(renderer.domElement);
          } catch (error) {
            console.warn("Error removing renderer element:", error);
          }
        }
        try {
          renderer.dispose();
        } catch (error) {
          console.warn("Error disposing renderer:", error);
        }

        // Dispose geometries and materials
        try {
          geometries.forEach((geo) => geo.dispose());
          materials.forEach((mat) => mat.dispose());
          particles.dispose();
          particleMaterial.dispose();
        } catch (error) {
          console.warn("Error disposing materials:", error);
        }
      };
    } catch (error) {
      console.error("Three.js initialization error:", error);
      setWebglError(true);
    }
  }, []);

  // Enhanced fallback background when WebGL fails
  if (webglError) {
    return (
      <div className="fixed inset-0 -z-10">
        {/* Enhanced gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 via-purple-900 to-pink-900"></div>

        {/* Animated mesh overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-pulse" />
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/20 to-transparent animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        {/* Enhanced animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float animate-pulse-glow"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}

          {/* Larger floating elements */}
          {[...Array(15)].map((_, i) => (
            <div
              key={`large-${i}`}
              className="absolute w-3 h-3 bg-purple-400 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            />
          ))}

          {/* Geometric shapes */}
          {[...Array(10)].map((_, i) => (
            <div
              key={`shape-${i}`}
              className="absolute w-4 h-4 border-2 border-green-400 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 -z-10"
      style={{ pointerEvents: "none" }}
    />
  );
};
