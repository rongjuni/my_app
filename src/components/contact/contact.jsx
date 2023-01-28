import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useRef } from "react"
import emailjs from '@emailjs/browser';


const Contact = () => {
  
  const formRef = useRef()

  const handleSubmit = (e) => { 
    e.preventDefault();

     emailjs.sendForm('service_bijbovc', 'template_o5c37cr', formRef.current, '9ZCXdgZk3MtfpR0Ka')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className='c'>
        <div className='c-bg'></div>
      <div className='c-wrapper'>
        <div className='c-left'>
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />5713458838
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />matt.djseo@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />colton
            </div>
        </div>
        </div>
        <div className='c-right'>
          <p className='c-desc'>
            <b>What's your story?</b> Get in touch. always welcome to hear about something from you.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" required placeholder='Name' name='user_name' />
            <input type="text" required placeholder='Subject' name='user_subject' />
            <input type="text" required placeholder='Email' name='user_email' />
            <textarea rows='5' required placeholder="Message" name='message' />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}


export default Contact;