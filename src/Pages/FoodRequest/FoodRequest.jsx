
import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../Hooks/UseAuth";
import { Button, Card, Typography } from "@material-tailwind/react";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Swal from 'sweetalert2'
import animation from '../../../public/loading.json' ;
import Lottie from "lottie-react";

const FoodRequest = () => {

    const {user} = UseAuth() ;
    const axiosSecure = useAxiosSecure() ;
    const [loading , setLoading] = useState(false) ;

    const { data: myRequestedFoods , refetch } = useQuery({
        queryKey: ["myRequestedFoods" , user.email],
        queryFn: () => getData(),
        initialData : [] ,
        enabled : user ? true : false ,
    });
    
    const getData = async () => {
        setLoading(true) ;
        const { data } = await axiosSecure.get(
          `/myRequestedFoods/${user?.email}`
        );
        setLoading(false) ;
        return data;
    };

    const TABLE_HEAD = ["Donar Name", "Pickup Location" ,"Expire Date" , "Request Date" , ""];

    const handleCancel = (id) => {

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to cancel this !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it"
      }).then((result) => {
        if (result.isConfirmed) {

          Swal.fire({
            title: "Canceled",
            text: "Your Request is Success Fully Cancel !",
            icon: "success"
          });

          axiosSecure.patch(`http://localhost:5555/calcelRequest/${id}` , {email : '' , status : 'available'})
          .then((res) => {
            console.log(res.data);
            if(res.data.modifiedCount > 0){
              toast.success("Request Cancel Success Fully !") ;
              refetch() ;
            }
          })

        }
      });

    }

    if(loading){
      return <Lottie className="w-80 h-80 min-h-screen flex items-center justify-center relative left-1/2 -translate-x-1/2" animationData={animation} loop={true}/>;
    }

    return (
        <div className="flex flex-col items-center justify-center gap-5">
          
          <Helmet>
                <title>
                  Feast Forward || My Requested Foods
                </title>
          </Helmet>

        <h1 className="my-10 gro text-3xl font-semibold">Manage My Foods</h1>
        <div className="w-full mb-20">
          <Card className="h-full w-full overflow-scroll md:overflow-hidden lg:overflow-hidden">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {myRequestedFoods.map((card, index) => (
                  <tr key={index} className="even:bg-blue-gray-50/50">

                    <td className="p-4">
                        {card.donator.donatorName}
                    </td>

                    <td className="p-4">
                        {card.pickupLocation}
                    </td>

                    <td className="p-4">
                        {card.expiredDateTime}
                    </td>

                    <td className="p-4">
                        {card.requestedDate}
                    </td>

                    <td className="p-4">
                      <Button onClick={() => handleCancel(card._id)}>Cancel Request</Button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
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

export default FoodRequest;
