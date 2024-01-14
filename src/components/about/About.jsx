import React from 'react'
import ME from '../../assets/rayen2-removebg-preview.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { RiProjectorFill } from 'react-icons/ri'
import './about.css'


const about = () => {
  return (
    <section id='about'>
      <h5 className='get-to-know'   data-aos="fade-in">Get To Know</h5>
      <h2 className='about-me-upper' data-aos="fade-in">About Me</h2>

      <div className="container about__countainer">
        <div className="about__me" data-aos="fade-in">
          <div>
            <img  className="about__me-image" src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
        <p  data-aos="fade-in">My name is Rayen Belkhouja, i'm 20 years, i consider myself a front-end developer, and im still learning, i like painting and talking to people, always thankful for what i have and what what i have done. I always try to do smth new, gaming, billboard, anime, tv series, all kind of music... i'm trying to be the best at everything i do.</p>


          <div className="about__cards"  data-aos="fade-in">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>for now 0</small>
            </article>
            <article className='about__card'>
              <RiProjectorFill className='about__icon' />
              <h5>projects</h5>
              <small>still working on them</small>
            </article>
          </div>


          <a href="#contact" className='btn btn-primary'  data-aos="fade-in"> Let's Talk </a>
        </div>
      </div>
    </section>
  )
}

export default about