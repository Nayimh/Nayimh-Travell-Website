import React from 'react';
import './Package.css'

const Package = (props) => {
    const { name, Price, description, image, duration } = props.package;
    return (
        <div className=" card-container my-5 mx-auto">
         
            <div classNamecol-md-4 col-sm-6 col-xs-12>
            <div className="service-img">
                <img src={image} alt="" />
            </div>
            <div className="card-text">
                    <h5>{name}</h5>
                    <p>{ duration }</p>
                <h6>Package : ${Price}</h6>
                <p>{ description }</p>
                
            </div>
            <button className="card-btn">Book Now</button>
            </div>
        </div>
    );
};

export default Package;