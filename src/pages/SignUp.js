import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

function SignUp() {
    return (
        <Layout>
            <div id="signup-container">
                <form id="signup_form">
                    <h1 id="signup_heading">Sign Up</h1>

                    <hr className="signup_hr" />

                    <label className="signup_label" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="signup_input"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Enter Name"
                    />

                    <label className="signup_label" htmlFor="phone">
                        Telephone Number
                    </label>
                    <input
                        className="signup_input"
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Enter Telephone"
                        pattern="[0-9]{10}"
                    />

                    <label className="signup_label" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        className="signup_input"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Email"
                    />

                    <label className="signup_label" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="signup_input"
                        type="password"
                        name="password"
                        id="password"
                        minLength="7"
                        placeholder="Enter Password"
                    />

                    <button className="signup_buttons">Sign Up</button>

                    <hr className="signup_hr" />

                    <Link className="signup_buttons" to="/login">Login</Link>
                </form>
            </div>
        </Layout>
    );
}

export default SignUp;