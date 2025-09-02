import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 90, icon: "⚡" },
      ]
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "React", level: 85, icon: "⚛️" },
        { name: "Express.js", level: 80, icon: "🚀" },
        { name: "React Native", level: 75, icon: "📱" },
      ]
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Git", level: 85, icon: "📝" },
        { name: "GitHub", level: 80, icon: "🐙" },
        { name: "React Native Expo", level: 75, icon: "⚡" },
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "SQL", level: 80, icon: "🗄️" },
        { name: "MongoDB", level: 75, icon: "🍃" },
      ]
    }
  ];

  const additionalSkills = [
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "🎨" },
    { name: "Node.js", icon: "🟢" },
    { name: "REST APIs", icon: "🔗" },
    { name: "Responsive Design", icon: "📱" },
    { name: "UI/UX Design", icon: "✨" },
    { name: "Problem Solving", icon: "🧩" },
    { name: "Team Collaboration", icon: "👥" },
    { name: "Agile Methodologies", icon: "🔄" },
    { name: "Version Control", icon: "📋" }
  ];

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto"></div>
        </div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-gray-700">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Additional Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {additionalSkills.map((skill, index) => (
              <div 
                key={index}
                className="card p-4 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">{skill.icon}</span>
                </div>
                <span className="text-sm font-medium text-gray-700">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card p-6 text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Frontend Development</h4>
            <p className="text-gray-600 text-sm">
              Creating responsive and interactive user interfaces with React and modern web technologies.
            </p>
          </div>

          <div className="card p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Backend Development</h4>
            <p className="text-gray-600 text-sm">
              Building robust server-side applications with Node.js, Express, and database management.
            </p>
          </div>

          <div className="card p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Mobile Development</h4>
            <p className="text-gray-600 text-sm">
              Developing cross-platform mobile applications using React Native and Expo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
