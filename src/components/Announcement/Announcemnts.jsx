
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "./Announcement.css"; 
import bg from "../../assets/bg-about.png"

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function Announcemnts() {
  const [announcemnet,setAnnouncemnet]=useState([])

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await axios.get('https://admin.tauntonindiancricketclub.com/api/event'); 
        if(response.data){
          setAnnouncemnet(response.data.event)
        }
        console.log('Fetched images:', response.data.event);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }
  
    fetchImages();
  }, []);
  return (
    <div className='flex flex-col mb-16' style={{ backgroundImage: `url(${bg})` }} data-aos="fade-down">
    <div>
      <h1 className="my-8 border-l-8 border-primary/50 py-2 ml-5 sm:ml-16 text-3xl font-semibold font-serif">
        Hot Events
      </h1>
    </div>
    <div>
    <Swiper
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={'auto'}
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }}
  pagination={true}
  modules={[EffectCoverflow, Pagination]}
  className="mySwiper"
>
  {announcemnet.map((announcement, index) => (
    <SwiperSlide key={index} className="mb-28">
      <img src={`https://admin.tauntonindiancricketclub.com/uploads/forms/${announcement.file}`} className="w-full h-[400px]" />
    </SwiperSlide>
  ))}
</Swiper>

    </div>
  </div>
  
  
  )
}

