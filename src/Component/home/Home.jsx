import React from 'react'
import HeroSection from './HeroSection'
import Navbar from './Navbar'
import Books from './Books'
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'



const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://dummyjson.com/products").then((res)=> setData(res.data.products)).catch ((error) => console.log(error))

    }, []);
    console.log(data)
    return (
        <>
            <Navbar />
            <HeroSection />
            <Books data={data} />
            <Outlet />

        </>
    )
}

export default Home
