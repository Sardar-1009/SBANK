import React from 'react';
import NavBar from '../components/Navbar';
import NewsPage from '../components/News_Page';
import Footer from '../components/Footer';


export default function News() {
    return (
        <div  style={{backgroundColor:"#0D0D0D"}}>
            <NavBar/>
            <NewsPage/>
            <Footer/>
        </div>

    );
};


