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
                    </div>
                    <p>Lavar o casco com aguá doce e sabão neutro sempre que possível ajuda a conservar a pintura. É importante secar bem e aplicar uma camada de cera de alta qualidade</p>
                </div>
            </div>
            <div className="noticia-destaque">
                <div className="title-noticia">
                    <h3>Somos todos wilson sons</h3>
                    <img src={Propaganda} alt="Nova Plataforma para Rebocadores" />
                </div>
                <div className="saiba-mais-container">
                    <p>Construímos uma empresa líder no mercado brasileiro. Foi pensando nesses últimos quase dois séculos que decidimos dar mais um passo, fortalecendo a marca Silson Sons</p>
                    <button type="button">Saiba mais</button>
                </div>
            </div>
        </div>
    )
}

export default Homeinfo

