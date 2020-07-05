import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import { Context } from '../../Context/AuthContext'


import Logo from '../../assets/img/logo-grande.png'

function Login(){
    const {heandleLogin} = useContext(Context)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function execLogin(event){
        event.preventDefault()
        await heandleLogin(email, password)
    }

    return(
        <div className="login-container" >
            <img className="img-fluid logo" src={Logo} alt="Haddock" />
            <form onSubmit={execLogin}>
                <input type="email" placeholder="E-mail" value={email} onChange={e=>{setEmail(e.target.value)}} />
                <input type="password" placeholder="Password" value={password} onChange={e=>{setPassword(e.target.value)}} />
                <div>
                    <Link to="/recover">esqueci minha senha</Link>
                </div>
                <button type="submit" >Entrar</button>
                <Link to="/cadastro" >Me cadastrar</Link>
            </form>
        </div>
    )
}

export default Login