import React from 'react';
import Aboutus from '../aboutUs/Aboutus';
import Contact from '../contact/Contact';
import Packages from '../Packages/Packages';
import Banner from '../Shared/banner/Banner';


const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <Packages></Packages>
            <Aboutus></Aboutus>
            <Contact></Contact>
        </div>
    );
};

export default Home;