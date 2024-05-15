
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "@material-tailwind/react";
import Carousel from "react-elastic-carousel";

const Banner = () => {
  return (
    <div className="mt-10 mb-40 mx-5 lg:mx-0 xl:mx-0">

      <Carousel easing="ease" autoPlaySpeed={3000} itemsToShow={1}>

        <div className="relative h-[250px] w-full xl:h-[650px]">
          <img
            className="w-full h-[250px] xl:h-[650px] rounded-lg"
            src="https://img.freepik.com/free-photo/front-view-donation-boxes-bags_23-2148613226.jpg?size=626&ext=jpg"
            alt=""
          />

          <div className="xl:absolute xl:top-[550px] left-1/2 -translate-x-1/2">
            <Button className="">View Details</Button>
          </div>
        </div>

        <div className="relative h-[250px] w-full xl:h-[650px]">
          <img
            className="w-full h-[250px] xl:h-[650px] rounded-lg"
            src="https://img.freepik.com/free-photo/top-view-fresh-canned-food-donation_23-2148733827.jpg?t=st=1715602772~exp=1715606372~hmac=346ec723dc3ba4eacdc729fc61419140103bcf14bae97557183fa217d71beee6&w=1060"
            alt=""
          />

          <div className="xl:absolute xl:top-[550px] left-1/2 -translate-x-1/2">
            <Button className="">View Details</Button>
          </div>
        </div>

        <div className="relative h-[250px] w-full xl:h-[650px]">
          <img
            className="w-full h-[250px] xl:h-[650px] rounded-lg"
            src="https://img.freepik.com/premium-photo/donation-box-with-various-food-pandemic-support_93675-85153.jpg?size=626&ext=jpg"
            alt=""
          />

          <div className="xl:absolute xl:top-[550px] left-1/2 -translate-x-1/2">
            <Button className="">View Details</Button>
          </div>
        </div>

        <div className="relative h-[250px] w-full xl:h-[650px]">
          <img
            className="w-full h-[250px] xl:h-[650px] rounded-lg"
            src="https://img.freepik.com/premium-vector/donation-box-food_165488-2449.jpg?size=626&ext=jpg"
            alt=""
          />

          <div className="xl:absolute xl:top-[550px] left-1/2 -translate-x-1/2">
            <Button className="">View Details</Button>
          </div>
        </div>

        <div className="relative h-[250px] w-full xl:h-[650px]">
          <img
            className="w-full h-[250px] xl:h-[650px] rounded-lg"
            src="https://img.freepik.com/premium-photo/donation-box-victims-clothes-food_136346-1624.jpg?size=626&ext=jpg"
            alt=""
          />

          <div className="xl:absolute xl:top-[550px] left-1/2 -translate-x-1/2">
            <Button className="">View Details</Button>
          </div>
        </div>

        <div className="relative h-[250px] w-full xl:h-[650px]">
          <img
            className="w-full h-[250px] xl:h-[650px] rounded-lg"
            src="https://img.freepik.com/free-photo/person-receiving-box-with-donated-food_23-2148613153.jpg?size=626&ext=jpg"
            alt=""
          />

          <div className="xl:absolute xl:top-[550px] left-1/2 -translate-x-1/2">
            <Button className="">View Details</Button>
          </div>
        </div>

      </Carousel>
    </div>
  );
};

export default Banner;
