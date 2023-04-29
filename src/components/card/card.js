import React from "react";
import "./card.css";
export default function Card(props) {
  const url=props.url
  // console.log(props.battingData["Name"])
  // ;
  const batt=props.battingData["Name"];
  console.log(batt);
  console.log(Object.keys(batt).length);
  let team1Total = 0, team2Total = 0;
  // console.log(props.battingData["Name"])
  for(let i=0;i<Object.keys(batt).length;i++){
    if(batt[i]==="TOTAL"){
      if(team1Total===0){
             team1Total=props.battingData["SR"][i];
       }
      else{
        team2Total=props.battingData["SR"][i];
        }
    }
  }

  // for(let i=0;props.total && i<props.total.length;i++){
  //   if(props.total[i][0]=="TOTAL"){
  //     if(team1Total===0){
  //       team1Total=props.total[i][6];
  //     }
  //     else{
  //       team2Total=props.total[i][6];
  //     }
  //   }
  // }
  console.log(team1Total);
  console.log(team2Total);
  
  // console.log(props.total)
  
  return (

   


    <div className="card">
      <div className="card-container">
        <div className="card-container-span">
          <span className="series-name">{props.additionalData.Series}</span>
        <span><img className="img2" src="https://cdn.vectorstock.com/i/1000x1000/24/04/cricket-sport-logo-vector-20712404.webp"></img></span>
        </div>
        <div className="card-container-span-a ">
          <a href={url}>
            <div className="teams">
              <div className="temaname1">
                <span> <span className="teami">Team1:</span> {props.additionalData.TeamName[0]} </span>
                <span style={{padding:"0px 10px",color:"#5d5d5d"}}>{team1Total}</span>
              </div>
              <div>
                <img className="img1" src="https://raw.githubusercontent.com/LearnCodeWithDurgesh/Live-Cricket-Score/master/src/img/vs.png"></img>
              </div>
              <div className="temaname2">
                <span ><span className="teami">Team2:</span>  {props.additionalData.TeamName[1]} </span>
                <span style={{padding:"0px 10px",color:"#5d5d5d"}}>{team2Total}</span>
              </div>
            </div >
            <div className="status">
            <span>  Status: {props.additionalData.Status}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
