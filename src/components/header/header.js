import React, { useState } from 'react'
import './header.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Calender from '../calender/calender';
export default function Header() {
    const [showcal,setShowCal]=useState(false);
    const handleClick=()=>{
        setShowCal(!showcal);
        
    }

  return (
    <div className='wrap'>
        <div className='header'>
            <div>
            <a href='/'>Home</a>
            <a href='/livematches'>Live Match</a>
            {/* <a href='/'>Home</a> */}
            <a href='/aboutus'>about Us</a>
            <a href='/upcomingmatches'>Up Coming Matches</a>
            </div>
            
            <div className='cal-menu'>
            <div>
            <ArrowDropDownIcon style={{fontSize:"large",height:"50px",width:"50px",color:"white"}} onClick={()=>{handleClick()}}/>
            </div>
            <div className='calender'>
            {showcal &&
            <Calender/>
            }
            </div>
            </div>
        </div>
        
    </div>
  )
}
