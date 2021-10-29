import React from 'react';
import { useParams } from 'react-router';
import './Booking.css'
const Booking = () => {
    const { bookingId } = useParams();
    return (
        <div className="bookingContainer">
          <h3>This is booking page {bookingId} </h3>
        </div>
    );
};

export default Booking;