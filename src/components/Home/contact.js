import React from 'react';
import '../style/contact.css'; // Import CSS file for styling
import emailIcon from "../../assets/email.png"; // Import email icon image
import githubIcon from "../../assets/github.png"; // Import GitHub icon image
import linkedInIcon from "../../assets/linkedln.png"; // Import LinkedIn icon image


const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-wrapper">
            <div className="contact-item">
                <p className='contact_h'>
                    CONTACT
                </p>
                <p className='contact_p1'>Dont forget to contact me at : </p>
            <a href="mailto:your.email@example.com" className="contact-link"><img src={emailIcon} alt="Email" className="contact-icon" /></a>
            </div>
            <div className="contact-item">
          <a href="https://github.com/Anzal-F" className="contact-link"><img src={githubIcon} alt="GitHub" className="contact-icon" /></a>
        </div>
        <div className="contact-item">
          <a href="http://linkedin.com/in/anzal-mohamed" className="contact-link"><img src={linkedInIcon} alt="LinkedIn" className="contact-icon" /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
