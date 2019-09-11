import React from 'react';

import '../css/Rating.css';

const Rating = () =>{
    return(
        <div className="rating-container">
            <div className="rating-text">3.9<span className="text-size">/5</span></div>
            <div>Very Good</div>
        </div>
    )
}

export default Rating;