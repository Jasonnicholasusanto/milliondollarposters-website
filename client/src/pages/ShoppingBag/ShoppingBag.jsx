import { React, useState } from 'react';
import './ShoppingBag.scss';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutline";
import Contact from '../../components/Contact/Contact.jsx';
import { Link } from 'react-router-dom';

const ShoppingBag = () => {

  const [quantity, setQuantity] = useState(1);

  const deleteItem = () => {

  }

  const calculateTotal = () => {
    var total = 0;

    for(var i=0; i< cartData.length; i++){
        total += (cartData[i].price * cartData[i].quantity);
    }

    return total;
}

  const cartData = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/3952227/pexels-photo-3952227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        img2: "https://images.pexels.com/photos/3952231/pexels-photo-3952231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Goodbye Covid-19",
        artist: "Martin Stewart",
        branding: "MartinStewart5",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus similique, consequuntur officia accusantium excepturi laborum omnis mollitia tenetur error, quam aperiam harum, atque corporis laudantium velit numquam tempora sequi saepe!",
        isNew: true,
        tag: "Buyer's choice",
        oldPrice: 15,
        price: 15,
        quantity: 2,
        size: '11"x14"',
    },
    {
        id: 2,
        img: "/img/oceanic-poster-display-mockup.png",
        img2: "/img/oceanic-display.png",
        title: "Oceanic",
        artist: "Jason Nicholas Susanto",
        branding: "MillionDollarPosters",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus similique, consequuntur officia accusantium excepturi laborum omnis mollitia tenetur error, quam aperiam harum, atque corporis laudantium velit numquam tempora sequi saepe!",
        isNew: true,
        tag: "New",
        oldPrice: 35.99,
        price: 35.99,
        quantity: 2,
        size: '11"x14"',
    },
    {
        id: 3,
        img: "/img/MillionDollarPosters-art-1-mockup.png",
        img2: "/img/MillionDollarPosters-art-no1-display.png",
        title: "MillionDollarPosters Art no.1 zzzzzzzzzzzzzzzzzzhsdfgsgfisciwrciwibvisduvhsihrvubvsbdfvbsiruhirsubvzzzzzzzzzzzzzzzzz",
        artist: "Jason Nicholas Susanto",
        branding: "MillionDollarPosters",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus similique, consequuntur officia accusantium excepturi laborum omnis mollitia tenetur error, quam aperiam harum, atque corporis laudantium velit numquam tempora sequi saepe!",
        isNew: true,
        tag: "Featured",
        oldPrice: 37.15,
        price: 37.15,
        quantity: 1,
        size: 'A3 (29.7x42cm)',
    },
]

  return (
    <div className="shoppingBag">
      <div className="container">
        <h1 className='header'>My Shopping Bag</h1>

        <hr/>

        <div className="items">
          {cartData?.map(item=>(
              <div className="item" key={item.id}>

                <Link className="itemLink" to="/product/1">
                  <img src={item.img} alt =""/>
                
                  <div className="details">
                      {/* <h1>{item.title.substring(0,21)}</h1> */}

                      { (item.title.length) > 50 ? <h1>{item.title.substring(0,47)}...</h1> : <h1>{item.title.substring(0,50)}</h1>}

                      <p className="branding">
                          By: {item.branding}
                      </p>
                      
                      <p className="price">
                          Total price: ${(item.price * item.quantity).toFixed(2)}
                      </p>

                      {/* <p className="quantity">
                          Quantity: {item.quantity}
                      </p> */}

                      <p className='size'>
                          Size: {item.size}
                      </p>
                  </div>
                </Link>

                <div className="quantity">
                  <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev-1)}>-</button>
                  <p>
                    {item.quantity}
                  </p>
                  <button onClick={() => setQuantity(prev => prev+1)}>+</button>
                </div>

                <DeleteOutlinedIcon className='delete' onClick={deleteItem}/>
          </div>
          ))}
        </div>

        <hr/>

        <div className="total">
          <span>Subtotal</span>
          <span>${calculateTotal().toFixed(2)}</span>
        </div>
      </div>

        <Contact />

    </div>
  )
}

export default ShoppingBag