import React from 'react'
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-50 to-green-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded--2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Join Book Vibe and start your reading journey
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-2 font-medium text-left">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>


          <div>
            <label className="block text-gray-700 mb-2 font-medium text-left">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>


          <div>
            <label className="block text-gray-700 mb-2 font-medium text-left">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium text-left">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>


          <button
            type="submit"
            className="w-full bg-cyan-400 hover:bg-cyan-500 text-white py-3 rounded-lg font-semibold transition"

          >
            Sign Up

          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">

          Already have an account?{" "}
          <Link to="/signin" className="text-green-500 font-semibold hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}
