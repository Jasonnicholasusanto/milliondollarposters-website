import React from 'react'
import "./List.scss";
import Card from "../Card/Card.jsx";

const List = () => {

    const data = [
        {
          id: 1,
          img: "https://images.pexels.com/photos/3952227/pexels-photo-3952227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          img2: "https://images.pexels.com/photos/3952231/pexels-photo-3952231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          title: "Goodbye Covid-19",
          artist: "MillionDollarPosters",
          isNew: true,
          tag: "Buyer's choice",
          oldPrice: 15,
          price: 15,
        },
        {
          id: 2,
          img: "https://images.pexels.com/photos/937786/pexels-photo-937786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          title: "World Peace Project",
          artist: "Klemen Pinja",
          isNew: true,
          tag: "New Release",
          oldPrice: 39.99,
          price: 29.99,
        },
        {
          id: 3,
          img: "https://images.pexels.com/photos/2591761/pexels-photo-2591761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          img2: "https://images.pexels.com/photos/4113688/pexels-photo-4113688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          title: "Sunshine Coke",
          artist: "Dallas Finnr",
          isNew: true,
          tag: "",
          oldPrice: 158,
          price: 70,
        },
        {
          id: 4,
          img: "https://images.pexels.com/photos/3964485/pexels-photo-3964485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          title: "Big Red M",
          artist: "Liudmila Ollie",
          isNew: true,
          tag: "Featured",
          oldPrice: 37.15,
          price: 37.15,
        },
      ];

    return (
        <div className="list">
            {data?.map(item=>(
                <Card item={item} key={item.id}/>
            ))}
        </div>
    )
}

export default List