import React from 'react'
import { Link } from 'react-router-dom'
import './recover.css'

import Logo from '../../assets/img/logo-grande.png'

function Recover(){
    return(
        <div className="recover-container" >
            <img className="img-fluid logo" src={Logo} alt="Haddock" />
            <form>
                <input type="email" placeholder="E-mail" />
                <button type="submit" >Enviar</button>
                <Link to="/login" >Voltar para Login</Link>
            </form>
        </div>
    )
}

export default Recover