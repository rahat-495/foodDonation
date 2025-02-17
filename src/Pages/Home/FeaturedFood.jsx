
import { Button } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const FeaturedFood = () => {

    const axiosSecure = useAxiosSecure() ;

    const {data : featuredFoods = []} = useQuery({
        queryKey:['featuredFoods'] , 
        queryFn : () => getData() 
    })

    const getData = async () => {
        const {data} = await axiosSecure.get(`/featuredFoods`) ;
        return data ;
    }

    return (
        <div className="flex items-center justify-center flex-col gap-3 mx-5 lg:mx-0 xl:mx-0">
            <h1 className="text-3xl xl:text-5xl gro font-semibold mb-5">Featured Foods</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 mb-10">
                {
                    featuredFoods.slice(0,6).map(food => <div key={food._id} className="card border">
                    <div className="card-body p-3 xl:p-6">
                        <figure>
                            <img className="w-full h-60 rounded-lg" src={food.foodImage} alt="Shoes" />
                        </figure>
                      <div className="flex items-center gap-4">
                        <img className="w-10 h-10 border p-[1px] border-gray-700 rounded-full" src={food.donator.donatorImage} alt="" />
                        <h1 className="gro text-xl font-semibold">{food.donator.donatorName}</h1>
                      </div>
                      <h2 className="card-title font-semibold gro">Recipe Name : {food.foodName}</h2>

                      <p className="gro">{food.additionalNotes}</p>

                      <div className="flex items-center justify-between gap-3">

                        <div className="badge badge-outline h-8 px-[2px] py-1 xl:px-6 xl:py-0 xl:h-auto">
                            <p className="gro font-semibold">Quantity : {food.foodQuantity}</p>
                        </div>

                        <div className="badge badge-outline h-8 px-[2px] py-1 xl:px-6 xl:py-0 xl:h-auto">
                            <p className="gro font-semibold">Expired : {food.expiredDateTime}</p>
                        </div>

                      </div>

                        <div className="badge badge-outline w-full px-6">
                            <p className="gro font-semibold text-center">Pickup : {food.pickupLocation}</p>
                        </div>

                      <div className="card-actions w-full">
                        <Link className="w-full" to={`/featuredFoods/${food._id}`}>
                            <Button className="w-full mt-2 border-white border">View Details</Button>
                        </Link>
                      </div>

                    </div>
                  </div>)
                }
            </div>

            <div className="flex items-center justify-center w-full mb-10">
                <Link to={'/availableFoods'}>
                    <Button className="border-white border">Show All</Button>
                </Link>
            </div>

        </div>
    );
};

export default FeaturedFood;
