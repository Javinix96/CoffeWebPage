import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path='/Login' element={ <LoginPage/>}/>
        <Route path='/Register' element={ <RegisterPage/>}/>

        <Route path='/*' element={<Navigate to='/auth/Login' />} />
    </Routes>
  )
}
