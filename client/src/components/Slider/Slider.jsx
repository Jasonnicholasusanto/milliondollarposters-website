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
        "https://images.pexels.com/photos/1707640/pexels-photo-1707640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/889839/pexels-photo-889839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/6152258/pexels-photo-6152258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/6198660/pexels-photo-6198660.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/2228549/pexels-photo-2228549.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ];

    const numSlides = data.length;

    const prevSlide = () => {
        // If the current slide is the first image, then going back is to the last image.
        setCurrentSlide(currentSlide === 0 ? numSlides-1 : (prev) => prev - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === numSlides-1 ? 0 : (prev) => prev + 1);
    };

  return (
    <div className="slider">
        <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt=""/>
            <img src={data[1]} alt=""/>
            <img src={data[2]} alt=""/>
            <img src={data[3]} alt=""/>
            <img src={data[4]} alt=""/>
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