import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D5603AQFRfAdufRLAow/profile-displayphoto-scale_400_400/B56ZtiU4SOJcAg-/0/1766881199942?e=1770854400&v=beta&t=mONo7isd1WgWMckBP18JdG2si9Cm4z5iChzx8wuMw94" alt="Avatar" />
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