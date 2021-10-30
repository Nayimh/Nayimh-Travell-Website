import React from 'react';
import Aboutus from '../aboutUs/Aboutus';
import Contact from '../contact/Contact';
import Guide from '../guide/Guide';
import Packages from '../Packages/Packages';
import Banner from '../Shared/banner/Banner';


const Home = () => {
    return (
        <div id="home">
           
            <Banner></Banner>
            <Packages></Packages>
            <Guide></Guide>
            <Aboutus></Aboutus>
            <Contact></Contact>
        </div>
    );
};

export default Home;