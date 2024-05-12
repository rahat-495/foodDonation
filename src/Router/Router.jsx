
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
import CardDetails from "../Pages/CardDetails/CardDetails";
import PrivateFile from "../Private/PrivateFile";
import Update from "../Pages/Update/Update";

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
                element : <PrivateFile><AddFood/></PrivateFile> ,
            },
            {
                path : '/manageMyFoods' ,
                element : <PrivateFile><MyFoods/></PrivateFile> ,
            },
            {
                path : '/availableFoods' ,
                element : <AvailableFoods/> ,
            },
            {
                path : '/myFoodRequest' ,
                element : <PrivateFile><FoodRequest/></PrivateFile> ,
            },
            {
                path : '/login' ,
                element : <Login/> ,
            },
            {
                path : '/Register' ,
                element : <Register/> ,
            },
            {
                path : '/featuredFoods/:id' ,
                element : <PrivateFile><CardDetails/></PrivateFile> ,
            },
            {
                path : '/update/:id' ,
                element : <PrivateFile><Update/></PrivateFile> ,
            },
        ]
    }
])

export default router;
