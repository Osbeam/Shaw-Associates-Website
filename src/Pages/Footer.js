import React from "react";
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, WhatsAppOutlined } from '@ant-design/icons';

const Footer = () => {
    return (
        <>
            <div className="d-flex flex-column justify-content-left align-items-left text-left">
                <div className="footer">

                    <div className="row footer-section">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="content-footer">
                                <h1>Stay Connected</h1>
                                <div className="newsletter-signup">
                                    <input type="email" placeholder="Enter email" />
                                    <button>Sign Up</button>
                                </div>
                                <div className="social-media">
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                        <LinkedinOutlined className="social-icon" />
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                        <InstagramOutlined className="social-icon" />
                                    </a>
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                        <FacebookOutlined className="social-icon" />
                                    </a>
                                    <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                                        <WhatsAppOutlined className="social-icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="content-footer">
                                <div className="unorderd-list">
                                    <ul>
                                        <li><a style={{textDecoration:'none', color:'white', cursor:'pointer'}} href="http://localhost:3000/">HOME</a></li>
                                        <li><a style={{textDecoration:'none', color:'white', cursor:'pointer'}} href="http://localhost:3000/aboutus">ABOUT US</a></li>
                                        <li> <a style={{textDecoration:'none', color:'white', cursor:'pointer'}} href="http://localhost:3000/services">SERVICES</a></li>
                                        <li> <a style={{textDecoration:'none', color:'white', cursor:'pointer'}} href="http://localhost:3000/blog">BLOG</a></li>
                                        <li>CONTACT US</li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="content-footer">
                                <div className="footer-office-time">
                                    <h1>Office Timings :</h1>
                                    <p>Mon - Sat : 9:30 am to 6:30 pm</p>
                                    <p>Sun - Off</p>
                                </div>
                            </div>
                        </div>
                        <div className="footer-address">
                            <p>Address : Office No. B-18, DC Road, Above PMS Office, Magarpatta, Hadapsar, Pune,
                                Maharashtra 411013</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;