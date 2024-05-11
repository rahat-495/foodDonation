
import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import AddFood from "../Pages/AddFood/AddFood";
import MyFoods from "../Pages/MyFoods/MyFoods";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import FoodRequest from "../Pages/FoodRequest/FoodRequest";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
        path : '/' ,
        element : <Root></Root> ,
        errorElement : <Error></Error> ,
        children : [
            {
                path : '/' ,
                element : <Home/> ,
            },
            {
                path : '/addFood' ,
                element : <AddFood/> ,
            },
            {
                path : '/myFoods' ,
                element : <MyFoods/> ,
            },
            {
                path : '/availableFoods' ,
                element : <AvailableFoods/> ,
            },
            {
                path : '/myFoodRequest' ,
                element : <FoodRequest/> ,
            },
            {
                path : '/login' ,
                element : <Login/> ,
            },
            {
                path : '/Register' ,
                element : <Register/> ,
            },
        ]
    }
])

export default router;
