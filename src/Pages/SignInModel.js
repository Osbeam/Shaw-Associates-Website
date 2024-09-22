import React, { useState } from "react";
import './SignInModel.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUpModal from "./SignUpModel";

const SignInModal = ({ showModal, toggleModal, onLoginSuccess }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleSignUpModal = () => {
        setShowSignUpModal(!showSignUpModal);
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3002/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                onLoginSuccess(); // Update the logged-in state
                toggleModal(); // Close the modal
                setEmail('');
                setPassword('');
            } else {
                setErrorMessage(data.message);
                toast.error(data.message, {
                    position: "top-right",
                    autoClose: 3000,
                });
            }
        } catch (error) {
            console.error("Error logging in:", error);
            setErrorMessage("Something went wrong. Please try again.");
            toast.error("Something went wrong. Please try again.", {
                position: "top-right",
                autoClose: 3000,
            });
        }
    };

    if (!showModal) return null;

    return (
        <div className="modal show" tabIndex="-1" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog" style={{ marginTop: '100px' }}>
                <div className="modal-content">
                    <div className="modelHead">
                        <h1>Welcome to <br />Shaw Associates </h1>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    placeholder="Email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="mb-3 password-input">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="form-control"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <span className="toggle-password" onClick={togglePasswordVisibility}>
                                    {showPassword ? "👁️" : "🙈"}
                                </span>
                            </div>

                            {errorMessage && (
                                <div className="alert alert-danger" role="alert">
                                    {errorMessage}
                                </div>
                            )}

                            <div className="Submit-btn">
                                <button type="submit">Sign In</button>
                            </div>

                            <div className="log-text">
                                <p>Don't have an Account? <span style={{ cursor: 'pointer' }} onClick={toggleSignUpModal}>Sign Up</span></p>
                            </div>
                            <div className="log-text">
                                <p style={{ cursor: 'pointer' }}>Forgot Password?</p>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn-close" aria-label="Close" onClick={toggleModal}></button>
                    </div>
                </div>
            </div>
            <SignUpModal showModal={showSignUpModal} toggleModal={toggleSignUpModal} />
            <ToastContainer />
        </div>
    );
};

export default SignInModal;
