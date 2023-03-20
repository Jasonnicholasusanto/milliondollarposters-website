import React from 'react'
import "./List.scss";
import Card from "../Card/Card.jsx";

const List = () => {

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
        },
        {
          id: 3,
          img: "/img/With-great-power-comes-great-responsibility-spiderman-mockup.png",
          img2: "/img/With-great-power-comes-great-responsibility-spiderman-display.png",
          title: "With great power comes great responsibility - Spiderman",
          artist: "Jason Nicholas Susanto",
          branding: "MillionDollarPosters",
          description: "",
          isNew: true,
          tag: "Featured",
          oldPrice: 80,
          price: 40,
        },
        {
          id: 4,
          img: "/img/milliondollarposters-art-1-mockup.png",
          img2: "/img/milliondollarposters-art-1-display.png",
          title: "MillionDollarPosters Art no.1",
          artist: "Jason Nicholas Susanto",
          branding: "",
          description: "",
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