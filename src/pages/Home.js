import React from 'react';

import Header from '../components/Header'
import HeaderSlider from '../components/HeaderSlider'
import Product from '../components/Product';
import Countries from '../components/Countries'
import DownLoad from "../components/DownLoad";
import Footer from "../components/Footer";
import Offers from "../components/Offers";
import Wrapper from "../components/Wrapper";

function Home() {
    return (
        <Wrapper>
            <Header/>
            <HeaderSlider/>
            <Offers/>
            <Product/>
            <Countries/>
            <DownLoad/>
            <Footer/>
        </Wrapper>
    );
}

export default Home;
