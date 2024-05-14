
import { Input } from "@material-tailwind/react";
import UseAuth from "../../Hooks/UseAuth";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

const AddFood = () => {

    const {user , loading} = UseAuth() ;

    const [data , setDate] = useState([]) ;
    const [loading2 , setLoading] = useState(false) ;

    useEffect(() => {
        setLoading(true) ;
        axios.get(`https://assignment11server-omega.vercel.app/featuredFoods`)
        .then(res => {
            setDate(res.data) ;
            setLoading(false) ;
        })
    } , [])

    if(loading || loading2){
        console.log(data);
        return <span className="loading min-h-[100vh] mx-auto min-w-[20%] flex items-center justify-center loading-ring loading-lg"></span> ;
    }

    const handleSubmit = (e) => {
        e.preventDefault() ;

        const form = e.target ;
        const foodImage = form.foodImage.value ;
        const foodName = form.foodName.value ;
        const donatorName = form.donarName.value ;
        const donatorEmail = form.donarEmail.value ;
        const donatorImage = form.donarImage.value ;
        const foodQuantity = parseInt(form.quantity.value) ;
        const pickupLocation = form.location.value ;
        const expiredDateTime = form.expire.value ;
        const additionalNotes = form.notes.value ;
        const status = form.status.value ;

        const foodInfo = {
            foodImage ,
            foodName ,
            donator : {
                donatorImage ,
                donatorName ,
                donatorEmail ,
            } ,
            foodQuantity ,
            pickupLocation ,
            expiredDateTime ,
            additionalNotes ,
            status ,
        } ;
        
        axios.post(`https://assignment11server-omega.vercel.app/addFood` , foodInfo)
        .then(res => {
            console.log(res.data);
            if(res.data.insertedId){
                toast.success("Food Added SuccessFullY !") ;
                form.reset() ;
            }
        })
    }

    return (
        <div className="min-h-[70vh] flex items-center flex-col justify-center mx-3">

            <Helmet>
                <title>
                Feast Forward || Add Food
                </title>
            </Helmet>

            <h1 className="gro text-3xl font-semibold mb-10">Add Foods</h1>

            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">

                <div className="grid grid-cols-2 gap-5">
                    <Input type="text" name="foodName" label="Food Name" required/>
                    <Input type="text" name="foodImage" label="Food Image" required/>
                </div>

                <div className="grid grid-cols-2 gap-5">
                    <Input type="number" name="quantity" label="Food Quantity" required/>
                    <Input type="text" name="location" label="Pickup Location" required/>
                </div>

                <div className="grid grid-cols-2 gap-5">
                    <Input type="datetime-local" name="expire" label="Expired Date/Time" required/>
                    <Input type="text" name="notes" label="Additional Notes" required/>
                </div>

                <div className="grid grid-cols-2 gap-5">
                    <div className="border rounded-lg border-[#B0BEC5] flex items-center justify-between px-3">
                        <label htmlFor="status" className="gro">Status</label>
                        <select className="bg-transparent" name="status" id="">
                            <option className="gro font-semibold" value="available">Available</option>
                        </select>
                    </div>
                    <Input type="text" name="donarName" label="Donator Name" defaultValue={user?.displayName} readOnly required/>
                </div>

                <div className="grid grid-cols-2 gap-5">
                    <Input type="text" name="donarEmail" label="Donator Email" readOnly defaultValue={user?.email} required/>
                    <Input type="text" name="donarImage" label="Donator Image" readOnly defaultValue={user?.photoURL} required/>
                </div>

                <div className="grid grid-cols-1 ">
                    <input type="submit" value="Add Food" className="btn btn-outline gro font-semibold hover:bg-[#212121]"/>
                </div>

            </form>

            <ToastContainer
            position="top-center"
            autoClose={800}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
            />

        </div>
    );
};

export default AddFood;
