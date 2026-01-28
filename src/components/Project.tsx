import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/Neriah29/Cart_max" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Neriah29/Cart_max" target="_blank" rel="noreferrer"><h2>CartMax</h2></a>
                <p>Developed an e-commerce web-application using HTML, CSS, and JavaScript, to reduce the hassle of in-person store visit, making it easier for customers to find their desired items.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Neriah29/Market-dynamics-markov-model" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Neriah29/Market-dynamics-markov-model" target="_blank" rel="noreferrer"><h2>Stock Market Model</h2></a>
                <p>Developed and released a stock market simulation model using Python and various data science libraries.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Neriah29/Six-Degrees-Graph-Traversal-System" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Neriah29/Six-Degrees-Graph-Traversal-System" target="_blank" rel="noreferrer"><h2>Six Degrees Traversal System</h2></a>
                <p>Built a Python-based graph system connecting 5,000 actors across 3,400 movies; implemented BFS traversal to compute shortest path queries under 0.03s, O(V+E) efficiency.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Neriah29/Desktop-style-portfolio-WIP-" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Neriah29/Desktop-style-portfolio-WIP-" target="_blank" rel="noreferrer"><h2>Desktop-style Portfolio Template</h2></a>
                <p>Designed a Next.js-powered, desktop-inspired portfolio showcasing my projects, skills, and experience.</p>
            </div>
            {/* <div className="project">
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.byuh.edu/covid-19-case-management" target="_blank" rel="noreferrer"><h2>COVID-19 Case Management</h2></a>
                <p>Built official charts for COVID/vaccination tracking for an educational institution using JavaScript and the Google Sheets API v4. The dashboard served the university's leadership in their decision-making processes.</p>
            </div>
            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>L-mail</h2></a>
                <p>Designed and deployed a web-based job-order ticketing system to replace slow, paper-based campus maintenance workflows.</p>
            </div> */}
            {/* <div className="project">
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/multi-reg-analysis" target="_blank" rel="noreferrer"><h2>Multiple Regression Property Analysis</h2></a>
                <p>Analyzed the real estate market in Japan and predicted property prices by implementing statistical methods such as OLS and multi-regression analysis. This project leveraged Python and various libraries such as Pandas, NumPy, Matplotlib, and Scikit-Learn.</p>
            </div>
            <div className="project">
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://holokai.byuh.edu/programs-of-study" target="_blank" rel="noreferrer"><h2>Programs of Study</h2></a>
                <p>Designed and developed a custom component for a CMS-based platform (e.g., 'Brightspot') using Java, Handlebars, and LESS. University students can find their majors of interest through this module.</p>
            </div>
            <div className="project">
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix" target="_blank" rel="noreferrer"><h2>Transfer Evaluation Matrix</h2></a>
                <p>Created an interactive CSV table generator with Java, Handlebars, and LESS. This project helps transfer students to quickly identify eligible credits.</p>
            </div>
            <div className="project">
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/yujisatojr/submeowrine" target="_blank" rel="noreferrer"><h2>Submeowrine</h2></a>
                <p>Developed and released an Android mobile application using Java and Android Studio that runs a 2D shooting game.</p> 
            </div>*/}
        </div>
    </div>
    );
}

export default Project;