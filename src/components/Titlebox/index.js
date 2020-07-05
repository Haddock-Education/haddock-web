import React from 'react'
import './titlebox.css'


function Titlebox(props){
    return(
        <div className="title-box">
            <h2>{props.title}</h2>
        </div>
    )
}

export default Titlebox