import React from 'react'
import { BsCheckLg } from 'react-icons/bs'
import './services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5 className='what-i-offer' data-aos="fade-in" >What I Offer</h5>
      <h2 data-aos="fade-in">Services</h2>

      <div className="container services__container"  data-aos="fade-in">
        <div className='services-content'>
          <div className="services-upper">UI/UX Designer</div>
          <div className="services-lower">
            <div className='services-details'>
              <BsCheckLg className='services-icons'/>
              fsdfsdfsfsdfsdfsdf
            </div>
            <div  className='services-details'>
              <BsCheckLg  className='services-icons'/>
              fsfsdfsdfsfdsf  dsf sf sf sdf sdf dgfsgfqsg
            </div>
            <div className='services-details'>
              <BsCheckLg className='services-icons' />
              gfdhrhatqhgdfgsgd
            </div>
            <div className='services-details'>
              <BsCheckLg className='services-icons' />
              gshshtsehgfdgsfdg
            </div>
          </div>
        </div>
        <div className='services-content'>
          <div className="services-upper">Web Development</div>
          <div className="services-lower">
            <div className='services-details'>
                <BsCheckLg  className='services-icons'/>
                fsdfsdfsfsdfsdfsdf
              </div>
              <div  className='services-details'>
                <BsCheckLg className='services-icons' />
                fsfsdfsdfsdgfsgfqsg
              </div>
              <div className='services-details'>
                <BsCheckLg className='services-icons' />
                gfdhrhatqhgdfgsgd
              </div>
              <div className='services-details'>
                <BsCheckLg className='services-icons' />
                gshshtsehgfdgsfdg
              </div>
            </div>
        </div>
        <div className='services-content'>
          <div className="services-upper">Content Creation</div>
          <div className="services-lower">
          <div className='services-details'>
              <BsCheckLg className='services-icons' />
              fsdfsdfsfsdfsdfsdf
            </div>
            <div  className='services-details'>
              <BsCheckLg className='services-icons' />
              fsfsdfsdfsdgfsgfqsg
            </div>
            <div className='services-details'>
              <BsCheckLg className='services-icons' />
              gfdhrhatqhgdfgsgd
            </div>
            <div className='services-details'>
              <BsCheckLg className='services-icons' />
              gshshtsehgfdgsfdg
            </div></div>  
        </div>
      </div>
    </section>
  )
}

export default Services