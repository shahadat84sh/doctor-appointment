import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Booking from '../Pages/Booking/Booking';
import Login from '../Pages/Login/Login';
import Signup from '../Pages/Sign up/Signup';
import Checkout from '../Pages/Booking/Checkout';
import PrivateRoute from './PrivateRoute';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/booking',
                element:<PrivateRoute><Checkout></Checkout></PrivateRoute>
            },
            {
                path:'/booking/:id',
                element:<Booking></Booking>,
                loader: ({params})=> fetch(`http://localhost:5000/doctorlist/${params.id}`)
            }
        ]
    }
])
