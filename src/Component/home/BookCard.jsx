import React from 'react'





const BookCard = () => {
    return (




        <section className="">

            {/* <div>
                <h1 className="text-center font-bold text-4xl my-10">Books</h1>
            </div> */}

            {/* Card-1 */}
            {/* image */}
            <div className="border border-gray-200 rounded-xl p-3 bg-white hover:shadow-md transition duration-300">

                <div className="bg-gray-100 rounded-lg h-48 flex items-center">
                    <img
                        src="/assets/book2.png"
                        alt="book"
                        className="h-40 object-contain"
                    />
                </div>

                {/* Tags */}
                <div className="flex gap-2 mt-4">
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                        Young Adult
                    </span>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                        Identity
                    </span>
                </div>


                {/* Title */}
                <h3 className="font-semibold text-lg mt-3">
                    The Catcher  in the Rye
                </h3>

                {/* Author */}
                <p className="text-sm text-gray-400 mt-1">
                    By : Authore Name
                </p>

                {/* Bottom Info */}
                <div className="border-t mt-4 pt-3 flex justify-between text-sm text-gray-500">
                    <span>Fiction</span>
                    <span>5.00  </span>


                </div>

            </div>





        </section>







    )
}

export default BookCard

