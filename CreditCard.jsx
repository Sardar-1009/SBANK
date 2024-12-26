import React from 'react';
import Credit_Card_Page from '../components/CreditCardPage';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';


export default function CreditCard() {
    return (
        <div  style={{backgroundColor:"#0D0D0D"}}>
          <NavBar/>
          <Credit_Card_Page />
          <Footer/>
        </div>

    );
};


