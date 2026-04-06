import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-10 py-5">
            <h1 className="font-bold text-xl">Book Vibe</h1>

            <ul className="flex gap-6 text-gray-600">
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/listed-books"}>Listed Books</NavLink></li>
                <li><NavLink to={"/page-to-read"}>Pages to Read</NavLink></li>
                <li><NavLink to={"/Sign In"}></NavLink></li>
                
            </ul>


            <div className="space-x-3">
                <button className="bg-green-500 text-white px-4 py-2 rounded">
                    Sign In

                </button>

                <button className="bg-cyan-400 text-white px-4 py-2 rounded">
                    Sign Up

                </button>

            </div>

        </nav>
    )
}

export default Navbar
