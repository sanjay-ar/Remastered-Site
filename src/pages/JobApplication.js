import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const JobApplication = () => {
    const { jobId } = useParams();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        experience: '',
        resume: null,
        coverLetter: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: files ? files[0] : value
        }));
    };

    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Job Application</h2>
                
                <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
                    <div className="grid grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-gray-700 mb-2">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 mb-2">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">Years of Experience</label>
                        <input
                            type="number"
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">Resume</label>
                        <input
                            type="file"
                            name="resume"
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md"
                            accept=".pdf,.doc,.docx"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">Cover Letter</label>
                        <textarea
                            name="coverLetter"
                            value={formData.coverLetter}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-md h-32"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-900 text-white py-3 px-4 rounded-md hover:bg-blue-800 transition-colors duration-300"
                    >
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    );
};

export default JobApplication; 