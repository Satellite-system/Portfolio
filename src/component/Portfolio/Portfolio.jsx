import React, { useContext } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Portfolio.css'
import sidebar from '../../img/slidebar_P/sidebar.png'
import ecommerce from '../../img/assets/ecommerce.png'
import hoc from '../../img/assets/hoc.png'
import musicapp from '../../img/assets/musicapp.png'
import Notes_slidebar from '../../img/slidebar_P/Sidebar-N.png'
import Amazon_slider from '../../img/slidebar_P/Slidebar-A.png'
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
               <img src={Notes_slidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
               <img src={Amazon_slider} alt="" />
            </SwiperSlide>
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

