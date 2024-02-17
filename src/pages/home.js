import React from 'react';
import '../pages/home.css'; // Import CSS file for styling
import About from '../components/Home/about'; // Assuming About component is defined
import Project from '../components/Home/projects';
import profile from "../assets/profile.jpg"


const Home = () => {
  return (
    
    <section className="home" id='home'>
        <div className="content">
            <div className="image_container">
                <h2> <span>Anzal Farah</span></h2>
                <h4>Frontend Developer</h4>
            </div>
        </div>
      <About/>
      <Project/>
    </section>
  );
};

export default Home;
