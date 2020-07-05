import React from 'react'
import './questiondetail.css'

//file
import Avatar from '../../assets/img/avatar.png'
import Star from '../../assets/img/star2.png'
import Like from '../../assets/img/like.png'
import Deslike from '../../assets/img/deslike.png'


function Questiondetail(){
    return(
        <div className="question-detail-container">
            <div className="question-detail-section">
                <div className="title-area">
                    <h2>Como fazer troca de óleo no moro AP268CE?</h2>
                </div>
                <div className="main-question">
                    <div className="card-min-img">
                        <img className="imf-fluid" src={Avatar}  alt="Manuel Figueiredo" />
                    </div>
                    <div className="card-text" >
                        <p>porque ao dar voz aos colaboradores conseguimos medir suas reais dores e fornecer treinamentos mais acertivos e eficazes?</p>
                        <h4>ROBERTO RANIERI, Marinheiro de convés</h4>
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

                    <div className="main-question">
                        <div className="card-min-img">
                            <img className="imf-fluid" src={Avatar}  alt="Manuel Figueiredo" />
                        </div>
                        <div className="card-text" >
                            <p>porque ao dar voz aos colaboradores conseguimos medir suas reais dores e fornecer treinamentos mais acertivos e eficazes?</p>
                            <h4>ROBERTO RANIERI, Marinheiro de convés</h4>
                            <div className="card-min-classific" >
                                <div className="favorite-content">
                                    <img src={Like} alt="Like"/>
                                    <span>5</span>
                                </div>
                                <div className="favorite-content">
                                    <img src={Deslike} alt="Like"/>
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-question">
                        <div className="card-min-img">
                            <img className="imf-fluid" src={Avatar}  alt="Manuel Figueiredo" />
                        </div>
                        <div className="card-text" >
                            <p>porque ao dar voz aos colaboradores conseguimos medir suas reais dores e fornecer treinamentos mais acertivos e eficazes?</p>
                            <h4>ROBERTO RANIERI, Marinheiro de convés</h4>
                            <div className="card-min-classific" >
                                <div className="favorite-content">
                                    <img src={Like} alt="Like"/>
                                    <span>2</span>
                                </div>
                                <div className="favorite-content">
                                    <img src={Deslike} alt="Like"/>
                                    <span>2</span>
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