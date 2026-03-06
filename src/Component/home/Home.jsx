import React from 'react'
import HeroSection from './HeroSection'
import Navbar from './Navbar'
import BookCard from './BookCard'
import Books from './Books'


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
