import React from 'react';
import '../css/RoundedButton.css'

const RoundedButton = (props) =>{
    return(
        <div className="rounded-button">
            <div className="button-title">{props.name}</div>
        </div>
    )
}

export default RoundedButton;