import React from 'react';
import './ComingSoon.scss';
import { Parallax } from 'react-parallax';

const ComingSoon = () => {

  return (
    <div className="comingSoon">

        <div className="container">
            <div className='text' strength={500}>
              <h1>MillionDollarPosters</h1>
              <br/>
              <span className='copyrights'>© Copyright 2023. All Rights Reserved</span>
              <br/>
              <span className='launch'>Launching Soon</span>
            </div>

            <img src="/img/MillionDollarPosters-gradient.png" className="object" alt=""/>
        </div>
    </div>
  )
}

export default ComingSoon