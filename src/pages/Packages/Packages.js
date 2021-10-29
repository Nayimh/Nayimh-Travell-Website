import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
import './Packages.css'

const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('./Services.json')
            .then(res => res.json())
            .then(data => setPackages(data))
    } , [])

    return (
        <div id="package" className=" container serves-Container">
            <div className="text-black text-container mb-5">
            <h1>Take only memories, leave only footprints</h1>
                <h4>Travel is  fatal to prejudice, bigotry, and narrow mindedness, and many of our people need it sorely on these accounts. The real voyage of discovery consists not in seeking new landscapes, but in having new eyes</h4>
                
            </div>
            <div className="row  my-5 parent-card ">
            {
                packages.map(service => <Package
                    key={service?.key}
                    package={service}
                ></Package>)
            }
            </div>
        </div>
    );
};

export default Packages;