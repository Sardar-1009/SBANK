
import React,{ useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'   
import Deposite from './pages/Deposite'
import Deposite_calculator from './pages/Deposite_calculator'
import Credit from './pages/Credit'
import CreditCard from './pages/CreditCard'
import News from './pages/News'
import News_Detailed from './pages/News_Detailed'
import Partner_Points from './pages/Partner_Points'
import Osago from './pages/Osago'



function App() { 
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path ='/deposite' element={<Deposite/>}/>
      <Route path ='/deposite_page' element= {<Deposite_calculator/>}/>
      <Route path ='/credit_card' element={<CreditCard/>}/>
      <Route path ='/credit' element={<Credit/>}/>
      <Route path ='/news' element ={<News/>}/>
      <Route path ='/news_detailed' element ={<News_Detailed/>}/>
      <Route path ='/partner_points' element ={<Partner_Points/>}/>
      <Route path ='/osago' element = {<Osago/>}/>
    </Routes>
  )
}

export default App