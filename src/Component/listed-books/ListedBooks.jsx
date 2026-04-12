import React from 'react'
import Navbar from '../home/Navbar'
import { FileText, MapPin, Users, } from "lucide-react"

const books = [
  {
    id: 1,
    title: "The Catcher in the Rye",
    author: "Awlad Hossain",
    image: "",
    Rating: "4.5",
    category: "Classic",
    tags: ["Young Adult", "identity"],
    publisher: "Scribner",
    year: "1924",
    pages: "180",

  },
    {
    id: 1,
    title: "The Catcher in the Rye",
    author: "Awlad Hossain",
    image: "",
    Rating: "4.5",
    category: "Classic",
    tags: ["Young Adult", "identity"],
    publisher: "Scribner",
    year: "1924",
    pages: "180",

  },
     {
    id: 1,
    title: "The Catcher in the Rye",
    author: "Awlad Hossain",
    image: "",
    Rating: "4.5",
    category: "Classic",
    tags: ["Young Adult", "identity"],
    publisher: "Scribner",
    year: "1924",
    pages: "180",

  },
     {
    id: 1,
    title: "The Catcher in the Rye",
    author: "Awlad Hossain",
    image: "",
    Rating: "4.5",
    category: "Classic",
    tags: ["Young Adult", "identity"],
    publisher: "Scribner",
    year: "1924",
    pages: "180",

  },
     {
    id: 1,
    title: "The Catcher in the Rye",
    author: "Awlad Hossain",
    image: "",
    Rating: "4.5",
    category: "Classic",
    tags: ["Young Adult", "identity"],
    publisher: "Scribner",
    year: "1924",
    pages: "180",

  },
]

export const ListedBooks = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-10">

        <div className="bg-gray-100 rounded-xl py-4 md:py-6 text-center mb-6 md:mb-8">
          <h1 className="text-3xl font-bold">Books</h1>
        </div>

        <div className="flex justify-center mb-6 md:mb-8">
          <button className="bg-green-500 text-white px-4 md:px-6 py-2 rounded-lg text-sm md:text-base font-medium hover:bg-green-600 transition">
            Sort By ▼
          </button>
        </div>

        <div className="border-b border-gray-300 mb-6 md:mb-6 flex gap-2 text-sm md:text-base">
          <button className="px-4 md:px-6 py-2 border border-b-white rounded-t-xl bg-white text-gray-800 font-medium">
            Read Books
          </button>
          <button className="px-4 md:px-6 py-2 md:py-3 text-gray-500 font-medium">
            Wishlist Books
          </button>
        </div>


        <div className="space-y-6">
          {books.map((book) => (
            <div
              key={book.id}
              className="border border-gray-300 rounded-2xl p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 bg-white"
            >
              {/* Left Content */}
              <div className="bg-gray-100 rounded-2xl w-full md:w-[200px] h-[220px] md:h-[260px] flex items-center justify-center">
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-[140px] md:h-[180px] object-contain"
                />
              </div>

              {/* Right Content */}
              <div className="flex-1">
                <h2 className="text-lg md:text-2xl font-bold text-gray-900 mb-2 md:mb-4 font-serif">
                  {book.title}
                </h2>

                <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-5">By : {book.author}</p>


                <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-3 md:mb-5 text-sm md:text-base">
                  <span className="font-bold text-gray-800 text-xl">Tag</span>

                  {book.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-600 px-5 py-2 rounded-full text-xl font-medium"
                    >
                      #{tag}
                    </span>
                  ))}

                  <div className="flex items-center gap-1 text-gray-700 text-xl">
                    <MapPin size={22} />
                    <span>Year of Publishing: {book.year}</span>
                  </div>
                </div>


                <div className="flex flex-wrap gap-4 md:gap-6 text-gray-600 text-sm md:text-base mb-3 md:mb-5">
                  <div className="flex items-center gap-1">
                    <Users size={22} />
                    <span>Publisher: {book.publisher}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <FileText size={22} />
                    <span>Page {book.pages}</span>
                  </div>
                </div>

                <hr className="my-5 md:my-5 border-gray-300" />


                <div className="flex flex-wrap gap-2 md:gap-4 text-sm md:text-base">
                  <button className="bg-blue-100 text-blue-500 px-4 py-2 rounded-full  font-medium">
                    Category: {book.category}
                  </button>

                  <button className="bg-orange-100 text-orange-500 px-4 py-2 rounded-full font-medium">
                    Rating: {book.Rating}
                  </button>

                  <button className="bg-green-500 hover:bg-green-600 transition text-white px-4 py-2 rounded-full font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>







    </>
  )
}
export default ListedBooks
