import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import Login from "../Pages/Login/Login";
import Error from "../component/Error/Error";
import Phone from "../Pages/SinglePhone/Phone";


const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=> fetch('/phones.json')
            },
            {
                path:'/favorite',
                element:<Favorites></Favorites>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/phone/:id',
                element: <Phone></Phone>,
                loader: ()=> fetch('/phones.json')
            }
        ]
    }
])
export default router;