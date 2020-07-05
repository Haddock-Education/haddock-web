import React, {useContext} from 'react'
import {Switch, Route, BrowserRouter, Redirect} from 'react-router-dom'

import {Context, AuthProvider} from './Context/AuthContext'

import Routeshome from './components/RoutesHome'
import Login from './components/Login'
import Cadastro from './components/Cadastro'
import Recover from './components/Recover'

function CustomRoute({isPrivate, ...rest}){
    const { authenticate } = useContext(Context)
    if(isPrivate && !authenticate ){
        console.debug(isPrivate)
        return (
             <Redirect to="/login" />
        )
    }

    return <Route {...rest} />
}

function Routes(){
    return(
        <AuthProvider>
            <BrowserRouter>
                <Switch>
                    <CustomRoute path="/login" component={Login} />
                    <CustomRoute path="/cadastro" component={Cadastro} />
                    <CustomRoute path="/recover" component={Recover} />
                    <CustomRoute isPrivate path="/home" component={Routeshome} />
                </Switch>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default Routes