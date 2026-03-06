import React from 'react'
import BookCard from '../Component/BookCard'

const books = new Array(9).fill(null)

const Books = () => {

    return (
        <div className="px-10 py-14">
            <h2 className="text-3xl font-bold text-center mb-12">
                Books

            </h2>
            <div className="grid grid-cols-3 gap-8">

                {books.map((book, index) => (
                    <BookCard key={index} />
                ))}

            </div>

        </div>
    )
}

export default Books
