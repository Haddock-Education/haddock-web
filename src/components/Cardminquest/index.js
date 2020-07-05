import React from 'react'
import {Link} from 'react-router-dom'
import './cardminquest.css'

//import images
import Avatar from '../../assets/img/avatar2.png'
import Star from '../../assets/img/star2.png'


function CardMinQuest(){
    return(
        <div className="card-min-question">
            <div className="card-min-img">
                <img className="imf-fluid" src={Avatar} alt="Manuel Figueiredo" />
            </div>
            <div className="card-text"  >
                <p>porque ao dar voz aos colaboradores conseguimos medir suas reais dores e fornecer treinamentos mais acertivos e eficazes?</p>
                <h4>Manuel Figueiredo, Marinheiro de convés</h4>
                <div className="card-min-classific" >
                    <Link className="button-link" to="/home/question-detail" ty="button">Detalhes</Link>
                    <div className="favorite-content">
                        <img src={Star} alt="star"/>
                        <span>Favoritar</span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default CardMinQuest