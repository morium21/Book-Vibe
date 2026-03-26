import React from 'react'
import HeroSection from './HeroSection'
import Navbar from './Navbar'
import Books from './Books'
import { Outlet } from 'react-router-dom'



const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Books/>
            <Outlet/>

        </>
    )
}

export default Home
