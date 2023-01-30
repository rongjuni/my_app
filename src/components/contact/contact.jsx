import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Contact = () => {
  
  const formRef = useRef();

  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;


  const handleSubmit = (e) => { 
    e.preventDefault();

     emailjs.sendForm('service_bijbovc', 'template_o5c37cr', formRef.current, '9ZCXdgZk3MtfpR0Ka')
      .then((result) => {
        console.log(result.text);
        setDone(true);
      }, (error) => {
        console.log(error.text);
        alert("Submit failed. please contact admin")
        
      });
  }

  return (
    <div className='c'>
        <div className='c-bg'></div>
      <div className='c-wrapper'>
        <div className='c-left'>
          <h1 className="c-title">Let's discuss further more</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />571.345.8838
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />matt.djseo@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />Fairfax, VA
            </div>
        </div>
        </div>
        <div className='c-right'>
          <p className='c-desc'>
            <b>What's your story?</b> Get in touch. always welcome to hear about something from you.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor : darkMode && "#333"}} type="text" required placeholder='Name' name='user_name' />
            <input style={{backgroundColor : darkMode && "#333"}} type="text" required placeholder='Subject' name='user_subject' />
            <input style={{backgroundColor : darkMode && "#333"}} type="text" required placeholder='Email' name='user_email' />
            <textarea rows='5' style={{backgroundColor : darkMode && "#333"}} required placeholder="Message" name='message' />
            <button>Submit</button>
            {done && " Submitted. Thank you"}
          </form>
        </div>
      </div>
    </div>
  )
}


export default Contact;