import React from 'react';
import ImageHeader from './ImageHeader';
import Description from './Description';
import Rating from './Rating';
import PromotedTag from './PromotedTag';

import '../css/Card1.css';

class Card1 extends React.Component{
   
    render(){
    return(
        <div className="card-container">
            <PromotedTag/>
            <div className="rating-wrapper">
            <Rating/>
            </div>
           <ImageHeader/> 
           <Description />
        </div>
    )
    }
}

export default Card1;