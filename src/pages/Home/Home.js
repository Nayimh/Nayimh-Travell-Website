import React from 'react';
import Aboutus from '../aboutUs/Aboutus';
import Contact from '../contact/Contact';
import Packages from '../Packages/Packages';
import Banner from '../Shared/banner/Banner';
import Header from '../Shared/Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Packages></Packages>
            <Aboutus></Aboutus>
            <Contact></Contact>
        </div>
    );
};

export default Home;