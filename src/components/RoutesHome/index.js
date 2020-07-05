import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'


//import components
import Navbar from '../Navbar'
import Noticias from '../Noticias'
import Rankside from '../Rankside'
import Home from '../Home'
import Question from '../Question'
import Perfil from '../Perfil'



function Routeshome(){
    return(
        <BrowserRouter>
            <Navbar/>
            <Noticias/>
            <Rankside/>
            <div className="container-routes">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/perguntas" component={Question} />
                    <Route path="/perfil" component={Perfil} />
                </Switch>
            </div>
        </BrowserRouter>
    )

}

export default Routeshome