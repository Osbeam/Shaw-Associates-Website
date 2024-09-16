import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import img_one from '../Images/Rectangle 47.png';
import img_two from '../Images/Rectangle 47.png';

const Testimonials = ({ clients }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (clients.length > 0) {
            const intervalId = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
            }, 5000); // Change testimonial every 5 seconds

            return () => clearInterval(intervalId); // Clear interval on component unmount
        }
    }, [clients]);

    // Base URL for your image server (Adjust this if needed)
    const baseURL = 'http://localhost:5000/uploads/'; 

    // Ensure current client data is available
    const currentClient = clients[currentIndex] || {};

    return (
        <div className="testimonials-wrapper">
            {/* Existing Client Testimonial Section */}
            <div className="client-testimonial">
                <div className="client-img">
                    <img 
                        src={currentClient.image ? `${baseURL}${currentClient.image.split('\\').pop()}` : img_one} 
                        alt="Client" 
                    />
                </div>
                {clients.length > 0 ? (
                    <div className="client-container fade-in">
                        <div className="client-detail">
                            <div className="client-name">
                                <p>{currentClient.Name || 'Name not available'}, {currentClient.jobProfile || 'Job profile not available'}</p>
                            </div>
                            <div className="client-rating">
                                <div className="stars">
                                    {"★".repeat(currentClient.Rating ? parseInt(currentClient.Rating, 10) : 0)}{"☆".repeat(5 - (currentClient.Rating ? parseInt(currentClient.Rating, 10) : 0))}
                                </div>
                            </div>
                            <div className="client-review">
                                <p>"{currentClient.Description || 'Description not available'}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading client testimonials...</p>
                )}
            </div>

            <div className="client-testimonial client-testimonial-reversed">
                <div className="client-container-reverse">
                    <div className="client-detail">
                        <div className="client-name">
                            <p>{currentClient.Name || 'Name not available'}, {currentClient.jobProfile || 'Job profile not available'}</p>
                        </div>
                        <div className="client-rating">
                            <div className="stars">
                                {"★".repeat(currentClient.Rating ? parseInt(currentClient.Rating, 10) : 0)}{"☆".repeat(5 - (currentClient.Rating ? parseInt(currentClient.Rating, 10) : 0))}
                            </div>
                        </div>
                        <div className="client-review">
                            <p>"{currentClient.Description || 'Description not available'}</p>
                        </div>
                    </div>
                </div>
                <div className="client-img-reverse">
                    <img 
                        src={currentClient.image ? `${baseURL}${currentClient.image.split('\\').pop()}` : img_one} 
                        alt="Client Image" 
                    />
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
