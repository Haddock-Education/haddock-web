import React from 'react'
import './homeinfo.css'

//import image
import Ideia from '../../assets/img/ideia.png'
import Propaganda from '../../assets/img/propaganda1.png'

function Homeinfo(){
    return(
        <div className="home-informations-container">
            <div className="dica-container">
                <div className="dica-do-dia">
                    <div className="title-container">
                        <h3>Dica do dia</h3>
                        <img className="ideia-icon" src={Ideia} alt="icon dica do dia" />
                    </div>
                    <p>Lorem ipsum dolorr sit amet, consectetur adipiscing elit. Etiam feugiat pulvinar ipsum.</p>
                </div>
            </div>
            <div className="noticia-destaque">
                <div className="title-noticia">
                    <h3>Novos Barcos Rebocadores</h3>
                    <img src={Propaganda} alt="Nova Plataforma para Rebocadores" />
                </div>
                <div className="saiba-mais-container">
                    <p>Lorem ipsum dolorr sit amet, consectetur adipiscing elit. Etiam feugiat pulvinar ipsum Etiam feugiat pulvinar ipsum.</p>
                    <button type="button">Saiba mais</button>
                </div>
            </div>
        </div>
    )
}

export default Homeinfo

