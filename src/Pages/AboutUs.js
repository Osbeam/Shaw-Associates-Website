import React from "react";
import Navbar from "./Navbar";
import Footer from '../Pages/Footer'
import Img1 from '../Images/our-mission-3.jpeg'
import Img2 from '../Images/our-mission-1.jpeg'
import Img3 from '../Images/our-mission-2.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const AboutUs = () => {
    return (
        <>
            <div className="container-fluid">
            <Navbar />

                <div className="bg-aboutus d-flex flex-column justify-content-left align-items-left text-left">
                    <div className="hero-about-box">
                        <div className="welcome-container-about">
                            <h1 className="welcome-text-about">
                                About<br />
                                Shaw Associates
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="aboutus-content">
                    <div className="inner-container-about">
                        <h1>About Company</h1>
                        <p>Shaw Associates is a leading financial services firm specializing in taxation, GST, and Income Tax Return (ITR) services. With years of expertise and a dedicated team of professionals, we are committed to providing personalized, reliable, and efficient financial solutions to individuals, small businesses, and large corporations alike.
                            Founded on the principles of integrity, accuracy, and customer-centricity, Shaw Associates has built a reputation for delivering exceptional service that exceeds our clients' expectations. We understand the complexities of the ever-evolving financial landscape, and our goal is to simplify the process, ensuring our clients remain compliant and financially secure.
                            Our team consists of experienced tax consultants, financial advisors, and compliance experts who are passionate about helping you achieve your financial goals. Whether it's optimizing your tax strategy, ensuring GST compliance, or filing your ITR, Shaw Associates is your trusted partner for all your financial needs.</p>
                    </div>
                </div>

                <div className="our-vision">
                    <div className="our-vision-container">
                        <div className="box">
                            <h1>Our Vision</h1>
                        </div>
                        <div className="box-content">
                            <h1>To be the most trusted and innovative financial services provider, empowering individuals and businesses to achieve financial success through expert guidance and comprehensive solutions.</h1>
                        </div>
                    </div>

                    <div className="our-mission">
                        <div className="our-mission-container">
                            <div className="card">
                                <div className="card-container">
                                    <div className="card-img-container">
                                        <img src={Img1} />
                                    </div>
                                    <p>Client-Centric<br /> Service:</p>
                                    <div className="content-para">
                                        <p>To offer tailored financial services
                                            that meet the unique needs of each
                                            client, ensuring their financial
                                            well-being and peace of mind.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-container">
                                    <div className="card-img-container">
                                        <img src={Img2} />
                                    </div>
                                    <p>Excellence in
                                        <br /> Execution:</p>
                                    <div className="content-para">
                                        <p>To maintain the highest standards of accuracy, integrity, and professionalism in all our services, delivering value that exceeds expectations.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-container">
                                    <div className="card-img-container">
                                        <img src={Img3} />
                                    </div>
                                    <p>Continuous
                                        <br />Learning:</p>
                                    <div className="content-para">
                                        <p>To stay ahead of industry trends and regulatory changes, continuously enhancing our knowledge and capabilities to serve our clients better
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="our-mission-container-1">
                            <div className="card">
                                <div className="card-container">
                                    <div className="card-img-container">
                                        <img src={Img1} />
                                    </div>
                                    <p>Client-Centric<br /> Service:</p>
                                    <div className="content-para">
                                        <p>To offer tailored financial services
                                            that meet the unique needs of each
                                            client, ensuring their financial
                                            well-being and peace of mind.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-container">
                                    <div className="card-img-container">
                                        <img src={Img2} />
                                    </div>
                                    <p>Excellence in
                                        <br /> Execution:</p>
                                    <div className="content-para">
                                        <p>To maintain the highest standards of accuracy, integrity, and professionalism in all our services, delivering value that exceeds expectations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        </>
    )
}

export default AboutUs;