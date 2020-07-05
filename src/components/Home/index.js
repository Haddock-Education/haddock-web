import React from 'react'
import './home.css'

//import components
import CardeMinQuest from '../Cardminquest'
import Homeinfo from '../Homeinfo'
import TitleBox from '../Titlebox'
import avatar from '../../assets/img/avatar6.png'


function Home(){
    return(
        <div className="home-container">
            <div className="home-section-duvidas">
                <div className="ident-title-box">
                    <TitleBox title="Dúvidas recentes" />
                </div>
                <CardeMinQuest  avatar={avatar} />
           
            </div>
            <Homeinfo/>
        </div>
    )
}

export default Home