import React from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import profilePic1 from '../../img/assets/profile1.jpg';
import profilePic2 from '../../img/assets/profile2.jpg';
import profilePic3 from '../../img/assets/profile3.jpg';
import profilePic4 from '../../img/assets/profile4.jpg';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css/pagination'
import 'swiper/css'

function Testimonial() {
   const clients = [
      {
         img: profilePic1,
         review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vero provident sapiente itaque quas voluptates dolorem consequatur error sequi accusamus mollitia rem, rerum quam."
      },
      {
         img: profilePic2,
         review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vero provident sapiente itaque quas voluptates dolorem consequatur error sequi accusamus mollitia rem, rerum quam."
      },
      {
         img: profilePic3,
         review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vero provident sapiente itaque quas voluptates dolorem consequatur error sequi accusamus mollitia rem, rerum quam."
      },
      {
         img: profilePic4,
         review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vero provident sapiente itaque quas voluptates dolorem consequatur error sequi accusamus mollitia rem, rerum quam."
      },
   ]
  return (
    <div className="t-wrapper" id='Testimonial'>
      <div className="t-heading">
         <span>Clients always get </span>
         <span>Exceptional Work </span>
         <span>from me...</span>
         <div className="blur t-blur1"></div>
         <div className="blur t-blur2"></div>
      </div>

      <Swiper modules={[Pagination, Autoplay]}
      slidesPerView={1} pagination={{clickable:true}} autoplay={{
         delay: 3000,
         disableOnInteraction: false,
       }}>
         {clients.map((client, index)=>{
            return(
               <SwiperSlide key={index}>
                  <div className="testimonial">
                     <img src={client.img} alt="" />
                     <span>{client.review}</span>
                  </div>
               </SwiperSlide>
            )
         })}
      </Swiper>
    </div>
  )
}

export default Testimonial