
import { Button, Input } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GrPowerReset } from "react-icons/gr";

const AvailableFoods = () => {
  
  const [availableFoods , setAvailableFoods] = useState([]) ;
  const [sort , setSort] = useState('') ;
  const [search , setSearch] = useState('') ;
  
  useEffect(() => {
    axios.get(`http://localhost:5555/availbleFoods?sort=${sort}&search=${search}`)
    .then(res => {
      setAvailableFoods(res.data)
    })
  } , [sort , search])

  const handleSearch = (e) => {
    e.preventDefault() ;
    setSearch(e.target.search.value) ;
  }

  return (
    <div className="w-full min-h-screen flex-col flex items-center justify-center mb-10">
      
      <div className="grid grid-cols-3 gap-5 h-6">

        <div className="bg-[#232323] mt-1 px-5 py-2 flex items-center justify-center rounded-md cursor-pointer text-white">
          <select onChange={(e) => setSort(e.target.value)} className="bg-[#232323] rounded-md cursor-pointer text-white" name="sort" id="">
            <option value="">Sort By Expire Date</option>
            <option value="asc">Ascending Order</option>
            <option value="dsc">Descending Order</option>
          </select>
        </div>

        <div className="">
          <form className="mt-1" onSubmit={handleSearch}>
            <div className="relative flex w-full max-w-[24rem]">
              <Input
                name="search"
                type="text"
                label="Search Here"
                className="pr-20"
                containerProps={{
                  className: "min-w-0",
                }}
              />
              <input type="submit" value={'Search'} className="!absolute cursor-pointer right-1 top-1 rounded bg-[#232323] text-white px-2 py-1 gro"/>
            </div>
          </form>
        </div>

        <div className="mt-1">
          <Button onClick={() => (setSort('') , setSearch(''))} className="flex items-center gap-3 py-3">Reset <GrPowerReset className="text-lg"/></Button>
        </div>

      </div>

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
                <div className="badge badge-outline px-2">
                  <p className="gro font-semibold">
                    Quantity : {food.foodQuantity}
                  </p>
                </div>

                <div className="badge badge-outline px-5">
                  <p className="gro font-semibold">
                    Expired : {food.expiredDateTime}
                  </p>
                </div>
              </div>

              <div className="badge badge-outline w-full text-center">
                <p className="gro font-semibold">
                  Location : {food.pickupLocation}
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
