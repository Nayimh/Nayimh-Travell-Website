import React from 'react';
import Packages from '../Packages/Packages';
import Banner from '../Shared/banner/Banner';
import Header from '../Shared/Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Packages></Packages>
        </div>
    );
};

export default Home;