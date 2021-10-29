import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Booking.css'
const Booking = () => {
    const { bookingId } = useParams();
    const [details, setDetails] = useState([]);
    const [detail, setDetail] = useState({});

    useEffect(() => {
        fetch('/Services.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    
    
    // useEffect(() => {
    //     const foundDetails = details.find(detail => detail.id=== parseInt(bookingId))
    //     setDetail(foundDetails)
    // }, [details]);

    useEffect(() => {
        const foundDetails = details.find(detail => detail.key === parseInt(bookingId))
        setDetail(foundDetails)
    } , [bookingId, details])
  

    return (
        <div className="bookingContainer mt-5 pt-5">
        
            <h3 className="spacing">Package Id: {bookingId} </h3>
            <div className="detailCards my-5 ">
                
                    <div className="details-img">
                    <img className="image" src={detail?.image} alt="" />
                    </div>
                <div className="details-text">
                    <h4>Name: {detail?.name}</h4>
                    <h5>Duration: { detail?.duration }</h5>
                    <p>Package: ${detail?.Price}</p>
                    <p>{detail?.description}</p>
                    </div>
                   <Link to="/home#services"> <button className="card-btn">Go Back</button></Link>
                
            </div>
            
        </div>
    );
};

export default Booking;