import '../css/Exp.css'
import Certi from '../Titulo.png'

export default function Experienses() {
    return (
        <div className='TotalEXP'>
            <div id="exp" className='Exp'>
                <h3 className='titleWork'>Experiencias Laborales</h3>
                <div className='CardWork'>
                    <h3>
                        Digital House SA
                    </h3>
                    <h4>
                        Customer Support Intern
                    </h4>
                    <ul>
                        (NOV 2021 – DIC 2022)
                        <li>Control de ticketera FreshDesk.</li>
                        <li>Asignación de tickets en ASANA o via mensajes.</li>
                        <li>Cambio de estado de alumnos via API (Postman)</li>
                        <li>Resolución de errores operativos.</li>
                        <li>Resolución de tickets sin dependencia de Desarrolladores.</li>
                        <li>Feedback sobre las plataformas a los Product Manager.</li>
                        <li>Plantear ideas, mejoras y cambios sobre las plataformas.</li>
                        <li>Ser parte de un equipo de tester (QA)</li>
                        <li>Control de las 3 plataformas de la empresa.</li>
                        <li> Soporte interno a profesores/productores que presenten algun BUG.</li>
                        <li>Creación de usuarios en las distintas plataformas.</li>
                    </ul>
                </div>
                <div className='CardWork'>
                    <h3>
                        IQVIA
                    </h3>
                    <h4>
                        Customer Support Analyst
                    </h4>
                    <ul>
                        (NOV 2019 – SEPT 2021)
                        <li>Control de emails para dar soporte a clientes.</li>
                        <li> Creacion de reportes en la plataforma de la empresa.</li>
                        <li>Creacion de tickets en ingles para desarrolladores.</li>
                        <li>Manejo de base de datos (SQL Server)</li>
                        <li>Generar reporte mensual en Excel con datos de los clientes.</li>
                        <li>Capacitaciones a clientes sobre la plataforma de la empresa.</li>
                    </ul>
                </div>
            </div>
            <div id="educ" className='edu'>
                <h3 className='titleWork'>Educacion</h3>
                <div className='CardWork'>
                    <h3>Ingenieria Informatica</h3>
                    <p>Universidad de La Matanza</p>
                    <p>En curso</p>
                </div>
                <div className='CardWork'>
                    <h3>Desarrollador web Fullstack</h3>
                    <div className='certif'>
                    <div>
                    <p>Digital House</p>
                    <p>Finalizado</p>
                    </div>
                    <div className='imgdiv'>
                        <img src={Certi} alt='certificacion' />
                    </div>
                    </div>

                </div>
                <div className='CardWork'>
                    <h3>Tecnico en electronica</h3>
                    <p>ETN17 Don Coornelio Saavedra</p>
                    <p>Secundario</p>
                    <p>Finalizado</p>
                </div>
            </div>
        </div>
    )
}