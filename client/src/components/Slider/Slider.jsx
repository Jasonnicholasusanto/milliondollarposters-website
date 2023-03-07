import React, { useState } from 'react'
import "./Slider.scss";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Slider = () => {

    // currentSlide is initially set to index 0; the first image.
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinyrgb&w=1600",
        "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];

    const prevSlide = () => {
        // If the current slide is the first image, then going back is to the last image.
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    };

  return (
    <div className="slider">
        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt=""/>
            <img src={data[1]} alt=""/>
            <img src={data[2]} alt=""/>
        </div>

        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <ArrowBackIosIcon/>
            </div>

            <div className="icon" onClick={nextSlide}>
                <ArrowForwardIosIcon/>
            </div>
        </div>
    </div>
  )
}

export default Slider