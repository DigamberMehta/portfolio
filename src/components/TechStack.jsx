import { motion } from "framer-motion";
import { techStack } from "../data/portfolio";
import {
  Code,
  Database,
  Cloud,
  Cpu,
  Globe,
  Zap,
  Shield,
  Monitor,
  Server,
  Lock,
  Activity,
  Layers,
} from "lucide-react";

export const TechStack = () => {
  const getIcon = (name) => {
    const iconMap = {
      React: Code,
      TypeScript: Code,
      "Next.js": Globe,
      Tailwind: Layers,
      "Three.js": Cpu,
      "Framer Motion": Zap,
      "Node.js": Server,
      Python: Code,
      Go: Code,
      PostgreSQL: Database,
      Redis: Database,
      Docker: Cloud,
      AWS: Cloud,
      Kubernetes: Cpu,
      Terraform: Layers,
      "GitHub Actions": Activity,
      Monitoring: Monitor,
      Security: Shield,
    };
    return iconMap[name] || Code;
  };

  return (
    <section id="tech" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-purple-900/20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Cutting-edge technologies and tools I use to build exceptional
            digital experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {techStack.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                rotateY: 5,
                z: 50,
              }}
            >
              {/* Card glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 cursor-hover hover:border-cyan-400/50 transition-all duration-300 shadow-2xl">
                {/* Animated background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-purple-500/5 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-300 rounded-2xl" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors">
                    {category.category}
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    {category.technologies.map((tech, techIndex) => {
                      const IconComponent = getIcon(tech.name);
                      return (
                        <motion.div
                          key={tech.name}
                          className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg border border-gray-600/50 hover:border-cyan-400/50 transition-all duration-300 group/tech"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(6, 182, 212, 0.1)",
                          }}
                        >
                          <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: tech.color + "20" }}
                          >
                            <IconComponent
                              className="w-4 h-4 group-hover/tech:scale-110 transition-transform duration-300"
                              style={{ color: tech.color }}
                            />
                          </div>
                          <span className="text-sm text-gray-300 group-hover/tech:text-cyan-400 transition-colors font-medium">
                            {tech.name}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to work with cutting-edge tech?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's build something amazing together using the latest technologies
            and best practices
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all cursor-hover flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="w-5 h-5" />
            Start a Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
