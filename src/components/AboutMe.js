import React, { useEffect } from "react";
import '../css/AboutMe.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function AboutMe(){
    useEffect(() => {
        AOS.init();
      }, [])
    return(
        <div id="about">
        <h2 className="title">¿Quien Soy?</h2>
        <div className="mainDiv">
        <div className="Card1" data-aos="zoom-in">
        <h2>Breve Resumen:</h2>
        <p>Mi nombre es Lautaro Parandelli, naci el 27/02/1997, soy desarrollador web, tecnico en electroncia y estoy estudiando ingenieria en informatica en la Universidad De La Matanza.
        Tengo conocimientos en HTML, CSS , JavaScript , React, MySQL , tambien se un poco de C y C++.
        Trabaje de soporte en empresas de IT, llevo en esta posicion 3 años.
        Siempre me gusto programar , termine el curso de Digital House en Febrero del 2023 y estoy buscando dar los primeros pasos como programador!
        </p>
        </div>
        <div className="Card2" data-aos="zoom-in">
            <h2>Tecnologias</h2>
            <div className="InsideCards">
                <div>
                <i className="fa-brands fa-square-js"></i>
                <p>JavaScript</p>
                </div>
                <div>
                <i className="fa-brands fa-react"></i>
                    <p>ReactJS</p>
                </div>
                <div>
                <i className="fa-brands fa-html5"></i>
                    <p>HTML5</p>
                </div>
                <div>
                <i className="fa-brands fa-css3-alt"></i>
                    <p>CSS3</p>
                </div>
                <div>
                <i className="fa-solid fa-database"></i>
                    <p>MySQL</p>
                </div>
                <div>
                <i className="fa-solid fa-c"></i>
                    <p>C/C++</p>
                </div>
                <div>
                    <i className="fa-brands fa-microsoft"></i>
                    <p>Office</p>
                </div>

            </div>
        </div>
        <div className='Card2' data-aos="zoom-in">
            <h2>Idiomas:</h2>
            <div>
                <p className="p1">Español: Nativo</p>
            </div>
            <div>
                <p className="p2">Ingles: Intermedio</p>
            </div>
            <div>
                <p className="p3">Portugues: Basico</p>
            </div>
        </div>
        </div>
        </div>
    )
}