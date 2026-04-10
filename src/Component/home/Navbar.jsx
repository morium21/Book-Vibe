import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from "lucide-react"

const Navbar = () => {
    return (
        <div className="w-11/12 max-w-7xl mx-auto py-4">
            <nav className="flex flex-col md:flex-row gap-4 justify-between items-center px-10 py-5">
                <h1 className="font-bold text-xl">Book Vibe</h1>

                <ul className="flex gap-6 text-gray-600">
                    <li><NavLink to={"/"}>Home</NavLink></li>
                    <li><NavLink to={"/listed-books"}>Listed Books</NavLink></li>
                    <li><NavLink to={"/page-to-read"}>Pages to Read</NavLink></li>


                </ul>


                <div className="space-x-3">
                    <Link to={"/Sign-In"}>
                        <button className="bg-green-500 text-white px-4 py-2 rounded">
                            Sign In

                        </button>
                    </Link>

                    <Link to={"/Sign-Up"}>
                        <button className="bg-cyan-400 text-white px-4 py-2 rounded">
                            Sign Up

                        </button>
                    </Link>

                </div>

            </nav>

        </div>
    )
}

export default Navbar
