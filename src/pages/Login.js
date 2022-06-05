import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

function Login() {
    return (
        <Layout>
            <div id="login-container">
                <form id="login_form">
                    <h1 id="login_heading">Login</h1>

                    <hr className="login_hr" />

                    <label className="login_label" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        className="login_input"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter Email"
                    />

                    <label className="login_label" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="login_input"
                        type="password"
                        name="password"
                        id="password"
                        minLength="7"
                        placeholder="Enter Password"
                    />

                    <button type="submit" className="login_buttons">Login</button>
                    
                    <hr className="login_hr" />
                    
                    <Link className="login_buttons" to="/signup">Sign Up</Link>
                </form>
            </div>
        </Layout>
    );
}

export default Login;