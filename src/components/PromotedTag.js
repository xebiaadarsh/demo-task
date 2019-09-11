import React from 'react';
import '../css/PromotedTag.css'

const PromotedTag = () =>{
    return (
        <div className="promote-wrapper">
            <div className="triangle-right"></div>
            <div className="extra-div"></div>
            <span className="rectangle"><span className="promoted-text">PROMOTED</span></span>
        </div>
    )
}

export default PromotedTag;