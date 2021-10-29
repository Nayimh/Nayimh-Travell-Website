import React, { useEffect, useState } from 'react';
import GuideDetail from '../Home/GuideDetails/GuideDetail';

import './Guide.css'

const Guide = () => {
    const [guides, setGuides] = useState([]);

    useEffect(() => {
        fetch('./guide.json')
            .then(res => res.json())
            .then(data=> setGuides(data))
    } ,[])


    return (
        <div className="guide-container mt-5 text-black">
            <h2>Our Guides</h2>
            <div className="g-color">
            <h4 className="my-2 text-container">Discover your next favorite destination</h4>
            <p>Get inspired from guides around the world — with expert tips and recommendations from the Wanderlog community.</p>
            </div>
            <div className="container">
                <div className="row">
                    {
                        guides.map(guide => <GuideDetail
                            key={guide.key}
                            guide={ guide }

                        >  </GuideDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Guide;