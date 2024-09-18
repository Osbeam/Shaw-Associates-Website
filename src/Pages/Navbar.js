import React from "react";
import Logo from '../Images/Shaw-Associates logo.png'
import './Navbar.css'


const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img className="" style={{ width: '70px' }} src={Logo} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <form className="d-flex" role="search">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/aboutus">ABOUT US</a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link active" href="/services">SERVICES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/blog">BLOG</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/contactus">CONTACT US</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="/signin">SIGN IN</a>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;