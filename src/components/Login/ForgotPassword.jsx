import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import './ForgotPassword.css';

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/forgot-password-request', { email })
            .then((result) => {
                console.log(result);
                if (result.data === "Email sent") {
                    setSuccessMessage("An email with OTP has been sent to your email address.");
                } else {
                    setErrorMessage("Failed to send email. Please try again.");
                }
            })
            .catch((err) => {
                console.log(err);
                setErrorMessage(err.message);
            });
    };

    return (
        <div className="forgot-password-container">
            <div className="forgot-password-form">
                <h2>Forgot Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            autoComplete="off"
                            name="email"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    {successMessage && <div className="success-message">{successMessage}</div>}
                    <button type="submit" className="btn btn-success">
                        Send OTP
                    </button>
                </form>
                <Link to="/login" className="back-to-login-link">
                    Back to Login
                </Link>
            </div>
        </div>
    );
}

export default ForgotPassword;
