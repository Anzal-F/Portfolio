import React from 'react';
import '../style/about.css'; // Import CSS file for styling

const About = () => {
  return (
    <section className="about" id="about">
      <div className="content_about">
        <h2 className='about_me'>ABOUT ME</h2>
        <br></br>
        <h6>
          As a frontend developer, I'm passionate about creating engaging web experiences. I'm committed to learning and mastering new technologies to enhance user interactions. My goal is to contribute positively to the field of web development while continuously refining my skills.
        </h6>
        
        <div className="info-section">
          <div className="info-box">
            <p className='nos'>3<sup>+</sup></p>
            <h3>Projects Done</h3>
          </div>
          <div className="info-box">
            <p className='nos'>1<sup>+</sup></p>
            <h3>Years of Experience</h3>
          </div>
        </div>

        <div className='skill_div'>
          <h4>SKILLS</h4>
          <br></br>
          <div>
            <div className="skill">
              <span>HTML</span>
              <div className="progress">
                <div className="progress-bar html">80%</div>
              </div>
            </div>
            <br></br>
            <div className="skill">
              <span>CSS</span>
              <div className="progress">
                <div className="progress-bar css">70%</div>
              </div>
            </div>
            <br></br>
            <div className="skill">
              <span>JavaScript</span>
              <div className="progress">
                <div className="progress-bar js">60%</div>
              </div>
            </div>
          </div>
        </div>

        <p className='topic'>TIMELINE</p>
        <div className="timeline">
          <div className="timeline-item">
            <h3>CASHIER</h3>
            <p>
                FreshCO Store
            </p>
            
            <p>04/2023 - Present</p>
            <p><br></br>•	Provided friendly and helpful assistance to customers, addressing questions and resolving issues.<br></br><br></br>
            •	Accurately processed cash, credit, and debit transactions with attention to detail.<br></br><br></br>
            •	Ensured accurate pricing for items through careful scanning and validation.
            </p>
          </div>
          <div className="timeline-item">
          <h3>SALES REPRESENTATIVE</h3>
            <p>
            World Wide Acquisition
            </p>
            
            <p>07/2022 - 10/2022</p>
            <p><br></br>●	Raised awareness and attracted donors through marketing campaigns.<br></br><br></br>
            Engaged in F2F sales and directly interacted with donors.<br></br><br></br>
            ●	Stayed up to date on extensive company services 
            </p>
          </div>
          <div className="timeline-item">
          <h3>ASSISTANT MANAGER </h3>
            <p>
            Red Sea Trading Limited
            </p>
            
            <p>4/2018 - 7/2019</p>
            <p><br></br>●	Oversaw customer service and satisfaction initiatives, reporting to management on successful Strategies<br></br><br></br>
        	●	Collaborated with sales and other internal partners to provide accurate and effective implementations<br></br><br></br>
        	●	Developed long-term rapport with clients to cultivate loyalty
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
