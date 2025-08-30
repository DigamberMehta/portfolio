import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  User,
  MessageSquare,
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black to-[#0a0a0a]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-[#a0a0a0] text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring
            your ideas to life.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-[#a0a0a0] mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with
                amazing teams. Whether you have a specific project in mind or
                just want to chat about technology, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <motion.div
                className="flex items-center gap-4 p-4 bg-[#0d0d0d] backdrop-blur-sm rounded-lg border border-[#1a1a1a] hover:border-[#00d4ff]/50 transition-all duration-300 shadow-xl"
                whileHover={{ scale: 1.02, x: 5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-[#00d4ff]/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#00d4ff]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-[#a0a0a0]">{personalInfo.email}</p>
                </div>
              </motion.div>



              <motion.div
                className="flex items-center gap-4 p-4 bg-[#0d0d0d] backdrop-blur-sm rounded-lg border border-[#1a1a1a] hover:border-[#10b981]/50 transition-all duration-300 shadow-xl"
                whileHover={{ scale: 1.02, x: 5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-[#10b981]/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#10b981]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Experience</h4>
                  <p className="text-[#a0a0a0]">
                    {personalInfo.experience}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: personalInfo.github, label: "GitHub" },
                  {
                    icon: Linkedin,
                    href: personalInfo.linkedin,
                    label: "LinkedIn",
                  },
                  {
                    icon: Twitter,
                    href: personalInfo.twitter,
                    label: "Twitter",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#1a1a1a] rounded-lg flex items-center justify-center text-[#a0a0a0] hover:text-[#00d4ff] hover:bg-[#00d4ff]/20 transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Form glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/20 to-[#7c3aed]/20 rounded-2xl blur-xl opacity-0 hover:opacity-100 transition-opacity duration-300" />

            <div className="relative bg-[#0d0d0d] backdrop-blur-xl border border-[#1a1a1a] rounded-2xl p-8 shadow-2xl">
              {/* Animated background pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#00d4ff]/5 to-[#7c3aed]/5 group-hover:from-[#00d4ff]/10 group-hover:to-[#7c3aed]/10 transition-all duration-300 rounded-2xl" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Send a Message
                </h3>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-white placeholder-[#a0a0a0] focus:outline-none focus:border-[#00d4ff] transition-colors"
                        placeholder="Your name"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-white placeholder-[#a0a0a0] focus:outline-none focus:border-[#00d4ff] transition-colors"
                        placeholder="your@email.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      <MessageSquare className="w-4 h-4 inline mr-2" />
                      Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg text-white placeholder-[#a0a0a0] focus:outline-none focus:border-[#00d4ff] transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-[#00d4ff] to-[#7c3aed] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#00d4ff]/25 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
