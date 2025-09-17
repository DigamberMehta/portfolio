import { motion } from "framer-motion";
import {
  Code,
  Database,
  Brain,
  Cloud,
  Shield,
  Zap,
  Smartphone,
  Globe,
  Lock,
  Cpu,
  Palette,
  Server,
  GitBranch,
  Layers,
} from "lucide-react";

export const WhatIOffer = () => {
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Modern, responsive web applications with cutting-edge technologies",
      skills: [
        "React 18/19 with TypeScript",
        "Next.js & Vite for performance",
        "Tailwind CSS & Styled Components",
        "Framer Motion & GSAP animations",
        "Progressive Web Apps (PWA)",
        "Mobile-first responsive design",
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Scalable server-side solutions and API development",
      skills: [
        "Node.js & Express.js frameworks",
        "RESTful API design & GraphQL",
        "Microservices architecture",
        "Real-time WebSocket connections",
        "Database optimization & indexing",
        "Serverless & cloud functions",
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Efficient data storage and management solutions",
      skills: [
        "MongoDB with Mongoose ODM",
        "PostgreSQL & MySQL databases",
        "Redis for caching & sessions",
        "Database design & normalization",
        "Query optimization & indexing",
        "Data migration & backup strategies",
      ],
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Intelligent solutions powered by artificial intelligence",
      skills: [
        "OpenAI GPT-4 & GPT-3.5 integration",
        "Google Gemini AI implementation",
        "DeepSeek AI & custom models",
        "Natural language processing",
        "AI-powered automation workflows",
        "Machine learning model deployment",
      ],
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/20",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and deployment solutions",
      skills: [
        "AWS & Google Cloud Platform",
        "Docker containerization",
        "Kubernetes orchestration",
        "CI/CD pipeline automation",
        "Vercel & Netlify deployment",
        "MongoDB Atlas & cloud databases",
      ],
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
    },
    {
      icon: Shield,
      title: "Security & Authentication",
      description: "Secure applications with robust authentication systems",
      skills: [
        "JWT token authentication",
        "OAuth 2.0 & OIDC integration",
        "Role-based access control",
        "Password hashing & encryption",
        "API security & rate limiting",
        "HTTPS & SSL implementation",
      ],
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Lightning-fast applications with optimal performance",
      skills: [
        "Code splitting & lazy loading",
        "Image optimization & CDN",
        "Caching strategies & Redis",
        "Database query optimization",
        "Bundle size optimization",
        "Core Web Vitals improvement",
      ],
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/20",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile applications and responsive design",
      skills: [
        "React Native development",
        "Progressive Web Apps (PWA)",
        "Mobile-first responsive design",
        "Touch gestures & interactions",
        "Offline functionality",
        "App store deployment",
      ],
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/20",
    },
  ];

  return (
    <section id="offer" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-[#0a0a0a]" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
              What I Offer
            </span>
          </h2>
          <p className="text-[#a0a0a0] text-lg max-w-3xl mx-auto">
            From concept to deployment, I provide end-to-end development services that 
            transform your vision into powerful, scalable applications. Every project 
            is an opportunity to create something remarkable.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`group relative p-6 rounded-xl border ${service.borderColor} ${service.bgColor} backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                {service.title}
              </h3>
              
              <p className="text-[#a0a0a0] text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Skills List */}
              <div className="space-y-2">
                {service.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="flex items-center gap-2 text-xs text-[#e0e0e0] group-hover:text-white transition-colors duration-300"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`} />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-[#0d0d0d] to-[#1a1a1a] rounded-2xl border border-[#2a2a2a] p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Turn Your Vision Into Reality?
            </h3>
            <p className="text-[#a0a0a0] text-lg mb-6 max-w-2xl mx-auto">
              Every great project starts with a conversation. Let's discuss your ideas, 
              explore possibilities, and build something that exceeds your expectations. 
              Your success is my commitment.
            </p>
            <motion.button
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00d4ff]/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Globe className="w-5 h-5" />
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
