
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, Pagination } from 'swiper/modules';
import img1 from "../../assets/own/AGM 2023-2.jpg"
import img2 from "../../assets/cheerMoments/b.jpg"
import img3 from "../../assets/own/AGM 2023.jpg"
import img4 from "../../assets/cheerMoments/d.jpg"
import abstr from "../../assets/abstract/bg3.png" 


export default function CarList() {
  return (
    <div className='relative'>
    <img src={abstr} alt='' className="absolute inset-y-0  object-contain md:pb-96 w-full h-full z-0 dark:hidden" />

    <div className='flex flex-col md:flex-row justify-between items-center h-auto pt-3 md:pt-0 pb-8 md:pb-32 overflow-hidden relative z-10'>
      <div className="w-full md:w-1/4 text-left px-5 md:pl-10 italic mb-5 md:mb-0 dark:text-white" data-aos="fade-right">
        <p>&quot;To serve the local community by providing opportunities for all to play and socialise, regardless of age, ability or background&quot;.</p>
      </div>
      <Swiper
  effect={'cube'}
  grabCursor={true}
  cubeEffect={{
    shadow: true,
    slideShadows: false,
    shadowOffset: 20,
    shadowScale: 0.94,
  }}
  pagination={true}
  modules={[EffectCube, Pagination]}
  className="mySwiper w-full md:w-[500px] h-[500px] md:h-[600px]"
  data-aos="fade-up"
  loop={true}
  autoplay
>
  <SwiperSlide>
    <img src={img1} className='object-contain rounded-xl w-full h-full' />
  </SwiperSlide>
  <SwiperSlide>
    <img src={img2} className='object-contain rounded-xl w-full h-full' />
  </SwiperSlide>
  <SwiperSlide>
    <img src={img3} className='object-contain rounded-xl w-full h-full' />
  </SwiperSlide>
  <SwiperSlide>
    <img src={img4} className='object-contain rounded-xl w-full h-full' />
  </SwiperSlide>
</Swiper>

      <div className="w-full pt-10 md:w-1/4 text-right px-5 md:pr-10 italic mt-5 md:mt-0 dark:text-white" data-aos="fade-left">
        <p>&quot;A place where everyone is welcomed, can enjoy being part of the club, and is encouraged to be the best that they can be&quot;.</p>
      </div>
    </div>
  </div>
  

  )
}

