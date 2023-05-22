import React, { useState } from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import axios from "axios";

function SignUp() {
    const [user, setUser] = useState({
        name: "",
        phoneno: "",
        email: "",
        password: "",
    })

    const handleChange = e => {
        const { name, value, type } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        console.log(user);
        user.phoneno = "9579203196"
        console.log(user);
        const { name, phoneno, email, password} = user
        if (name && email && password && phoneno) {
            axios.post("http://localhost:5001/register", user).then(res => {
                alert(res.data.message)
            })
        } else {
            alert("Invalid Input");
        }
    }

    return (
        
        <Layout>
            {
                
            }
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
                        value={user.name}
                        id="name"
                        placeholder="Enter Name"
                        onChange={handleChange}
                    />

                    <label className="signup_label" htmlFor="phone">
                        Telephone Number
                    </label>
                    <input
                        className="signup_input"
                        type="text"
                        
                        name="phoneno"
                        value={user.phoneno}
                        placeholder="Enter Telephone"
                        
                        onChange={handleChange}
                    />

                    <label className="signup_label" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        className="signup_input"
                        type="email"
                        name="email"
                        value={user.email}
                        id="email"
                        placeholder="Enter Email"
                        onChange={handleChange}
                    />

                    <label className="signup_label" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="signup_input"
                        type="password"
                        name="password"
                        value={user.password}
                        id="password"
                        minLength="7"
                        placeholder="Enter Password"
                        onChange={handleChange}
                    />

                    <button className="signup_buttons" onClick={register}>Sign Up</button>

                    <hr className="signup_hr" />

                    <Link className="signup_buttons" to="/login">Login</Link>
                </form>
            </div>
        </Layout>
    );
}

export default SignUp;