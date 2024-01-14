import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8conj5e', 'template_kvs15sd', form.current, 'ukLNwu2ZO49ZNsx7-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5 data-aos="fade-in">Get In Touch</h5>
      <h2 data-aos="fade-in">Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <div className="contact-option"  data-aos="fade-in">
            <AiOutlineMail className='contact-icons'/>
            <h4>Email</h4>
            <h5>rayenbelkhouja22@gmail.com</h5>
            <a href="mailto:rayenbelkhouja22@gmail.com" target='_blank' >Send a message</a>
          </div>          
          <div className="contact-option" data-aos="fade-in">
            <RiMessengerLine className='contact-icons'/>
            <h4>Messenger</h4>
            <h5>Rayen Belkhouja</h5>
            <a href="https://m.me/rayen.belkhouja.56" target='_blank' >Send a message</a>
          </div>
          <div className="contact-option" data-aos="fade-in">
            <BsWhatsapp className='contact-icons'/>
            <h4>WhatsApp</h4>
            <h5>+216 29 511 139</h5>
            <a href="https://api.whatsapp.com/send?phone=+21629511139" target='_blank'>Send a message</a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your full name' required className='contact-input' data-aos="fade-in"/>
            <input type="text" name='email' placeholder='Your Email' required className='contact-input' data-aos="fade-in"/>
            <textarea type="text" name='message' rows='7' placeholder='Your message' required className='contact-input-parasite' data-aos="fade-in"/>
            <button className='btn btn-primary' data-aos="fade-in"> Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact