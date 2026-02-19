import React from "react"

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./Component/Home/Navbar"
import HeroSection from "./Component/home/HeroSection"


function App() {


  return (
    <>
      {/* <div class="min-h-screen flex justify-center items-center bg-slate-100">
  <div class="bg-white p-6 rounded shadow text-center">
    <h1 class="text-2xl font-bold text-blue-600">Hello Moriyom 👋</h1>
    <button id="btn" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
      Click
    </button>
  </div>
</div> */}

      <Navbar />
      <HeroSection/>


    </>


  )
}

export default App
