import React from 'react';
import img from '../images/Web-developer.svg';
import { Link } from 'react-router-dom';
import './Intro.css';

const Intro = () => {
    return (
        <div id="about" className="intro-section relative overflow-hidden">
            <div className="animated-bg">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
                <div className="circle circle-4"></div>
            </div>

            <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6 relative z-10" id='about'>
                <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                    <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                        <div className="relative overflow-hidden rounded-xl shadow-2xl">
                            <img 
                                alt="card img" 
                                className="rounded-xl transform hover:scale-105 transition duration-700 ease-in-out floating-animation" 
                                src={img} 
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent"></div>
                        </div>
                    </div>

                    <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8 animate-content" data-aos="zoom-in" data-aos-delay="500">
                        <h3 className="text-4xl font-bold mb-8 gradient-text">
                            We engineer high-quality bespoke hardware and software solutions for organizations, institutions, and SMEs
                        </h3>
                        
                        <div className="space-y-6">
                            <p className='text-xl text-gray-600 font-semibold leading-relaxed hover-highlight'>
                                At Naatscorp, we are committed to crafting innovative solutions that support and empower every stage of life.
                            </p>
                            
                            <p className='text-xl text-gray-600 font-semibold leading-relaxed hover-highlight'>
                                We take responsibility for building custom software and hardware solutions that caters for automation of your business processes and improve efficiency.
                            </p>
                        </div>

                        <Link to="/contact" className="inline-block mt-8 px-8 py-4 text-xl text-white bg-blue-900 hover:bg-blue-800 rounded-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-200">
                            Contact us
                            <svg className="w-6 h-6 ml-2 inline-block animate-bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;