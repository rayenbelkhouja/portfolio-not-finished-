import React from 'react'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

import './portfolio.css'

const portfolioObject = [
  {
    id:1,
    image:IMG1,
    title:'hello app',
    github:'https://github.com',
    demo: 'https://dribbble.Com'
  },
  {
    id:2,
    image:IMG2,
    title:'facebook',
    github:'https://github.com',
    demo:'https://dribbble.Com'
  },
  {
    id:3,
    image:IMG3,
    title:'twitter',
    github:'https://github.com',
    demo:'https://dribbble.Com'
  },
  {
    id:4,
    image:IMG4,
    title:'youtube',
    github:'https://github.com',
    demo:'https://dribbble.Com'
  },
  {
    id:5,
    image:IMG5,
    title:'helloooooo',
    github:'https://github.com',
    demo:'https://dribbble.Com'
  },
  {
    id:6,
    image:IMG6,
    title:'dualingo',
    github:'https://github.com',
    demo:'https://dribbble.Com'
  },
]

const Portfolio = () => {
  return (
    <>
      <section id='portfolio'>
        <h5 data-aos="fade-in">My Recent Work</h5>
        <h2 data-aos="fade-in">Portfolio</h2>

        <div className="container portfolio-container" data-aos="fade-in">
          {
            portfolioObject.map(({id, image, title, github, demo}) => {
              return(
                <div key={id} className='portfolio-item'>
                  <div className="portfolio-item">
                    <img className="portfolio-image" src={image}/>
                    <div className="portfolio-title">{title}</div>
                    <div className="portfolio-buttons">
                      <a href={github} target='_blank' className="btn">Github</a>
                      <a href={demo} className="btn btn-primary">Live Demo</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
    </section>
    </>
    
  )
}

export default Portfolio