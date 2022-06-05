import React from "react";
import Layout from "../components/Layout";

function ContactUs() {
    return (
        <Layout>
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
                        id="subject"
                        placeholder="Enter Subject"
                        maxLength={100}
                    />

                    <label className="contact_label" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="contact_input"
                        name="message"
                        id="message"
                        placeholder="Enter Message"
                    />

                    <button type="submit" className="contact_buttons">Send</button>
                    
                    <hr className="contact_hr" />
                    
                    <button className="contact_buttons" to="/signup">Call Us</button>
                </form>
            </div>
        </Layout>
    );
}

export default ContactUs;