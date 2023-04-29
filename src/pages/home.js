import React, { useEffect, useState } from "react";
import Header from "../components/header/header";
import "./home.css";
import AllCards from "../components/allCards/allCards";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer/footer";

export default function Home(props) {
  const navigate = useNavigate();
  let { date } = useParams();
  // const

  var today = new Date();
  var dd = today.getDate()-1;

  var mm = today.getMonth()+1; 
  var yyyy = today.getFullYear();
  if(dd<10) 
  {
      dd='0'+dd;
  } 

  if(mm<10) 
  {
      mm='0'+mm;
  } 
  today = dd+'-'+mm+'-'+yyyy;
  console.log(today);
  
  if (!date) {
    date = props.date;
  }
  if(!date){
    date=today
    // date='06-01-2022'
  }


  const [actualdate, setActualdate] = useState(date);

  useEffect(() => {
    setActualdate(date);
   
  }, [date]);
  navigate(0);

  return (
    <div className="wraper">
       <Header />
      <div>
      <div className="date">
        <span className="span-date">{actualdate}</span>
      </div>
      <div className="back">
        <img className="back_img" height="700px" src="https://media.istockphoto.com/id/1314006834/photo/cricket-ball-on-top-of-cricket-bat-on-green-grass-of-cricket-pitch.jpg?s=612x612&w=0&k=20&c=kzFulDPEgl03uZTkX0AFFICf7w5rkSSmByFC3yerbFo=" >
          
        </img>
        </div>
       <div className="text1">
        <h1>Cricket is the Most wonderful entertainment in the world</h1>
       </div>
      </div>

      
     
      {/* <div className="date">
        <span className="span-date">{actualdate}</span>
      </div> */}
      <AllCards date={actualdate} />
      <Footer />
    </div>
  );
}
