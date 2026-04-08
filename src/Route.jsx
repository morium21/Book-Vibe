import React from "react"
import { createBrowserRouter } from "react-router-dom";
import Home from "./Component/home/Home";
import { ListedBooks } from "./Component/listed-books/ListedBooks";
import { PageToRead } from "./Component/listed-books/page-to-read/PageToRead";
import { SignIn } from "./Component/sign-in/SignIn";
import { SignUp } from "./Component/sign-up/SignUp";


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
    {
        path: "/sign-in",
        element: <SignIn />
    },
     {
        path: "/sign-up",
        element: <SignUp />
    },
])