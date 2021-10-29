import React from 'react';
import { useHistory, useLocation } from 'react-router';
import initializeAuthentication from '../../Firebase/fireBaseInit.js';
import useAuth from '../../Hooks/useAuth.js';

import './Login.css'

initializeAuthentication();

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location?.state?.from || '/'
    
    const handleGooglesignIn = () => {
        signInUsingGoogle()
            .then(result => {
            history.push(redirect_url)
        })    
        
    }

    

    return (
        <div className="login">
            <div className="log-card">
                <h3 className="tomtato mb-5">SignIn Using Google</h3>
                <button onClick={ handleGooglesignIn}className="card-btn">Google SignIn</button>
            </div>
        </div>
    );
};

export default Login;