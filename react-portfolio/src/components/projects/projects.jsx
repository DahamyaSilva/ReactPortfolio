import React from "react";
import './projects.css'
function Projects() {

    return (

        <section id="projects" className="projects">
            <div className="projects-content">

                {/*Project header*/}
                <div className="projects-header">
                    <h2>Projects</h2>
                    <p>What I have worked on</p>
                </div>
                
                {/*Project list*/}
                <div className="projects-grid">
                    <div className="project-list">
                        <ul>
                            <li>FindMyLawyer</li>
                            <li>Life Below Water</li>
                            <li>Plane Seat Management System</li>
                            <li>Ticketing System</li>
                            <li>Art Page</li>
                        </ul>
                    </div>

                    {/*Project image*/}
                    <div className="project-container">
                        <div className="project-image">
                            <img src="public/images/project.jpg" alt="Project cover"></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )     

}

export default Projects;