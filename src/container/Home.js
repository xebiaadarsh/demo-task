import React from 'react';
import './Home.css';
import '../css/style.css';
import Card1 from '../components/Card1';
import Card2 from '../components/Card2';

const Home = () =>{
    return (
        <div className="container-fluid main-container">
            <div className="main-title">Colleges in North India</div>
            <div className="row">
                <div className="col-sm-6">
                    <Card1/>
                </div>
                <div className="col-sm-6 padding-left-10">
                    <Card2/>
                </div>
            </div>
        </div>
    )
}

export default Home;