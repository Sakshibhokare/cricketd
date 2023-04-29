// import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../pages/home';
import OneMatch from '../pages/oneMatch/oneMatch';
import Calender from '../components/calender/calender';
import AboutUs from '../pages/contactus/aboutUs';
import React, { Component }  from 'react';

function Main() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:date' element={<Home/>}/>
        {/* <Route path='/match' element={<OneMathch/>}/> */}
        <Route path='/calender' element={<Calender/>}/>
        <Route path='/match/:date/:matchId/:seriesId' element={<OneMatch/>}/>
        <Route path='/about' element={<AboutUs/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default Main;
