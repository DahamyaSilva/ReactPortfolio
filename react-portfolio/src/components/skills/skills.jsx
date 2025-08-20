import React from "react";
import './skills.css'

function Skills() {

    return (

        <section id="skills" className="skills">
            {/*skills title */}
            <div style={{position: "relative"}}> 
                <div className="skills-icon">
                    <h2>Skills</h2>
                    <p>Here's what I work with</p>
                </div>
                
                {/*skill image*/}
                <div className="atom-container">
                    <div className="atom">
                        <img src="public/images/atom.png" alt="atom"></img>
                    </div>
                </div>
            </div>

            {/*Skills categories */}
            <div className="skills-info">
                <div className="skill-category">
                    <h3>Programming Languages</h3>
                    <div className="skill-tags">
                        <span className="skill-tag">Java</span>
                        <span className="skill-tag">JavaScript</span>
                        <span className="skill-tag">Python</span>
                        <span className="skill-tag">C#</span>
                    </div>
                </div>

                <div className="skill-category">
                    <h3>Web Development</h3>
                    <div className="skill-tags">
                        <span className="skill-tag">React.js</span>
                        <span className="skill-tag">HTML</span>
                        <span className="skill-tag">CSS</span>
                        <span className="skill-tag">Node.js</span>
                    </div>
                </div>
            </div>
        </section>

    )

}

export default Skills;