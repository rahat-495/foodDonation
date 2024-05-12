
import { Button, Input } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import { ToastContainer, toast } from "react-toastify";

const CardDetails = () => {

    const {id} = useParams() ;
    const {user} = UseAuth() ;

    const date = new Date() ;

    const {data : singleData = []} = useQuery({
        queryKey : ['singleData'] ,
        queryFn : () => getData() ,
    })

    const getData = async () => {
        const {data} = await axios.get(`http://localhost:5555/featuredFoods/${id}`) ;
        return data ;
    }

    console.log(singleData);
    
    const handleRequest = (e , id) => {
        e.preventDefault() ;
        
        const form = e.target ;
        const additional = form.additional.value;
        const status = 'requested' ;
        const email = user.email ;
        const formEmail = form.email.value ;
        const requestedDate = new Date().toDateString() ;

        if(singleData.status === 'available'){

            if(singleData.donator.donatorEmail !== formEmail){
                axios.patch(`http://localhost:5555/foodsRequest/${id}` , {additional , status , email , requestedDate})
                .then(res => {
                    console.log(res.data);
                    if(res.data.modifiedCount > 0){
                        toast.success("Requested SuccessFully !")
                    }
                    else{
                        toast.warning("Already Have Requested !")
                    }
                })
            }
            else{
                toast.warning("Email Isn't valid")
            }

        }
        else{
            toast.warning("Already Have Requested !")
        }

    }

    return (
        <div className="min-h-[50vh] flex mx-10 items-start justify-center flex-col xl:flex-row xl:my-20  xl:mx-0 gap-10">
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
                <Button className="btn my-5" onClick={()=>document.getElementById('my_modal_2').showModal()}>Request</Button>
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
                                <Input label="Additional Notes || Changable" name="additional" defaultValue={singleData.additionalNotes}></Input>
                            </div>

                            <div className="grid grid-cols-1">
                                <input className="btn btn-outline gro font-semibold hover:bg-[#212121]" type="submit" value={'Request'}/>
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
