import React from "react"
import ReactDOM from "react-dom/client"
import { Body } from "./component/Body"
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom"
import { Error } from "./component/Error"
import { Navbar } from "./component/Navbar"
import { RestaurantMenu } from "./component/RestaurantMenu"
import About from "./component/About"


const App =()=>{
    return(
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children: [
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/restaurant/:resId',
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)