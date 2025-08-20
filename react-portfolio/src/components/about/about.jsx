import React from "react";
import './about.css'

function About() {

    return (

        <section id="about" className="about">

            <div className="about-content">

                {/* About text */}
                <div className="about-text">
                    <h2>About</h2>
                    <p>A Software Engineering undergraduate at the University of Westminster focused on academic excellence and technical skill development. Committed to building strong foundations in software development while transforming knowledge into practical applications through collaborative projects and continuous learning, preparing for an impactful career in software engineering.</p>
                </div>
                
                {/* About image */}
                <div className="about-conatainer">
                    <div className="about-image">
                        <img src="public/images/girl.png" alt="profile"></img>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default About;