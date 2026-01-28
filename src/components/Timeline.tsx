import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import nsbelogo from '../assets/images/nsbelogo.png';
import handshakeai from '../assets/images/handshakelogo.jpg';
import questbridgelogo from '../assets/images/questberidgelogo.png';
import ricelogo from '../assets/images/ricelogo.png';
import codeworldlogo from '../assets/images/Codeworld Innovations Abuja.jpeg';




function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jan 2026-present"
            iconStyle={{ background: '#ffffffff', color: 'rgb(39, 40, 34)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            icon={<img src={nsbelogo} alt="NSBE Logo" style={{ objectFit: 'contain', width: '100%', height: '100%' , borderRadius: '50%'}} />}
            >
            <h2 className="vertical-timeline-element-title">NSBE APEx Scholar</h2>
            <h4 className="vertical-timeline-element-subtitle">Houston, TX</h4>
            <p className="vertical-timeline-element-subtitle">
              National Society of Black Engineers
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Oct 2025 - Dec 2025"
            iconStyle={{ background: '#ffffffff', color: 'rgb(39, 40, 34)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            icon={<img src={handshakeai} alt="Handshake AI Logo" style={{ objectFit: 'contain', width: '100%', height: '100%' , borderRadius: '50%'}} />}
          >
            <h2 className="vertical-timeline-element-title">AI Researcher and Consultant</h2>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p className="vertical-timeline-element-subtitle">
              Handshake AI
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Oct 2025 - present"
            iconStyle={{ background: '#979595d6', color: 'rgb(39, 40, 34)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            icon={<img src={ricelogo} alt="Rice Logo" style={{ objectFit: 'contain', width: '100%', height: '100%' , borderRadius: '50%'}} />}
          >
            <h2 className="vertical-timeline-element-title">Treasurer</h2>
            <h4 className="vertical-timeline-element-subtitle">Houston, TX</h4>
            <p className="vertical-timeline-element-subtitle">
              Rice African Students Association
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2024"
            iconStyle={{ background: '#ffffffff', color: 'rgb(39, 40, 34)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            icon={<img src={questbridgelogo} alt="Questbridge Logo" style={{ objectFit: 'contain', width: '105%', height: '105%' , borderRadius: '60%'}} />}
          >
            <h3 className="vertical-timeline-element-title">Questbridge Scholar</h3>
            <h4 className="vertical-timeline-element-subtitle">Houston, TX</h4>
            <p>
              Questbridge
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2021 - Aug 2023"
           iconStyle={{ background: '#0b0101ff', color: 'rgb(39, 40, 34)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            icon={<img src={codeworldlogo} alt="CodeWorld Logo" style={{ objectFit: 'contain', width: '100%', height: '100%' , borderRadius: '60%'}} />}
          >
            <h3 className="vertical-timeline-element-title">Software & Web Developer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Abuja, Nigeria</h4>
            <p>
              CodeWorld Innovations
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=""
            iconStyle={{ background: '#979595db', color: 'rgb(39, 40, 34)'}}
            icon={<FontAwesomeIcon icon={faBriefcase} style={{ color: 'inherit' }} />}
          >
            {/* <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Tokyo, Japan</h4>
            <p>
              Automation, Data Governance, Statistical Analysis
            </p> */}
            <a
              href="https://drive.google.com/file/d/1WC8EFcHRh9gKgwZwLZP8VNhsN_dgb7SJ/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: '14px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',

                padding: '8px 16px',
                fontSize: '1.05rem',
                fontWeight: "bold",
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                textDecoration: 'none',

                color: 'rgba(0, 0, 0, 1)',
                background: 'rgba(210, 209, 209, 0.62)',

                border: '1px solid rgba(0, 0, 0, 0.08)',
                borderRadius: '999px',

                boxShadow: '0 4px 10px rgba(0,0,0,0.08)',

                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0, 0, 0, 0.64)';
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.89)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(0,0,0,0.04)';
                e.currentTarget.style.color = 'rgba(0, 0, 0, 1)';
                e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.08)';
              }}
            >
              View Resume
            </a>


          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;