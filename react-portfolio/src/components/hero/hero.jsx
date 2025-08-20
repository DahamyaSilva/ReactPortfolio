import React from "react";
import './hero.css'
import DownloadButton from "../features/downloadResume";

function Hero () {
    return(
        <section id="home" className="hero">
            {/* Social links */}
            <div className="social-links">
                <a href=""><i className="fa-brands fa-linkedin"></i></a>
                <a href=""><i className="fa-brands fa-github"></i></a>
                <DownloadButton />
            </div>

            {/* Hero text */}
            <div className="hero-text">
                <h2>Software Engineering Undergraduate</h2>
                <p>Passionate about learning and developing skills</p>
                <p>Early-career developer eager to contribute, learn, and make an impact through code</p>   
            </div>

            {/* Flower decoration */}
            <div className="flower-container">
                <div className="flower">
                    <img src="public/images/metalic flower.png" alt="flower"></img>
                </div>
            </div>

            {/* Hero greeting */}
            <div className="hero-greeting">
                <h1 className="greeting">Hello! I am</h1>
                <h1 className="name">Dahamya</h1>
                <h1 className="name">Silva</h1>
            </div>
        </section>
    )
}

export default Hero;