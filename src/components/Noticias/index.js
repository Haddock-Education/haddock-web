import React from 'react'
import './noticias.css'
import Titlebox from '../Titlebox'

function Noticias(){
    return(
        <aside className="noticia-container">
            <Titlebox title="Notícias" />
            <div className="noticia-card">
                <h4 className="card-title" >Poque a</h4>
                <p className="card-resumo" >Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
            <div className="noticia-card">
                <h4 className="card-title" >Poque a</h4>
                <p className="card-resumo" >Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
            <div className="noticia-card">
                <h4 className="card-title" >Poque a</h4>
                <p className="card-resumo" >Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
        </aside>
    )
}

export default Noticias