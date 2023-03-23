import React from 'react'
import "./FeaturedProducts.scss";
import Card from '../Card/Card.jsx';

const FeaturedProducts = ({type}) => {
  
  const data = [
    {
      id: 1,
      img: "/img/With-great-power-comes-great-responsibility-spiderman-mockup.png",
      img2: "/img/With-great-power-comes-great-responsibility-spiderman-display.png",
      title: "With great power comes great responsibility - Spiderman",
      artist: "Jason Nicholas Susanto",
      branding: "MillionDollarPosters",
      description: "",
      isNew: true,
      tag: "Featured",
      oldPrice: 50,
      price: 35,
      rating: [3, 19, 152, 568, 0],
    },
    {
      id: 2,
      img: "/img/oceanic-poster-display-mockup.png",
      img2: "/img/oceanic-display.png",
      title: "Oceanic",
      artist: "Jason Nicholas Susanto",
      branding: "MillionDollarPosters",
      description: "",
      isNew: true,
      tag: "New",
      oldPrice: 35.99,
      price: 35.99,
      rating: [3, 19, 0, 0, 1],
    },
    {
      id: 3,
      img: "/img/milliondollarposters-waves-1-mockup.png",
      img2: "/img/milliondollarposters-waves-1-display.png",
      title: "Gradient Waves art No.1",
      artist: "Jason Nicholas Susanto",
      branding: "MillionDollarPosters",
      description: "",
      isNew: true,
      tag: "Featured",
      oldPrice: 80,
      price: 40,
      rating: [3, 19, 2, 1, 5],
    },
    {
      id: 4,
      img: "/img/milliondollarposters-art-1-mockup.png",
      img2: "/img/milliondollarposters-art-1-display.png",
      title: "MillionDollarPosters Art no.1",
      artist: "Jason Nicholas Susanto",
      branding: "MillionDollarPosters",
      description: "",
      isNew: true,
      tag: "Featured",
      oldPrice: 37.15,
      price: 37.15,
      rating: [0, 1, 0, 2, 0],
    },
  ];

  return (
    <div className="featuredProducts">
        
        <div className="top">
          <h1>
            {type} 
            Products
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
            lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida. Risus commodo viverra maecenas.            
          </p>
        </div>

        <div className="bottom">
          {data.map(item=>(
            <Card item={item} key={item.id}/>
          ))}
        </div>
    </div>
  )
}

export default FeaturedProducts