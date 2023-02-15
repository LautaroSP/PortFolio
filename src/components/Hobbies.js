import joga from '../basquetimg.png'
import '../css/hobbies.css'

export default function Hobbies(){
    return(
        <div id="hobbies">
        <h3>Hobbies!</h3>
        <div className='hob'>
            
            <div className='CardH'>
                <h3>Jugador de Basket</h3>
                <p>Juego al basket desde chico , actualmente jugando la liga Flex de FeBamba en Chenque, me encanta el deporte y competir</p>
                <img src={joga} alt=""/>
            </div>
            <div className='CardH'>
                <h3>Videojuegos</h3>
                <p>Me gusta jugar todo tipo de video juegos, ahora mismo jugando el nuevo <i class="fa-solid fa-hat-wizard"></i> Hogwarts Legacy, que es increible!</p>
            </div>
            <div className='CardH'>
                <h3>Programar</h3>
                <p>Siempre buscando nuevos desafios y proyectos cortos, donde se pueda aprender sobre diferentes librerias, APIs, etc...</p>
            </div>
        </div>
        </div>
    )
}