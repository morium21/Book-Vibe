import React from 'react'


const HeroSection = () => {
  return (

    //  Hero-Left

    <div className="bg-gray-100 mx-10 rounded-xl p-14 flex justify-content-between items-center">
        <div>
           <h1 className="text-4xl font-bold mb-6">
             Books to freshen up <br /> your bookshelf
            </h1> 

            <button className="bg-green-500 text-white px-6 py-3 rounded">
                View The List 
            </button>
        </div>

        
       {/* Hero-Right */}
       <img src="/pngwing 1.png" alt="" className="h-60" />


    </div>
  )
}

export default HeroSection
