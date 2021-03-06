import React from 'react'
import './rankside.css'

import Avatar from '../../assets/img/avatar.png'
import Avatar3 from '../../assets/img/avatar3.png'
import Avatar4 from '../../assets/img/avatar4.png'
import Avatar5 from '../../assets/img/avatar5.png'
import Medalha from '../../assets/img/medal.png'

function Rankside(){
    return(
        <aside className="rankside-container">
            <div className="rk-title-box">
                <h3 className="rk-title" >Ranking</h3>
            </div>
            <div className="rk-info-user" >
                <div className="ifon-content" >
                    <h4 className="user-name" >Roberto Ranieri</h4>
                    <h5 className="user-cargo">chefe<br/>de máquina</h5>
                    <h3 className="user-points">122</h3>
                </div>
                <div className="ifon-content img-content" >
                    <img className="img-fluid img-info" src={Avatar3} alt="Avatar" />
                </div>
                    <img className="medalha" src={Medalha} alt="medalha" />
            </div>
            <div className="rk-title-box">
                <h3 className="rk-title" >Top 3</h3>
            </div>
            <div className="rank-3">
                <div className="user-rank-top">
                    <div className="position">
                        <h3>1</h3>
                    </div>
                    <div className="avatar">
                        <img className="img-fluid" src={Avatar} alt="Avatar" />
                    </div>
                    <div className="user-name">
                        <h3>Alberto Popeye</h3>
                    </div>
                    <div className="user-points">
                        <h5>Pontos</h5>
                        <h6>625</h6>
                    </div> 
                </div>
                <div className="user-rank-top">
                    <div className="position">
                        <h3>2</h3>
                    </div>
                    <div className="avatar">
                        <img className="img-fluid" src={Avatar4} alt="Avatar" />
                    </div>
                    <div className="user-name">
                        <h3>João gancho</h3>
                    </div>
                    <div className="user-points">
                        <h5>Pontos</h5>
                        <h6>525</h6>
                    </div> 
                </div>
                <div className="user-rank-top">
                    <div className="position">
                        <h3>3</h3>
                    </div>
                    <div className="avatar">
                        <img className="img-fluid" src={Avatar5} alt="Avatar" />
                    </div>
                    <div className="user-name">
                        <h3>Marco sinbad</h3>
                    </div>
                    <div className="user-points">
                        <h5>Pontos</h5>
                        <h6>425</h6>
                    </div> 
                </div>
                <div className="user-rank-top border-top">
                    <div className="position">
                        <h3>42</h3>
                    </div>
                    <div className="avatar">
                        <img className="img-fluid" src={Avatar3} alt="Avatar" />
                    </div>
                    <div className="user-name">
                        <h3>Roberto Ranieri</h3>
                    </div>
                    <div className="user-points">
                        <h5>Pontos</h5>
                        <h6>122</h6>
                    </div> 
                </div>
            </div>
        </aside>
    )
}

export default Rankside