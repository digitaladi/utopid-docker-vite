import React from 'react'
import authService from '../_services/auth.service'
import { Navigate } from 'react-router-dom'

const AuthRequired = ({children}) => {

    if(!authService.isLogged()){
        return <Navigate to="/unauthorized" />
    }else{
        return children
    }
}

export default AuthRequired