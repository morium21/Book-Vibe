import React from 'react'
import Navbar from '../home/Navbar'
import { MapPin, Users, } from "lucide-react"

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "Awlad Hossain",
    image: "https://i.ibb.co.com/4fTnG7v/book1.png",
    Rating: "4.5",
    category: "Classic",
    tags: ["Young Adult", "identity"],
    publisher: "Scribner",
    year: "1925",
    pages: "180",

  },
]

export const ListedBooks = () => {
  return (
    <>
      <Navbar />

      <div className="bg-gray-100 mx-10 rounded-lg py-5 mb-6">
        <h2 className="text-lg font-semibold">Books</h2>
      </div>

      <div className="text-center mb-6">
        <button className="bg-green-500 text-white px-8 py-3 rounded">
          Sort By  ▼
        </button>
      </div>

      <div className="flex gap-4 border-b pb-2 mb-6">
        <button className="text-sm text-gray-600 border border-gray-500">
          Read Books
        </button>
        <button className="text-sm text-gray-400">Wishlist Books</button>
      </div>


      <div className="space-y-5">
        {books.map((book) => (
          <div
            key={book.id}
            className="border border-gray-300 rounded-2xl p-6 flex-col md:flex-row gap-6 bg-white "
          >
            <img
              src={book.img}
              alt={book.title}
              className="h- [180px] object-contain"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">
                {book.title}
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                By : {book.author}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-5">
                <span className="font-bold text-gray-800 text-xl">Tag</span>

                {book.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-600 px-5 py-2 rounded-full text-xl font-medium"
                  >
                    #{tag}
                  </span>
                ))}

                <div className="flex items-center gap-2 text-gray-600 text-xl mb-5">
                  <div className="flex items-center gap-2">
                    <MapPin size={22} />
                    <span>Year of Publishing:  {book.year}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-8 text-gray-600 text-xl mb-5">
                  <div className="flex items-center gap-2">
                    <Users size={22}/>
                    <span>publisher: {book.publisher}</span>
                  </div>

                </div>

              </div>



            </div>
          </div>

        ))}

      </div>







    </>
  )
}
