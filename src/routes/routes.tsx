import App from "@/App";
import AboutUs from "@/pages/AboutUs";
import Contact from "@/pages/Contact";
import Error from "@/pages/Error";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";



import { createBrowserRouter } from "react-router-dom";

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
        ]
    },
    {
        path:'/admin',
        element:<App></App>,
        errorElement:<Error></Error>,
        // children:
    },
    
    {
        path:'/login',
        element:<Login></Login>,
    },
    {
        path:'/signup',
        element:<Register></Register>,
    }
]);

export default router;