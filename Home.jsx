import React from 'react';
import NavBar from '../components/Navbar';
import Big_Buttons from '../components/Big_Buttons';
import Card_Components from '../components/Card_Component';
import Skachayte_Component from '../components/Skachayte_Component';
import Bonus_Card from '../components/Bonus_Card';
import Valutes from '../components/Valutes';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div  style={{backgroundColor:"#0D0D0D"}}>
          <NavBar/>
          <Big_Buttons/>
          <Card_Components/>
          <Skachayte_Component/>
          <Bonus_Card/>
          <Valutes/>
          <Footer/>
        </div>

    );
};


