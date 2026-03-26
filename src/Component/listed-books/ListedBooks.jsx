import React from 'react'
import Navbar from '../home/Navbar'

export const ListedBooks = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gray-100 mx-10 rounded-lg py-5 mb-6">
        <h2 className="text-lg font-semibold">Books</h2>
      </div>

      <div className="text-center mb-6">
        <button className="bg-green-500 text-white px-8 py-3 rounded">
          Sort By

        </button>

      </div>





    </>
  )
}
