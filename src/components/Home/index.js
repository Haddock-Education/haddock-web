import React from 'react'
import './home.css'

//import components
import CardeMinQuest from '../Cardminquest'
import Homeinfo from '../Homeinfo'
import TitleBox from '../Titlebox'


function Home(){
    return(
        <div className="home-container">
            <div className="home-section-duvidas">
                <div className="ident-title-box">
                    <TitleBox title="Dúvidas recentes" />
                </div>
                <CardeMinQuest />
                <CardeMinQuest />
                <CardeMinQuest />
                <CardeMinQuest />
                <CardeMinQuest />
                <CardeMinQuest />

            </div>
            <Homeinfo/>
        </div>
    )
}

export default Home