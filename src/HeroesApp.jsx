import React from 'react'
import { AppRouter } from './router/AppRouter'
import { AuthProvider } from './context/AuthProvider'



export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>



  )
}
