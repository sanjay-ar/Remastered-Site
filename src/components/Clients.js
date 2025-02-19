import React from 'react';
import { useTheme } from '../context/ThemeContext';
import Slider from 'react-slick';
import kws from '../images/clients/1.jpg';
import geps from '../images/clients/2.jpg';
import protergia from '../images/clients/3.jpg';
import anotherClient1 from '../images/clients/4.jpg';
import anotherClient2 from '../images/clients/5.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/AnimatedBackground.css';

const clientImage = {
    height: '15rem',
    width: 'auto',
    mixBlendMode: 'colorBurn',
    transition: 'transform 0.3s ease, opacity 0.3s ease',
};

const Clients = () => {
    const { isDarkMode } = useTheme();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className={`mt-8 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} animated-background`} style={{fontFamily: 'Gotham'}}>
            <div className="floating-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
                <div className="shape shape-4"></div>
            </div>
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                    <h2 className={`my-2 text-center text-3xl uppercase font-bold ${isDarkMode ? 'text-white' : 'text-[#1d489a]'}`}>
                        Accreditations
                    </h2>
                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4' style={{borderColor: '#1d489a'}}></div>
                    </div>
                    <h2 className={`mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold ${isDarkMode ? 'text-gray-300' : 'text-[#1d489a]'}`}>
                        Some of our Accreditation.
                    </h2>
                </div>

                <div className="px-8 py-12" data-aos="fade-in" data-aos-delay="600">
                    <Slider {...settings}>
                        {[kws, protergia, geps, anotherClient1, anotherClient2].map((client, index) => (
                            <div key={index} className="px-4">
                                <div className={`
                                    flex justify-center items-center 
                                    transition-all duration-300 ease-in-out 
                                    transform hover:scale-110
                                    opacity-70 hover:opacity-100
                                    ${isDarkMode ? 'brightness-90' : ''}
                                `}>
                                    <img 
                                        src={client} 
                                        alt={`client ${index + 1}`} 
                                        style={{
                                            height: 'auto',
                                            width: '100%',
                                            maxHeight: '25rem',
                                            objectFit: 'contain',
                                            mixBlendMode: isDarkMode ? 'screen' : 'multiply'
                                        }}
                                        className="rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </div>
    );
}

export default Clients;