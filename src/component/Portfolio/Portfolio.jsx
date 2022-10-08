import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Portfolio.css'
import sidebar from '../../img/sidebar.png'
import ecommerce from '../../img/ecommerce.png'
import hoc from '../../img/hoc.png'
import musicapp from '../../img/musicapp.png'
import 'swiper/css'
import { themeContext } from '../../Context'

export default function Portfolio() {
   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;
   const {innerWidth, innerHeight} = window;

  return (
    <div className="porfolio" id='Portfolio'>
         {/* Heading */}
         <span style={darkMode?{color:"#ffffff"}:{}}>Recent Projects</span>
         <span>Portfolio</span>

         {/* Slider */}
         <Swiper className='porfolio-slider' spaceBetween={{innerWidth}>480?30:100}  slidesPerView={innerWidth>480?3:1} grabCursor={true} loop={true} >
            <SwiperSlide>
               <img src={sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
               <img src={ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
               <img src={musicapp} alt="" />
            </SwiperSlide>
            <SwiperSlide>
               <img src={hoc} alt="" />
            </SwiperSlide>
         </Swiper>
         
    </div>
  )
}

