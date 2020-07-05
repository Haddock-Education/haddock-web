import React,{useState} from 'react'
import './perfil.css'

import TitleBox from '../Titlebox'
import Avatar from '../../assets/img/avatar.png'


function Perfil() {

    const [isEdit, setIsEdit] =useState(false)

    function ShowEditProfile(event, idBio, idTxt, IdBtn){
        event.preventDefault()
        const minBio = document.getElementById(idBio)
        const txtArea = document.getElementById(idTxt)
        const btn = document.getElementById(IdBtn)
        if(!isEdit){
            minBio.setAttribute('hidden','hidden')
            txtArea.removeAttribute('hidden')
            btn.innerHTML ="Enviar"
            setIsEdit(!isEdit)
        }else{
            txtArea.setAttribute('hidden','hidden')
            minBio.removeAttribute('hidden')
            btn.innerHTML ="Editar"
            setIsEdit(!isEdit)
        }
    }

    return(
        <div className="perfil-container">
            <div className="perfil-section">
                <div className="ident-title-box">
                    <TitleBox title="Perfil Completo" />
                </div>
                <div className="user-profile">
                    <div className="img-area">
                        <div className="img-content">
                            <img className="img-fluid" src={Avatar} alt="avatar" />
                        </div>
                    </div>
                    <div className="bio-area">
                            <h2>ROBERTO RANIERI</h2>
                            <h4>MARINHEIRO DE CONVÉS <span>(a 18 meses)</span></h4>
                            <h3>santos, sp</h3>
                            <p id="bio" >porque ao dar voz aos colaboradores conseguimos medir suas reais dores e fornecer treinamentos mais acertivos e eficazes?</p>
                            <div className="form-content">
                                <form onSubmit={(event)=>{ShowEditProfile( event,'bio','editBio','btn-profile')}} className="container-form">
                                    <textarea id="editBio" placeholder="Descreva o que deseja saber" hidden />
                                    <div className="btn-ct" >
                                        <button id="btn-profile" type="submit" >Editar</button>
                                    </div>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perfil