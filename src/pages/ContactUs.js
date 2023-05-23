import React,{useState} from "react";
import Layout from "../components/Layout";
import axios from "axios";

function ContactUs() {

    const [data, setData] = useState({
        subject: "",
        message: ""
    })

    const handleChange = e => {
        const { name, value, type } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const submit = () =>{
        try{
            const resp = axios.post('http://localhost:5001/contacts',data);
            alert(`${resp}`);
        }catch(e){
            alert(`${e}`);
        }
    }

    return (
        <Layout>
            {
                console.log(data)
            }
            <div id="contact_container">
                <form id="contact_form">
                    <h1 id="contact_heading">Contact Us</h1>

                    <hr className="contact_hr" />

                    <label className="contact_label" htmlFor="subject">
                        Subject
                    </label>
                    <textarea
                        className="contact_input"
                        name="subject"
                        value={data.subject}
                        id="subject"
                        placeholder="Enter Subject"
                        onChange={handleChange}
                        maxLength={100}
                    />

                    <label className="contact_label" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="contact_input"
                        name="message"
                        value={data.message}
                        id="message"
                        onChange={handleChange}
                        placeholder="Enter Message"
                    />

                    <button type="submit" onClick={submit} className="contact_buttons">Send</button>
                    
                    <hr className="contact_hr" />
                    
                    <button className="contact_buttons" to="/signup">Call Us</button>
                </form>
            </div>
        </Layout>
    );
}

export default ContactUs;