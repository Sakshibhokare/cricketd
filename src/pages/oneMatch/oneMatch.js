import React from "react";
import { useParams } from "react-router-dom";
import { fetchJson } from "../../helper/get_data";
import { useState, useEffect } from "react";
import Card from "../../components/card/card";
import Header from "../../components/header/header";
import "./oneMatch.css";
import BattingTable from "../../components/table/battingTable";
import BallingTable from "../../components/table/ballingTable"
import Footer from "../../components/footer/footer";


// require("dotenv").config()

const AWS=require('aws-sdk')
// console.log(process.env.AWS_ACCESS_KEY)
AWS.config.update({
  accessKeyId:process.env.REACT_APP_AWS_ACCESS_KEY,
  secretAccessKey:process.env.REACT_APP_AWS_SECRET_KEY,
  regin:process.env.REACT_APP_S3_REGION

});
const s3=new AWS.S3();


export default function OneMatch() {
  let { date, matchId,seriesId } = useParams();


  const [jsonData, setData] = useState([]);
  const [setbat,isSetbat]=useState(false)
  const [setball,issetBall]=useState(false)

  const [batData,setBatData]=useState([])
  const [ballData,setBallData]=useState([])

  const [teamData,setTeamData]=useState([])

  
  


  const get_structure_data=(res)=>{
    let count = Object.keys(res.Name).length
   
    let result=[]
    
      for(let j=0;j<count;j++){
        let g=[]
        for (const key of Object.keys(res)) {
         g.push(res[key][j])  
       }
       result.push(g)
    }

   return result

  }

  useEffect(() => {
    const filePath = "data/" + String(date);

    var param={Bucket:process.env.REACT_APP_bucket_name,Key:date+'.json'}
    s3.getObject(param,function(err,data){
      if(err){
          console.log(err)
          return {}
      }
      else{
          // console.log(JSON.parse(data.Body.toString()))
          var res=JSON.parse(data.Body.toString());
        //  console.log(v)
         for (let i = 0; i < res.length; i++) {
          if (res[i]["additional_data"]["main_ids"][0] === (matchId) && res[i]["additional_data"]["main_ids"][1]=== seriesId){
            setData([res[i]]);
            console.log(res[i]["additional_data"]["TeamName"]);
            setTeamData(res[i]["additional_data"]["TeamName"]);
            try{
            setBatData(get_structure_data(res[i]['battingData']))
            isSetbat(true)
            }
            catch{
              console.log("batting data not found")
            }
            try{
            setBallData(get_structure_data(res[i]['ballingData']))
            issetBall(true)
            }
            catch{
              console.log("balling data not found")
              
            }
            

          }
          // console.log(batting_data)
        }


      }})

  },[]);
  // console.log(jsonData);
  // console.log(batting_data);
  // console.log(batData[18]);
  // console.log(teamData[0]);
  return (
    <>
      <Header />

      <div className="wrapper">
        <div className="single-match">
          {jsonData.map((data, index) => (
            <Card
              key={index}
              date={data.date}
              battingData={data.battingData}
              bollingData={data.ballingData}
              additionalData={data.additional_data}
            />
          ))}
          
           <div className="table-wrap">
          {/* <h2>Batting Data</h2> */}
            {setbat&&
            <BattingTable data={batData} team={teamData[0]} teamNum={1} />
        }
          </div>
          <div className="table-wrap">
          {/* <h2>Balling Data</h2> */}
            {setball&&
            (
            <BallingTable data={ballData} team={teamData[1]} teamNum={2} />
            )
        }
          </div>

          <div style={{marginTop:"20px"}} className="table-wrap">
          {/* <h2>Batting Data</h2> */}
            {setbat&&
            <BattingTable data={batData} team={teamData[1]} teamNum={2} />
        }
          </div>

          <div className="table-wrap">
          {/* <h2>Balling Data</h2> */}
            {setball&&
            (
            <BallingTable data={ballData} team={teamData[0]} teamNum={1} />
            )
        }
          </div>

        </div>
        </div>
        <Footer/>
    </>
  );
}
