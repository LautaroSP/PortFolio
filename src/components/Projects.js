import ReactPlayer from 'react-player'
import '../css/Projects.css'
import Chalk from '../ChalkAndBooksDEMO.mp4'
import Dashboard from '../DashboardDEMO.mp4'
import Mercado from '../MercadoLiebreDEMO.mp4'
export default function Projects(){
    return(
        <div id="proyects" className="CardProject">
            <h3>Proyectos</h3>
            <div>
                <h3>Chalk And Books</h3>
                <div className='videoApp'>
                <ReactPlayer 
                    url={Chalk}
                    width= '100%'
                    height= '100%'
                    controls />
                </div>
                <p>Ecommerce de libros, proyecto integrador con backend y frontend, base de datos relacional.
                Hecho con : HTML , CSS , Javascript , MySQL , EJS ( para vistas dinamicas ) , Sequelize</p>
                <a className="link" href="https://github.com/LautaroSP/ChalkAndbooks"><i className="fa-brands fa-github"></i>  Link al repo en GitHub</a>
            </div>
            <div>
                <h3>Dashboard en React</h3>
                <div className='videoApp'>
                <ReactPlayer 
                    url={Dashboard}
                    width= '100%'
                    height= '100%'
                    controls />
                </div>
                <p>Dashboard que consume la API de Chalk and Books.
                Es un SPA hecho 100% con React</p>
                <a className="link"  href="https://github.com/LautaroSP/dashboard-react-chalk"><i className="fa-brands fa-github"></i>  Link al repo en GitHub</a>
            </div>
            <div>
                <h3>Mercado Liebre</h3>
                <div className='videoApp'>
                <ReactPlayer 
                    url={Mercado}
                    width= '100%'
                    height= '100%'
                    controls />
                </div>
                <p>Primeras experiencias con HTML y CSS, haciendo el diseño de mercado libre</p>
                <a className="link"  href="https://github.com/LautaroSP/mercado-liebre"><i className="fa-brands fa-github"></i>  Link al repo en GitHub</a>
            </div>
        </div>
    )
}