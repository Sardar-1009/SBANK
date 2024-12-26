import React from 'react';
import DepositePage from '../components/Deposite_page';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Deposite() {
    return (
        <div  style={{backgroundColor:"#0D0D0D"}}>
          <NavBar/>
          <DepositePage />
          <Footer/>
        </div>

    );
};


