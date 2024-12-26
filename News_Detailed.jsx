import React from 'react';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import News_Detailed_Page from '../components/News_Detailed_Page';

export default function News_Detailed() {
    return (
        <div  style={{backgroundColor:"#0D0D0D"}}>
          <NavBar/>
          <News_Detailed_Page/>
          <Footer/>
        </div>

    );
};


