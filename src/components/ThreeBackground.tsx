import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { detectWebGLSupport } from "../utils/webglSupport";

export const ThreeBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const animationIdRef = useRef<number>();
  const [webglError, setWebglError] = useState(false);

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

      // Camera setup
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 5;

      // Renderer setup with error handling
      let renderer: THREE.WebGLRenderer;
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
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
      rendererRef.current = renderer;
      mountRef.current.appendChild(renderer.domElement);

      // Create floating geometric shapes
      const geometries = [
        new THREE.BoxGeometry(0.5, 0.5, 0.5),
        new THREE.SphereGeometry(0.3, 16, 16), // Reduced segments for performance
        new THREE.OctahedronGeometry(0.4),
        new THREE.TetrahedronGeometry(0.4),
      ];

      const materials = [
        new THREE.MeshBasicMaterial({
          color: 0x00d2ff,
          wireframe: true,
          transparent: true,
          opacity: 0.6,
        }),
        new THREE.MeshBasicMaterial({
          color: 0x8b5cf6,
          wireframe: true,
          transparent: true,
          opacity: 0.6,
        }),
        new THREE.MeshBasicMaterial({
          color: 0x10f956,
          wireframe: true,
          transparent: true,
          opacity: 0.6,
        }),
      ];

      const meshes: THREE.Mesh[] = [];

      // Create fewer objects for better performance
      for (let i = 0; i < 15; i++) {
        const geometry =
          geometries[Math.floor(Math.random() * geometries.length)];
        const material =
          materials[Math.floor(Math.random() * materials.length)];
        const mesh = new THREE.Mesh(geometry, material);

        // Random positioning
        mesh.position.x = (Math.random() - 0.5) * 20;
        mesh.position.y = (Math.random() - 0.5) * 20;
        mesh.position.z = (Math.random() - 0.5) * 10;

        // Random rotation
        mesh.rotation.x = Math.random() * Math.PI;
        mesh.rotation.y = Math.random() * Math.PI;

        // Store random rotation speeds
        (mesh as any).rotationSpeed = {
          x: (Math.random() - 0.5) * 0.01, // Reduced speed
          y: (Math.random() - 0.5) * 0.01,
          z: (Math.random() - 0.5) * 0.01,
        };

        meshes.push(mesh);
        scene.add(mesh);
      }

      // Create particle system with reduced count
      const particleCount = 500; // Reduced from 1000
      const particles = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 50;
      }

      particles.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );

      const particleMaterial = new THREE.PointsMaterial({
        color: 0x00d2ff,
        size: 0.05,
        transparent: true,
        opacity: 0.8,
      });

      const particleSystem = new THREE.Points(particles, particleMaterial);
      scene.add(particleSystem);

      // Animation loop with error handling
      const animate = () => {
        try {
          animationIdRef.current = requestAnimationFrame(animate);

          // Rotate meshes
          meshes.forEach((mesh) => {
            const speed = (mesh as any).rotationSpeed;
            mesh.rotation.x += speed.x;
            mesh.rotation.y += speed.y;
            mesh.rotation.z += speed.z;
          });

          // Rotate particle system
          particleSystem.rotation.y += 0.001;

          // Mouse interaction
          const mouse = { x: 0, y: 0 };
          camera.position.x += (mouse.x - camera.position.x) * 0.05;
          camera.position.y += (-mouse.y - camera.position.y) * 0.05;
          camera.lookAt(scene.position);

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

  // Fallback background when WebGL fails
  if (webglError) {
    return (
      <div className="fixed inset-0 -z-10">
        {/* Gradient background as fallback */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
        {/* Animated particles using CSS */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
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
          {/* Additional floating elements */}
          {[...Array(10)].map((_, i) => (
            <div
              key={`large-${i}`}
              className="absolute w-2 h-2 bg-purple-400 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
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
