import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from '../Pages/Footer'
import Navbar from "../Pages/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import About from '../Images/woman-doing-accounting 1.png'
// import img_one from '../Images/Rectangle 47.png'
// import img_two from '../Images/Rectangle 48.png'
import '../Pages/HomePage.css'
import Testimonials from './TestimonialHomePage'

import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        axios.get('http://77.37.45.224:3002/api/client')
            .then(response => {
                if (response.data.success) {
                    setClients(response.data.data);
                }
            })
            .catch(error => {
                console.error("There was an error fetching the clients!", error);
            });
    }, []);

    // const navigate = useNavigate();

    // const handleNavigation = () => {
    //     navigate('/blog'); // Navigate to /blog when clicked
    // };
    // const handleNavigationGst = () => {
    //     navigate('/blog-gst'); // Navigate to /blog when clicked
    // };
    // const handleNavigationItr = () => {
    //     navigate('/blog-itr'); // Navigate to /blog when clicked
    // };
    // const handleNavigationTaxPlan = () => {
    //     navigate('/blog-tax-plan'); // Navigate to /blog when clicked
    // };


    return (
        <>
            <div className="container-fluid">
                <Navbar />

                <div className="bg-custom d-flex flex-column justify-content-left align-items-left text-left">
                    <div className="welcome-container">
                        <h1 className="welcome-text">
                            <span className="welcome-font"> WELCOME TO</span><br />
                            <span className="hero-span">SHAW ASSOCIATES</span>
                        </h1>
                        <p className="welcome-subtext">
                            Simplifying Taxation and GST for Your Business
                        </p>
                    </div>
                </div>

                <div>
                    <div className="row about-section">
                        <div className="col-md-6 col-12">
                            <img src={About} alt="About Shaw Associates" className="img-fluid" />
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="head-about">
                                <h1>About Shaw Associates</h1>
                            </div>
                            <div className="About-para">
                                <p>At Shaw Associates, we are dedicated to simplifying the complexities of taxation and GST for businesses and individuals alike. With years of experience in the field, our expert team is committed to providing reliable, efficient, and tailored solutions that help you navigate the intricate world of tax compliance and planning.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center ">
                    <div>
                        <div className="service-text">
                            <h1>What are our Services ?</h1>
                        </div>
                        <div class="service-carousel-desktop">
                            <div id="carouselExampleDesktop" class="carousel slide">
                                <div class="carousel-inner">

                                    <div class="carousel-item active">
                                        <div class="row">
                                            <div class="col-4">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <h5 class="card-title">Personal Tax Services</h5>
                                                        <p class="card-text">From tax planning to filing, our personalized services ensure you’re getting the best possible outcome for your individual tax situation...From tax planning to filing, our personalized services ensure you’re getting the best possible outcome for your individual tax situation.</p>
                                                        <a href="/services" class="read-more-link">Read more...</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <h5 class="card-title">Corporate Tax Services</h5>
                                                        <p class="card-text">We provide strategic tax planning and compliance support to help your business navigate complex regulations and optimize your tax position...Get expert assistance with GST registration and accurate filing, ensuring your business stays compliant with current regulations.</p>
                                                        <a href="/services" class="read-more-link">Read more...</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <h5 class="card-title">GST Registration & Filing</h5>
                                                        <p class="card-text">Get expert assistance with GST registration and accurate filing, ensuring your business stays compliant with current regulations...Get expert assistance with GST registration and accurate filing, ensuring your business stays compliant with current regulations.current regulations.</p>
                                                        <a href="/services" class="read-more-link">Read more...</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="row">
                                            <div class="col-4">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <h5 class="card-title">GST Advisory</h5>
                                                        <p class="card-text">Receive tailored advice on GST regulations and exemptions to enhance your business’s efficiency and compliance...Get expert assistance with GST registration and accurate filing, ensuring your business stays compliant with current regulations. urrent regulations.urrent regulations.</p>
                                                        <a href="/services" class="read-more-link">Read more...</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <h5 class="card-title">Income Tax Filing & Advisory</h5>
                                                        <p class="card-text">Whether you're a salaried employee, self-employed professional, or business owner, we ensure timely and compliant filing, along with personalized tax planning to optimize your savings...Get expert assistance with GST registration and accurate filing, ensuring your business stays compliant with current regulations.</p>
                                                        <a href="/services" class="read-more-link">Read more...</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <h5 class="card-title">Card 6</h5>
                                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content...Get expert assistance with GST registration and accurate filing, ensuring your business stays compliant with current regulations.urrent regulations.urrent regulations.urrent regulations.</p>
                                                        <a href="/services" class="read-more-link">Read more...</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDesktop" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDesktop" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>

                        <div class="service-carousel-mobile">
                            <div id="carouselExampleMobile" class="carousel slide">
                                <div class="carousel-inner">

                                    <div class="carousel-item active">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <h5 class="card-title">Personal Tax Services</h5>
                                                        <p class="card-text">From tax planning to filing, our personalized services ensure you’re getting the best possible outcome for your individual tax situation...<a href="/services" class="read-more-link">Read more...</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <h5 class="card-title">Corporate Tax Services</h5>
                                                        <p class="card-text">We provide strategic tax planning and compliance support to help your business navigate complex regulations and optimize your tax position...<a href="/services" class="read-more-link">Read more...</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="card">
                                                    <div class="card-body">
                                                        <h5 class="card-title">GST Registration & Filing</h5>
                                                        <p class="card-text">Get expert assistance with GST registration and accurate filing, ensuring your business stays compliant with current regulations...<a href="/services" class="read-more-link">Read more...</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleMobile" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleMobile" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center align-items-center main-section">
                    <div className="row Blog-section">
                        <div className="blog-head">
                            <h1>Blogs</h1>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="blog-content">

                                <div className="blog-para">
                                    <p>Welcome to the Shaw Associates blog—your go-to resource for
                                        insights and updates on taxation, GST, and ITR services.
                                        Our expert articles are designed to help you navigate the
                                        complexities of financial compliance, optimize your tax strategies,
                                        and stay informed about the latest regulatory changes.
                                        Explore our posts to empower your financial decisions today!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="blog-content">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="content-item" >
                                            <a href="/blog">
                                                <p>Tax Saving Tips</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="content-item" >
                                            <a href="/blog-gst">
                                                <p>What is GST and
                                                    Why is it Important?
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-6">
                                        <div className="content-item" >
                                            <a href="/blog-itr">
                                                <p>ITR Filing</p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="content-item" >
                                            <a href="/blog-tax-plan">
                                                <p>Tax Planning Tips for Freelancers and Gig Workers</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column justify-content-left align-items-left text-left">
                    <div className="client-head">
                        <h1>
                            What our Client says
                        </h1>
                    </div>
                    <div>
                        <Testimonials clients={clients} />
                    </div>
                </div>

                <Footer />
            </div>


        </>
    )
}

export default HomePage