import React from 'react'
import "./List.scss";
import Card from "../Card/Card.jsx";
import { testData } from '../../testData/testData';

const List = () => {
    return (
        <div className="list">
            {testData?.map(item=>(
              <Card item={item} key={item.id}/>
            ))}

        </div>
    )
}

export default List