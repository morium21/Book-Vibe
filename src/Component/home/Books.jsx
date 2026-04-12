import React from 'react'
import BookCard from './BookCard'


const books = new Array(9).fill(null)

const Books = ({data}) => {
    console.log(data, 'd')

    return (
        <div className="px-10 py-14">
            <h2 className="text-3xl font-bold text-center mb-12">
                Books

            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

                {data.slice(0,9).map((book, index) => (
                    <BookCard key={index} array={book} />
                ))}

            </div>

        </div>
    )
}

export default Books
