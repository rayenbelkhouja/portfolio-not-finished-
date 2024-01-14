import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h5  data-aos="fade-in">What Skills I Have</h5>
      <h2 data-aos="fade-in">My experience</h2>

      <div className='container experience__container'>
        <div className="experience__frontend" data-aos="fade-in">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiFillCheckCircle className='experience-icons' />
              <div>
              <h4>HTML</h4>
              <small>Proficient</small>
              </div>
              
            </article>
            <article className='experience__details'>
            <AiFillCheckCircle className='experience-icons'/>

              <div> 
                 <h4>CSS</h4>
              <small>Competent</small>
              </div>
            
            </article><article className='experience__details'>
              <AiFillCheckCircle className='experience-icons' />
              <div>
                <h4>JavaScript</h4>
                <small>Advanced</small>
              </div>
            </article><article className='experience__details'>
              <AiFillCheckCircle className='experience-icons' />
              <div>
              <h4>React</h4>
              <small>Advanced</small>
              </div>
            
            </article><article className='experience__details'>
              <AiFillCheckCircle className='experience-icons' />
              <div>
              <h4>TailWind CSS</h4>
              <small>Advanced</small>
              </div>
            
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience