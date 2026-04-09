import React from 'react'

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
              <label className="block text-gray-700 mb-2 font-medium">Full Name</label>
              <input 
              type="text" 
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

          </form>
      </div>

    </div>
  )
}
