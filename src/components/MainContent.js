import React, { useEffect } from "react";
import {Link} from 'react-scroll'
import Profile from '../profilefoto.png'
import '../css/Main.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function MainContent() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className="maindiv">
        <span>Hola! Soy Lautaro Parandelli, Desarrollador Web</span>
        <div className="Main"  data-aos="zoom-in">
            <img src={Profile} alt="ProfileFoto"/>
            <div className="subMain">
                
                <h2>¡Bienvenido a mi Web!</h2>
                <p>Secciones!</p>
                <p>(Hace click o scroll para explorar)</p>
                <ul>
                    <Link  to="about" spy={true} smooth={true} offset={0} duration={500}>¿Quien soy?</Link>
                    <Link  to="proyects" spy={true} smooth={true} offset={-600} duration={500}>Mis Proyectos</Link>
                    <Link  to="exp" spy={true} smooth={true} offset={-100} duration={500}>Mis experiencias</Link>
                    <Link  to="educ" spy={true} smooth={true} offset={-100} duration={500}>Educacion</Link>
                    <Link  to="contac" spy={true} smooth={true} offset={0} duration={500}>Contacto</Link>
                    <Link  to="hobbies" spy={true} smooth={true} offset={0} duration={500}>Hobbies</Link>
                </ul>
            </div>
            
        </div>
        </div>
    )
}