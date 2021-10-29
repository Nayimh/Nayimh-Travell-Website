import React from 'react';
import './AboutUs.css'
import aboutImg from '../../images/about/about.jpg'
const Aboutus = () => {
    return (
        <div id="about" className="aboutus my-5">
            <h1 className="text-black specing">who we are?</h1>
            <div className="about-Container  mx-auto my-5">
                <div className="mb-5">
                    <img src={aboutImg} alt="" />
                </div>
                <div className="aboutUs-text">
                    <h2>A Vacation Like No Other</h2>
                    <p>Every trip is completely customized to your interests. Whether you want to focus on the cultural aspects of Europe, food and cuisine, or stunning scenery, our expert tour planners will strive to create an absolutely amazing experience you will not soon forget!</p> <br />
                    <p>We want your trip to be extra special, so we have arranged exclusive and/or early access to many attractions and events within Europe. Whether it’s a private tour of the Vatican or dinner with a diplomat, rest assured that VIP treatment awaits you!</p> <br />
                    <p>With decades travel experience, our local guides and trip planners hold an unmatched expertise in creating fun and memorable trips that you will remember for a lifetime! And we’ll be ready to assist you at any moment during your stay.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default Aboutus;