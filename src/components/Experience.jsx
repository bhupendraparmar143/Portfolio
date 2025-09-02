import React from 'react';

const Experience = () => {
  const experienceData = [
    {
      title: "Front-end Developer",
      company: "Clean Foundation NGO",
      location: "Remote",
      duration: "Apr 2025 - Present",
      type: "Part-Time",
      description: [
        "Designed and engineered the user interface for an NGO's website using modern front-end technologies.",
        "Utilized React.js to build responsive and interactive web pages as part of a MERN stack development team.",
        "Collaborated within a team of 4 developers to deliver the project successfully.",
        "Contributed to the design and functionality of key website features, enhancing the NGO's online presence and outreach capabilities."
      ],
      technologies: ["React.js", "MERN Stack", "Team Collaboration", "UI/UX Design"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div key={index} className="card p-8 hover:shadow-2xl transition-all duration-500">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600">
                    <span className="font-semibold text-primary-600">{exp.company}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                    <span>•</span>
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                      {exp.type}
                    </span>
                  </div>
                </div>
                <div className="text-right mt-4 lg:mt-0">
                  <p className="text-gray-600 font-medium">{exp.duration}</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Key Responsibilities & Achievements:</h4>
                <ul className="space-y-3">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future Goals */}
        <div className="mt-16 text-center">
          <div className="card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Looking Forward</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I'm actively seeking opportunities to work on challenging projects that allow me to 
              leverage my full-stack development skills and contribute to innovative solutions. 
              I'm particularly interested in roles that involve React Native development and 
              opportunities to work with cutting-edge technologies.
            </p>
            <button className="btn-primary">
              View My Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
