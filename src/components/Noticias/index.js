import React from 'react'
import './noticias.css'
import Titlebox from '../Titlebox'

function Noticias(){
    return(
        <aside className="noticia-container">
            <Titlebox title="Notícias" />
            <div className="noticia-card">
                <h4 className="card-title" >Emprego</h4>
                <p className="card-resumo" >Os 3 principais trabalhos em um rebocador.</p>
            </div>
            <div className="noticia-card">
                <h4 className="card-title" >Santos</h4>
                <p className="card-resumo" >Navio arrisca manobra para evitar acidente</p>
            </div>
            <div className="noticia-card">
                <h4 className="card-title" >Rio de janeiro</h4>
                <p className="card-resumo" >Rebocador da marinha naufraga</p>
            </div>
        </aside>
    )
}

export default Noticias