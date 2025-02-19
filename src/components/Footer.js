import React from 'react';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <>
            <footer style={{fontFamily: 'Gotham'}}>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">

                    {/* Top area: Blocks */}
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">

                    {/* 1st block */}
                    <div className="col-span-12 lg:col-span-4">
                        <div className="box-border border-b-4 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto" style={{borderColor: '#1d489a'}}>
                            <h3 className="font-bold text-4xl mb-4" style={{color: '#1d489a'}}>Naatscorp Private Limited</h3>
                            <div className='text-md font-medium text-gray-600'>
                                <h5>Door No 9, Coimbatore,</h5>
                                <p> 277 Arugampalayam, MGC Palayam,</p>
                                <p>Coimbatore,</p>
                                <p> Tamil Nadu 641107</p>
                            </div>
                        </div>
                    </div>

                    {/* 2nd block */}
                    <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
                        <h6 className="text-xl font-bold mb-4" style={{color: '#1d489a'}}>LINKS</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <HashLink to="#" className="text-gray-600 hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">About</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="#" className="text-gray-600 hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Services</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="#" className="text-gray-600 hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Contact</HashLink>
                        </li>                            
                        </ul>
                    </div>

                    {/* 3rd block */}
                    <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
                        <h6 className="text-xl font-bold mb-4" style={{color: '#1d489a'}}>OUR SERVICES</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <Link to="#" className="text-gray-600 hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Research & Development</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-gray-600 hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Contract & Manufacturing</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-gray-600 hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Product & Manufacturing</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-gray-600 hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">General IT Consultations</Link>
                        </li>
                        </ul>
                    </div>

                    {/* 4th block */}
                    <div className="col-span-12 text-center mx-auto lg:col-span-3 font-bold uppercase">
                        <div className="text-xl mb-6" style={{color: '#1d489a'}}>
                            Social Media Links.
                        </div>
                        <div className="text-md font-medium mb-6 text-gray-600">
                            Follow us on social media.
                        </div>
                        <div className="mx-auto text-center mt-2">
                            <ul className="flex justify-center mb-4 md:mb-0">
        
                                <li className="ml-4">
                                    <a href="https://www.linkedin.com/company/naatscorp-private-limited/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="LinkedIn">
                                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9,25H4V10h5V25z M6.5,8C5.1,8,4,6.9,4,5.5C4,4.1,5.1,3,6.5,3C7.9,3,9,4.1,9,5.5C9,6.9,7.9,8,6.5,8z M27,25h-4.8v-7.3c0-1.7,0-4-2.5-4c-2.5,0-2.9,1.9-2.9,3.9V25h-4.9V10h4.7v2.1h0.1c0.6-1.2,2.2-2.5,4.5-2.5c4.8,0,5.7,3.2,5.7,7.3V25z" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="ml-4">
                                    <a href="https://fe6.in" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Naatscorp Website">
                                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 0C7.2 0 0 7.2 0 16s7.2 16 16 16 16-7.2 16-16S24.8 0 16 0zm7 16c0 .9-.1 1.8-.3 2.7h-3.4v-5.4h3.4c.2.9.3 1.8.3 2.7zM9 16c0-.9.1-1.8.3-2.7h3.4v5.4H9.3C9.1 17.8 9 16.9 9 16zm13.1-4.7h-3.8c-.5-1.8-1.2-3.3-2.1-4.5 2.4 1 4.3 2.9 5.9 4.5zM16 4.8c1.3 1.2 2.3 3.1 3 5.5h-6c.7-2.4 1.7-4.3 3-5.5zm-2.2 2c-.9 1.2-1.6 2.7-2.1 4.5H8c1.5-1.6 3.4-3.5 5.8-4.5zM6.6 13.3h4.1c-.2.9-.3 1.8-.3 2.7s.1 1.8.3 2.7H6.6c-.2-.9-.3-1.8-.3-2.7s.1-1.8.3-2.7zm1.4 7.4h3.8c.5 1.8 1.2 3.3 2.1 4.5-2.4-1-4.3-2.9-5.9-4.5zm8 5.5c-1.3-1.2-2.3-3.1-3-5.5h6c-.7 2.4-1.7 4.3-3 5.5zm2.2-2c.9-1.2 1.6-2.7 2.1-4.5h3.8c-1.5 1.6-3.4 3.5-5.9 4.5z"/>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>          

                    </div>

                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                    <div className="text-sm text-gray-600 font-semibold py-1">
                    Copyright &copy; {new Date().getFullYear()}{"  "}
                    <HashLink to="#" className="hover:text-gray-900">
                        Naatscorp Private Limited
                    </HashLink>. All rights reserved.
                    </div>
                </div>
                </div>

                </div>
                
            </footer>
        </>
    )
}
export default Footer;
