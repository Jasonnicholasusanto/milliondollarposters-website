import React from 'react'
import "./FeaturedProducts.scss";
import Card from '../Card/Card.jsx';

const FeaturedProducts = ({type}) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/3952227/pexels-photo-3952227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img2: "https://images.pexels.com/photos/3952231/pexels-photo-3952231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Goodbye Covid-19",
      artist: "Martin Stewart",
      branding: "",
      description: "",
      isNew: true,
      tag: "Buyer's choice",
      oldPrice: 15,
      price: 15,
    },
    {
      id: 2,
      img: "/img/oceanic.png",
      img2: "/img/oceanic-poster.png",
      title: "Oceanic",
      artist: "Jason Nicholas Susanto",
      branding: "MillionDollarPosters",
      description: "",
      isNew: true,
      tag: "New",
      oldPrice: 35.99,
      price: 35.99,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/2591761/pexels-photo-2591761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img2: "https://images.pexels.com/photos/4113688/pexels-photo-4113688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Sunshine Coke",
      artist: "Dallas Finnr",
      branding: "",
      description: "",
      isNew: true,
      tag: "",
      oldPrice: 158,
      price: 70,
    },
    {
      id: 4,
      img: "/img/MillionDollarPosters-art-1-mockup.png",
      img2: "/img/MillionDollarPosters-art-1-poster.png",
      title: "MillionDollarPosters Art no.1",
      artist: "Jason Nicholas Susanto",
      branding: "MillionDollarPosters",
      description: "",
      isNew: true,
      tag: "Featured",
      oldPrice: 37.15,
      price: 37.15,
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