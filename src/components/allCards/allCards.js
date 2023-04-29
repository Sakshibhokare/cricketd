import React from 'react'
import './allCards.css';
import Card from '../card/card';
import {fetchJson} from '../../helper/get_data'
import { useState,useEffect } from 'react';
// import { get_data_from_s3 } from "../../helper/aws-exports";
const AWS=require('aws-sdk')
// require("dotenv").config()


AWS.config.update({
    accessKeyId:process.env.REACT_APP_AWS_ACCESS_KEY,
    secretAccessKey:process.env.REACT_APP_AWS_SECRET_KEY,
    regin:process.env.REACT_APP_S3_REGION
});
const s3=new AWS.S3();
// get the contents of a file

export default function AllCards(props) {
    
    
    const [jsonData, setData] = useState([])
    
    useEffect(() => {
    const filePath="data/"+String(props.date);

    var param={Bucket:process.env.REACT_APP_bucket_name,Key:props.date+'.json'}
    s3.getObject(param,function(err,data){
      if(err){
          console.log(err)
          return {}
      }
      else{
          // console.log(JSON.parse(data.Body.toString()))
          var v=JSON.parse(data.Body.toString());
         data=v
         setData(data)
      }})


},[])
  return (
    <div className='main-container'>
            <div className='all-matches'>
                {jsonData.map((data,index)=>(
                    <Card key={index} date={data.date} battingData={data.battingData}
                    bollingData={data.ballingData} additionalData={data.additional_data}
                    url={"match/"+data.date+"/"+data.additional_data.main_ids[0]+"/"+data.additional_data.main_ids[1]} />
                    
                ))}
            </div>
        </div>
  )
}
