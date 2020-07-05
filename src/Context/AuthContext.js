import React, { createContext, useState, useEffect } from 'react'
import api from '../models/api'
import history from '../history'

const Context = createContext()

function AuthProvider({children}){
    const [authenticate, setAuthenticate] = useState(false)
    const [loader, setLoader] = useState(true)

    useEffect(()=>{
        const token = localStorage.getItem('token')

        if(token){
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticate(true)
            setLoader(false)
        }
        
    },[])


    async function heandleLogin(email , password){
        const response = await api.post("/users/sign_in", {
            user:{
                email,
                password
            }
        })

        console.log(typeof(response))
        console.log(response)

        if(response.status === 200){
            
            localStorage.setItem('token', JSON.stringify(response.data.data.token.accesstoken))
            api.defaults.headers.Authorization = `Bearer ${response.data.data.token.accesstoken}`
            setAuthenticate(true)
            history.push('/')
            document.location.reload()
        }

    }

    function logout(){
        setAuthenticate(false)
        localStorage.removeItem('token')
        api.defaults.headers.Authorization = undefined
        history.push('/login')
        document.location.reload()
    }

    if( window.location.href !== `${process.env.REACT_APP_URL}/` && window.location.href !== `${process.env.REACT_APP_URL}/login` && window.location.href !== `${process.env.REACT_APP_URL}/recover` && window.location.href !== `${process.env.REACT_APP_URL}/cadastro`){
        if(loader){
            return(
                <div>
                    <h1>loader...</h1>
                    <a href={`${process.env.REACT_APP_URL}/login`}>ir para login</a>
                    
                </div>
            )
        }
    }

    return(
        <Context.Provider value={{authenticate, heandleLogin, logout, setLoader}}>
            {children}
        </Context.Provider>
    )



}

export {Context, AuthProvider}