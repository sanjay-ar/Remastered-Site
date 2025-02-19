import React from 'react';
import img from '../images/web.svg'; 
import img2 from '../images/app.svg';
import img3 from '../images/hosting.svg';
import img4 from '../images/consultation.svg';
import '../styles/AnimatedBackground.css';

const Services = () => {
    return (
        <div id="Verticals" className="py-16 animated-background" style={{fontFamily: 'Lufga'}}>
            <div className="floating-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
                <div className="shape shape-4"></div>
            </div>
            <section data-aos="zoom-in-down">
                <div className="my-6 py-4">
                    <h2 className="my-2 text-center text-5xl uppercase font-bold text-[#1d489a]">Verticals</h2>
                    <div className='flex justify-center'>
                        <div className='w-32 border-b-4' style={{borderColor: '#1d489a'}}></div>
                    </div>
                    <h2 className="mt-6 mx-12 text-center text-2xl lg:text-3xl font-semibold text-[#1d489a]">
                        We are deeply committed to the growth and success of our clients.
                    </h2>
                </div>

                <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        
                        <div className="transition-all ease-in-out duration-400 overflow-hidden rounded-lg shadow-2xl p-8 group hover:shadow-blue-100">
                            <div className="m-2 text-justify flex flex-col h-full">
                                <div className="overflow-hidden rounded-lg mb-6">
                                    <img alt="card img" className="rounded-lg group-hover:scale-[1.15] transition duration-1000 ease-in-out w-full" src={img} />
                                </div>
                                <h2 className="font-bold my-6 text-3xl text-center text-[#1d489a] group-hover:text-blue-700">Research & Development</h2>
                                <p className="text-xl font-medium leading-relaxed text-gray-600 flex-grow">
                                    Embedded at the heart of our expedition is the Research and Development axis, a nurturing ground where creativity is sparked and thrives. Here, concepts are cultivated, blueprints refined, and our engineers' aspirations concretize into tangible solutions, each epitomizing our pioneering ethos.
                                </p>
                            </div>
                        </div>

                        <div className="transition-all ease-in-out duration-400 overflow-hidden rounded-lg shadow-2xl p-8 group hover:shadow-blue-100">
                            <div className="m-2 text-justify flex flex-col h-full">
                                <div className="overflow-hidden rounded-lg mb-6">
                                    <img alt="card img" className="rounded-lg group-hover:scale-[1.15] transition duration-1000 ease-in-out w-full" src={img2} />
                                </div>
                                <h2 className="font-bold my-6 text-3xl text-center text-[#1d489a] group-hover:text-blue-700">Contract & Manufacturing</h2>
                                <p className="text-xl font-medium leading-relaxed text-gray-600 flex-grow">
                                    Our voyage of innovation extends further with our Contract Manufacturing arm, where we extend our expertise to a spectrum of enterprises, facilitating the realization of their visions with unparalleled standards of quality. Our dedication to excellence remains steadfast, whether for our own innovations or those meticulously crafted for others.
                                </p>
                            </div>
                        </div>

                        <div className="transition-all ease-in-out duration-400 overflow-hidden rounded-lg shadow-2xl p-8 group hover:shadow-blue-100">
                            <div className="m-2 text-justify flex flex-col h-full">
                                <div className="overflow-hidden rounded-lg mb-6">
                                    <img alt="card img" className="rounded-lg group-hover:scale-[1.15] transition duration-1000 ease-in-out w-full" src={img3} />
                                </div>
                                <h2 className="font-bold my-6 text-3xl text-center text-[#1d489a] group-hover:text-blue-700">Product & Manufacturing</h2>
                                <p className="text-xl font-medium leading-relaxed text-gray-600 flex-grow">
                                    In our Product Manufacturing realm, these innovations are brought to fruition. This realm is where precision intersects with masterful craftsmanship, and cutting-edge CNC technologies ensure that every creation not only bears the Naatscorp insignia but also embodies excellence, dependability, and uniformity.
                                </p>
                            </div>
                        </div>

                        <div className="transition-all ease-in-out duration-400 overflow-hidden rounded-lg shadow-2xl p-8 group hover:shadow-blue-100">
                            <div className="m-2 text-justify flex flex-col h-full">
                                <div className="overflow-hidden rounded-lg mb-6">
                                    <img alt="card img" className="rounded-lg group-hover:scale-[1.15] transition duration-1000 ease-in-out w-full" src={img4} />
                                </div>
                                <h2 className="font-bold my-6 text-3xl text-center text-[#1d489a] group-hover:text-blue-700">General IT Consultations</h2>
                                <p className="text-xl font-medium leading-relaxed text-gray-600 flex-grow">
                                    Our IT consultations service provides expert guidance and support for businesses and individuals looking to optimize their technology solutions.
                                </p>
                            </div>
                        </div>                    
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;