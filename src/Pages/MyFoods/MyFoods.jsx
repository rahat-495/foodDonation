
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UseAuth from "../../Hooks/UseAuth";
import { Button, Card, Typography } from "@material-tailwind/react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { toast } from "react-toastify";

const MyFoods = () => {

    const { user } = UseAuth();
    
    const { data: myFoods , refetch } = useQuery({
        queryKey: ["myFoods" , user?.email],
        queryFn: () => getData(),
        initialData : [] ,
        enabled : user ? true : false ,
    });
    
    const getData = async () => {
        const { data } = await axios.get(
            `http://localhost:5555/manageMyFoods/${user?.email}`
        );
        return data;
    };

    const TABLE_HEAD = ["Food Name", "About Donator" ,"Expire Date" , "Location" ,"Quantity" , ""];

    const handleDelete = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to delete this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted",
            text: "Your food has been deleted.",
            icon: "success"
          });

          axios.delete(`http://localhost:5555/foodDelete/${id}`)
          .then(res => {
            console.log(res.data);
            if(res.data.deletedCount > 0){
              toast.success("Food Deleted SuccessFully !") ;
              refetch() ;
            }
          })

        }
      });
    }
    
  return (
    <div className="flex flex-col items-center justify-center gap-5">
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
              {myFoods.map((card, index) => (
                <tr key={index} className="even:bg-blue-gray-50/50">

                  <td className="p-4">
                      {card.foodName}
                  </td>

                  <td className="p-4">
                      <div className="flex items-start gap-3">
                        <img className="w-10 h-10 rounded-lg " src={card.donator.donatorImage} alt="" />
                        <div className="">
                            <h1 className="">{card.donator.donatorName}</h1>
                            <h1 className="">{card.donator.donatorEmail}</h1>
                        </div>
                      </div>
                  </td>

                  <td className="p-4">
                      {card?.expiredDateTime}
                  </td>

                  <td className="p-4">
                      {card.pickupLocation}
                  </td>

                  <td className="p-4">
                      {card.foodQuantity} Pic
                  </td>

                  <td className="flex items-center pt-2 justify-end pr-4">
                    <div className="flex items-center justify-between gap-3 mt-3">
                        <Link to={`/update/${card._id}`}><Button className="text-lg text-gray-900 bg-transparent border hover:shadow-none shadow-none border-[#323232]"><CiEdit /></Button></Link>
                        <Button onClick={() => handleDelete(card._id)} className="text-lg text-red-900 bg-transparent border hover:shadow-none shadow-none border-[#323232]"><MdDelete /></Button>
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default MyFoods;
