import '../css/sidebar.css';


export default function SideBar(){
    return (
        <div className="Bar">
            <div className="left">
                <p>Lautaro Parandelli</p>
                <div className="CV">
                <p>Mi CV</p>
                <a href="./CV Lautaro Parandelli.pdf" download><i className="fa-regular fa-circle-down"></i></a>
                </div>
            </div>
            <div className="right">
                <a href="https://github.com/LautaroSP" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i> GitHub</a>
                <a href="https://www.linkedin.com/in/lautaro-parandelli-729762193/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i> Linkedin</a>
            </div>
        </div>
    )
}