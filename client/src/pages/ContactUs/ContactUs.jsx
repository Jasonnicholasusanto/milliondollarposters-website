import React from 'react';
import './ContactUs.scss';

const ContactUs = () => {
  return (
    <div className="contactUs">
        <div className="contact-box">
          <div className="left"></div>
          <div className="right">
            <h2>Contact Us</h2>
            <input type="text" className="field" placeholder="Your Name"/>
            <input type="text" className="field" placeholder="Your Email"/>
            <input type="text" className="field" placeholder="Phone Number"/>
            <textarea placeholder="Message..." className="field"></textarea>
            <button className="btn">Send</button>
          </div>
        </div>
    </div>
  )
}

export default ContactUs;