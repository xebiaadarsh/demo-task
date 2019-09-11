import React from 'react';

import '../css/ImageHeader.css'
import RoundedButton from './RoundedButton';
const ImageHeader =(props)=>{
    return(
        <>
            <div className="image-container">
                <div className="overlay"></div>
                <img src="./hansraj.jpg" width="100%" alt="college-image"/>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="button-wrapper1">
                        <RoundedButton name="Best college 2018"/>
                        </div>
                        <div className="button-wrapper2">
                        <RoundedButton name="2kms away"/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="text-college-wrapper">
                            <div className="desc-text">
                                #7 in 260 colleges in north campus
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageHeader;