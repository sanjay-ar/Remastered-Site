import React, { useState } from "react";
import "./Gallery.css";
import Footer from "../Footer";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import teamBuildingImage from "../../images/gallery/team-building.jpg";
import workshopImage from "../../images/gallery/workshop.jpg";
import successImage from "../../images/gallery/success.jpg";
import officeImage from "../../images/gallery/office.jpg";
import meetupImage from "../../images/gallery/meetup.jpg";
import { Link } from "react-router-dom";

const Gallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const galleryItems = [
        { id: 1, image: teamBuildingImage, caption: "Team Building Event", description: "Our amazing team coming together for collaboration and innovation" },
        { id: 2, image: workshopImage, caption: "Innovation Workshop", description: "Brainstorming sessions leading to breakthrough solutions" },
        { id: 3, image: successImage, caption: "Success Story", description: "Celebrating another successful project delivery" },
        { id: 4, image: officeImage, caption: "Office Culture", description: "A glimpse into our vibrant workspace" },
        { id: 5, image: meetupImage, caption: "Tech Meetup", description: "Knowledge sharing with industry experts" }
    ];

    const images = galleryItems.map(item => ({ src: item.image, alt: item.caption, title: item.caption, description: item.description }));

    return (
        <>
            <Link to="/" className="gallery-back-button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
            </Link>

            <div className="gallery-container">
                <article className="gallery">
                    {galleryItems.map((item, index) => (
                        <div key={item.id} className="gallery-item">
                            <figure className="gallery-image" onClick={() => { setPhotoIndex(index); setIsOpen(true); }}>
                                <img src={item.image} alt={item.caption} />
                                <figcaption>
                                    <h3>{item.caption}</h3>
                                    <p>{item.description}</p>
                                    <div className="magnify-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    ))}
                </article>
            </div>

            {isOpen && (
                <Lightbox 
                    slides={images}
                    open={isOpen}
                    index={photoIndex}
                    close={() => setIsOpen(false)}
                    controller={{ closeOnBackdropClick: true }}
                />
            )}
            <Footer />
        </>
    );
};

export default Gallery;
