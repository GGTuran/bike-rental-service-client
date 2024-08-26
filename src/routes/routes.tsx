import App from "@/App";
import AboutUs from "@/pages/AboutUs";
import Contact from "@/pages/Contact";
import Error from "@/pages/Error";
import GetME from "@/pages/GetMe";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { routeGenerator } from "@/utils/routesGenerator";



import { createBrowserRouter } from "react-router-dom";
import { userPaths } from "./userRoutes";
import BikeDetails from "@/pages/BikeDetails";
import { adminPaths } from "./adminRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement:<Error></Error>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:'/about-us',
                element:<AboutUs></AboutUs>,
            },
            {
                path:'/contact',
                element:<Contact></Contact>,
            },
            {
                path:'/bikes/:bikeId',
                element:<BikeDetails></BikeDetails>,
            }
        ]
    },
    {
        path:'/admin',
        element:<App></App>,
        errorElement:<Error></Error>,
        children: routeGenerator(adminPaths),
    },
    {
        path:'/users',
        element:<App></App>,
        errorElement:<Error></Error>,
        children:routeGenerator(userPaths),
    },
    {
        path:'/get-me',
        element:<App></App>,
        children:[
            {
                index:true,
                element:<GetME></GetME>
            }
        ]
    },
    
    {
        path:'/login',
        element:<Login></Login>,
    },
    {
        path:'/signup',
        element:<Register></Register>,
    },
    
]);

export default router;