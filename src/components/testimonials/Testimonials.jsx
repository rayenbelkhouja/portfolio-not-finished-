import React from 'react'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'
import './testimonials.css'

import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const avatarData = [
  {
    id:1,
    image:AVATAR1,
    name:'salma',
    review:'dsfqd sd sf sfjdlih  hi hliqfh s dsliqfhdsl hsd fhsdliqfh slf silh filsdhf lsqh lqlsidhf lqssqfli sflis flisd qlfi slif sdlifhsli qhfslid hfisl sli fsl s'
  },
  {
    id:2,
    image:AVATAR2,
    name:'hosusem',
    review:'dsfqd sd sf sfjdlih  hi hliqfh s dsliqfhdsl hsd fhsdliqfh slf silh filsdhf lsqh lqlsidhf lqssqfli sflis flisd qlfi slif sdlifhs'
  },
  {
    id:3,
    image:AVATAR3,
    name:'hihihihi',
    review:'dsfqd sd sf sfjdlih  hi hliqfh s dsliqfhdsl hsd fhsdliqfh slf silh filsdhf lsqh lqlsidhf lqssqfli sflis flisd'
  },
  {
    id:4,
    image:AVATAR4,
    name:'fdsfsd',
    review:'dsfqd sd sf sfjdlih  hi hliqfh s dsliqfhdsl hsd fhsdliqfh slf silh filsdhf lsqh lqlsidhf lqssqfli sflis flisd qlfi slif sdlifhsli qhfslid hfisl sli fsl s'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5  data-aos="fade-in">Clients Review</h5>
      <h2 data-aos="fade-in">Testimonials</h2>

      <Swiper  
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      
      className="container testi-container" data-aos="fade-in">
      {
        avatarData.map(({id, image, name, review}) => {
          return(
            
              <SwiperSlide key={id} className="testi-item">
                <div className='avatar-image-container'>
                  <img src={image} alt="" className="avatar-image" />
                </div>
                <div className="avatar-name">{name}</div>
                <div className="avatar-review">{review}</div>
              </SwiperSlide>
              
            
          )
         
        })
      }
      </Swiper>

      
    </section>
  )
}

export default Testimonials