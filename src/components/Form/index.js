import React from 'react'
import './form.css'

function FormDf(props){
    return(
        <form className="container-form">
            <input type="text" placeholder="Titulo da pergunta" hidden={(!props.titleHidden)?false:true}/>
            <textarea placeholder="Descreva o que deseja saber" hidden={(!props.textAreaHidden)?false:true} />
            <div className="btn-ct" >
            <button type="submit" >{(!props.textButton)?"Enviar":props.textButton}</button>
            </div>
        </form>
    )
}

export default FormDf

