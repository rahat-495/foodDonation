
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Button } from '@material-tailwind/react';

const Banner = () => {
  return (
    <div className='mt-10 mb-40 mx-5 lg:mx-0 xl:mx-0'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation , Autoplay]}
        className="mySwiper"
      >

        <SwiperSlide className='relative h-[650px]'>

            <img className='w-full absolute h-[650px] rounded-lg ' src="https://img.freepik.com/free-photo/top-view-fresh-canned-food-donation_23-2148733827.jpg?t=st=1715602772~exp=1715606372~hmac=346ec723dc3ba4eacdc729fc61419140103bcf14bae97557183fa217d71beee6&w=1060" alt="" />

            <div className="absolute top-[450px] left-1/2 -translate-x-1/2">
                <Button className=''>View Details</Button>
            </div>

        </SwiperSlide>

        <SwiperSlide className='relative'>

            <img className='w-full absolute h-[650px] rounded-lg ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MGbb-1zJYjYtWROE-2cM3E5FazkHAKV1cn_iltcHfw&s" alt="" />

            <div className="absolute top-[325px] left-1/2 -translate-x-1/2">
                <Button className=''>View Details</Button>
            </div>

        </SwiperSlide>

        <SwiperSlide className='relative'>

            <img className='w-full absolute h-[650px] rounded-lg ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MGbb-1zJYjYtWROE-2cM3E5FazkHAKV1cn_iltcHfw&s" alt="" />

            <div className="absolute top-[325px] left-1/2 -translate-x-1/2">
                <Button className=''>View Details</Button>
            </div>

        </SwiperSlide>

        <SwiperSlide className='relative'>

            <img className='w-full absolute h-[650px] rounded-lg ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MGbb-1zJYjYtWROE-2cM3E5FazkHAKV1cn_iltcHfw&s" alt="" />

            <div className="absolute top-[325px] left-1/2 -translate-x-1/2">
                <Button className=''>View Details</Button>
            </div>

        </SwiperSlide>

        <SwiperSlide className='relative'>

            <img className='w-full absolute h-[650px] rounded-lg ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MGbb-1zJYjYtWROE-2cM3E5FazkHAKV1cn_iltcHfw&s" alt="" />

            <div className="absolute top-[325px] left-1/2 -translate-x-1/2">
                <Button className=''>View Details</Button>
            </div>

        </SwiperSlide>

        <SwiperSlide className='relative'>

            <img className='w-full absolute h-[650px] rounded-lg ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MGbb-1zJYjYtWROE-2cM3E5FazkHAKV1cn_iltcHfw&s" alt="" />

            <div className="absolute top-[325px] left-1/2 -translate-x-1/2">
                <Button className=''>View Details</Button>
            </div>

        </SwiperSlide>
        
        <SwiperSlide><img className='w-full h-[650px] rounded-lg ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MGbb-1zJYjYtWROE-2cM3E5FazkHAKV1cn_iltcHfw&s" alt="" /></SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;
