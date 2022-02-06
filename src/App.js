import React, { useRef } from 'react';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Introduction from './components/sections/introduction/Introduction';
import About from './components/sections/about/About';
import Experience from './components/sections/experience/Experience';
import Contact from './components/sections/contact/Contact';
import Section from './components/sections/Section';

function App() {
  const aboutMeRef = useRef(null);
  const experienceRef = useRef(null);
  const contactMeRef = useRef(null);
  return (
    <div style={{
      minHeight: "100vh",
      height: "100%"
    }}>
      <Header aboutRef={aboutMeRef} experienceRef={experienceRef} contactRef={contactMeRef} duration={1000} />
      <Content>
        <Introduction />
        <Section id="about" sectionRef={aboutMeRef}>
          <About />
        </Section>
        <Section id="experience" sectionRef={experienceRef}>
          <Experience />
        </Section>
        <Section id="contact" sectionRef={contactMeRef}>
          <Contact />
        </Section>
      </Content>
    </div>
  );
}

export default App;
