import React from 'react'
import './questiondetail.css'

//file
import Avatar from '../../assets/img/avatar3.png'
import Avatar2 from '../../assets/img/avatar.png'
import Avatar3 from '../../assets/img/avatar2.png'
import Star from '../../assets/img/star2.png'
import Like from '../../assets/img/like.png'
import Deslike from '../../assets/img/deslike.png'


function Questiondetail(){
    return(
        <div className="question-detail-container">
            <div className="question-detail-section">
                <div className="title-area">
                    <h2>Problema ao ligar rebocador XT-9089-T?</h2>
                </div>
                <div className="main-question">
                    <div className="card-min-img">
                        <img className="imf-fluid" src={Avatar}  alt="Manuel Figueiredo" />
                    </div>
                    <div className="card-text" >
                        <p>Problema ao ligar rebocador, Como deve ser feito a ignição do rebocador XT-9089-T?</p>
                        <h4>ROBERTO RANIERI, chefe de máquina</h4>
                        <div className="card-min-classific" >
                            <div className="favorite-content">
                                <img src={Star} alt="star"/>
                                <span>Favoritar</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="title-area">
                    <h2>Respostas</h2>
                </div>
                <div className="response-container">

                    <div className="main-question ">
                        <div className="card-min-img">
                            <img className="imf-fluid" src={Avatar2}  alt="Manuel Figueiredo" />
                        </div>
                        <div className="card-text" >
                            <p>Para esta embarcação são necessários dois procedimentos antes de acionar o motor. Você pode assistir a abaixo:
                                www.winsonsons.com.br/manuais/XT-9089-T/ignição.mp4</p>
                            <h4>ALBERTO POPEYE, Comandante</h4>
                            <div className="card-min-classific" >
                                <div className="favorite-content">
                                    <img src={Like} alt="Like"/>
                                    <span>5</span>
                                </div>
                                <div className="favorite-content">
                                    <img src={Deslike} alt="Like"/>
                                    <span>0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-question">
                        <div className="card-min-img">
                            <img className="imf-fluid" src={Avatar3}  alt="Manuel Figueiredo" />
                        </div>
                        <div className="card-text" >
                            <p>Todos os rebocadores tem o mesmo procedimento para iniciar o funcionamento.</p>
                            <h4>Francisco ribeiro, Marinheiro de convés</h4>
                            <div className="card-min-classific" >
                                <div className="favorite-content">
                                    <img src={Like} alt="Like"/>
                                    <span>0</span>
                                </div>
                                <div className="favorite-content">
                                    <img src={Deslike} alt="Like"/>
                                    <span>3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <form>
                        <textarea placeholder="Escreva sua resposta" />
                        <div className="btn-ct">
                            <button type="submit">Enviar</button>
                        </div>
                    </form> 
                </div>
            </div> 
        </div>
    )
}

export default Questiondetail