import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profilepic from '../assets/images/profilepic.jpeg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilepic} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Neriah29" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/neriah-okolo/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Neriah Okolo</h1>
          <p>Full Stack Engineer</p>
          <h4>Computer Science @ Rice University</h4>

          <div className="mobile_social_icons">
            <a href="https://github.com/Neriah29" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/neriah-okolo/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;