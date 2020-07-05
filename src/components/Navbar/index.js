import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {Dropdown} from 'react-bootstrap'

//import files
import './navbar.css'
import HaddockImg from '../../assets/img/logo-200.png'
import Tempo from '../../assets/img/TEMPO.png'
import Notify from '../../assets/img/Notify-1.png'

import {Context} from '../../Context/AuthContext'




function Navbar(){
    const { logout } = useContext(Context)
    return(
        <div className="container-fluid navbar-container fixed-top" >
            <nav className="navbar navbar-expand-lg row" >
                <div className="col-lg-2 logo-container">
                    <Link to="/home">
                        <img className="img-fluid logo-haddock" src={HaddockImg} alt="Haddock" />
                    </Link>
                </div>
                <div className="col-lg-4 input-container">
                    <form className="form-inline my-2 my-lg-0 form-pesq">
                        <input className="form-search input-pesq" type="search" placeholder="Encontre uma resposta"/>
                    </form>
                </div>
                <div className="col-lg-2 pgt-container">
                    <Link className="pgt-btn" to="/home/perguntas" >Fazer uma pergunta</Link>
                </div>
                <div className="col-lg-1 notify-content">
                    <Dropdown>
                        <Dropdown.Toggle variant="white"  id="dropdown-basic" className="btn-hb-menu">
                            <img src={Notify} className="notify-icon" />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item><p className="text-muted">Você não tem novas notificações</p></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="col-lg-2 prev-temp" >
                    <img className="img-fluid" src={Tempo} alt="Clima tempo" />
                </div>
                <div className="col-lg-1 hb-menu-container">
                    <Dropdown>
                        <Dropdown.Toggle variant="white"  id="dropdown-basic" className="btn-hb-menu">
                            <span className="material-icons hb-menu">menu</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item><Link to="/home/perfil" className="dp-item">PERFIL</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/home/rankin" className="dp-item">RANKING</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/home/minhas-duvidas" className="dp-item">MINHAS DÚVIDAS</Link></Dropdown.Item>
                            <Dropdown.Item><Link to="/home/favoritos" className="dp-item">FAVORITOS</Link></Dropdown.Item>
                            <Dropdown.Item><Link onClick={logout} className="dp-item">SAIR</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </nav>
        </div>
    )
}

export default Navbar