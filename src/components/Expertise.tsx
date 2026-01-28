import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "ReactJS",
    "TypeScript",
    "NextJS",
    "JavaScript",
    "NodeJS",
    "TailwindCSS",
    "HTML5",
    "CSS3",
    "Flask",
    "React Native",
    "Latex",
    "SQL",
];

const labelsSecond = [
    "Git",
    "GitHub",
    "VSCode",
    "Microsoft Suite",
    "Pandas",
    "Figma",
    "SimplePlot",
    "CodeSkulptor",
    "Pytorch",
    "Adobe Illustrator"
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "Claude",
    "LlamaIndex",
    "Gemini",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built numerous web applications from scratch primarily using ReactJS. I am well grounded in the SDLC process and strong with front-end development as well as back-end development using python.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>I explore and build with modern GenAI tools to create practical, product-level features rather than demos. My work with LLMs focuses on integrating AI into real applications for intelligent interfaces, automation, or decision support.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;