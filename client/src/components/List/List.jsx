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
          rating: [2, 8, 10, 5, 29],
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
          rating: [0, 0, 1, 5, 9],
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
          rating: [0, 4, 0, 9, 39],
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
          rating: [1, 0, 12, 0, 35],
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
          rating: [0, 4, 10, 5, 3],
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
          rating: [0, 8, 9, 9, 51],
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
          rating: [0, 8, 9, 19, 4],
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
          rating: [3, 19, 152, 568, 999],
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