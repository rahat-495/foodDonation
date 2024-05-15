
import { Input } from "@material-tailwind/react";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import UseAuth from "../../Hooks/UseAuth";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Update = () => {

    const {id} = useParams() ;
    const {user} = UseAuth() ;
    const [remaining , setRemaining] = useState({}) ;
    const navigate = useNavigate() ;
    const axiosSecure = useAxiosSecure() ;

    useEffect(() => {
        axiosSecure.get(`/remainingFoods/${id}`)
        .then(res => {
            console.log(res.data);
            setRemaining(res.data) ;
        })
    } , [id , axiosSecure])

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
        
        axiosSecure.put(`/updateFood/${id}` , foodInfo)
        .then(res => {
            console.log(res.data);
            if(res.data.modifiedCount > 0){
                toast.success("Food Update SuccessFullY !") ;
                form.reset() ;
                setTimeout(() => {
                    navigate('/manageMyFoods') ;
                } , 1000)
            }
        })
    }    

    return (
        <div className="min-h-[70vh] flex items-center justify-center flex-col mx-3">

            <Helmet>
                <title>
                Feast Forward || Update
                </title>
            </Helmet>

            <h1 className="gro text-4xl font-semibold mb-14">Update</h1>

            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">

                <div className="grid grid-cols-2 gap-5">
                    <Input defaultValue={remaining?.foodName} type="text" name="foodName" label="Food Name" required/>
                    <Input defaultValue={remaining?.foodImage} type="text" name="foodImage" label="Food Image" required/>
                </div>

                <div className="grid grid-cols-2 gap-5">
                    <Input defaultValue={remaining?.foodQuantity} type="number" name="quantity" label="Food Quantity" required/>
                    <Input defaultValue={remaining?.pickupLocation} type="text" name="location" label="Pickup Location" required/>
                </div>

                <div className="grid grid-cols-2 gap-5">
                    <Input defaultValue={remaining?.expiredDateTime} type="datetime-local" name="expire" label="Expired Date/Time" required/>
                    <Input defaultValue={remaining?.additionalNotes} type="text" name="notes" label="Additional Notes" required/>
                </div>

                <div className="grid grid-cols-2 gap-5">
                    <div className="border rounded-lg border-[#B0BEC5] flex items-center justify-between px-3">
                        <label htmlFor="status" className="gro">Status</label>
                        <select className="bg-transparent" name="status" id="">
                            <option defaultValue={remaining?.status} className="gro font-semibold" value="available">Available</option>
                            <option defaultValue={remaining?.status} className="gro" value="requested">Requested</option>
                        </select>
                    </div>
                    <Input type="text" name="donarName" label="Donator Name" defaultValue={user?.displayName} readOnly required/>
                </div>

                <div className="grid grid-cols-2 gap-5">
                    <Input type="text" name="donarEmail" label="Donator Email" readOnly defaultValue={user?.email} required/>
                    <Input type="text" name="donarImage" label="Donator Image" readOnly defaultValue={user?.photoURL} required/>
                </div>

                <div className="grid grid-cols-1 ">
                    <input type="submit" value="Update" className="btn btn-outline gro font-semibold hover:text-gray-400 hover:bg-[#212121]"/>
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

export default Update;
