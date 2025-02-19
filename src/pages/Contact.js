import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import {useDocTitle} from '../components/CustomHook';
import emailjs from 'emailjs-com';
import Notiflix from 'notiflix';
import { useTheme } from '../context/ThemeContext';
// eslint-disable-next-line no-unused-vars
import axios from 'axios';

const Contact = () => {
    const { isDarkMode } = useTheme();
    useDocTitle('Naatscorp Pvt Ltd')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [errors, setErrors] = useState([])

    const clearErrors = () => {
        setErrors([])
    }

    const clearInput = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setMessage('')
    }

    const sendEmail = (e) => {
        e.preventDefault();
        const templateParams = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: phone,
            message: message,
        };

        emailjs.send('service_dtir2e9', 'template_ub3i4e6', templateParams, 'D_ReTalGC83obmhIz')
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                Notiflix.Report.success('Success', 'Your message has been sent!', 'Okay');
                clearInput();
            }, (error) => {
                console.error('Failed to send email:', error);
                Notiflix.Report.failure('Error', 'There was an error sending your message. Please try again.', 'Okay');
            });
    }
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div id='contact' className={`flex justify-center items-center mt-8 w-full py-12 lg:py-24 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`} style={{fontFamily: 'Gotham'}}>
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">

                <form onSubmit={sendEmail}>
                    <div className={`w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <div className="flex">
                            <h1 className={`font-bold text-center lg:text-left uppercase text-4xl ${isDarkMode ? 'text-white' : 'text-[#1d489a]'}`}>Send us a message</h1>
                        </div>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <div>
                                    <input 
                                        name="first_name" 
                                        className={`w-full mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}
                                        type="text" 
                                        placeholder="First Name*" 
                                        value={firstName}
                                        onChange={(e)=> setFirstName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && 
                                        <p className="text-red-500 text-sm">{errors.first_name}</p>
                                    }
                                </div>
                                
                                <div>
                                    <input 
                                        name="last_name" 
                                        className={`w-full mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}
                                        type="text" 
                                        placeholder="Last Name*"
                                        value={lastName}
                                        onChange={(e)=> setLastName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && 
                                        <p className="text-red-500 text-sm">{errors.last_name}</p>
                                    }
                                </div>

                                <div>
                                    <input 
                                        name="email"
                                        className={`w-full mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}
                                        type="email" 
                                        placeholder="Email*"
                                        value={email}
                                        onChange={(e)=> setEmail(e.target.value)}
                                        onKeyUp={clearErrors}   
                                    />
                                    {errors && 
                                        <p className="text-red-500 text-sm">{errors.email}</p>
                                    }
                                </div>

                                <div>
                                    <input
                                        name="phone_number" 
                                        className={`w-full mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}
                                        type="number" 
                                        placeholder="Phone*"
                                        value={phone}
                                        onChange={(e)=> setPhone(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors && 
                                        <p className="text-red-500 text-sm">{errors.phone_number}</p>
                                    }
                                </div>
                        </div>
                        <div className="my-4">
                            <textarea 
                                name="message" 
                                placeholder="Message*" 
                                className={`w-full h-32 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}
                                value={message}
                                onChange={(e)=> setMessage(e.target.value)}
                                onKeyUp={clearErrors}
                            ></textarea>
                            {errors && 
                                <p className="text-red-500 text-sm">{errors.message}</p>
                            }
                        </div>
                        <div className="my-2 w-1/2 lg:w-2/4">
                            <button 
                                type="submit" 
                                className="shiny-button-blue large"
                            >
                                <span>Send Message</span>
                            </button>
                        </div>
                    </div>
                </form>
                        <div className={`w-full lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto rounded-2xl ${isDarkMode ? 'bg-gray-700' : 'bg-[#1d489a]'}`}>
                            <div className="flex flex-col text-white">
                                <div className="flex my-4 w-2/3 lg:w-3/4">
                                    <div className="flex flex-col">
                                        <i className="fas fa-map-marker-alt pt-2 pr-2" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className="text-2xl">Office Address</h2>
                                        <p className="text-gray-200">MGC, Door No 9, 277 Arumugapalayam, Palayam Rd, Sarcarsamakulam, Tamil Nadu 641107</p>
                                    </div>
                                </div>
                    
                    <div className="flex my-4 w-2/3 lg:w-1/2">
                        <div className="flex flex-col">
                        <i className="fas fa-phone-alt pt-2 pr-2" />
                        </div>

                        <div className="flex flex-col">
                        <h2 className="text-2xl">Call Us</h2>
                        <p className="text-gray-200">phone: +91 8590001808</p>
                        
                            <div className='mt-5'>
                                <h2 className="text-2xl">Send an E-mail</h2>
                                <p className="text-gray-200">Projects@naatscorp.com</p>
                            </div>
                       
                        </div>
                    </div>
                    
                    <div className="flex my-4 w-2/3 lg:w-1/2">

                        <a href="https://www.linkedin.com/company/naatscorp-private-limited/posts/?feedView=all" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900  w-8  mx-1 text-center pt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'><circle cx="4.983" cy="5.009" r="2.188"></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path></svg>
                        </a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <Footer />
        </>


    )
}

export default Contact;