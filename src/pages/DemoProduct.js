import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import {useDocTitle} from '../components/CustomHook';
import axios from 'axios';
import emailjs from 'emailjs-com';
import Notiflix from 'notiflix';
import { useTheme } from '../context/ThemeContext';

const DemoProduct = (props) => {
    const { isDarkMode } = useTheme();
    useDocTitle('Naatscorp Pvt Ltd')

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [demoProducts, setDemoProducts ] = useState([])
    const [organization, setOrganization] = useState('')
    const [errors, setErrors] = useState([])


    const handleChange = (e) => {
        const value = e.target.value
        const checked = e.target.checked
        errors.products = []
        if(checked) {
            setDemoProducts([
                ...demoProducts, value
            ])
        } else {
            setDemoProducts(demoProducts.filter( (e) => (e !== value )))
        }
       
    }
    const clearErrors = () => {
        setErrors([])
    }

    const clearInput = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setPhone('')
        setMessage('')
        setOrganization('')
    }
    
    function sendEmail(e) {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Loading...';

        // Format selected products into a readable list
        const selectedProducts = demoProducts.map(product => {
            switch(product) {
                case 'business_management_system':
                    return 'Electric Bed (ECB)';
                case 'school_management_portal':
                    return 'Buddle (BDL)';
                case 'payroll_management_system':
                    return 'Lazybed (LZB)';
                case 'event_management_system':
                    return '4D-Chair (4DC)';
                default:
                    return product;
            }
        }).join('\n');

        // Prepare template parameters
        const templateParams = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: phone,
            message: message,
            organization: organization,
            products: selectedProducts || 'No products selected' // Fallback if no products selected
        };

        emailjs.send(
            'service_dtir2e9',
            'template_ub3i4e6',
            templateParams,
            'D_ReTalGC83obmhIz'
        )
        .then((result) => {
            document.getElementById('submitBtn').disabled = false;
            document.getElementById('submitBtn').innerHTML = 'Send Message';
            clearInput();
            Notiflix.Report.success(
                'Success',
                'Thanks for sending a message, we\'ll be in touch soon.',
                'Okay',
            );
        }, (error) => {
            document.getElementById('submitBtn').disabled = false;
            document.getElementById('submitBtn').innerHTML = 'Send Message';
            Notiflix.Report.failure(
                'An error occurred',
                'Please try sending the message again.',
                'Okay',
            );
        });
    }
    return (
        <>
            <div>
                <NavBar />
            </div>
            <div id='demo' className={`flex justify-center items-center mt-8 w-full py-12 lg:py-24 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                    <form onSubmit={sendEmail} id="demoProductForm">
                        <div className={`w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                            <div className="flex">
                                <h1 className={`font-bold text-center lg:text-left uppercase text-4xl ${isDarkMode ? 'text-white' : 'text-[#1d489a]'}`}>
                                    Product Enquiry
                                </h1>
                            </div>
                            <div className="flex items-center my-4">
                                <input 
                                    id="checkbox-1" 
                                    aria-describedby="checkbox-1" 
                                    type="checkbox" 
                                    className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" 
                                    value="business_management_system" 
                                    onChange={handleChange}
                                    style={{fontFamily: 'Gotham'}}
                                />
                                <label htmlFor="checkbox-1" className="ml-3 text-lg font-medium text-gray-900" style={{fontFamily: 'Gotham'}}>Electric Bed (ECB)</label>
                            </div>
                            <div className="flex items-center my-4">
                                <input 
                                    id="checkbox-1" 
                                    aria-describedby="checkbox-1" 
                                    type="checkbox" 
                                    className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                                    value="school_management_portal" onChange={handleChange}
                                    style={{fontFamily: 'Gotham'}}
                                />
                                <label htmlFor="checkbox-1" className="ml-3 text-lg font-medium text-gray-900" style={{fontFamily: 'Gotham'}}>Buddle (BDL)</label>
                            </div>
                            <div className="flex items-center my-4">
                                <input 
                                    id="checkbox-1" 
                                    aria-describedby="checkbox-1" 
                                    type="checkbox" 
                                    className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" 
                                    value="payroll_management_system" onChange={handleChange}
                                    style={{fontFamily: 'Gotham'}}
                                />
                                <label htmlFor="checkbox-1" className="ml-3 text-lg font-medium text-gray-900" style={{fontFamily: 'Gotham'}}>Lazybed (LZB)</label>
                            </div>
                            <div className="flex items-center my-4">
                                <input 
                                    id="checkbox-1" 
                                    aria-describedby="checkbox-1" 
                                    type="checkbox" 
                                    className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                                    value="event_management_system" onChange={handleChange}
                                    style={{fontFamily: 'Gotham'}}
                                />
                                <label htmlFor="checkbox-1" className="ml-3 text-lg font-medium text-gray-900" style={{fontFamily: 'Gotham'}}>4D-Chair (4DC)</label>
                            </div>
                            <div className="flex items-center my-4">
                                <input 
                                    id="checkbox-1" 
                                    aria-describedby="checkbox-1" 
                                    type="checkbox" 
                                    className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
                                    value="event_management_system" onChange={handleChange}
                                    style={{fontFamily: 'Gotham'}}
                                />
                                <label htmlFor="checkbox-1" className="ml-3 text-lg font-medium text-gray-900" style={{fontFamily: 'Gotham'}}>Aide-N (ADN)</label>
                            </div>
                            {errors && 
                                <p className="text-red-500 text-sm" style={{fontFamily: 'Gotham'}}>{errors.products}</p>
                            }

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
                            <input
                                name="organization" 
                                className={`w-full mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'}`}
                                type="text" 
                                placeholder="Organization*"
                                value={organization}
                                onChange={(e)=> setOrganization(e.target.value)}
                                onKeyUp={clearErrors}
                            />
                            {errors && 
                                <p className="text-red-500 text-sm">{errors.organization}</p>
                            }
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
                            <button type="submit" id="submitBtn" className={`uppercase text-sm font-bold tracking-wide text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-[#1d489a] hover:bg-blue-800'}`}>
                                Send Enquiry
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
                                
                                <a href="https://www.linkedin.com/company/naatscorp-private-limited/posts/?feedView=all" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-blue-900 w-8 mx-1 text-center pt-1">
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

export default DemoProduct;