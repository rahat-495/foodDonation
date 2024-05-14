
import { Button, Input } from "@material-tailwind/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useState } from "react";

const CardDetails = () => {

    const {id} = useParams() ;
    const {user} = UseAuth() ;
    const axiosSecure = useAxiosSecure() ;
    const [loading , setLoading] = useState(false) ;

    const date = new Date() ;

    const {data : singleData = []} = useQuery({
        queryKey : ['singleData'] ,
        queryFn : () => getData() ,
    })

    const getData = async () => {
        setLoading(true) ;
        const {data} = await axiosSecure.get(`/featuredFoods/${id}`) ;
        setLoading(false) ;
        return data ;
    }
    
    const {mutateAsync} = useMutation({
        mutationFn : async (obj) => {
            const {id , status , additional , email , requestedDate} = obj ;
            axiosSecure.patch(`/foodsRequest/${id}` , {status , additional , email , requestedDate})
                .then(res => {
                    if(res.data.modifiedCount > 0){
                        toast.success("Requested SuccessFully !") ;
                        const modal = document.getElementById('my_modal_2');
                        modal.close() ;
                    }
                    else{
                        toast.warning("Already Have Requested !") ;
                        const modal = document.getElementById('my_modal_2');
                        modal.close() ;
                    }
                })
        }
    })
    
    const handleRequest = async (e , id) => {
        e.preventDefault() ;
        
        const form = e.target ;
        const additional = form.additional.value;
        const status = 'requested' ;
        const email = user.email ;
        const formEmail = form.email.value ;
        const requestedDate = new Date().toDateString() ;

        if(singleData.status === 'available'){

            if(singleData.donator.donatorEmail !== formEmail){
                await mutateAsync({id , status , additional , email , requestedDate}) ;
            }
            else{
                toast.warning("You Can't Request Your Won Donation")
                const modal = document.getElementById('my_modal_2');
                modal.close() ;
            }

        }
        else{
            toast.warning("Already Have Requested !") ;
            const modal = document.getElementById('my_modal_2');
            modal.close() ;
        }

    }

    if(loading){
        return <span className="loading min-h-[100vh] mx-auto min-w-[20%] flex items-center justify-center loading-ring loading-lg"></span> ;
    }

    return (
        <div className="min-h-[50vh] flex mx-10 items-start justify-center flex-col xl:flex-row xl:my-20  xl:mx-0 gap-10">

            <Helmet>
                <title>
                Feast Forward || Details Page
                </title>
            </Helmet>

            <img className="w-full xl:w-1/2 rounded-lg h-[500px]" src={singleData.foodImage} alt="" />
            <div className="w-1/2">
                <div className="flex items-center gap-3">
                    <h1 className="gro mt-6 font-bold text-xl">Donar Name : {singleData?.donator?.donatorName}</h1>
                </div>
                <h1 className="gro mt-6 font-bold text-xl">{singleData.foodName}</h1>
                <h1 className="gro mt-6 font-semibold text-xl">{singleData.additionalNotes}</h1>
                <h1 className="gro mt-6 font-semibold text-xl">Donation Quantity : {singleData.foodQuantity}</h1>
                <h1 className="gro w-[600px] mt-6 font-semibold text-xl">Food Pickup Location : {singleData.pickupLocation}</h1>
                <h1 className="gro mt-6 font-semibold text-xl">Expired Date : {singleData.expiredDateTime}</h1>

                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <Button className="btn my-5 border-white border" onClick={()=>document.getElementById('my_modal_2').showModal()}>Request</Button>
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                        <form onSubmit={(e) => handleRequest(e , singleData._id)} className="flex flex-col gap-5">

                            <div className="grid grid-cols-2 gap-5">
                                <Input label="Food Name" readOnly defaultValue={singleData.foodName}></Input>
                                <Input label="Food Image" readOnly defaultValue={singleData.foodImage}></Input>
                            </div>

                            <div className="grid grid-cols-2 gap-5">
                                <Input label="Food Id" readOnly defaultValue={singleData._id}></Input>
                                <Input label="Food Donator Email" name="donatorEmail" readOnly value={singleData?.donator?.donatorEmail}></Input>
                            </div>

                            <div className="grid grid-cols-2 gap-5">
                                <Input label="Food Donator Name" readOnly defaultValue={singleData?.donator?.donatorName}></Input>
                                <Input label="User Email" name="email" readOnly defaultValue={user.email}></Input>
                            </div>

                            <div className="grid grid-cols-2 gap-5">
                                <Input label="Date" readOnly defaultValue={date}></Input>
                                <Input label="Pickup Location" readOnly defaultValue={singleData.pickupLocation}></Input>
                            </div>

                            <div className="grid grid-cols-2 gap-5">
                                <Input label="Expire Date" readOnly defaultValue={singleData.expiredDateTime}></Input>
                                <Input autoFocus label="Additional Notes || Changable" name="additional" defaultValue={singleData.additionalNotes}></Input>
                            </div>

                            <div className="grid grid-cols-1">
                                <input className="btn btn-outline gro font-semibold hover:bg-[#212121] border-gray-500 border" type="submit" value={'Request'}/>
                            </div>

                        </form>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>

            </div>

            <ToastContainer
            position="top-center"
            autoClose={800}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />

        </div>
    );
};

export default CardDetails;
