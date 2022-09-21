import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CoffePage } from '../pages/CoffePage'

export const CoffeRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<CoffePage/>} />

        <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
