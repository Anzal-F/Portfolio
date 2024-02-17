import React from 'react';
import '../style/project.css'; // Import CSS file for styling
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import libraryProject from "../../assets/project3.png"; // Import image for library project

const Projects = () => {
  return (
    <section className="project" id="projects">
      <div className="content_project">
        <p className='project_title'>PROJECTS</p>
        <br />
        <div className="project_row">
          <div className="project_item">
            <a href="https://main--silver-raindrop-766002.netlify.app/">
              <img src={project1} alt="Project 1" className='project_img' />
              <span className="project_name">Project 1</span>
            </a>
          </div>
          <div className="project_item3">
            <a href="https://mypersonallibrary01.netlify.app/">
              <img src={libraryProject} alt="Library Project" className='project_img' />
              <span className="project_name">Library Project</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
