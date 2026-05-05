import { useState, useEffect } from 'react'
import { 
  Github, 
  Mail, 
  Linkedin, 
  Download, 
  Code2, 
  Cloud, 
  Database,
  BarChart3
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeTab, setActiveTab] = useState('projects')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', mouseMove)
    return () => window.removeEventListener('mousemove', mouseMove)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const projects = [
    {
      title: "Cloud E-Commerce API",
      description: "Serverless e-commerce platform with AWS Lambda, API Gateway & DynamoDB",
      tech: ["Node.js", "AWS", "GraphQL"],
      stars: 128,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "React Admin Dashboard",
      description: "Modern responsive dashboard with real-time charts & drag & drop",
      tech: ["React", "Tailwind", "TypeScript"],
      stars: 89,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Real-time Chat App",
      description: "Multi-user chat with Socket.io, React & MongoDB",
      tech: ["Socket.io", "React", "MongoDB"],
      stars: 67,
      color: "from-blue-500 to-indigo-500"
    }
  ]

  const skills = [
    { category: "Frontend", items: ["React 95%", "Next.js 90%", "TypeScript 85%"], icon: Code2 },
    { category: "Backend", items: ["Node.js 92%", "Express 88%", "MongoDB 85%"], icon: Database },
    { category: "Cloud", items: ["AWS 87%", "Docker 82%", "Kubernetes 78%"], icon: Cloud },
    { category: "Tools", items: ["Git 98%", "VS Code 100%", "Figma 75%"], icon: BarChart3 }
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.4) 0%, transparent 50%)`
        }}
      />
      
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: scrolled ? 0 : 0 }}
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-900/95 border-b border-white/10 shadow-2xl' 
            : 'bg-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://www.gravatar.com/avatar/13721?d=mp&r=g&s=48" 
              alt="Moe Kya Waung"
              className="w-12 h-12 rounded-2xl border-2 border-white/30"
            />
            <span className="text-xl font-black gradient-text">Moe Kya Waung</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/moekyawaung-cloud-github" className="p-2 hover:bg-white/10 rounded-xl transition-all">
              <Github className="w-6 h-6" />
            </a>
            <a href="mailto:moekyawaung@example.com" className="p-2 hover:bg-white/10 rounded-xl transition-all">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center p-8 pt-24">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-3xl overflow-hidden mx-auto lg:mx-0 shadow-2xl border-8 border-white/10 relative group">
              <img 
                src="https://www.gravatar.com/avatar/13721?d=mp&r=g&s=400" 
                alt="Moe Kya Waung"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-3xl blur opacity-75 animate-pulse -z-10" />
            </div>
            
            <div className="text-center lg:text-left mt-12">
              <h1 className="text-5xl lg:text-7xl font-black gradient-text mb-6 leading-tight">
                Moe Kya Waung
              </h1>
              <p className="text-2xl text-white/80 font-semibold mb-12 opacity-90">
                @moekyawaung-cloud-github
              </p>
              
              <div className="flex flex-wrap gap-4 mb-12">
                <a 
                  href="https://github.com/moekyawaung-cloud-github"
                  className="group flex items-center gap-3 glass px-8 py-4 rounded-3xl font-semibold text-lg border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <Github className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                  <span>GitHub Repos</span>
                </a>
                <a 
                  href="mailto:moekyawaung@example.com"
                  className="group flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-3xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  <Mail className="w-6 h-6" />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { value: '12', label: 'Projects', color: 'text-emerald-400' },
              { value: '2.5k', label: 'Stars', color: 'text-yellow-400' },
              { value: '47', label: 'Followers', color: 'text-blue-400' }
            ].map((stat, i) => (
              <div key={i} className="glass p-8 rounded-3xl text-center hover:scale-105 transition-transform group">
                <div className={`text-4xl font-black ${stat.color} mb-4 group-hover:scale-110 transition-transform`}>
                  {stat.value}
                </div>
                <div className="text-white/70 font-medium text-lg">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl lg:text-6xl font-black gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-2xl text-white/70 max-w-2xl mx-auto">
            Handpicked projects showcasing my skills and experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass rounded-3xl p-8 cursor-pointer group hover:border-white/50 transition-all"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.color} flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform`}>
                {i === 0 && <Code2 className="w-8 h-8 text-white" />}
                {i === 1 && <BarChart3 className="w-8 h-8 text-white" />}
                {i === 2 && <Cloud className="w-8 h-8 text-white" />}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, j) => (
                  <span key={j} className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-2xl text-sm font-medium border border-white/20">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-yellow-400">⭐ {project.stars}</span>
                <div className="flex gap-2">
                  <button className="px-6 py-2 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all text-sm font-medium">
                    Demo
                  </button>
                  <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-2xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all">
                    Code →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl lg:text-6xl font-black gradient-text text-center mb-24"
        >
          Skills & Technologies
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-3xl p-10 text-center hover:border-white/50 transition-all"
            >
              <skill.icon className="w-16 h-16 mx-auto mb-6 text-4xl text-primary opacity-75" />
              <h3 className="text-2xl font-bold text-white mb-8">{skill.category}</h3>
              <div className="space-y-3">
                {skill.items.map((item, j) => (
                  <div key={j} className="flex justify-between items-center p-3 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 group hover:bg-white/10 transition-all">
                    <span className="font-medium">{item}</span>
                    <div className="w-20 bg-white/10 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-primary to-purple-500 h-full rounded-full animate-pulse w-4/5" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-32 px-8 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-5xl lg:text-6xl font-black gradient-text mb-6">
            Let's Work Together
          </h2>
          <p className="text-2xl text-white/70 mb-16 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Get in touch!
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Github, href: "https://github.com/moekyawaung-cloud-github", label: "GitHub" },
              { icon: Mail, href: "mailto:moekyawaung@example.com", label: "Email" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Download, href: "#", label: "Resume" }
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="group glass p-8 rounded-3xl hover:scale-110 hover:bg-white/20 transition-all duration-300 flex flex-col items-center gap-4"
              >
                <item.icon className="w-12 h-12 text-white/70 group-hover:text-white group-hover:scale-110 transition-all" />
                <span className="font-semibold text-lg">{item.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-white/10 text-center text-white/50">
        <p>
          © 2024 Moe Kya Waung. Built with 🚀 React + Tailwind.{' '}
          <a href="https://github.com/moekyawaung-cloud-github" className="gradient-text hover:underline">
            @moekyawaung-cloud-github
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App
