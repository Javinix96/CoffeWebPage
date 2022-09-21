import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { CoffeRoutes } from '../coffeApp/routes/CoffeRoutes'

export const AppRouter = () => {
  return (
    <Routes>
        {/* auth routes */}
        <Route path='/auth/*' element={<AuthRoutes />} />
        {/* Coffe routes */}
        <Route path='/*' element={<CoffeRoutes />} />
    </Routes>
  )
}
