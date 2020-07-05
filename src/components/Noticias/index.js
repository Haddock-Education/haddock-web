import React from 'react'
import './noticias.css'

function Noticias(){
    return(
        <aside className="noticia-container">
                <h3 className="title">Notícias</h3>
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
            <div className="noticia-card">
                <h4 className="card-title" >Poque a</h4>
                <p className="card-resumo" >Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
        </aside>
    )
}

export default Noticias