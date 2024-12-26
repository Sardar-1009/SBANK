import React from 'react';

import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import Credit_Page from '../components/Credit_Page';


export default function Credit() {
    return (
        <div  style={{backgroundColor:"#0D0D0D"}}>
          <NavBar/>
          <Credit_Page />
          <Footer/>
        </div>

    );
};


