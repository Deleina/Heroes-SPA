import React from 'react'
import { Navbar } from '../../ui/components/Navbar'
import { Outlet } from 'react-router-dom'


export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <Outlet/>
            </div>
        </>


    )
}
