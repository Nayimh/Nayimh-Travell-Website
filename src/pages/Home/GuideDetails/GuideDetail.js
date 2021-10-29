import React from 'react';

const GuideDetail = (props) => {
    const { name, age, expert, Experience, image } = props.guide;
    return (
        <div className="card-container mx-auto col-md-4">
            <div className="service-img">
                <img src={ image } alt="" />
            </div>
            <div>
                <h4>Name: {name}</h4>
                <h5>{expert}</h5>
                <p>Age : {age}</p>
                <p> Experience: { Experience }</p>
            </div>
            <button className="card-btn">Contact</button>
        </div>
    );
};

export default GuideDetail;