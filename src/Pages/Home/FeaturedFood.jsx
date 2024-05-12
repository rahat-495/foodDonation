
import { Button } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import axios from 'axios' ;
import { Link } from "react-router-dom";

const FeaturedFood = () => {

    const {data : featuredFoods = []} = useQuery({
        queryKey:['featuredFoods'] , 
        queryFn : () => getData() 
    })

    const getData = async () => {
        const {data} = await axios.get(`http://localhost:5555/featuredFoods`) ;
        return data ;
    }

    return (
        <div className="flex items-center justify-center flex-col gap-3">
            <h1 className="text-2xl gro font-semibold mb-5">Featured Foods</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 mb-10">
                {
                    featuredFoods.slice(0,6).map(food => <div key={food._id} className="card border">
                    <div className="card-body p-6">
                        <figure>
                            <img className="w-full h-60 rounded-lg" src={food.foodImage} alt="Shoes" />
                        </figure>
                      <div className="flex items-center gap-4">
                        <img className="w-10 h-10 border p-[1px] border-gray-700 rounded-full" src={food.donator.donatorImage} alt="" />
                        <h1 className="gro text-xl text-black font-semibold">{food.donator.donatorName}</h1>
                      </div>
                      <h2 className="card-title font-semibold gro">Recipe Name : {food.foodName}</h2>

                      <p className="gro text-black ">{food.additionalNotes}</p>

                      <div className="flex items-center gap-3">

                        <div className="badge badge-outline">
                            <p className="gro font-semibold">Quantity : {food.foodQuantity}</p>
                        </div>

                        <div className="badge badge-outline">
                            <p className="gro font-semibold">Expired : {food.expiredDateTime}</p>
                        </div>

                      </div>


                      <div className="card-actions w-full">
                        <Link className="w-full" to={`/featuredFoods/${food._id}`}>
                            <Button className="w-full mt-2">View Details</Button>
                        </Link>
                      </div>

                    </div>
                  </div>)
                }
            </div>

            <div className="flex items-center justify-center w-full mb-10">
                <Link to={'/availableFoods'}>
                    <Button>Show All</Button>
                </Link>
            </div>

        </div>
    );
};

export default FeaturedFood;
