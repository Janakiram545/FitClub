import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then((result) => {
                console.log(result);
                if (result.data === "Success") {
                    navigate('/home');
                } else {
                    setErrorMessage("Incorrect password. Please try again.");
                }
            })
            .catch((err) => {
                console.log(err);
                setErrorMessage("Error" + err.message);
            });
    };

    const handleForgotPassword = () => {
        axios.post('http://localhost:3001/forgot-password-request', { email })
            .then((result) => {
                console.log(result);
                if (result.data === "Email sent") {
                    navigate('/verify-otp', { state: { email } });
                } else {
                    setErrorMessage("Failed to send email." + result.message);
                }
            })
            .catch((err) => {
                console.log(err);
                setErrorMessage("An error occurred." + err.message);
            });
    };

    return (
        // <div className="login-container">
        //     <div className="login-form">
        //         <h2>Login</h2>
        //         <form onSubmit={handleSubmit}>
        //             <div className="mb-3">
        //                 <label htmlFor="email">
        //                     <strong>Email</strong>
        //                 </label>
        //                 <input
        //                     type="email"
        //                     placeholder="Enter your email"
        //                     autoComplete="off"
        //                     name="email"
        //                     className="form-control"
        //                     onChange={(e) => setEmail(e.target.value)}
        //                 />
        //             </div>
        //             <div className="mb-3">
        //                 <label htmlFor="password">
        //                     <strong>Password</strong>
        //                 </label>
        //                 <input
        //                     type="password"
        //                     placeholder="Enter your password"
        //                     autoComplete="off"
        //                     name="password"
        //                     className="form-control"
        //                     onChange={(e) => setPassword(e.target.value)}
        //                 />
        //             </div>
        //             {errorMessage && <div className="error-message">{errorMessage}</div>}
        //             <button type="submit" className="btn btn-success">
        //                 Login
        //             </button>
        //         </form>
        //         <Link to="/register" className="btn btn-default">
        //             Sign Up
        //         </Link>
        //         <button className="forgot-password-link" onClick={handleForgotPassword}>
        //             Forgot Password?
        //         </button>
        //     </div>
        // </div>
        <div className="login-container">
             <div className="join-now">

            <div className="login-form">
                <h2>Welcome to FitClub</h2>
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
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            autoComplete="off"
                            name="password"
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    <button type="submit" className="btn btn-success">
                        Login
                    </button>
                </form>
                <Link to="/register" className="btn btn-default">
                    Sign Up
                </Link>
                {/* <button className="forgot-password-link" onClick={handleForgotPassword}>
                    Forgot Password?
                </button> */}
                <Link to="/">
                    <button>Go Back</button>
                </Link>
            </div>
        </div>
        </div>
    );
}

export default Login;
