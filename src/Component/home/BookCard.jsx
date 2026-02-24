import React from 'react'

const books = [
    {
        id: 1,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        category: "Fiction",
        price: 8.00,
        image:"pngwing 1.png",
        tags: ["Young Adult", "Identity"]
    }

]



const BookCard = () => {
    return (

        <section>
            <h1 className="text-center font-bold text-4xl my-10">Books</h1>
           
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {books.map((book) => (
                  <h1>{book.title}</h1>
                ))}
            </div>





        </section>
                                                                                                       




    )
}

export default BookCard
