import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [showJobs, setShowJobs] = useState(false);

    const jobListings = [
        {
            id: 1,
            title: "Software Engineer",
            location: "Bangalore, India",
            description: "We're looking for a talented Software Engineer to join our team. The ideal candidate will have experience in React, Node.js, and modern web technologies.",
            linkedInUrl: "https://www.linkedin.com/company/your-company/jobs/"
        },
        {
            id: 2,
            title: "Product Designer",
            location: "Bangalore, India",
            description: "Join our design team to create innovative solutions for our products. Experience with UI/UX design and prototyping tools required.",
            linkedInUrl: "https://www.linkedin.com/company/your-company/jobs/"
        },
        {
            id: 3,
            title: "Mechanical Engineer",
            location: "Bangalore, India",
            description: "Looking for an experienced Mechanical Engineer to help design and develop our next generation of products.",
            linkedInUrl: "https://www.linkedin.com/company/your-company/jobs/"
        }
    ];

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        {/* Existing nav items */}
                        <Link to="/" className="flex-shrink-0 flex items-center">
                            <img className="h-8 w-auto" src="/logo.png" alt="NAATS Corp" />
                        </Link>
                        
                        <div className="hidden md:ml-6 md:flex md:space-x-8">
                            {/* Add your existing nav links here */}
                        </div>
                    </div>

                    {/* Add Careers Button */}
                    <div className="flex items-center">
                        <button
                            onClick={() => setShowJobs(true)}
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-md"
                            style={{ backgroundColor: '#1d489a' }}
                        >
                            Careers
                            <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" />
                                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Jobs Modal */}
            {showJobs && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-xl font-bold" style={{color: '#1d489a'}}>Current Openings</h4>
                            <button 
                                onClick={() => setShowJobs(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="space-y-4">
                            {jobListings.map((job) => (
                                <a 
                                    key={job.id}
                                    href={job.linkedInUrl} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block p-4 border rounded-lg hover:shadow-md transition-shadow"
                                >
                                    <h5 className="font-semibold text-lg mb-2" style={{color: '#1d489a'}}>
                                        {job.title}
                                    </h5>
                                    <p className="text-gray-600 text-sm mb-2">
                                        {job.location}
                                    </p>
                                    <p className="text-gray-700">
                                        {job.description}
                                    </p>
                                    <span className="text-blue-600 text-sm hover:underline mt-2 inline-block">
                                        Apply on LinkedIn →
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar; 