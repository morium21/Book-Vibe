import React from "react"
import { createBrowserRouter } from "react-router-dom";
import Home from "./Component/home/Home";
import { ListedBooks } from "./Component/listed-books/ListedBooks";
import { PageToRead } from "./Component/listed-books/page-to-read/PageToRead";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/listed-books",
        element: <ListedBooks />
    },
    {
        path: "/page-to-read",
        element: <PageToRead />
    },
])