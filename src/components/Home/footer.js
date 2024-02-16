import React from 'react'
import '../style/footer.css';
import instagram from "../../assets/instagram.png"

import linkedln from "../../assets/linkedln.png"

import github from "../../assets/github.png"

const Footers = () => {
    return (
        <footer>
            <div className="footer-wrapper">
        <div className="footer-section-two">
          <div className="footer-section-columns">
          <div className="socials">
          <a href="#"><img src= {instagram} alt="Instagram" className="ig" /></a>
          <a href="#"><img src={linkedln} alt="LinkedIn" className="lkln" /></a>
          <a href="#"><img src={github} alt="GitHub" className="git" /></a>
        </div>
          </div>
        </div>
      </div>
        </footer>
    );
  };
  
  export default Footers;


  