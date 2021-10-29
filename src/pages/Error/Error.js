import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css'

const Error = () => {
    return (
        <div className="err">
            <h1 className="tomtato bg-warning p-5">404 Page Not Found</h1>
            <Link to='/home'><button className="card-btn">Go To home</button></Link>
        </div>
    );
};

export default Error;