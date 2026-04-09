import React from 'react'
import { Link } from "react-router-dom";


export const SignIn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-cyan-50 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Sign in to continue your reading journey
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Email</label>
            <input type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">Password</label>
            <input type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div className="flex justify-between text-sm text-gray-500">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#" className="text-green-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-cyan-500 font-semibold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn;



