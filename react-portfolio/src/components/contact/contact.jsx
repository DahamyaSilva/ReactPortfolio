import React from "react";
import './contact.css';

function Contact() {

    return (

     <section id="contact" class="contact">
        <div className="contact-content">

            {/* Topic */}
            <h2>Reach Out Now</h2>
            <button className="contact-btn">Let's Get in Touch</button>
            
            {/* Contact info */}
            <div className="contact-info">

                {/* Social icons */}
                <div className="social-icons">
                    <a href="#" className="social-icon"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#" className="social-icon"><i class="fab fa-whatsapp"></i></a>
                    <a href="#" className="social-icon"><i class="fab fa-instagram"></i></a>
                    <a href="#" className="social-icon"><i class="fab fa-twitter"></i></a>
                </div>
                
                {/* contact details */}
                <div className="contact-details">
                    <div className="contact-item">
                        <i className="fas fa-envelope"></i>
                        <span>dahamyapsilva@gmail.com</span>
                    </div>
                    <div className="contact-item">
                        <i classNameclass="fas fa-phone"></i>
                        <span>0123456789</span>
                    </div>
                </div>
                
                <p className="contact-message">Ready to collaborate? Drop me a message</p>
            </div>
        </div>
    </section>

    )
}

export default Contact;