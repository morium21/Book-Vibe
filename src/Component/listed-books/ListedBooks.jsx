import React from 'react'
import Navbar from '../home/Navbar'

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
            className="flex gap-6 border rounded-xl p-4 shadow-sm"
          >
            <img
              src={book.img}
              alt={book.title}
              className="w-24 h-32 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">
                {book.title}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                By : {book.author}
              </p>

              <div className="flex flex-wrap gap-2 text-xs mb-3">
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded">
                  Rating {book.Rating}
                 </span>
                 <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                  Pages {book.pages}
                 </span>

              </div>



            </div>
          </div>

        ))}

      </div>







    </>
  )
}
