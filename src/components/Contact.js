import '../css/FORM.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'




export default function Contact(){
    const MySwal = withReactContent(Swal)
    const form = useRef();
    const textarea = useRef();
    const refEmail = useRef();
    function email(e) {
        e.preventDefault();
        if((e.target[3].value !== "") && (e.target[1].value !== ""))
        {
             emailjs.sendForm('PortFolioLautaroSP', 'template_ic3fda7', form.current, 'nAQP5jGzaoqJlbShy')
             .then((result) => {
                 console.log(result.text);
                 MySwal.fire({
                            title: <strong>Gracias por el mensaje!</strong>,
                            html: <i>Mensaje enviado!</i>,
                            icon: 'success'
                          })
             }, (error) => {
                 console.log(error.text);
             });
            console.log("enviado")
            textarea.current.style.display = 'none';
            refEmail.current.style.display = 'none';
        }
        else if(e.target[1].value === ""){
            refEmail.current.style.display = 'block';
        }
        else {
            refEmail.current.style.display = 'none';
            textarea.current.style.display = 'block';
        }
    
  };
    return(
        <div id="contac" className="FORM">
        <div>
        <h3>Contactame!</h3>
        <p>Mi email: lautaroparandelli@gmail.com</p>
        <p>Numero de telefono: +5491158831829</p>
        <p>O dejame un mensaje!(una vez enviado tardara unos segundos en aparecer la alerta)</p>
        </div>
            <form ref={form} onSubmit={email}>
                <label>Nombre</label>
                <input type="text" name="name" id="name" />
                <label>Email</label>
                <p ref={refEmail} className='error'>Debes escribir un email</p>
                <input type="email" name="email" id="email" />
                <label>Asunto</label>
                <input type="text" name="asunto" id="asunto" />
                <label>Mensaje</label>
                <textarea  name="mensaje" id="mensaje" cols="30" rows="7"></textarea>
                <p ref={textarea} className='error'>Debes enviar un mensaje!</p>
                <input className="button-85" type="submit" />
                
            </form>
        </div>
    )
}