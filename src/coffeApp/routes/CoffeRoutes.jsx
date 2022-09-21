import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CoffeApp } from '../pages/CoffeApp'

export const CoffeRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<CoffeApp/>} />

        <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
