import React, { useState } from 'react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "AI Interviewer",
      description: "Developed AI Interviewer, a web platform offering AI-driven mock interviews. The platform customizes interviews based on uploaded resumes and job descriptions.",
      features: [
        "AI-driven mock interviews",
        "Resume and job description analysis",
        "3D avatar rendering with Three.js",
        "Google Speech Recognition integration",
        "Customizable interview questions"
      ],
      technologies: ["React JS", "Three.js", "Google Speech Recognition", "AI/ML"],
      image: "🤖",
      link: "#",
      github: "#"
    },
    {
      title: "E-Library Management System",
      description: "Developed a full-stack e-library management web application using the MERN stack, enabling authors to register and publish their books.",
      features: [
        "Author registration and book publishing",
        "Book catalog management",
        "User authentication and authorization",
        "Search and filter functionality",
        "Responsive web design"
      ],
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "MERN Stack"],
      image: "📚",
      link: "#",
      github: "#"
    },
    {
      title: "WhatsApp-Clone App",
      description: "Developed a cross-platform mobile application UI mimicking WhatsApp using React Native. Designed and implemented key UI screens with responsive layouts.",
      features: [
        "Authentication section",
        "Chat list and chat screen",
        "Status and calls screens",
        "Splash screen",
        "Responsive layouts for Android and iOS"
      ],
      technologies: ["React Native", "Expo", "UI/UX Design", "Cross-platform"],
      image: "💬",
      link: "#",
      github: "#"
    }
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto"></div>
        </div>

        {/* Project Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-700 hover:text-primary-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-700 hover:text-primary-600 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Project Display */}
          <div className="card p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Project Image */}
              <div className="text-center lg:text-left">
                <div className="text-8xl mb-6 animate-bounce-slow">{projects[activeProject].image}</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{projects[activeProject].title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {projects[activeProject].description}
                </p>
                
                {/* Project Links */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href={projects[activeProject].link} target="_blank" rel="noopener noreferrer" 
                     className="btn-primary">
                    View Live Demo
                  </a>
                  <a href={projects[activeProject].github} target="_blank" rel="noopener noreferrer" 
                     className="btn-secondary">
                    View Code
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
                  <ul className="space-y-3">
                    {projects[activeProject].features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[activeProject].technologies.map((tech, index) => (
                      <span key={index} className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeProject 
                    ? 'bg-primary-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">All Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="card p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{project.image}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h4>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" 
                     className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                    Demo →
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" 
                     className="text-gray-600 hover:text-gray-700 text-sm font-medium">
                    Code →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
