import React, { useState } from "react";
import './SignUpModel.css'; 
import { toast } from "react-toastify";

const SignUpModal = ({ showModal, toggleModal }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // Toggle confirm password visibility
    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validate if passwords match
        if (password !== confirmPassword) {
            toast.error("Passwords do not match!", {
                position: "top-right",
                autoClose: 3000,
            });
            return;
        }
    
        try {
            const response = await fetch('http://77.37.45.224:3002/api/newUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // Send data with capitalized field names to match the backend
                body: JSON.stringify({
                    Name: name,            // Capitalized "Name"
                    Email: email,          // Capitalized "Email"
                    Password: password,    // Capitalized "Password"
                    ConfirmPassword: confirmPassword // Capitalized "ConfirmPassword"
                }),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                toast.success("User registered successfully!", {
                    position: 'top-right',
                    autoClose: 3000,
                });
                setName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                toggleModal(); // Close the modal on successful registration
            } else {
                toast.error(data.message || "Something went wrong!", {
                    position: 'top-right',
                    autoClose: 3000,
                });
            }
        } catch (error) {
            toast.error("Error creating user. Please try again later.", {
                position: 'top-right',
                autoClose: 3000,
            });
        }
    };
    
    

    // Ensure modal doesn't render if showModal is false
    if (!showModal) return null;

    return (
        <div className="modal show" tabIndex="-1" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog" style={{ marginTop: '100px' }}>
                <div className="modal-content">
                    <div className="modelHead">
                        <h1>Welcome to <br /> Shaw Associates </h1>
                    </div>
                    <div className="modal-body">
                        {/* Form submission handler attached here */}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} // Update name state
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} // Update email state
                                    required
                                />
                            </div>
                            <div className="mb-3 password-input">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} // Update password state
                                    required
                                />
                                <span className="toggle-password" onClick={togglePasswordVisibility}>
                                    {showPassword ? "👁️" : "🙈"}
                                </span>
                            </div>
                            <div className="mb-3 password-input">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    className="form-control"
                                    id="confirm-password"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)} // Update confirmPassword state
                                />
                                <span className="toggle-password" onClick={toggleConfirmPasswordVisibility}>
                                    {showConfirmPassword ? "👁️" : "🙈"}
                                </span>
                            </div>
                            <div className="Submit-btn">
                                {/* Submit button triggers form submission */}
                                <button type="submit">Create Account</button>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn-close" aria-label="Close" onClick={toggleModal}></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpModal;
