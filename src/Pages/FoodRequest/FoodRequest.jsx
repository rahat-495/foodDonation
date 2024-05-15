
import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../Hooks/UseAuth";
import { Card, Typography } from "@material-tailwind/react";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useState } from "react";

const FoodRequest = () => {

    const {user} = UseAuth() ;
    const axiosSecure = useAxiosSecure() ;
    const [loading , setLoading] = useState(false) ;

    const { data: myRequestedFoods } = useQuery({
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

    const TABLE_HEAD = ["Donar Name", "Pickup Location" ,"Expire Date" , "Request Date"];

    if(loading){
      return <span className="loading min-h-[100vh] mx-auto min-w-[20%] flex items-center justify-center loading-ring loading-lg"></span> ;
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

                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
    </div>
    );
};

export default FoodRequest;
