import React from 'react';
import ImageHeader from './ImageHeader';
import Description2 from './Description2';
import Rating from './Rating';

import '../css/Card1.css';

const Card2 =()=>{
    return(
        <div className="card-container">
        <div className="rating-wrapper">
            <Rating/>
        </div>
           <ImageHeader/> 
           <Description2/>
        </div>
    )
}

export default Card2;