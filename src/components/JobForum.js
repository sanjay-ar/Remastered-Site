import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import './JobForum.css';
import '../styles/ShinyButton.css';

const JobForum = () => {
    const { isDarkMode } = useTheme();
    const [showPositions, setShowPositions] = useState(false);

    const openPositions = [
        {
            "title": "Senior Software Engineer - Full Stack Developer",
            "location": "Coimbatore, India",
            "type": "Full-time",
            "experience": "5+ years",
            "description": "We are seeking a dynamic and experienced Senior Full Stack Developer to join our R&D team at a pioneering medical device startup. The ideal candidate will have a strong foundation in both front-end and back-end development, with expertise in Flutter, Kotlin, and React.js and ability to integrate hardware and software.",
            "requirements": [
              "React.js, Flutter, Kotlin for frontend development",
              "Python, Node.js, PHP for backend development",
              "Experience with MySQL and NoSQL databases",
              "Cloud & Containers: AWS, GCP, Docker, Kubernetes",
              "Agile development experience"
            ],
            "linkedInUrl": "https://www.linkedin.com/company/naatscorp-private-limited/jobs/"
          },
          {
            "title": "Lead Robotics Engineer - AI & Machine Learning",
            "location": "Coimbatore, India",
            "type": "Full-time",
            "experience": "6+ years",
            "description": "Naatscorp is looking for an exceptional Lead Robotics Engineer - AI & ML to drive the innovation and execution of our advanced robotic systems. This role demands expertise in hardware-software integration, AI/ML development, and real-time robotic control.",
            "requirements": [
              "Proficiency in Python, C++, MATLAB",
              "Expertise in ROS2, AI/ML frameworks (PyTorch, TensorFlow, OpenCV)",
              "Experience in motion planning, kinematics, and dynamics",
              "Knowledge of reinforcement learning and robotic perception systems",
              "Leadership experience in AI/ML and robotics development"
            ],
            "linkedInUrl": "https://www.linkedin.com/company/naatscorp-private-limited/jobs/"
          }
    ];

    return (
        <div id="careers" className="careers-section">
            <div className="content-wrapper relative">
                <div className="text-center mb-16">
                    <h2 
                        className={`text-4xl md:text-5xl font-bold mb-6 ${
                            isDarkMode ? 'text-white' : 'text-[#1d489a]'
                        } transition-all duration-300 hover:scale-105`}
                        data-aos="fade-down"
                    >
                        Join Our Team
                    </h2>
                    
                    <div className='flex justify-center mb-8'>
                        <div className='w-32 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full'></div>
                    </div>
                    
                    <p 
                        className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
                        style={{ 
                            color: isDarkMode ? '#e0e0e0' : '#4a5568',
                            textShadow: isDarkMode ? '0px 2px 4px rgba(0,0,0,0.2)' : 'none' 
                        }}
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Be part of a team that's revolutionizing healthcare through innovation and technology
                    </p>
                    
                    <button
                        onClick={() => setShowPositions(!showPositions)}
                        className="shiny-button"
                    >
                        <span>
                            {showPositions ? 'Hide Positions' : 'View Open Positions'}
                        </span>
                    </button>
                </div>

                <div className={`
                    transition-all duration-500 ease-in-out
                    ${showPositions ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-10 pointer-events-none'}
                `}>
                    {showPositions && (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {openPositions.map((job, index) => (
                                <div 
                                    key={index} 
                                    className="rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-102 hover:shadow-3xl bg-white/95 backdrop-blur-sm"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 150}
                                >
                                    <div className="p-8">
                                        <div className="flex flex-col mb-4">
                                            <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-[#1d489a]'}`}>
                                                {job.title}
                                            </h3>
                                            <span className={`inline-flex items-center justify-center w-24 h-6 rounded-full text-xs font-semibold ${
                                                isDarkMode ? 'bg-blue-900 text-white' : 'bg-blue-100 text-blue-800'
                                            }`}>
                                                {job.type}
                                            </span>
                                        </div>
                                        
                                        <div className="space-y-2 mb-6 border-t border-b py-4 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}">
                                            <p className={`flex items-center text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                                <span className="mr-2 w-6">📍</span> {job.location}
                                            </p>
                                            <p className={`flex items-center text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                                <span className="mr-2 w-6">⏳</span> {job.experience}
                                            </p>
                                        </div>

                                        <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                            {job.description}
                                        </p>

                                        <div className="mb-8">
                                            <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-[#1d489a]'}`}>
                                                Key Requirements:
                                            </h4>
                                            <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                                {job.requirements.map((req, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <span className="mr-2 text-[#1d489a]">•</span>
                                                        <span>{req}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <a 
                                            href={job.linkedInUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="shiny-button-blue"
                                        >
                                            <span>Apply on LinkedIn</span>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default JobForum; 