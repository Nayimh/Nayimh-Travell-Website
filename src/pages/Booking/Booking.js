import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
// import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Booking.css'
const Booking = () => {
    const { bookingId } = useParams();

    const { user } = useAuth();

    const [details, setDetails] = useState([]);
    const [detail, setDetail] = useState({});

    useEffect(() => {
        fetch('https://damp-plains-34194.herokuapp.com/package')
            .then(res => res.json())
            .then(data => {
                
                setDetails(data)
            })
    }, [])
    
   
   
    useEffect(() => {
        const foundDetails = details.find(detail => detail._id === bookingId)
        setDetail(foundDetails)
    }, [bookingId, details])
    
// form functionality
const handleOrderSubmit = (e) => {
    e.preventDefault();
    const email = user.email;
    const tourId = bookingId;
    const name = detail.name;
    const img = detail.image;
    const desc = detail.description;
    const price = detail.Price;
    const ordersInfo = { email, tourId, name, desc, img, price };
    fetch("https://damp-plains-34194.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ordersInfo),
    });
    alert("Order has beed placed");
    e.target.reset();
  };




  

    return (
        <div className="bookingContainer my-5 py-5">
        
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
                   {/* <Link to="/home#home"> <button className="card-btn">Go Back</button></Link> */}
                
            </div>

            {/* form */}

            <div>
          <form onSubmit={handleOrderSubmit}>
            <input
              type="text"
              className="w-75 my-2 p-1"
              name=""
              id=""
              value={user.displayName || ""}
            />
            <input
              type="email"
              className="w-75 my-2 p-1"
              name=""
              id=""
              value={user.email || ""}
            />
            <textarea
              name=""
              placeholder="Address"
              id=""
              className="w-75"
              required
            ></textarea>
            <input
              type="text"
              className="w-75 my-2 p-1"
              name=""
              id=""
              required
              placeholder="City, Country"
            />
            <input className="w-75 bg-danger" type="submit" value="Place Order" />
          </form>
        </div>
            
        </div>
    );
};

export default Booking;