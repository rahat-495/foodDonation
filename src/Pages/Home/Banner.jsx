
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { Button } from '@material-tailwind/react';

const Banner = () => {
  return (
    <div className='mt-10 mb-20'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide className='relative'>

            <img className='w-full absolute h-[650px] rounded-lg ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MGbb-1zJYjYtWROE-2cM3E5FazkHAKV1cn_iltcHfw&s" alt="" />

            <div className="absolute top-[325px] left-1/2 -translate-x-1/2">
                <Button className=''>View Details</Button>
            </div>

        </SwiperSlide>
        <SwiperSlide><img className='w-full h-[650px] rounded-lg ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MGbb-1zJYjYtWROE-2cM3E5FazkHAKV1cn_iltcHfw&s" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[650px] rounded-lg ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MGbb-1zJYjYtWROE-2cM3E5FazkHAKV1cn_iltcHfw&s" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[650px] rounded-lg ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MGbb-1zJYjYtWROE-2cM3E5FazkHAKV1cn_iltcHfw&s" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[650px] rounded-lg ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MGbb-1zJYjYtWROE-2cM3E5FazkHAKV1cn_iltcHfw&s" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[650px] rounded-lg ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MGbb-1zJYjYtWROE-2cM3E5FazkHAKV1cn_iltcHfw&s" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[650px] rounded-lg ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MGbb-1zJYjYtWROE-2cM3E5FazkHAKV1cn_iltcHfw&s" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[650px] rounded-lg ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MGbb-1zJYjYtWROE-2cM3E5FazkHAKV1cn_iltcHfw&s" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-[650px] rounded-lg ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MGbb-1zJYjYtWROE-2cM3E5FazkHAKV1cn_iltcHfw&s" alt="" /></SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;
