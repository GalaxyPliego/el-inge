import './bannerCarousel.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Image} from "@nextui-org/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Image1 from '@images/banner/descuentoNavidad.jpg'
import Image2 from '@images/banner/descuentoNavidad2.jpg'
import Image3 from '@images/banner/descuentoNavidad3.jpg'
import Image4 from '@images/banner/ciberMonday.png'

export default function App() {
    return (
        <>
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper max-h-96 swiper mb-10"
            >
                <SwiperSlide className='swiper-slide '>
                    <img src={Image1} alt="" className=' img__banner'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Image2} alt="" className=' img__banner'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Image3} alt="" className=' img__banner'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Image4} alt="" className=' img__banner'/>
                </SwiperSlide>
            </Swiper>
        </>
    );
}