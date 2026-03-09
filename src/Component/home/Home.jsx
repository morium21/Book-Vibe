import React from 'react'
import HeroSection from './HeroSection'
import Navbar from './Navbar'
import Books from './Books'
import BookCard from './BookCard'


const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <BookCard />
            <Books/>

        </>
    )
}

export default Home
