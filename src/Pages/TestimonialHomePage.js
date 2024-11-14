import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import img_one from '../Images/Rectangle 47.png';
import img_two from '../Images/Rectangle 47.png';

const Testimonials = ({ clients }) => {
    const [currentIndex1, setCurrentIndex1] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(1);

    useEffect(() => {
        if (clients.length > 1) { // Ensure there are at least two testimonials
            const intervalId = setInterval(() => {
                setCurrentIndex1((prevIndex) => {
                    // Calculate the next index for currentIndex1
                    const nextIndex = (prevIndex + 1) % clients.length;
                    // Ensure currentIndex2 is not the same as the new currentIndex1
                    setCurrentIndex2((prevIndex2) => {
                        let newIndex2 = (nextIndex + 1) % clients.length;
                        // Ensure newIndex2 is not the same as nextIndex
                        while (newIndex2 === nextIndex) {
                            newIndex2 = (newIndex2 + 1) % clients.length;
                        }
                        return newIndex2;
                    });
                    return nextIndex;
                });
            }, 5000); // Change testimonials every 5 seconds

            return () => clearInterval(intervalId); // Clear interval on component unmount
        }
    }, [clients]);

    // Base URL for your image server (Adjust this if needed)
    const baseURL = 'http://77.37.45.224:3002/uploads/'; 

    // Ensure current client data is available
    const currentClient1 = clients[currentIndex1] || {};
    const currentClient2 = clients[currentIndex2] || {};

    return (
        <div className="testimonials-wrapper">
            {/* First Testimonial */}
            <div className="client-testimonial">
                <div className="client-img">
                    <img 
                        src={currentClient1.image ? `${baseURL}${currentClient1.image.split('\\').pop()}` : img_one} 
                        alt="Client" 
                    />
                </div>
         
                    <div className="client-container fade-in">
                        <div className="client-detail">
                            <div className="client-name">
                                <p>{currentClient1.Name || 'Name not available'}, {currentClient1.jobProfile || 'Job profile not available'}</p>
                            </div>
                            <div className="client-rating">
                                <div className="stars">
                                    {"★".repeat(currentClient1.Rating ? parseInt(currentClient1.Rating, 10) : 0)}{"☆".repeat(5 - (currentClient1.Rating ? parseInt(currentClient1.Rating, 10) : 0))}
                                </div>
                            </div>
                            <div className="client-review">
                                <p>"{currentClient1.Description || 'Description not available'}</p>
                            </div>
                        </div>
                    </div>
      
            </div>

            {/* Second Testimonial */}
            <div className="client-testimonial client-testimonial-reversed">
                <div className="client-container-reverse">
                    <div className="client-detail">
                        <div className="client-name">
                            <p>{currentClient2.Name || 'Name not available'}, {currentClient2.jobProfile || 'Job profile not available'}</p>
                        </div>
                        <div className="client-rating">
                            <div className="stars">
                                {"★".repeat(currentClient2.Rating ? parseInt(currentClient2.Rating, 10) : 0)}{"☆".repeat(5 - (currentClient2.Rating ? parseInt(currentClient2.Rating, 10) : 0))}
                            </div>
                        </div>
                        <div className="client-review">
                            <p>"{currentClient2.Description || 'Description not available'}</p>
                        </div>
                    </div>
                </div>
                <div className="client-img-reverse">
                    <img 
                        src={currentClient2.image ? `${baseURL}${currentClient2.image.split('\\').pop()}` : img_two} 
                        alt="Client Image" 
                    />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
