import React from 'react'
import { Link } from 'react-router-dom'
import './cadastro.css'

import Logo from '../../assets/img/logo-grande.png'

function Cadastro(){
    return(
        <div className="cadastro-container" >
            <img className="img-fluid logo" src={Logo} alt="Haddock" />
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="E-mail" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm password" />
                <button type="submit" >Cadastrar</button>
                <Link to="/login" >Voltar para Login</Link>
            </form>
        </div>
    )
}

export default Cadastro