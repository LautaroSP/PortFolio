import React, { useEffect , useRef} from 'react';
import lofi from '../lofi.mp3'
export default function Music() {
    const Audio = useRef()
    useEffect(()=>{
        
        Audio.volume = 0.3;
        Audio.paused = false;
        Audio.autoplay = true;
        }, [])
    return (
        <div className='audioR'>
            <p>Debido a las <a href='https://developer.chrome.com/blog/autoplay/'>politicas nuevas de Google</a> no esta permitido el Autoplay.</p>
            <p>Te invito a reproducirlo!</p>
            <audio ref={Audio} controls>
                <source src={lofi} type="audio/mpeg" />
            </audio>
        </div>
    )
}