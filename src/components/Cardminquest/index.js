import React from 'react'
import {Link} from 'react-router-dom'
import './cardminquest.css'

//import images
import Star from '../../assets/img/star2.png'


function CardMinQuest(props){
    return(
        <div className="card-min-question">
            <div className="card-min-img">
                <img className="imf-fluid" src={props.avatar} alt="Manuel Figueiredo" />
            </div>
            <div className="card-text"  >
                <p className="text">Problema ao ligar rebocador, Como deve ser feito a ignição do rebocador XT-9089-T?</p>
                <h4>{props.name}, {props.func}</h4>
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