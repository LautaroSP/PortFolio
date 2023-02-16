import '../css/hobbies.css'

export default function Info(){
    return(
        <div>
            <div className='CardInfo'>
                <h3>Tecnologias usadas en esta Web!</h3>
                <p>Hecho 100% en React, utilizando librerias como : React-Player , aos y react-scroll (animaciones de scroll) , SweetAlert2 y EmailJS</p>
                <p>Podes visitar el codigo en este repo de <a href="https://github.com/LautaroSP/PortFolio/tree/main">GitHub <i className="fa-brands fa-github"></i></a></p>
            </div>
        </div>
    )
}