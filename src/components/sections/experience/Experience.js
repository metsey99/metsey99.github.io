import React from 'react';
import styled from 'styled-components';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from './experienceData';

const StyledExperienceWrapper = styled.div`
  margin: auto 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const StyledExperienceTitle = styled.h3`
  color: #ccd6f6;
  font-size: 1.5rem;
  font-weight: bold;
`;

const StyledCompanyLink = styled.a`
  text-decoration: none;
  color: #64ddea;
`;

const Experience = () => {
  return (
    <StyledExperienceWrapper >
      <h1>Experience</h1>
      <VerticalTimeline
        lineColor={"#64ffda"}
      >
        {experiences.map((experience) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={experience.date}
              contentStyle={{ background: 'transparent', color: '#ccd6f6', border: "2px solid #ccd6f6" }}
              contentArrowStyle={{ borderRight: '10px solid #ccd6f6' }}
              iconStyle={{ background: '#ffffff', color: '#fff' }}
              icon={
                <img
                  src={experience.image}
                  alt={experience.subtitle}
                  width="100%"
                  height="100%"
                  style={{ borderRadius: "50%" }}
                />
              }
            >
              <StyledExperienceTitle className="vertical-timeline-element-title">{experience.title}</StyledExperienceTitle>
              <StyledCompanyLink href={experience.companyLink} target="_blank" rel="noreferrer">
                <h4 className="vertical-timeline-element-subtitle">
                  {experience.subtitle}
                </h4>
              </StyledCompanyLink>
              <p>
                {experience.description}
              </p>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </StyledExperienceWrapper >
  )
}

export default Experience;