import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { techStack } from '../data/portfolio';

export const TechStack = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="tech" ref={ref} className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-cyan-900/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="space-y-16">
          {techStack.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.2 + techIndex * 0.1 
                    }}
                    className="bg-gray-800/30 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 text-center cursor-hover group hover:border-cyan-400/50 transition-all duration-300"
                    whileHover={{ 
                      y: -10,
                      scale: 1.05,
                      rotateY: 10,
                    }}
                  >
                    <motion.div
                      className="text-4xl mb-4 group-hover:scale-110 transition-transform"
                      animate={{
                        rotateY: [0, 360],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "linear",
                      }}
                    >
                      {tech.icon}
                    </motion.div>
                    
                    <h4 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                      {tech.name}
                    </h4>
                    
                    <div 
                      className="w-full h-1 rounded-full bg-gray-700 group-hover:bg-opacity-50 transition-all"
                      style={{ backgroundColor: `${tech.color}20` }}
                    >
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: tech.color }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: '100%' } : {}}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.2 + techIndex * 0.1 + 0.5 
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl opacity-10"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                rotate: 360,
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {['⚛️', '📘', '🐍', '☁️', '🔥', '⚡'][Math.floor(Math.random() * 6)]}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};