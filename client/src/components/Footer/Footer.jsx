import React from 'react';
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Span 1</span>
          <span>Span 2</span>
          <span>Span 3</span>
          <span>Span 4</span>
          <span>Span 5</span>
        </div>
        
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>

        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore. Lorem ipsum dolor sit amet conse ctetur adipiscing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>

        <div className="item">
        <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet conse ctetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore.Lorem ipsum dolor sit amet conse ctetur adipiscing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className="logo">MillionDollarPosters</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>

        <div className="right">
          <img src="/img/payment.png" alt=""></img>
        </div>
      </div>
    </div>
  )
}

export default Footer