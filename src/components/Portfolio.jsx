import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Server, Cloud, GitBranch, Database, Layers, Terminal, BookOpen, Calendar, ArrowRight, ChevronDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  
  const roles = ['Full Stack Developer', 'MERN Stack Expert', 'Django Developer', 'Open Source Contributor', 'Cloud Enthusiast'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  useEffect(() => {
    const typeText = () => {
      const currentRole = roles[currentRoleIndex];
      let index = 0;
      setTypedText('');
      
      const timer = setInterval(() => {
        if (index < currentRole.length) {
          setTypedText(currentRole.slice(0, index + 1));
          index++;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }, 2000);
        }
      }, 100);
      
      return timer;
    };
    
    const timer = typeText();
    return () => clearInterval(timer);
  }, [currentRoleIndex]);

  const skills = {
    frontend: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 90 }
    ],
    backend: [
      { name: 'Node.js', level: 90 },
      {name: 'Python', level:  90},
      { name: 'Express.js', level: 85 },
      { name: 'Django', level: 90 },
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 82 }
    ],
    cloud: [
      { name: 'AWS', level: 75 },
      { name: 'Docker', level: 80 },
      { name: 'Kubernetes', level: 70 },
      { name: 'Microservices', level: 78 },
      { name: 'CI/CD', level: 75 }
    ]
  };

  const projects = [
    {
      title: "E-Commerce Microservices Platform",
      description: "Scalable microservices architecture with React frontend, Node.js/Django backends, and Docker containerization.",
      tech: ["React", "Node.js", "Django", "Docker", "AWS"],
      github: "https://github.com/SHIVA-SINGHx",
      live: "#"
    },
    {
      title: "Real-time Chat Application",
      description: "Full-stack chat app with Socket.io, JWT authentication, and MongoDB for message persistence.",
      tech: ["React", "Socket.io", "Node.js", "MongoDB"],
      github: "https://github.com/SHIVA-SINGHx",
      live: "#"
    },
    {
      title: "Cloud Infrastructure Automation",
      description: "DevOps project automating AWS infrastructure deployment using Terraform and CI/CD pipelines.",
      tech: ["AWS", "Terraform", "GitHub Actions", "Docker"],
      github: "https://github.com/SHIVA-SINGHx",
      live: "#"
    }
  ];

  const blogPosts = [
    {
      title: "Building Scalable Microservices with Node.js",
      excerpt: "Learn how to design and implement microservices architecture for better scalability and maintainability.",
      date: "2024-08-15",
      readTime: "8 min read",
      category: "Backend"
    },
    {
      title: "Mastering React Hooks for Better State Management",
      excerpt: "Deep dive into advanced React hooks patterns and best practices for complex state management.",
      date: "2024-08-10",
      readTime: "6 min read",
      category: "Frontend"
    },
    {
      title: "DevOps Best Practices for Full Stack Developers",
      excerpt: "Essential DevOps practices every full stack developer should know for efficient deployment workflows.",
      date: "2024-08-05",
      readTime: "10 min read",
      category: "DevOps"
    }
  ];

  const SkillBar = ({ skill, delay }) => {
    const [width, setWidth] = useState(0);
    
    useEffect(() => {
      const timer = setTimeout(() => {
        setWidth(skill.level);
      }, delay);
      return () => clearTimeout(timer);
    }, [skill.level, delay]);

    return (
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-gray-300 font-medium">{skill.name}</span>
          <span className="text-cyan-400 text-sm">{skill.level}%</span>
        </div>
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${width}%` }}
          />
        </div>
      </div>
    );
  };

  const ProjectCard = ({ project, index }) => (
    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl border border-gray-700">
      <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
      <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, i) => (
          <span key={i} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a href={project.github} className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors">
          <Github size={16} />
          <span>Code</span>
        </a>
        <a href={project.live} className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors">
          <ExternalLink size={16} />
          <span>Live Demo</span>
        </a>
      </div>
    </div>
  );

  const BlogCard = ({ post, index }) => (
    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 hover:transform hover:scale-105 border border-gray-700 cursor-pointer">
      <div className="flex items-center gap-2 mb-3">
        <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs border border-blue-500/30">
          {post.category}
        </span>
        <span className="text-gray-400 text-sm">{post.readTime}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
        {post.title}
      </h3>
      <p className="text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <Calendar size={14} />
          <span>{new Date(post.date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</span>
        </div>
        <ArrowRight size={16} className="text-cyan-400" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Shiva 
              </span>
                </a> 
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[ 'Home', 'About', 'Skills', 'Projects', 'Blog', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => setActiveSection(item.toLowerCase())}
                    className={`px-3 py-2 text-sm font-medium transition-colors ${
                      activeSection === item.toLowerCase()
                        ? 'text-cyan-400 border-b-2 border-cyan-400'
                        : 'text-gray-300 hover:text-cyan-400'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Skills', 'Projects', 'Blog', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-cyan-400 w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16" >
        <div className="max-w-4xl mx-auto text-center" >
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Shiva
              </span>
            </h1>
            <div className="h-12 mb-6">
              <p className="text-xl md:text-2xl text-gray-300">
                <span className="text-cyan-400 font-semibold">{typedText}</span>
                <span className="animate-pulse">|</span>
              </p>
            </div>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Passionate full-stack developer specializing in MERN stack and Django, with expertise in 
              microservices architecture, cloud technologies, and DevOps practices. Open source contributor 
              and freelance developer ready to bring your ideas to life.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
              View My Work
            </button>
            <button className="px-8 py-3 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500 hover:text-gray-900 transition-all duration-300">
              Download Resume
            </button>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://github.com/SHIVA-SINGHx" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/shiva-singh-b2104a373/" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
              <Linkedin size={28} />
            </a>
            <a href="shivasingh.1dev@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto" >
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a dedicated full-stack developer with a passion for creating scalable, efficient, 
                and user-friendly web applications. My journey in software development spans across 
                modern technologies including the MERN stack, Django, and cloud platforms.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                As an active open source contributor, I believe in the power of collaborative development 
                and knowledge sharing. I'm constantly learning new technologies and best practices, 
                currently focusing on microservices architecture, DevOps practices, and cloud computing.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Available for freelance projects and always excited to work on challenging problems 
                that push the boundaries of what's possible with modern web technologies.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg text-center border border-gray-700">
                <Code className="mx-auto mb-3 text-cyan-400" size={32} />
                <h3 className="text-lg font-semibold mb-2">Frontend</h3>
                <p className="text-gray-400 text-sm">React, Next.js, TypeScript</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center border border-gray-700">
                <Server className="mx-auto mb-3 text-cyan-400" size={32} />
                <h3 className="text-lg font-semibold mb-2">Backend</h3>
                <p className="text-gray-400 text-sm">Node.js, Django, APIs</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center border border-gray-700">
                <Database className="mx-auto mb-3 text-cyan-400" size={32} />
                <h3 className="text-lg font-semibold mb-2">Database</h3>
                <p className="text-gray-400 text-sm">MongoDB, PostgreSQL</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center border border-gray-700">
                <Cloud className="mx-auto mb-3 text-cyan-400" size={32} />
                <h3 className="text-lg font-semibold mb-2">Cloud & DevOps</h3>
                <p className="text-gray-400 text-sm">AWS, Docker, K8s</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="flex items-center mb-6">
                <Code className="text-cyan-400 mr-3" size={28} />
                <h3 className="text-xl font-semibold">Frontend</h3>
              </div>
              {skills.frontend.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index * 200} />
              ))}
            </div>
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="flex items-center mb-6">
                <Server className="text-cyan-400 mr-3" size={28} />
                <h3 className="text-xl font-semibold">Backend</h3>
              </div>
              {skills.backend.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index * 200} />
              ))}
            </div>
            <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
              <div className="flex items-center mb-6">
                <Cloud className="text-cyan-400 mr-3" size={28} />
                <h3 className="text-xl font-semibold">Cloud & DevOps</h3>
              </div>
              {skills.cloud.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index * 200} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Latest Blog Posts
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} post={post} index={index} />
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="px-8 py-3 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500 hover:text-gray-900 transition-all duration-300">
              View All Posts
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to bring your next project to life? I'm available for freelance work and 
            always excited to discuss new opportunities and challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:shiva@example.com" 
              className="flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={20} />
              Get In Touch
            </a>
            <a 
              href="https://github.com/SHIVA-SINGHx" 
              className="flex items-center justify-center gap-2 px-8 py-3 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500 hover:text-gray-900 transition-all duration-300"
            >
              <Github size={20} />
              View GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 Shiva. Built with React & Tailwind CSS. Open for opportunities.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;