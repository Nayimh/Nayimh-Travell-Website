import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
import './Packages.css'

const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('https://damp-plains-34194.herokuapp.com/package')
            .then(res => res.json())
            .then(data => setPackages(data))
    } , [])

    return (
        <div id="package" className=" container serves-Container">
            <div className=" text-container mb-5 background">
            <h1>The easiest way to plan your trip</h1>
                <h4>Build, organize, and map your itineraries in a free travel app designed for vacations & road trips. <br /> <br />
                     The real voyage of discovery consists not in seeking new landscapes, but in having new eyes</h4>
                
            </div>
            <h1 className="text-black specing" >Our Packages</h1>
            <div className=" container row  my-2 parent-card ">
            {
                packages.map(service => <Package
                    key={service?._id}
                    package={service}
                ></Package>)
            }
            </div>
        </div>
    );
};

export default Packages;