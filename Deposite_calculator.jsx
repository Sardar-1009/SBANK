import React from 'react';
import Deposit_Page_Calculator from '../components/Deposite_page_calculator';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';


export default function Deposite_calculator() {
    return (
        <div  style={{backgroundColor:"#0D0D0D"}}>
          <NavBar/>
          <Deposit_Page_Calculator/>
          <Footer/>

        </div>

    );
};


