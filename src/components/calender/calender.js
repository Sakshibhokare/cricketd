import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import { useNavigate } from 'react-router-dom';

import './calendar.css'
export default function Calender() {
    const [date, setDate] = useState(new Date());
    const navigate = useNavigate();
    const handleChange=(date)=>{    
        setDate(date)
        var datee = new Date(date);
        var dateString = new Date(datee.getTime() - (datee.getTimezoneOffset() * 60000 ))
                    .toISOString()
                    .split("T")[0];
        dateString=dateString.split("-").reverse().join("-");
        console.log(dateString)
        navigate(`/${dateString}`)
        navigate(0);
    }
    


  return (
    <div>
      <div className='calendar-container'>
        <Calendar onChange={(setDate)=>handleChange(setDate)} value={date} />
      </div>
      <p className='text-center' style={{color: "#fff"}}>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  )
}
