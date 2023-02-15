import React, { useEffect } from "react";
import './App.css';
import SideBar from './components/SideBar';
import MainContent from './components/MainContent';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Experienses from './components/Experienses';
import Contact from './components/Contact';
import Hobbies from './components/Hobbies';
import Info from './components/Info';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Music from './components/Music';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <SideBar />
      <Music />
      <MainContent />
      <AboutMe />
      <div data-aos="zoom-in">
        <Projects />
      </div>
      <div data-aos="zoom-in">
        <Experienses />
      </div>
      <div data-aos="zoom-in">
        <Contact />
      </div>
      <div data-aos="zoom-in">
      <Hobbies />
      </div>
      <div className="info" data-aos="zoom-in">
        <Info />
      </div>
      <div className="iconsBot">
                <a className="a1" href="https://github.com/LautaroSP" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                <a className="a2" href="https://www.linkedin.com/in/lautaro-parandelli-729762193/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
      </div>
    </div>
  );
}

export default App;
