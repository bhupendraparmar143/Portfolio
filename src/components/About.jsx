import React from 'react';

const About = () => {
  const educationData = [
    {
      degree: "Master of Computer Application",
      institution: "Banaras Hindu University",
      location: "Varanasi, Uttar Pradesh",
      duration: "August 2024 - Present",
      score: "CGPA: 7.0"
    },
    {
      degree: "Bachelor of Computer Science (C.S)",
      institution: "Devi Ahilya Vishwavidyalaya, (IPS College)",
      location: "Indore, Madhya Pradesh",
      duration: "Jun 2020 - April 2023",
      score: "Percentage: 68.6%"
    },
    {
      degree: "Higher Secondary School",
      institution: "Govt. Boys H. S. School",
      location: "Ashta, Madhya Pradesh",
      duration: "July 2019 - Jun 2020",
      score: "Percentage: 72%"
    },
    {
      degree: "High School",
      institution: "Govt. Boys H. S. School",
      location: "Ashta, Madhya Pradesh",
      duration: "July 2017 - July 2018",
      score: "Percentage: 79.6%"
    }
  ];

  const certificates = [
    {
      name: "Full Stack Web Development",
      issuer: "GoWeb Technology, Indore"
    },
    {
      name: "Cloud Computing Certification",
      issuer: "NPTEL, issued by IIT Kharagpur",
      duration: "Jan-Apr 2025"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Who I Am</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I am a passionate Full-Stack Developer with a strong foundation in the MERN stack 
              and React Native development. My journey in technology started with a curiosity 
              to build things that make a difference in people's lives.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Currently pursuing my Master's in Computer Application at Banaras Hindu University, 
              I combine academic knowledge with practical experience to create innovative solutions. 
              I believe in writing clean, maintainable code and staying updated with the latest 
              technologies and best practices.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Education</h3>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary-200 hover:border-primary-400 transition-colors duration-300">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-primary-600 rounded-full transform -translate-x-2"></div>
                  <div className="card p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">{edu.degree}</h4>
                    <p className="text-primary-600 font-medium mb-1">{edu.institution}</p>
                    <p className="text-gray-600 text-sm mb-2">{edu.location}</p>
                    <p className="text-gray-500 text-sm mb-1">{edu.duration}</p>
                    <p className="text-gray-700 font-medium">{edu.score}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Certificates</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certificates.map((cert, index) => (
              <div key={index} className="card p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-primary-600 text-sm">{cert.issuer}</p>
                {cert.duration && <p className="text-gray-500 text-sm mt-1">{cert.duration}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
