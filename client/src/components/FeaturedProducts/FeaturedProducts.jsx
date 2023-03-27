import React from 'react'
import "./FeaturedProducts.scss";
import Card from '../Card/Card.jsx';
import { testFeaturedProducts } from '../../testData/testFeaturedProducts';

const FeaturedProducts = ({type}) => {

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
          {testFeaturedProducts.map(item=>(
            <Card item={item} key={item.id}/>
          ))}
        </div>
    </div>
  )
}

export default FeaturedProducts