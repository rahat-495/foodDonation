
import { Button } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const AvailableFoods = () => {
    
  const { data: availableFoods = [] } = useQuery({
    queryKey: ["availbleFoods"],
    queryFn: () => getData(),
  });

  const getData = async () => {
    const { data } = await axios.get(`http://localhost:5555/availbleFoods`);
    return data;
  };

  return (
    <div className="w-full min-h-screen flex-col flex items-center justify-center mb-10">
      <h1 className="gro font-semibold text-3xl my-10">Available Foods Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
        {availableFoods.map((food) => (
          <div key={food._id} className="card border mx-5">
            <div className="card-body p-6">
              <figure>
                <img
                  className="w-full h-60 rounded-lg"
                  src={food.foodImage}
                  alt="Shoes"
                />
              </figure>
              <div className="flex items-center gap-4">
                <img
                  className="w-10 h-10 border p-[1px] border-gray-700 rounded-full"
                  src={food.donator.donatorImage}
                  alt=""
                />
                <h1 className="gro text-xl text-black font-semibold">
                  {food.donator.donatorName}
                </h1>
              </div>
              <h2 className="card-title font-semibold gro">
                Recipe Name : {food.foodName}
              </h2>

              <p className="gro text-black ">{food.additionalNotes}</p>

              <div className="flex items-center justify-between gap-3">
                <div className="badge badge-outline px-4">
                  <p className="gro font-semibold">
                    Quantity : {food.foodQuantity}
                  </p>
                </div>

                <div className="badge badge-outline">
                  <p className="gro font-semibold">
                    Expired : {food.expiredDateTime}
                  </p>
                </div>
              </div>

              <div className="badge badge-outline w-full text-center">
                <p className="gro font-semibold">
                  Expired : {food.expiredDateTime}
                </p>
              </div>

              <div className="card-actions w-full">
                <Link className="w-full" to={`/featuredFoods/${food._id}`}>
                  <Button className="w-full mt-2">View Details</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
