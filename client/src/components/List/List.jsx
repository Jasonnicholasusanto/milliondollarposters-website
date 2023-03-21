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
          title: "Oceanic #1",
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
        },
        {
          id: 5,
          img: "/img/milliondollarposters-oceanic-2-mockup.png",
          img2: "/img/milliondollarposters-oceanic-2-display.png",
          title: "Oceanic #2",
          artist: "Jason Nicholas Susanto",
          branding: "MillionDollarPosters",
          description: "",
          isNew: true,
          tag: "Featured",
          oldPrice: 35.99,
          price: 35.99,
        },
        {
          id: 6,
          img: "/img/milliondollarposters-oceanic-2-mockup.png",
          img2: "/img/milliondollarposters-oceanic-2-display.png",
          title: "Oceanic #3",
          artist: "Jason Nicholas Susanto",
          branding: "MillionDollarPosters",
          description: "",
          isNew: true,
          tag: "Featured",
          oldPrice: 35.99,
          price: 35.99,
        },
        {
          id: 7,
          img: "/img/milliondollarposters-oceanic-2-mockup.png",
          img2: "/img/milliondollarposters-oceanic-2-display.png",
          title: "Oceanic #4",
          artist: "Jason Nicholas Susanto",
          branding: "MillionDollarPosters",
          description: "",
          isNew: true,
          tag: "Featured",
          oldPrice: 35.99,
          price: 35.99,
        },
        {
          id: 8,
          img: "/img/milliondollarposters-art-1-mockup.png",
          img2: "/img/milliondollarposters-art-1-display.png",
          title: "MillionDollarPosters Art no.1",
          artist: "Jason Nicholas Susanto",
          branding: "MillionDollarPosters",
          description: "",
          isNew: true,
          tag: "Featured",
          oldPrice: 80,
          price: 45,
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