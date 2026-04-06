import React from "react"
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  RouterProvider
} from "react-router-dom";
import Home from "./Component/home/Home"
import { ListedBooks } from "./Component/listed-books/ListedBooks";
import { router } from "./Route";

function App() {
  return (
    <>
   <RouterProvider router={router}/>
  
    </>
  );
  
}

export default App