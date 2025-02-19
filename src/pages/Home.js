import React, { useRef, useState, useEffect } from 'react';
import Portfolio from '../components/Portfolio';
import JobForum from '../components/JobForum';
import Clients from '../components/Clients';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar/NavBar';
import './Home.css';
import teamBuildingImage from '../images/gallery/team-building.jpg';
import workshopImage from '../images/gallery/workshop.jpg';
import successImage from '../images/gallery/success.jpg';
import officeImage from '../images/gallery/office.jpg';
import meetupImage from '../images/gallery/meetup.jpg';
import Services from '../components/Services';
import Contact from '../pages/Contact';
import Intro from '../components/Intro';

const Home = () => {
    const videoRef = useRef(null);
    const [showGallery, setShowGallery] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const galleryItems = [
        {
            id: 1,
            image: teamBuildingImage
        },
        {
            id: 2,
            image: workshopImage
        },
        {
            id: 3,
            image: successImage
        },
        {
            id: 4,
            image: officeImage
        },
        {
            id: 5,
            image: meetupImage
        }
    ];

    useEffect(() => {
        // Start gallery slideshow after video ends
        if (videoRef.current) {
            videoRef.current.onended = () => {
                setShowGallery(true);
            };
        }
    }, []);

    useEffect(() => {
        // Only start the gallery interval after the video has ended
        if (showGallery) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryItems.length);
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [showGallery, galleryItems.length]);

    return (
        <>
            <NavBar />
            {/* Video and Gallery Section */}
            <header className="relative w-full h-screen overflow-hidden">
                {/* Video */}
                <video 
                    ref={videoRef}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${showGallery ? 'opacity-0' : 'opacity-100'}`}
                    autoPlay 
                    muted
                    playsInline
                >
                    <source src="/videos/Natts.mp4" type="video/mp4" />
                </video>
                
                {/* Gallery Slideshow */}
                <div className={`absolute inset-0 transition-opacity duration-1000 ${showGallery ? 'opacity-100' : 'opacity-0'}`}>
                    <img 
                        src={galleryItems[currentIndex].image}
                        alt="gallery"
                        className="w-full h-full object-cover transition-opacity duration-500"
                    />
                </div>
            </header>

            {/* Main Content Sections */}
            <main className="relative bg-white">
                <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                    <Intro />
                </section>

                <section className="py-20 bg-white">
                    <Services />
                </section>

                <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                    <Portfolio />
                </section>

                <section className="py-20 bg-white">
                    <JobForum />
                </section>

                <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
                    <Clients />
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Home;

