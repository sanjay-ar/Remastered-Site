import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/AnimatedBackground.css';

const Portfolio = () => {
    const { isDarkMode } = useTheme();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showJobs, setShowJobs] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });

        // Faster auto-scroll animation
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % 5);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Add static job listings
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

    const products = [
        {
            title: "Electric Bed (ECB)",
            domain: "Commercial Domain",
            description: "Transform your sleep experience with our revolutionary Electric Bed, where technology meets tranquility. This premium sleep solution features an integrated aromatherapy system that creates the perfect environment for restful sleep. With customizable fragrance options and mood-enhancing capabilities, our Electric Bed doesn't just provide a place to sleep - it delivers a comprehensive relaxation experience that promotes deeper, more peaceful slumber.",
            icon: (
                <svg className={`w-16 h-16 mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v11m0-11h18v11m-18 0h18m-2-5h.01M7 7v11m14-7h.01M17 7v11M3 3h18v4H3z"/>
                </svg>
            )
        },
        {
            title: "Buddle (BDL)",
            domain: "Medical Domain",
            description: "Meet Buddle - the innovative solution that's revolutionizing patient mobility. This ingenious convertible system transforms effortlessly from a comfortable bed into a secure wheelchair, streamlining patient transportation and reducing the physical strain on healthcare providers. Its thoughtful design prioritizes both patient comfort and caregiver convenience, making it an essential addition to any healthcare facility.",
            icon: (
                <svg className={`w-16 h-16 mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
            )
        },
        {
            title: "Lazybed (LZB)",
            domain: "Commercial Domain",
            description: "Discover the perfect balance of productivity and relaxation with Lazybed - your versatile companion for modern living. This ingeniously designed furniture piece seamlessly transitions between a comfortable workspace and a luxurious relaxation zone. Whether you're working from home or enjoying leisure time, Lazybed adapts to your lifestyle with sophisticated style and unmatched comfort.",
            icon: (
                <svg className={`w-16 h-16 mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 8v13H3V8M3 4h18v4H3m4 4v6m10-6v6"/>
                </svg>
            )
        },
        {
            title: "4D-Chair (4DC)",
            domain: "Commercial Domain",
            description: "Experience the future of ergonomic seating with our groundbreaking 4D-Chair. Engineered with advanced posture-adaptive technology, this premium seating solution automatically adjusts to your body's movements, promoting optimal spine alignment and lasting comfort throughout your day. Ideal for professional environments, the 4D-Chair combines cutting-edge design with therapeutic benefits to enhance your workplace wellness.",
            icon: (
                <svg className={`w-16 h-16 mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 8h-9m4 0v8m0 0h-4m4 0h4M4 8h4m-4 8h4m-4-4h18"/>
                </svg>
            )
        },
        {
            title: "Aide-N (ADN)",
            domain: "Medical Domain",
            description: "A revolutionary assistive technology solution designed to transform the lives of bedridden patients and their dedicated caregivers. Our state-of-the-art Aide-N system provides comprehensive support through intelligent design and user-friendly features. Perfect for hospitals, nursing homes, and home care settings, this innovative system helps reduce caregiver strain while maximizing patient comfort and dignity.",
            icon: (
                <svg className={`w-16 h-16 mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
            )
        }
    ];

    return (
        <>
            <div id="portfolio" className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} py-16 animated-background`}>
                <div className="floating-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                    <div className="shape shape-4"></div>
                </div>
                
                <section data-aos="zoom-in-down">
                    <div className="my-6 py-4">
                        <h2 className={`my-2 text-center text-4xl uppercase font-bold ${isDarkMode ? 'text-white' : 'text-[#1d489a]'}`}>
                            Our Products
                        </h2>
                        <div className='flex justify-center'>
                            <div className='w-32 border-b-4' style={{borderColor: '#1d489a'}}></div>
                        </div>
                        <h2 className={`mt-6 mx-12 text-center text-2xl lg:text-3xl font-semibold ${isDarkMode ? 'text-gray-300' : 'text-[#1d489a]'}`}>
                            Some of our finest work.
                        </h2>
                    </div>

                    <div className="relative overflow-hidden px-6">
                        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8">
                            {products.map((product, index) => (
                                <div key={index} className="snap-center flex-none w-full md:w-1/2 lg:w-1/3 px-4">
                                    <div className={`h-full rounded-xl shadow-lg p-8 transform transition-all duration-500 hover:scale-105 ${
                                        isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
                                    }`}>
                                        <div className="flex flex-col items-center text-center">
                                            {product.icon}
                                            <h3 className={`text-3xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-[#1d489a]'}`}>
                                                {product.title}
                                            </h3>
                                            <p className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                                                {product.domain}
                                            </p>
                                            <p className={`text-lg mb-6 leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                                {product.description}
                                            </p>
                                            <Link 
                                                to="/get-demo#demo"
                                                className={`mt-4 inline-block px-8 py-3 text-lg rounded-lg text-white transition duration-300 ${
                                                    isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-900 hover:bg-blue-800'
                                                }`}
                                            >
                                                Learn More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Scroll Indicators */}
                        <div className="flex justify-center mt-4 space-x-2">
                            {products.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                        currentIndex === index 
                                            ? (isDarkMode ? 'bg-blue-400' : 'bg-blue-600')
                                            : (isDarkMode ? 'bg-gray-600' : 'bg-gray-300')
                                    }`}
                                    onClick={() => setCurrentIndex(index)}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Job listings modal */}
                    {showJobs && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className={`rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                                <div className="flex justify-between items-center mb-4">
                                    <h4 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-[#1d489a]'}`}>
                                        Current Openings
                                    </h4>
                                    <button 
                                        onClick={() => setShowJobs(false)}
                                        className={`${isDarkMode ? 'text-gray-300' : 'text-gray-500'} hover:text-gray-700`}
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
                                            className={`block p-4 border rounded-lg hover:shadow-md transition-shadow ${
                                                isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                                            }`}
                                        >
                                            <h5 className={`font-semibold text-lg mb-2 ${isDarkMode ? 'text-white' : 'text-[#1d489a]'}`}>
                                                {job.title}
                                            </h5>
                                            <p className={`text-sm mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                                {job.location}
                                            </p>
                                            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                                                {job.description}
                                            </p>
                                            <span className="text-blue-500 text-sm hover:underline mt-2 inline-block">
                                                Apply on LinkedIn →
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </section>
            </div>
        </>
    )
}

export default Portfolio;

// Add this CSS to your global styles or component
const styles = `
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
`;