import React,{useState} from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login({setLoginUser}) {

    const navigate = useNavigate();
    const [user,setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value, type } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    
    const login = async() =>{
        const res = await axios.post("http://localhost:5001/login", user);
        if(res){
            alert(res.data.message)
            setLoginUser(res.data.user);
            navigate("/",{replace: true});
        }else{
            alert("Invalid User")
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
    };

    return (
        <Layout>{
            console.log(user)}
            <div id="login-container">
                <form id="login_form" onSubmit={handleSubmit}>
                    <h1 id="login_heading">Login</h1>

                    <hr className="login_hr" />

                    <label className="login_label" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        className="login_input"
                        type="email"
                        name="email"
                        value={user.email}
                        id="email"
                        onChange={handleChange}
                        placeholder="Enter Email"
                    />

                    <label className="login_label" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="login_input"
                        type="password"
                        name="password"
                        value={user.password}
                        id="password"
                        minLength="7"
                        onChange={handleChange}
                        placeholder="Enter Password"
                    />

                    <button type="submit" onClick={login} className="login_buttons">Login</button>
                    
                    <hr className="login_hr" />
                    
                    <Link className="login_buttons" to="/signup">Sign Up</Link>
                </form>
            </div>
        </Layout>
    );
}

export default Login;