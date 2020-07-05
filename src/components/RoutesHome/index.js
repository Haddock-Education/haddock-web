import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'


//import components
import Navbar from '../Navbar'
import Noticias from '../Noticias'
import Rankside from '../Rankside'
import Home from '../Home'
import Question from '../Question'
import Perfil from '../Perfil'
import QuestionDetail from '../Questiodatail'


function Routeshome(){
    return(
        <BrowserRouter>
            <Navbar/>
            <Noticias/>
            <Rankside/>
            <div className="container-routes">
                <Switch>
                    <Route path="/home" exact component={Home} />
                    <Route path="/home/perguntas" component={Question} />
                    <Route path="/home/perfil" component={Perfil} />
                    <Route path="/home/question-detail" component={QuestionDetail} />
                </Switch>
            </div>
        </BrowserRouter>
    )

}

export default Routeshome