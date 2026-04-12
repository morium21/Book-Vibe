import React from 'react'

const HeroSection = () => {
    return (

        //  Hero-Left

        <div className="bg-gray-100 mx-4 md:mx-10 rounded-xl p-6 md:p-14 flex flex-col md:flex-row justify-between items-center gap-2">
            <div>
                <h1 className="text-4xl font-bold mb-6">
                    Books to freshen up <br /> your bookshelf
                </h1>

                <button className="bg-green-500 text-white px-6 py-3 rounded">
                    View The List
                </button>
            </div>


            {/* Hero-Right */}
            <div  className="flex justify-center">
                <img src="./pngwing 1.png" alt="pngwing" className="h-full " />
            </div>


        </div>
    )
}

export default HeroSection
