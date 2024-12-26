import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Osago_Page from '../components/Osago_Page';


export default function Osago() {
    return (
        <div  style={{backgroundColor:"#0D0D0D"}}>
            <NavBar/>
            <Osago_Page/>
            <Footer/>
        </div>

    );
};


